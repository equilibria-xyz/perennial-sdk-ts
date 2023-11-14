import {
  http,
  createPublicClient,
  Address,
  PublicClient,
  zeroAddress,
} from "viem";

import {
  chains,
  fetchMarketSnapshots2,
  calcSkew,
  calcMakerExposure,
  calcLpUtilization,
  SupportedChainId,
  SupportedAsset,
  UserMarketSnapshot,
  MarketSnapshot,
  fetchVaultSnapshots2,
} from "perennial-sdk-ts";

// Alchemy Key
const AlchemyURL = process.env.ALCHEMY_URL;
if (!AlchemyURL) throw new Error("Missing alchemy key configuration");

/// Fetch Maker Data
async function main(url: string, userAddress: Address | undefined) {
  // Get Chain
  const chainID = await createPublicClient({
    transport: http(AlchemyURL, {
      batch: true,
    }),
  }).getChainId();

  const chain = chains[chainID as SupportedChainId];

  // Create Public Client
  const publicClient = createPublicClient({
    chain,
    transport: http(AlchemyURL, {
      batch: true,
    }),
  });

  if (!userAddress) throw new Error("Missing user address");
  const vaultInfo = await fetchVaultSnapshots2(publicClient, userAddress);

  if (!vaultInfo) throw new Error("No Vault info found");

  // Filter out user positions with no exposure
  const vaultsWithUserPositions =
    vaultInfo.user &&
    (Object.entries(vaultInfo.user)
      .filter(([vault, position]) => position.assets > 0)
      .reduce(
        (acc, [vault, position]) => ({ ...acc, [vault]: position }),
        {}
      ) as Record<SupportedAsset, UserMarketSnapshot>);
  if (!vaultsWithUserPositions) throw new Error("No user positions found");
  console.log(vaultsWithUserPositions);

  const vaultGlobals =
    vaultInfo.vault &&
    (Object.entries(vaultInfo.vault)
      .filter(([vault, position]) =>
        Object.keys(vaultsWithUserPositions).includes(vault)
      )
      .reduce(
        (acc, [vault, position]) => ({ ...acc, [vault]: position }),
        {}
      ) as Record<SupportedAsset, UserMarketSnapshot>);
  console.log(vaultGlobals);

  console.log("Formatted Data");
  console.log({ user: vaultsWithUserPositions, global: vaultGlobals });
}

main(AlchemyURL, "0x76d9c28e888816b28857e75e7859d6b6907cf76c");
