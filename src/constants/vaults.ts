import {
  arbitrum,
  arbitrumGoerli,
  base,
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

export const SupportedVaults: {
  [chainId in SupportedChainId]: { [vault in PerennialVaultType]?: boolean };
} = {
  [arbitrumGoerli.id]: { alpha: true, bravo: false },
  [arbitrum.id]: { alpha: true, bravo: true },
  [base.id]: { alpha: false, bravo: false },
};

export const VaultMetadata: {
  [chainId in SupportedChainId]: {
    [key in PerennialVaultType]?: { name: string };
  };
} = {
  [arbitrumGoerli.id]: {
    [PerennialVaultType.alpha]: { name: "ETH Vault" },
    [PerennialVaultType.bravo]: { name: "BTC Vault" },
  },
  [arbitrum.id]: {
    [PerennialVaultType.alpha]: { name: "ETH Vault" },
    [PerennialVaultType.bravo]: { name: "BTC Vault" },
  },
  [base.id]: {},
};

export const ChainVaults2: {
  [chainId in SupportedChainId]: {
    [vault in PerennialVaultType]?: Address;
  };
} = {
  [arbitrumGoerli.id]: {
    alpha: getAddress("0xA86947dB4C5b13adb90aCaCb6630553f8EBcea76"),
    bravo: getAddress("0xF4cf92427E2CFa4410D1009f7B2c3eE3E9367f0d"),
  },
  [arbitrum.id]: {
    alpha: getAddress("0xF8b6010FD6ba8F3E52c943A1473B1b1459a73094"),
    bravo: getAddress("0x699e37DfCEe5c6E4c5D0bC1C2FFbC2afEC55f6FB"),
  },
  [base.id]: {},
};

export const chainVaultsWithAddress = (chainId: SupportedChainId) => {
  return Object.entries(ChainVaults2[chainId])
    .map(([vault, vaultAddress]) =>
      !!vaultAddress ? { vault, vaultAddress } : null
    )
    .filter(notEmpty);
};
