// import { EvmPriceServiceConnection } from "@pythnetwork/pyth-evm-js";
// import {
//   Address,
//   Hex,
//   decodeFunctionResult,
//   encodeFunctionData,
//   encodePacked,
//   getAbiItem,
//   getAddress,
//   getContractAddress,
//   keccak256,
//   pad,
//   toHex,
//   zeroAddress,
// } from "viem";

// import {
//   DSUAddresses,
//   MarketFactoryAddresses,
//   MultiInvoker2Addresses,
//   VaultFactoryAddresses,
// } from "@/constants/contracts";
// import { SupportedAsset, addressToAsset2 } from "@/constants/markets";
// import { SupportedChainId } from "@/constants/network";
// import { MaxUint256 } from "@/constants/units";
// import { PerennialVaultType, chainVaultsWithAddress } from "@/constants/vaults";
// import { notEmpty, sum } from "@/utils/arrayUtils";
// import { Big6Math } from "@/utils/big6Utils";
// import { Big18Math } from "@/utils/big18Utils";
// import { buildCommitPrice, buildUpdateVault } from "@/utils/multiinvoker2";
// import { buildCommitmentsForOracles } from "@/utils/pythUtils";

// import { VaultAbi } from "@abi/Vault.abi";
// import { VaultLens2Abi } from "@abi/VaultLens2.abi";

// import LensArtifact from "../../artifacts/Lens.json";
// import VaultLensArtifact from "../../../lens/artifacts/contracts/Lens.sol/VaultLens.json";
// import { bufferGasLimit, getVaultContract } from "@/utils/contractUtils";
// import { useMultiInvoker2, useUSDC, useVaultFactory } from "../contracts";
// import { MarketOracles } from "./markets";

// export type VaultSnapshots = NonNullable<
//   Awaited<ReturnType<typeof useVaultSnapshots2>>["data"]
// >;
// export type VaultSnapshot2 = ChainVaultSnapshot & {
//   pre: ChainVaultSnapshot;
//   assets: SupportedAsset[];
// };
// export type VaultAccountSnapshot2 = ChainVaultAccountSnapshot & {
//   pre: ChainVaultAccountSnapshot;
// };

// export const useVaultSnapshots2 = () => {
//   const chainId = useChainId();
//   const vaults = chainVaultsWithAddress(chainId);
//   const { data: marketOracles } = useMarketOracles2();
//   const { address: address_ } = useAddress();
//   const pyth = usePyth();
//   const providerUrl = useRPCProviderUrl();
//   const address = address_ ?? zeroAddress;

//   return useQuery({
//     enabled: !!vaults && !!vaults.length && !!marketOracles,
//     queryKey: ["vaultSnapshots2", chainId, address],
//     queryFn: async () => {
//       if (!vaults || !vaults.length || !marketOracles) return;

//       const snapshotData = await fetchVaultSnapshotsAfterSettle(
//         chainId,
//         address,
//         marketOracles,
//         providerUrl,
//         pyth
//       );

//       const vaultSnapshots = snapshotData.vault.reduce((acc, vaultData) => {
//         acc[vaultData.vaultType] = {
//           ...vaultData,
//           // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//           pre: snapshotData.vaultPre.find(
//             (pre) => pre.vaultType === vaultData.vaultType
//           )!,
//           // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//           assets: vaultData.registrations.map(
//             (r) => addressToAsset2(r.market)!
//           ),
//         };
//         return acc;
//       }, {} as Record<PerennialVaultType, VaultSnapshot2>);

//       const userSnapshots = snapshotData.user.reduce((acc, vaultData) => {
//         acc[vaultData.vaultType] = {
//           ...vaultData,
//           // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//           pre: snapshotData.userPre.find(
//             (pre) => pre.vaultType === vaultData.vaultType
//           )!,
//         };
//         return acc;
//       }, {} as Record<PerennialVaultType, VaultAccountSnapshot2>);

//       return {
//         user: address === zeroAddress ? undefined : userSnapshots,
//         vault: vaultSnapshots,
//         commitments: snapshotData.commitments,
//         settles: snapshotData.settles,
//         updates: snapshotData.updates,
//       };
//     },
//   });
// };

