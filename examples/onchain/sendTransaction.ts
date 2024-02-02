//////////////////////////////////////////////////
// Small Script to send a transaction to the chain
// Uses Anvil to fork a chain and simulate responses
// Use the below script to execute the command:
// ALCHEMY_KEY=XXXX CHAIN_ID=XXX npx esno examples/onchain/sendTransation.ts

import "dotenv/config";
import {
  SupportedChainId,
  chains,
  isSupportedChain,
  approveOperator,
  approveUSDC,
  fetchMarketSnapshots2,
  fetchProtocolParameters,
  modifyPosition,
  USDCAddresses,
  USDC,
  MultiInvoker2Addresses,
  PositionSide2,
} from "perennial-sdk-ts";
import {
  createPublicClient,
  createWalletClient,
  formatUnits,
  getContract,
  http,
  zeroAddress,
  maxUint256,
  createTestClient,
  walletActions,
} from "viem";
import { mnemonicToAccount } from "viem/accounts";

console.log(" ");
console.log(" ");
console.log("🌸 Perennial V2 - Contract Read/Write");

/// CONFIG
// Chain & Public Client
const chainId =
  ((process.env.CHAIN_ID &&
    parseInt(process.env.CHAIN_ID)) as SupportedChainId) || 42161;
if (chainId && !isSupportedChain(chainId)) throw new Error("Unsupported Chain");

// Alchemy Key
const AlchemyProdKey = process.env.ALCHEMY_KEY;
if (!AlchemyProdKey) throw new Error("Missing alchemy key configuration");

// Test Mnemonic
const mnemonic =
  "liar region immune wait pretty cause art loop absorb fitness narrow amount";

const url = "http://127.0.0.1:8545";
const chain = chains[chainId];

console.log(
  "Please use the following command to fork the chain so we can simulate responses:"
);
console.log(
  `\x1b[33manvil --fork-url https://arb-sepolia.g.alchemy.com/v2/${AlchemyProdKey} -m "${mnemonic}" \x1b[0m`
);

// Wait for the enter key to continue the script
console.log("Press ENTER to continue...");
process.stdin.on("data", (data) => {
  if (data.toString() === "\n") {
    main();
  }
});

const main = async () => {
  // Create Test Account:
  const testClient = createTestClient({
    chain: chains[chainId]!,
    mode: "anvil",
    transport: http(url, { batch: true }),
  }).extend(walletActions);

  // Create Public Client
  const publicClient = createPublicClient({
    chain,
    transport: http(url, { batch: true }),
  });

  console.log(`⛓️ Setup for ${publicClient.chain.name}(${chainId})`);

  // Account & Wallet Client
  const account = mnemonicToAccount(mnemonic);
  const walletClient = createWalletClient({
    // Transport
    transport: http(url, { batch: true }),
    chain: chains[chainId]!,
    account,
  });
  console.log(`💳 Using the following wallet: ${account.address}`);

  ///// ACTIONS
  ///READ
  console.log(" ");
  console.log("--- READ Operations ---");
  console.log(" ");

  // Fetch Protocol wide parameters
  console.time("📓 Fetching Protocol Parameters");
  const protocolParameters = await fetchProtocolParameters(publicClient);
  console.timeEnd("📓 Fetching Protocol Parameters");
  // console.log(protocolParameters);

  // Fetch Market Snapshots for all Markets & Specified user on a given chain
  console.time("💽 Fetching Market Snapshots");
  const snapshots = await fetchMarketSnapshots2(publicClient, account.address);
  console.timeEnd("💽 Fetching Market Snapshots");
  console.log(snapshots);

  // // Fetch Market Configuration
  // // NOTE: Included in useMarketSnapshots2()
  // console.time("Fetching Market Configuration");
  // const marketOracles = await fetchMarketOracles2(publicClient);
  // console.timeEnd("Fetching Market Configuration");
  //   console.log(marketOracles);

  //   // Get current onchain prices
  //   // NOTE: Can be different to last snapshot price
  //   console.time("Fetching Oracle Prices");
  //   const prices = await fetchChainLivePrices2(publicClient);
  //   console.timeEnd("Fetching Oracle Prices");
  //   console.log(prices);

  // Write
  console.log(" ");
  console.log("--- WRITE Operations ---");
  console.log(" ");

  // Mint user USDC (Only for TESTING)
  const usdc = getContract({
    abi: USDC,
    address: USDCAddresses[chainId],
    publicClient,
    walletClient: testClient,
  });
  const owner = await usdc.read.owner();
  // Impersonate the USDC owner & Mint USDC to the user
  await testClient.impersonateAccount({
    address: owner,
  });
  await testClient.writeContract({
    address: USDCAddresses[chainId],
    abi: USDC,
    functionName: "mint",
    account: owner,
    args: [account.address, 100000000000n],
    gas: 69420n,
  });
  // Check the newly manipulated balance
  const balance = await usdc.read.balanceOf([account.address]);
  console.log(`💰 Added $${formatUnits(balance, 6)} USDC to User Account`);

  ///////////
  /// Send transactions
  // 1. Approve MultiInvoker!
  const approveHash = await approveUSDC(walletClient, publicClient, maxUint256);
  const approveTXReceipt = await publicClient.waitForTransactionReceipt({
    hash: approveHash,
  });

  if (approveTXReceipt.status === "reverted") {
    throw new Error("Transaction failed");
  } else {
    console.log(`💸 USDC approved for MultiInvoker2`);
  }

  // 2. Approve Multiinvoker to the MarketFactory
  const approveOps = await approveOperator(
    walletClient,
    MultiInvoker2Addresses[chainId]
  );
  const approveOpsReceipt = await publicClient.waitForTransactionReceipt({
    hash: approveOps,
  });
  if (approveOpsReceipt.status === "reverted") {
    throw new Error("Transaction failed");
  } else {
    console.log(`🏭 MultiInvoker approved for MarketFactory`);
  }

  // 3. Create an ETH Long Position
  const modifyReceipt = await modifyPosition(
    publicClient,
    walletClient,
    snapshots?.market.eth.market || zeroAddress,
    {
      positionSide: PositionSide2["long"],
      positionAbs: 1000000n, /// Denomainted in ETH (6 Decimals)
      collateralDelta: 1000000000n, /// Denominated in USDC (6 Decimals)
    }
  );

  if (!modifyReceipt) throw new Error("Transaction failed");

  const modifyReceiptTX = await publicClient.waitForTransactionReceipt({
    hash: modifyReceipt,
  });
  if (modifyReceiptTX.status === "reverted") {
    throw new Error("Transaction failed");
  } else {
    console.log(`📝 1 ETH Long Opened w/ 1000 USDC collateral`);
  }
};
