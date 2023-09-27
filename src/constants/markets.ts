import { Address, getAddress } from "viem";
import { SupportedChainId } from "./network";
import { linearTransform } from "../utils/payoffUtils";
import {
  arbitrum,
  arbitrumGoerli,
  baseGoerli,
  goerli,
  mainnet,
} from "viem/chains";
import { notEmpty } from "../utils/arrayUtils";

export enum SupportedAsset {
  btc = "btc",
  eth = "eth",
  sol = "sol",
  matic = "matic",
}

export enum QuoteCurrency {
  usd = "usd",
}

export enum Currency {
  USDC = "USDC",
  DSU = "DSU",
}

export enum PositionSide2 {
  maker = "maker",
  long = "long",
  short = "short",
  none = "none",
}

export enum PositionStatus {
  open = "open",
  closed = "closed",
  opening = "opening",
  closing = "closing",
  pricing = "pricing",
  resolved = "noValue",
  failed = "failed",
}

export type AssetMetadata = {
  [asset in SupportedAsset]: {
    name: string;
    symbol: string;
    displayDecimals: number;
    baseCurrency: SupportedAsset;
    quoteCurrency: QuoteCurrency;
    pythFeedId?: string;
    pythFeedIdTestnet?: string;
    transform: (value: bigint) => bigint;
  };
};

export const AssetMetadata: AssetMetadata = {
  btc: {
    symbol: "BTC-USD",
    name: "Bitcoin",
    displayDecimals: 2,
    baseCurrency: SupportedAsset.btc,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
    pythFeedIdTestnet:
      "0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b",
    transform: linearTransform,
  },
  eth: {
    symbol: "ETH-USD",
    name: "Ethereum",
    displayDecimals: 6,
    baseCurrency: SupportedAsset.eth,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
    pythFeedIdTestnet:
      "0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6",
    transform: linearTransform,
  },
  sol: {
    symbol: "SOL-USD",
    name: "Solana",
    displayDecimals: 4,
    baseCurrency: SupportedAsset.sol,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d",
    pythFeedIdTestnet:
      "0xfe650f0367d4a7ef9815a593ea15d36593f0643aaaf0149bb04be67ab851decd",
    transform: linearTransform,
  },
  matic: {
    symbol: "MATIC-USD",
    name: "Polygon",
    displayDecimals: 4,
    baseCurrency: SupportedAsset.matic,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0x5de33a9112c2b700b8d30b8a3402c103578ccfa2765696471cc672bd5cf6ac52",
    pythFeedIdTestnet:
      "0xd2c2c1f2bba8e0964f9589e060c2ee97f5e19057267ac3284caef3bd50bd2cb5",
    transform: linearTransform,
  },
};

export const ChainMarkets2: {
  [chainId in SupportedChainId]: {
    [asset in SupportedAsset]?: Address;
  };
} = {
  [arbitrumGoerli.id]: {
    eth: getAddress("0xf5Ae549Af3b600086F555aA4e41f3BB8A2EfEf4c"),
    btc: getAddress("0x55Dc0A47Eb29D8dbeADECf864c7dD64196eFF2a2"),
    sol: getAddress("0x4443Ec03A347394D2CA331638B809A17617497af"),
    matic: getAddress("0x40a4b331E95D409cC9CEdDcA9eFDf5ff58da4344"),
  },
  [arbitrum.id]: {},
  [baseGoerli.id]: {},
  [mainnet.id]: {},
  [goerli.id]: {},
};

export const chainAssetsWithAddress = (
  chainId: SupportedChainId
): Array<{ asset: SupportedAsset; marketAddress: `0x${string}` }> => {
  return Object.entries(ChainMarkets2[chainId])
    .map(([asset, marketAddress]) =>
      !!marketAddress
        ? {
            asset: asset as SupportedAsset,
            marketAddress,
          }
        : null
    )
    .filter(notEmpty);
};

export const addressToAsset2 = (address: Address) => {
  for (const chainId of Object.keys(ChainMarkets2)) {
    for (const asset of Object.keys(
      ChainMarkets2[Number(chainId) as SupportedChainId]
    )) {
      if (
        ChainMarkets2[Number(chainId) as SupportedChainId][
          asset as SupportedAsset
        ] === address
      ) {
        return asset as SupportedAsset;
      }
    }
  }
};
