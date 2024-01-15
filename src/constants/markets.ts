import { Address, getAddress } from "viem";
import { SupportedChainId } from "./network";
import { linearTransform, microPowerTwoTransform } from "../utils/payoffUtils";
import {
  arbitrum,
  arbitrumGoerli,
  arbitrumSepolia,
  base,
  baseGoerli,
  goerli,
  mainnet,
} from "viem/chains";
import { notEmpty } from "../utils/arrayUtils";

export enum SupportedAsset {
  btc = "btc",
  eth = "eth",
  arb = "arb",
  sol = "sol",
  matic = "matic",
  tia = "tia",
  rlb = "rlb",
  link = "link",
  bnb = "bnb",
  xrp = "xrp",
  msqBTC = "BTC²",
}

export enum QuoteCurrency {
  usd = "USDC.e",
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
  syncError = "syncError",
}

export type AssetMetadata = {
  [asset in SupportedAsset]: {
    name: string;
    symbol: string;
    displayDecimals: number;
    baseCurrency: SupportedAsset;
    quoteCurrency: QuoteCurrency;
    pythFeedId: string;
    pythFeedIdTestnet: string;
    transform: (value: bigint) => bigint;
  };
};
export const AssetMetadata: AssetMetadata = {
  [SupportedAsset.btc]: {
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
  [SupportedAsset.eth]: {
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
  [SupportedAsset.arb]: {
    symbol: "ARB-USD",
    name: "Arbitrum",
    displayDecimals: 4,
    baseCurrency: SupportedAsset.arb,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0x3fa4252848f9f0a1480be62745a4629d9eb1322aebab8a791e344b3b9c1adcf5",
    pythFeedIdTestnet:
      "0x37f40d2898159e8f2e52b93cb78f47cc3829a31e525ab975c49cc5c5d9176378",
    transform: linearTransform,
  },
  [SupportedAsset.sol]: {
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
  [SupportedAsset.matic]: {
    symbol: "MATIC-USD",
    name: "Polygon",
    displayDecimals: 6,
    baseCurrency: SupportedAsset.matic,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0x5de33a9112c2b700b8d30b8a3402c103578ccfa2765696471cc672bd5cf6ac52",
    pythFeedIdTestnet:
      "0xd2c2c1f2bba8e0964f9589e060c2ee97f5e19057267ac3284caef3bd50bd2cb5",
    transform: linearTransform,
  },
  [SupportedAsset.tia]: {
    symbol: "TIA-USD",
    name: "Celestia",
    displayDecimals: 6,
    baseCurrency: SupportedAsset.tia,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0x09f7c1d7dfbb7df2b8fe3d3d87ee94a2259d212da4f30c1f0540d066dfa44723",
    pythFeedIdTestnet:
      "0x30998099c161c4f04b48569485cfab66256f36006810fe787f40fbc96e263438",
    transform: linearTransform,
  },
  [SupportedAsset.rlb]: {
    symbol: "RLB-USD",
    name: "Rollbit",
    displayDecimals: 6,

    baseCurrency: SupportedAsset.rlb,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0x2f2d17abbc1e781bd87b4a5d52c8b2856886f5c482fa3593cebf6795040ab0b6",
    pythFeedIdTestnet:
      "0x4d0c5744a741196b5c2ff74b8f3bde242407f2ffb40104347dcff3421eaea07f",
    transform: linearTransform,
  },
  [SupportedAsset.link]: {
    symbol: "LINK-USD",
    name: "Chainlink",
    displayDecimals: 6,
    baseCurrency: SupportedAsset.link,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0x8ac0c70fff57e9aefdf5edf44b51d62c2d433653cbb2cf5cc06bb115af04d221",
    pythFeedIdTestnet:
      "0x83be4ed61dd8a3518d198098ce37240c494710a7b9d85e35d9fceac21df08994",
    transform: linearTransform,
  },
  [SupportedAsset.bnb]: {
    symbol: "BNB-USD",
    name: "BNB",
    displayDecimals: 6,
    baseCurrency: SupportedAsset.bnb,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f",
    pythFeedIdTestnet:
      "0xecf553770d9b10965f8fb64771e93f5690a182edc32be4a3236e0caaa6e0581a",
    transform: linearTransform,
  },
  [SupportedAsset.xrp]: {
    symbol: "XRP-USD",
    name: "XRP",
    displayDecimals: 6,
    baseCurrency: SupportedAsset.xrp,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0xec5d399846a9209f3fe5881d70aae9268c94339ff9817e8d18ff19fa05eea1c8",
    pythFeedIdTestnet:
      "0xbfaf7739cb6fe3e1c57a0ac08e1d931e9e6062d476fa57804e165ab572b5b621",
    transform: linearTransform,
  },
  [SupportedAsset.msqBTC]: {
    symbol: "BTC²-USD",
    name: "Bitcoin²",
    displayDecimals: 2,
    baseCurrency: SupportedAsset.msqBTC,
    quoteCurrency: QuoteCurrency.usd,
    pythFeedId:
      "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
    pythFeedIdTestnet:
      "0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b",
    transform: microPowerTwoTransform,
  },
};

export const ChainMarkets2: {
  [chainId in SupportedChainId]: {
    [asset in SupportedAsset]?: Address;
  };
} = {
  [arbitrumSepolia.id]: {
    [SupportedAsset.eth]: getAddress(
      "0x0142a8bfF8D887Fc4f04469fCA6c66F5e0936Ea7"
    ),
  },
  [arbitrumGoerli.id]: {
    [SupportedAsset.eth]: getAddress(
      "0xf5Ae549Af3b600086F555aA4e41f3BB8A2EfEf4c"
    ),
    [SupportedAsset.btc]: getAddress(
      "0x55Dc0A47Eb29D8dbeADECf864c7dD64196eFF2a2"
    ),
    [SupportedAsset.sol]: getAddress(
      "0x4443Ec03A347394D2CA331638B809A17617497af"
    ),
    [SupportedAsset.matic]: getAddress(
      "0x40a4b331E95D409cC9CEdDcA9eFDf5ff58da4344"
    ),
    [SupportedAsset.tia]: getAddress(
      "0xCF5cc9DC79F5172594E84f9d034D9d74d5F51007"
    ),
    [SupportedAsset.msqBTC]: getAddress(
      "0xe2bd1E1d2Ae22857508E9d59fb41FDCEEeda8EDD"
    ),
  },
  [arbitrum.id]: {
    [SupportedAsset.eth]: getAddress(
      "0x90A664846960AaFA2c164605Aebb8e9Ac338f9a0"
    ),
    [SupportedAsset.btc]: getAddress(
      "0xcC83e3cDA48547e3c250a88C8D5E97089Fd28F60"
    ),
    [SupportedAsset.sol]: getAddress(
      "0x02258bE4ac91982dc1AF7a3D2C4F05bE6079C253"
    ),
    [SupportedAsset.matic]: getAddress(
      "0x7e34B5cBc6427Bd53ECFAeFc9AC2Cad04e982f78"
    ),
    [SupportedAsset.tia]: getAddress(
      "0x2CD8651b0dB6bE605267fdd737C840442A96fAFE"
    ),
    [SupportedAsset.rlb]: getAddress(
      "0x708B750f9f5bD23E074a5a0A64EF542585906e85"
    ),
    [SupportedAsset.link]: getAddress(
      "0xD9c296A7Bee1c201B9f3531c7AC9c9310ef3b738"
    ),
    [SupportedAsset.bnb]: getAddress(
      "0x362c6bC2A4EA2033063bf20409A4c5E8C5754056"
    ),
    [SupportedAsset.xrp]: getAddress(
      "0x2402E92f8C58886F716F5554039fA6398d7A1EfB"
    ),
    [SupportedAsset.arb]: getAddress(
      "0x3D1D603073b3CEAB5974Db5C54568058a9551cCC"
    ),
  },
  [base.id]: {},
};

export const chainAssetsWithAddress = (chainId: SupportedChainId) => {
  return Object.entries(ChainMarkets2[chainId])
    .map(([asset, marketAddress]) =>
      !!marketAddress ? { asset, marketAddress } : null
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
