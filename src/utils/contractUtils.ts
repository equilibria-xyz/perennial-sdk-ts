import { getContract, Address, WalletClient, Client, PublicClient } from "viem";

import { SupportedChainId } from "../constants/network";
import { PerennialVaultType } from "../constants/vaults";

import { MarketAbi } from "../abi/Market.abi";
import { OracleAbi } from "../abi/Oracle.abi";
import { PythOracleAbi } from "../abi/PythOracle.abi";
import { VaultAbi } from "../abi/Vault.abi";
import { KeeperOracleAbi } from "../abi/KeeperOracle.abi";

// export function getVaultForType(vaultType: PerennialVaultType, chainId: SupportedChainId, signer?: WalletClient) {
//   const address = getVaultAddressForType(vaultType, chainId)
//   if (!address) return
//   return getContract({ abi: BalancedVaultAbi, address, walletClient: signer, chainId })
// }

export function getVaultContract(vaultAddress: Address, client: PublicClient) {
  return getContract({
    abi: VaultAbi,
    address: vaultAddress,
    publicClient: client,
  });
}

// export function getProductContract(productAddress: Address, chainId: SupportedChainId) {
//   return getContract({ abi: IProductAbi, address: productAddress, chainId })
// }

export function getMarketContract(
  marketAddress: Address,
  publicClient: PublicClient
) {
  return getContract({ abi: MarketAbi, address: marketAddress, publicClient });
  1;
}

export function getOracleContract(
  oracleAddress: Address,
  publicClient: PublicClient
) {
  return getContract({ abi: OracleAbi, address: oracleAddress, publicClient });
}

export function getKeeperOracleContract(
  keeperOracleAddress: Address,
  publicClient?: PublicClient
) {
  return getContract({
    abi: KeeperOracleAbi,
    address: keeperOracleAddress,
    publicClient,
  });
}

export function getPythProviderContract(
  pythProviderAddress: Address,
  publicClient: PublicClient
) {
  return getContract({
    abi: PythOracleAbi,
    address: pythProviderAddress,
    publicClient,
  });
}

export const bufferGasLimit = (estimatedGas: bigint) =>
  (estimatedGas * BigInt(3)) / BigInt(2);
