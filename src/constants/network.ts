import {
  arbitrum,
  arbitrumGoerli,
  baseGoerli,
  goerli,
  mainnet,
} from "viem/chains";
import { Address, Chain, PublicClient, createPublicClient, http } from "viem";

import { Big6Math } from "../utils/big6Utils";
import { OracleFactoryAddresses } from "./contracts";
import { EvmPriceServiceConnection } from "@pythnetwork/pyth-evm-js";

export const chains = [arbitrum, mainnet, arbitrumGoerli, goerli, baseGoerli];

export const SupportedChainIds = [
  arbitrum.id,
  mainnet.id,
  arbitrumGoerli.id,
  goerli.id,
  baseGoerli.id,
] as const;

export type SupportedChainId = (typeof SupportedChainIds)[number];

export const Chains: { [chainId in SupportedChainId]: Chain } = {
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

export const GraphUrls2: { [chainId in SupportedChainId]: string } = {
  [arbitrum.id]: process.env.NEXT_PUBLIC_GRAPH_URL_ARBITRUM_2 ?? "",
  [mainnet.id]: process.env.NEXT_PUBLIC_GRAPH_URL_MAINNET_2 ?? "",
  [arbitrumGoerli.id]:
    process.env.NEXT_PUBLIC_GRAPH_URL_ARBITRUM_GOERLI_2 ?? "",
  [goerli.id]: process.env.NEXT_PUBLIC_GRAPH_URL_GOERLI_2 ?? "",
  [baseGoerli.id]: process.env.NEXT_PUBLIC_GRAPH_URL_BASE_GOERLI_2 ?? "",
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
  mainnet: new EvmPriceServiceConnection(PythMainnetUrl!),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  testnet: new EvmPriceServiceConnection(PythTestnetUrl!),
};

export const usePyth = (publicClient: PublicClient) =>
  publicClient.chain && isTestnet(publicClient.chain.id)
    ? pythClients.testnet
    : pythClients.mainnet;