// export type ChainVaultSnapshot = Awaited<
//   ReturnType<typeof fetchVaultSnapshotsAfterSettle>
// >["vault"][number];
// export type ChainVaultAccountSnapshot = Awaited<
//   ReturnType<typeof fetchVaultSnapshotsAfterSettle>
// >["user"][number];
// const fetchVaultSnapshotsAfterSettle = async (
//   chainId: SupportedChainId,
//   address: Address,
//   marketOracles: MarketOracles,
//   providerUrl: string,
//   pyth: EvmPriceServiceConnection
// ) => {
//   const vaults = chainVaultsWithAddress(chainId);
//   const vaultLensAddress = getContractAddress({
//     from: address,
//     nonce: MaxUint256 - 1n,
//   });
//   const lensAddress = getContractAddress({ from: address, nonce: MaxUint256 });

//   // TODO: there is some duplicate code here with the markets lens logic, we can probably consolidate some of this
//   const priceCommitments = await buildCommitmentsForOracles({
//     chainId,
//     marketOracles: Object.values(marketOracles),
//     pyth,
//   });

//   const vaultAddresses = vaults.map(({ vaultAddress }) => vaultAddress);

//   const ethCallPayload = {
//     to: vaultLensAddress,
//     from: address,
//     data: encodeFunctionData({
//       abi: VaultLens2Abi,
//       functionName: "snapshot",
//       args: [
//         priceCommitments,
//         lensAddress,
//         vaultAddresses,
//         address,
//         MultiInvoker2Addresses[chainId],
//       ],
//     }),
//   };

//   // Override operator approval so the vaultLens can update the address
//   // Operator storage mapping is at index 0
//   const vaultFactoryStorage = keccak256(
//     encodePacked(["bytes32", "bytes32"], [pad(address), pad(toHex(0n))])
//   );
//   const vaultFactoryStorageIndex = keccak256(
//     encodePacked(
//       ["bytes32", "bytes32"],
//       [pad(vaultLensAddress), vaultFactoryStorage]
//     )
//   );
//   const alchemyRes = await fetch(providerUrl, {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       id: 1,
//       jsonrpc: "2.0",
//       method: "eth_call", // use a manual eth_call here to use state overrides
//       params: [
//         ethCallPayload,
//         "latest",
//         {
//           // state diff overrides
//           [lensAddress]: {
//             code: LensArtifact.deployedBytecode,
//             balance: toHex(Big18Math.fromFloatString("1000")),
//           },
//           [vaultLensAddress]: {
//             code: VaultLensArtifact.deployedBytecode,
//             balance: toHex(Big18Math.fromFloatString("1000")),
//           },
//           [VaultFactoryAddresses[chainId]]: {
//             stateDiff: { [vaultFactoryStorageIndex]: pad(toHex(true)) },
//           },
//           [MarketFactoryAddresses[chainId]]: {
//             stateDiff: vaultAddresses.reduce((acc, vaultAddress) => {
//               // Override operator approval so the lens can update the vault
//               const marketFactoryStorage = keccak256(
//                 encodePacked(
//                   ["bytes32", "bytes32"],
//                   [pad(vaultAddress), toHex(1n, { size: 32 })]
//                 )
//               );
//               const marketFactoryStorageIndex = keccak256(
//                 encodePacked(
//                   ["bytes32", "bytes32"],
//                   [pad(lensAddress), marketFactoryStorage]
//                 )
//               );
//               acc[marketFactoryStorageIndex] = pad(toHex(true));
//               return acc;
//             }, {} as Record<string, Hex>),
//           },
//           // Grant DSU to vault lens to allow for settlement
//           [DSUAddresses[chainId]]: {
//             stateDiff: {
//               [keccak256(
//                 encodePacked(
//                   ["bytes32", "bytes32"],
//                   [pad(vaultLensAddress), pad(toHex(1n))]
//                 )
//               )]: pad(toHex(Big18Math.fromFloatString("100000"))),
//             },
//           },
//         },
//       ],
//     }),
//   });
//   const batchRes = (await alchemyRes.json()) as { result: Hex };
//   const lensRes = decodeFunctionResult({
//     abi: VaultLens2Abi,
//     functionName: "snapshot",
//     data: batchRes.result,
//   });

