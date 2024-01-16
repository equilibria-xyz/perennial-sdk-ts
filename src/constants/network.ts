import {
  arbitrum,
  arbitrumGoerli,
  arbitrumSepolia,
  base,
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
import { PositionSide2 } from "./markets";

export const SupportedChainIds = [
  arbitrum.id,
  arbitrumGoerli.id,
  arbitrumSepolia.id,
  base.id,
] as const;

export type SupportedChainId = (typeof SupportedChainIds)[number];

export const chains: { [chainId in SupportedChainId]: Chain } = {
  [arbitrum.id]: arbitrum,
  [arbitrumGoerli.id]: arbitrumGoerli,
  [arbitrumSepolia.id]: arbitrumSepolia,
  [base.id]: base,
};

export const isSupportedChain = (chainId?: number) =>
  chainId !== undefined &&
  SupportedChainIds.includes(chainId as SupportedChainId);

export const isTestnet = (chainId?: number) =>
  chainId === goerli.id ||
  chainId === arbitrumGoerli.id ||
  // chainId === arbitrumSepolia.id ||
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
  [arbitrum.id]: arbitrum.blockExplorers.default.url,
  [arbitrumGoerli.id]: arbitrumGoerli.blockExplorers.default.url,
  [arbitrumSepolia.id]: arbitrumSepolia.blockExplorers.default.url,
  [base.id]: base.blockExplorers.default.url,
};

export const interfaceFeeBps: {
  [chainId in SupportedChainId]: {
    feeAmount: { [key in PositionSide2]: bigint };
    feeRecipientAddress: Address;
  };
} = {
  [arbitrumGoerli.id]: {
    feeAmount: {
      [PositionSide2.short]: Big6Math.fromFloatString("0.0001"), // 1bps
      [PositionSide2.long]: Big6Math.fromFloatString("0.0001"), // 1bps
      [PositionSide2.maker]: 0n,
      [PositionSide2.none]: 0n,
    },
    feeRecipientAddress: OracleFactoryAddresses[arbitrumGoerli.id],
  },
  [arbitrumSepolia.id]: {
    feeAmount: {
      [PositionSide2.short]: Big6Math.fromFloatString("0.0001"), // 1bps
      [PositionSide2.long]: Big6Math.fromFloatString("0.0001"), // 1bps
      [PositionSide2.maker]: 0n,
      [PositionSide2.none]: 0n,
    },
    feeRecipientAddress: OracleFactoryAddresses[arbitrumSepolia.id],
  },
  [arbitrum.id]: {
    feeAmount: {
      [PositionSide2.short]: Big6Math.fromFloatString("0.0001"), // 1bps,
      [PositionSide2.long]: Big6Math.fromFloatString("0.0001"), // 1bps,
      [PositionSide2.maker]: 0n,
      [PositionSide2.none]: 0n,
    },
    feeRecipientAddress: OracleFactoryAddresses[arbitrum.id],
  },
  [base.id]: {
    feeAmount: {
      [PositionSide2.short]: 0n,
      [PositionSide2.long]: 0n,
      [PositionSide2.maker]: 0n,
      [PositionSide2.none]: 0n,
    },
    feeRecipientAddress: OracleFactoryAddresses[base.id],
  },
};

export const PythMainnetUrl = "https://hermes.pyth.network/";
export const PythTestnetUrl = "https://hermes-beta.pyth.network/";

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

export const BackupPythClient = new EvmPriceServiceConnection(
  // `https://app.perennial.finance/api/pyth`,
  `https://hermes.pyth.network/`,
  {
    timeout: 30000,
    priceFeedRequestConfig: { binary: true },
  }
);

export const usePyth = (publicClient: PublicClient) =>
  publicClient.chain && isTestnet(publicClient.chain.id)
    ? pythClients.testnet
    : pythClients.mainnet;
