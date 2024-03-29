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
} from "perennial-sdk-ts";

// Alchemy Key
const AlchemyURL = process.env.ALCHEMY_URL;
if (!AlchemyURL) throw new Error("Missing alchemy key configuration");

/// Fetch Maker Data
async function main(
  url: string,
  userAddress: Address | undefined,
  assets: string[]
) {
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

  const marketInfo = await fetchMarketSnapshots2(
    publicClient as PublicClient,
    userAddress,
    assets
  );
  
  if (!marketInfo) throw new Error("No market info found");
  console.log(marketInfo);

  // Filter out user positions with no exposure
  const marketsWithUserPositions =
    marketInfo.user &&
    (Object.entries(marketInfo.user)
      .filter(([market, position]) => position.side !== "none")
      .reduce(
        (acc, [market, position]) => ({ ...acc, [market]: position }),
        {}
      ) as Record<SupportedAsset, UserMarketSnapshot>);
  if (!marketsWithUserPositions) throw new Error("No user positions found");

  // Filter out market snapshots without users positions
  const relevantGlobalMarkets =
    marketInfo.market &&
    (Object.entries(marketInfo.market)
      .filter(([market, position]) =>
        Object.keys(marketsWithUserPositions).includes(market)
      )
      .reduce(
        (acc, [market, position]) => ({ ...acc, [market]: position }),
        {}
      ) as Record<SupportedAsset, MarketSnapshot>);

  if (!relevantGlobalMarkets)
    throw new Error("No relevant global markets found");

  /// Format data for Maker
  const data = Object.entries(marketsWithUserPositions).map(
    ([ticker, userData]) => {
      const asset = ticker as SupportedAsset;
      const {
        local,
        nextPosition,
        prices: latestPrices,
        side,
        nextLeverage,
        market,
      } = userData;

      // Calculate Liqudiation
      const marketSkew = calcSkew(relevantGlobalMarkets[asset]);
      // Calculate LP Utilization
      const lpUtilization = calcLpUtilization(relevantGlobalMarkets[asset]);
      // Calculate Exposure (units of underlying asset)
      const lpExposure = calcMakerExposure(
        nextPosition.maker,
        relevantGlobalMarkets[asset].nextPosition.maker,
        relevantGlobalMarkets[asset].nextPosition.long,
        relevantGlobalMarkets[asset].nextPosition.short
      );

      // Calculate Liqudiation
      // Not working?????
      // const liquidation = positionUtils.calcLiquidationPrice(
      //   relevantGlobalMarkets[ticker],
      //   local.collateral,
      //   nextPosition.maker
      // );

      // Get current market price & latest update price
      const prices = {
        currentPrice: relevantGlobalMarkets[asset].latestOracleVersion.price,
        latestPrice: latestPrices[0],
      };

      return {
        asset,
        market,
        side,
        prices,
        collateral: local.collateral,
        position: {
          maker: nextPosition.maker,
          long: nextPosition.long,
          short: nextPosition.short,
        },
        leverage: nextLeverage,
        marketSkew,
        lpUtilization,
        lpExposure,
        // liquidation,
      };
    }
  );
  console.log("Formatted Data");
  console.log(data);
  return { user: userAddress, chain: chainID, data };
}

main(AlchemyURL, zeroAddress, ["eth", "btc", "sol"]);
