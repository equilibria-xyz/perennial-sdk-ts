import {
  arbitrum,
  arbitrumGoerli,
  baseGoerli,
  goerli,
  mainnet,
} from "viem/chains";
import {
  type Address,
  type Chain,
  type PublicClient,
  createPublicClient,
  http,
} from "viem";

import { Big6Math } from "../utils/big6Utils";
import { OracleFactoryAddresses } from "./contracts";
import { EvmPriceServiceConnection } from "@pythnetwork/pyth-evm-js";
import { GraphQLClient } from "graphql-request";

export const SupportedChainIds = [
  arbitrum.id,
  mainnet.id,
  arbitrumGoerli.id,
  goerli.id,
  baseGoerli.id,
] as const;

export type SupportedChainId = (typeof SupportedChainIds)[number];

export const chains: { [chainId in SupportedChainId]: Chain } = {
  [mainnet.id]: mainnet,
  [goerli.id]: goerli,
  [arbitrum.id]: arbitrum,
  [arbitrumGoerli.id]: arbitrumGoerli,
  [baseGoerli.id]: baseGoerli,
};

export const isSupportedChain = (chainId?: number) =>
  chainId !== undefined &&
  SupportedChainIds.includes(chainId as SupportedChainId);

export const isTestnet = (chainId?: number) =>
  chainId === goerli.id ||
  chainId === arbitrumGoerli.id ||
  chainId === baseGoerli.id;

export const DefaultChain = arbitrumGoerli; // chains[0] // TODO revert for mainnet

const graphClients2 = new Map<SupportedChainId, GraphQLClient>();

export const createGraphClient = (chainId: SupportedChainId, url: string) => {
  if (!graphClients2.has(chainId))
    graphClients2.set(chainId, new GraphQLClient(url));
};

export const useGraphClient2 = (chainId: SupportedChainId) => {
  if (!graphClients2.has(chainId))
    throw new Error(`No graph client for chain ${chainId}`);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return graphClients2.get(chainId)!;
};

export const ExplorerURLs: { [chainId in SupportedChainId]: string } = {
  [mainnet.id]: mainnet.blockExplorers.default.url,
  [goerli.id]: goerli.blockExplorers.default.url,
  [arbitrum.id]: arbitrum.blockExplorers.default.url,
  [arbitrumGoerli.id]: arbitrumGoerli.blockExplorers.default.url,
  [baseGoerli.id]: baseGoerli.blockExplorers.default.url,
};

export const interfaceFeeBps: {
  [chainId in SupportedChainId]?: {
    feeAmount: bigint;
    feeRecipientAddress: Address;
  };
} = {
  [arbitrumGoerli.id]: {
    feeAmount: Big6Math.fromFloatString("0.0001"),
    feeRecipientAddress: OracleFactoryAddresses[arbitrumGoerli.id],
  },
};

export const PythMainnetUrl = "https://xc-mainnet.pyth.network";
export const PythTestnetUrl = "https://xc-testnet.pyth.network";

const pythClients = {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  mainnet: new EvmPriceServiceConnection(PythMainnetUrl!, {
    priceFeedRequestConfig: { binary: true },
  }),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  testnet: new EvmPriceServiceConnection(PythTestnetUrl!, {
    priceFeedRequestConfig: { binary: true },
  }),
};

export const usePyth = (publicClient: PublicClient) =>
  publicClient.chain && isTestnet(publicClient.chain.id)
    ? pythClients.testnet
    : pythClients.mainnet;
