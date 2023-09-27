const viem = require("viem");
const sdk = require("../dist/index.js");
const { markets, network, positionUtils } = sdk;

// Alchemy Key
const AlchemyURL = process.env.ALCHEMY_URL;
if (!AlchemyURL) throw new Error("Missing alchemy key configuration");

/// Fetch Maker Data
async function main(chainID, userAddress) {
  const chain = network.Chains[chainID];

  // Create Public Client
  const publicClient = viem.createPublicClient({
    chain,
    transport: viem.http(AlchemyURL, {
      batch: true,
    }),
  });

  const marketInfo = await markets.fetchMarketSnapshots2(
    publicClient,
    userAddress
  );
  if (!marketInfo) throw new Error("No market info found");

  // Filter out user positions with no exposure
  const marketsWithUserPositions =
    marketInfo.user &&
    Object.entries(marketInfo.user)
      .filter(([market, position]) => position.side !== "none")
      .reduce(
        (acc, [market, position]) => ({ ...acc, [market]: position }),
        {}
      );
  if (!marketsWithUserPositions) throw new Error("No user positions found");

  // Filter out market snapshots without users positions
  const relevantGlobalMarkets =
    marketInfo.market &&
    Object.entries(marketInfo.market)
      .filter(([market, position]) =>
        Object.keys(marketsWithUserPositions).includes(market)
      )
      .reduce(
        (acc, [market, position]) => ({ ...acc, [market]: position }),
        {}
      );

  if (!relevantGlobalMarkets)
    throw new Error("No relevant global markets found");
  console.log(relevantGlobalMarkets);
  // User's markets
  console.log("Raw User Position");
  console.log(marketsWithUserPositions);

  /// Format data for Maker
  const data = Object.entries(marketsWithUserPositions).map(
    ([ticker, data]) => {
      const { local, nextPosition, prices, side, nextLeverage, market } = data;

      // Calculate Liqudiation
      const marketSkew = positionUtils.calcSkew(relevantGlobalMarkets[ticker]);

      // Calculate LP Utilization
      const lpUtilization = positionUtils.calcLpUtilization(
        relevantGlobalMarkets[ticker]
      );
      // Calculate Exposure (units of underlying asset)
      const lpExposure = positionUtils.calcMakerExposure(
        nextPosition.maker,
        relevantGlobalMarkets[ticker].nextPosition.maker,
        relevantGlobalMarkets[ticker].nextPosition.long,
        relevantGlobalMarkets[ticker].nextPosition.short
      );

      // Calculate Liqudiation
      // Not working?????
      // const liquidation = positionUtils.calcLiquidationPrice(
      //   relevantGlobalMarkets[ticker],
      //   local.collateral,
      //   nextPosition.maker
      // );

      return {
        ticker,
        market,
        side,
        price: prices[0],
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
  console.log({ user: userAddress, chain: chainID, data });
  return { user: userAddress, chain: chainID, data };
}

main(421613, "0x07c867770c43b1c6b715aa8ac3a55dfd7f835a82");