//   return {
//     commitments: lensRes.commitmentStatus,
//     updates: lensRes.updateStatus,
//     settles: lensRes.settleStatus,
//     vault: lensRes.postUpdate.vaultSnapshots
//       .map((s) => {
//         const vaultType = vaults.find(
//           ({ vaultAddress }) => vaultAddress === getAddress(s.vault)
//         );
//         if (!vaultType) return;
//         return {
//           ...s,
//           vaultType: vaultType.vault,
//         };
//       })
//       .filter(notEmpty),
//     vaultPre: lensRes.preUpdate.vaultSnapshots
//       .map((s) => {
//         const vaultType = vaults.find(
//           ({ vaultAddress }) => vaultAddress === getAddress(s.vault)
//         );
//         if (!vaultType) return;
//         return {
//           ...s,
//           vaultType: vaultType.vault,
//         };
//       })
//       .filter(notEmpty),
//     user: lensRes.postUpdate.vaultAccountSnapshots
//       .map((s) => {
//         const vaultType = vaults.find(
//           ({ vaultAddress }) => vaultAddress === getAddress(s.vault)
//         );
//         if (!vaultType) return;
//         return {
//           ...s,
//           vaultType: vaultType.vault,
//         };
//       })
//       .filter(notEmpty),
//     userPre: lensRes.preUpdate.vaultAccountSnapshots
//       .map((s) => {
//         const vaultType = vaults.find(
//           ({ vaultAddress }) => vaultAddress === getAddress(s.vault)
//         );
//         if (!vaultType) return;
//         return {
//           ...s,
//           vaultType: vaultType.vault,
//         };
//       })
//       .filter(notEmpty),
//   };
// };

// export type VaultPositionHistory = NonNullable<
//   Awaited<ReturnType<typeof useVaultPositionHistory>>["data"]
// >[PerennialVaultType];
// export const useVaultPositionHistory = () => {
//   const chainId = useChainId();
//   const { address } = useAddress();
//   const client = usePublicClient();

//   return useQuery({
//     queryKey: ["vaultPositionHistory", chainId, address],
//     enabled: !!chainId && !!address,
//     queryFn: async () => {
//       if (!address) return;
//       const vaults = chainVaultsWithAddress(chainId);
//       const getLogsArgs = { account: address };

//       // TODO: migrate this to the graph when available
//       const vaultPositionHistory = await Promise.all(
//         vaults.map(async ({ vaultAddress, vault }) => {
//           const vaultContract = getVaultContract(vaultAddress, chainId);
//           const logs_ = await client.getLogs({
//             address: vaultAddress,
//             args: getLogsArgs,
//             fromBlock: 0n,
//             toBlock: "latest",
//             strict: true,
//             event: getAbiItem({ abi: VaultAbi, name: "Update" }),
//           });
//           const logs = logs_.sort((a, b) =>
//             Big6Math.cmp(b.args.version, a.args.version)
//           );

//           const deposits = logs.filter((l) => l.args.depositAssets > 0n);
//           const redeems = logs.filter((l) => l.args.redeemShares > 0n);
//           const claims = logs.filter((l) => l.args.claimAssets > 0n);

//           let currentPositionStartBlock = (logs.at(-1)?.blockNumber || 0n) - 1n;
//           for (const claim of claims) {
//             if (claim.blockNumber === null) continue;
//             const accountData = await vaultContract.read.accounts([address], {
//               blockNumber: claim.blockNumber,
//             });
//             if (accountData.shares === 0n) {
//               // If less than 100 wei, consider it a new starting block
//               currentPositionStartBlock = claim.blockNumber;
//               break;
//             }
//           }

//           const currentPositionDeposits = sum(
//             deposits
//               .filter((l) => l.blockNumber > currentPositionStartBlock)
//               .map((l) => l.args.depositAssets)
//           );
//           const currentPositionClaims = sum(
//             claims
//               .filter((l) => l.blockNumber > currentPositionStartBlock)
//               .map((l) => l.args.claimAssets)
//           );

//           return {
//             vault,
//             vaultAddress,
//             logs,
//             deposits,
//             redeems,
//             claims,
//             currentPositionDeposits,
//             currentPositionClaims,
//           };
//         })
//       );

//       return vaultPositionHistory.reduce((acc, vaultData) => {
//         acc[vaultData.vault] = vaultData;
//         return acc;
//       }, {} as Record<PerennialVaultType, (typeof vaultPositionHistory)[number]>);
//     },
//   });
// };

// const useVaultTransactionCopy = () => {
//   const intl = useIntl();
//   return {
//     approveUSDC: intl.formatMessage({ defaultMessage: "Approve USDC" }),
//     approveDSU: intl.formatMessage({ defaultMessage: "Approve DSU" }),
//     approveShares: intl.formatMessage({ defaultMessage: "Approve Shares" }),
//     depositCollateral: intl.formatMessage({
//       defaultMessage: "Deposit Collateral",
//     }),
//     redeemCollateral: intl.formatMessage({
//       defaultMessage: "Redeem Collateral",
//     }),
//     claimCollateral: intl.formatMessage({ defaultMessage: "Claim Collateral" }),
//   };
// };

