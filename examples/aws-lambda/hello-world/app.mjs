/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

// Required for BigInt serialization
BigInt.prototype.toJSON = function () {
  return this.toString();
};

import { http, createPublicClient } from "viem";

import {
  chains,
  fetchMarketSnapshots2,
  calcSkew,
  calcMakerExposure,
  calcLpUtilization,
} from "perennial-sdk-ts";

export const lambdaHandler = async (event, context) => {
  try {
    const { address, url } = event.queryStringParameters;

    const chainID = await createPublicClient({
      transport: http(url, {
        batch: true,
      }),
    }).getChainId();

    const chain = chains[chainID];

    // Create Public Client
    const publicClient = createPublicClient({
      chain,
      transport: http(url, {
        batch: true,
      }),
    });

    const marketInfo = await fetchMarketSnapshots2(publicClient, address);
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

    /// Format data for Maker
    const data = Object.entries(marketsWithUserPositions).map(
      ([ticker, userData]) => {
        const asset = ticker;
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
          lpUtilization: lpUtilization?.lpUtilization,
          lpExposureSide: lpUtilization?.exposureSide,
          lpExposure,
        };
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ user: address, chain: chainID, data }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};
