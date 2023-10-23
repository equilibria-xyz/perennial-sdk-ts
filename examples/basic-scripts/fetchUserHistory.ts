// USAGE /////////////////////////////
// Paste the folllowing command into your terminal
// ALCHEMY_URL=<URL HERE> \
// GRAPH_URL=<URL HERE> \
// USER_ADDRESS=<ADDRESS HERE> \
// esno ./examples/basic-scripts/fetchUserHistory.ts

import { http, createPublicClient, Address } from "viem";

import {
  chains,
  createGraphClient,
  SupportedChainId,
  useActivePositionMarketPnls,
} from "perennial-sdk-ts";

// Alchemy Key
const AlchemyURL = process.env.ALCHEMY_URL;
// Graph URL
const GraphURL = process.env.GRAPH_URL;
// User Address
const UserAddress = process.env.USER_ADDRESS as Address;
/// Fetch Maker Data
async function main(
  userAddress: Address | undefined,
  graphURL: string | undefined
) {
  if (!userAddress) throw new Error("Missing user address");
  if (!graphURL) throw new Error("Missing Graph URL configuration");
  if (!AlchemyURL) throw new Error("Missing alchemy key configuration");

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

  // Setup Graph Client
  createGraphClient(chainID as SupportedChainId, graphURL);
  const data = await useActivePositionMarketPnls(publicClient, userAddress);
  console.log(data);
  return;
}

main(UserAddress, GraphURL);
