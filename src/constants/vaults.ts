import {
  arbitrum,
  arbitrumGoerli,
  baseGoerli,
  goerli,
  mainnet,
} from "viem/chains";
import { Address, getAddress } from "viem";
import { notEmpty } from "../utils/arrayUtils";
import { SupportedChainId } from "./network";

export enum PerennialVaultType {
  alpha = "alpha",
  bravo = "bravo",
}

export const ChainVaults2: {
  [chainId in SupportedChainId]: {
    [vault in PerennialVaultType]?: Address;
  };
} = {
  [arbitrumGoerli.id]: {
    alpha: getAddress("0xbca5dFb4Ff2a70dDe4A275661b462021B8eB1ebA"),
  },
  [arbitrum.id]: {
    alpha: getAddress("0xF8b6010FD6ba8F3E52c943A1473B1b1459a73094"),
    bravo: getAddress("0x699e37DfCEe5c6E4c5D0bC1C2FFbC2afEC55f6FB"),
  },
  [baseGoerli.id]: {},
  [mainnet.id]: {},
  [goerli.id]: {},
};

export const chainVaultsWithAddress = (chainId: SupportedChainId) => {
  return Object.entries(ChainVaults2[chainId])
    .map(([vault, vaultAddress]) =>
      !!vaultAddress ? { vault, vaultAddress } : null
    )
    .filter(notEmpty);
};