// const RefreshKeys = ["vaultSnapshots2", "vaultPositionHistory"];
// export const useRefreshVaultsOnPriceUpdates = () => {
//   useRefreshKeysOnPriceUpdates2(RefreshKeys);
// };

// export type VaultTransactions = {
//   onApproveUSDC: () => Promise<`0x${string}`>;
//   onApproveOperator: () => Promise<`0x${string}` | undefined>;
//   onDeposit: (amount: bigint) => Promise<`0x${string}` | undefined>;
//   onRedeem: (
//     amount: bigint,
//     { assets, max }: { assets?: boolean; max?: boolean }
//   ) => Promise<`0x${string}` | undefined>;
//   onClaim: () => Promise<`0x${string}` | undefined>;
// };
// export const useVaultTransactions = (
//   vaultAddress: Address
// ): VaultTransactions => {
//   const { chain } = useNetwork();
//   const chainId = useChainId();
//   const { address } = useAddress();
//   const { data: walletClient } = useWalletClient({ chainId });
//   const vaultFactory = useVaultFactory(walletClient ?? undefined);
//   const pyth = usePyth();
//   const { data: marketOracles } = useMarketOracles2();
//   const { data: vaultSnapshots } = useVaultSnapshots2();

//   const addRecentTransaction = useAddRecentTransaction();
//   const copy = useVaultTransactionCopy();

//   const usdcContract = useUSDC(walletClient ?? undefined);
//   const multiInvoker = useMultiInvoker2(walletClient ?? undefined);

//   const vaultType = chainVaultsWithAddress(chainId).find(
//     ({ vaultAddress: v }) => v === vaultAddress
//   );

//   const queryClient = useQueryClient();

//   const refresh = useCallback(
//     () =>
//       queryClient.invalidateQueries({
//         predicate: ({ queryKey }) =>
//           ["vaultSnapshots2", "vaultPositionHistory", "balances"].includes(
//             queryKey.at(0) as string
//           ) && queryKey.includes(chainId),
//       }),
//     [chainId, queryClient]
//   );

//   const txOpts = { account: address || zeroAddress, chainId, chain };
//   const updateTxOpts = { ...txOpts, value: 0n };
//   const onApproveUSDC = async () => {
//     const hash = await usdcContract.write.approve(
//       [MultiInvoker2Addresses[chainId], MaxUint256],
//       txOpts
//     );
//     await waitForTransaction({ hash });
//     await refresh();
//     addRecentTransaction({
//       hash,
//       description: copy.approveUSDC,
//     });
//     return hash;
//   };

//   const onApproveOperator = async () => {
//     if (!walletClient) return;

//     const hash = await vaultFactory.write.updateOperator(
//       [MultiInvoker2Addresses[chainId], true],
//       txOpts
//     );
//     await waitForTransaction({ hash });
//     await refresh();
//     addRecentTransaction({
//       hash,
//       description: copy.approveShares,
//     });
//     return hash;
//   };

//   const onDeposit = async (amount: bigint) => {
//     if (
//       !vaultType ||
//       !address ||
//       !chainId ||
//       !walletClient ||
//       !marketOracles ||
//       !vaultSnapshots
//     )
//       return;

//     const updateAction = buildUpdateVault({
//       vault: vaultAddress,
//       deposit: amount,
//       wrap: true,
//     });
//     const commitments = await commitmentsForVaultAction({
//       chainId,
//       pyth,
//       marketOracles,
//       preMarketSnapshots:
//         vaultSnapshots.vault[vaultType.vault].pre.marketSnapshots,
//     });
//     const actions = commitments.length
//       ? [...commitments, updateAction]
//       : [updateAction];

//     // Extra buffer to account to changes to underlying state
//     const gasLimit = await multiInvoker.estimateGas.invoke(
//       [actions],
//       updateTxOpts
//     );
//     const hash = await multiInvoker.write.invoke([actions], {
//       ...updateTxOpts,
//       gas: bufferGasLimit(gasLimit),
//     });
//     // Don't await these because it makes the flow seem slow
//     refresh();
//     addRecentTransaction({
//       hash,
//       description: copy.depositCollateral,
//     });

//     // Refresh after an interval to catch missed events
//     // TODO: non-blocking waitForTransaction and show an error if the tx reverts on chain
//     return hash;
//   };

//   const onRedeem = async (amount: bigint, { assets = true, max = false }) => {
//     if (
//       !vaultType ||
//       !address ||
//       !chainId ||
//       !walletClient ||
//       !marketOracles ||
//       !vaultSnapshots
//     )
//       return;

//     let vaultAmount = max ? MaxUint256 : amount;
//     const vaultSnapshot = vaultSnapshots.vault[vaultType.vault];
//     if (assets && !max) {
//       vaultAmount = convertAssetsToShares({ vaultSnapshot, assets: amount });
//     }

//     const commitments = await commitmentsForVaultAction({
//       chainId,
//       pyth,
//       marketOracles,
//       preMarketSnapshots: vaultSnapshot.pre.marketSnapshots,
//     });

//     const updateAction = buildUpdateVault({
//       vault: vaultAddress,
//       redeem: vaultAmount,
//       wrap: true,
//     });
//     const actions = commitments.length
//       ? [...commitments, updateAction]
//       : [updateAction];

//     // Extra buffer to account to changes to underlying state
//     const gasLimit = await multiInvoker.estimateGas.invoke(
//       [actions],
//       updateTxOpts
//     );
//     const hash = await multiInvoker.write.invoke([actions], {
//       ...updateTxOpts,
//       gas: bufferGasLimit(gasLimit),
//     });
//     // Don't await these because it makes the flow seem slow
//     refresh();
//     addRecentTransaction({
//       hash,
//       description: copy.redeemCollateral,
//     });
//     setInterval(() => refresh(), 15000);
//     // TODO: non-blocking waitForTransaction and show an error if the tx reverts on chain
//     return hash;
//   };

//   const onClaim = async () => {
//     if (!address) return;

//     const actions = [
//       buildUpdateVault({
//         vault: vaultAddress,
//         claim: MaxUint256,
//         wrap: true,
//       }),
//     ];

//     // Extra buffer to account to changes to underlying state
//     const gasLimit = await multiInvoker.estimateGas.invoke(
//       [actions],
//       updateTxOpts
//     );
//     const hash = await multiInvoker.write.invoke([actions], {
//       ...updateTxOpts,
//       gas: bufferGasLimit(gasLimit),
//     });
//     // Don't await these because it makes the flow seem slow
//     refresh();
//     addRecentTransaction({
//       hash,
//       description: copy.claimCollateral,
//     });
//     // TODO: non-blocking waitForTransaction and show an error if the tx reverts on chain
//     return hash;
//   };

//   return {
//     onApproveUSDC,
//     onApproveOperator,
//     onDeposit,
//     onRedeem,
//     onClaim,
//   };
// };

// const commitmentsForVaultAction = async ({
//   chainId,
//   pyth,
//   preMarketSnapshots,
//   marketOracles,
// }: {
//   chainId: SupportedChainId;
//   pyth: EvmPriceServiceConnection;
//   preMarketSnapshots: VaultSnapshot2["pre"]["marketSnapshots"];
//   marketOracles: MarketOracles;
// }) => {
//   // Commit required oracle versions for stale markets
//   const now = BigInt(Math.floor(Date.now() / 1000));
//   const oracles = preMarketSnapshots
//     .map((marketSnapshot) => {
//       const priceStale =
//         now - marketSnapshot.latestOracleVersion.timestamp >
//         marketSnapshot.riskParameter.staleAfter;
//       const oracle = Object.values(marketOracles).find(
//         (o) => o.address === marketSnapshot.oracle
//       );
//       if (!priceStale || !oracle) return;
//       return oracle;
//     })
//     .filter(notEmpty);
//   const commitments = await buildCommitmentsForOracles({
//     chainId,
//     pyth,
//     marketOracles: oracles,
//   });
//   return commitments.map((c) =>
//     buildCommitPrice({
//       oracle: c.pyth,
//       version: c.version,
//       index: c.index,
//       vaa: c.updateData,
//       revertOnFailure: false,
//       value: c.value,
//     })
//   );
// };

// const convertAssetsToShares = ({
//   vaultSnapshot,
//   assets,
// }: {
//   vaultSnapshot: VaultSnapshot2;
//   assets: bigint;
// }) => {
//   const totalAssets = Big6Math.max(vaultSnapshot.totalAssets, 0n);
//   const totalShares = vaultSnapshot.totalShares;
//   if (totalShares === 0n) return assets;
//   return Big6Math.div(Big6Math.mul(assets, totalShares), totalAssets);
// };
