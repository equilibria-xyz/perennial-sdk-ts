import { Address, getAddress, zeroAddress } from "viem";
import { arbitrum, arbitrumGoerli, base } from "viem/chains";

import { SupportedChainId } from "./network";

type AddressMapping = { [chain in SupportedChainId]: Address };

export const LensAddresses: AddressMapping = {
  [arbitrum.id]: getAddress("0x1593318424df66128cb7d0c5574B1283C3A74C3d"),
  [arbitrumGoerli.id]: getAddress("0x19890Cf5C9A0B8d2F71eB71347d126b6F7d78B76"),
  [base.id]: zeroAddress,
};

export const MultiInvokerAddresses: AddressMapping = {
  [arbitrum.id]: getAddress("0xe72E82b672d7D3e206327C0762E9805fbFCBCa92"),
  [arbitrumGoerli.id]: getAddress("0x86ccFAdd81433929e04e32C056A2eEFc08359B60"),
  [base.id]: zeroAddress,
};

export const MultiInvoker2Addresses: AddressMapping = {
  [arbitrum.id]: getAddress("0x431603567EcBb4aa1Ce5a4fdBe5554cAEa658832"),
  [arbitrumGoerli.id]: getAddress("0x9F6f72Cf419121090C761D0488f61D2534Da4196"),
  [base.id]: zeroAddress,
};

export const MarketFactoryAddresses: AddressMapping = {
  [arbitrum.id]: getAddress("0xDaD8A103473dfd47F90168A0E46766ed48e26EC7"),
  [arbitrumGoerli.id]: getAddress("0x8D8903B294B358BA1B5d91FB838e5dC35370c7D2"),
  [base.id]: zeroAddress,
};

export const VaultFactoryAddresses: AddressMapping = {
  [arbitrum.id]: getAddress("0xad3565680aEcEe27A39249D8c2D55dAc79BE5Ad0"),
  [arbitrumGoerli.id]: getAddress("0x97B34BA2FD1ff8Ce18b3bC7b05D1fcb87E95D6fc"),
  [base.id]: zeroAddress,
};

export const OracleFactoryAddresses: AddressMapping = {
  [arbitrum.id]: getAddress("0x8CDa59615C993f925915D3eb4394BAdB3feEF413"),
  [arbitrumGoerli.id]: getAddress("0xaf09499A04a9A7c6E1fD5320ebd86E1A817d6D80"),
  [base.id]: zeroAddress,
};

export const DSUAddresses: AddressMapping = {
  [arbitrum.id]: getAddress("0x52C64b8998eB7C80b6F526E99E29ABdcC86B841b"),
  [arbitrumGoerli.id]: getAddress("0x52C64b8998eB7C80b6F526E99E29ABdcC86B841b"),
  [base.id]: zeroAddress,
};

export const USDCAddresses: AddressMapping = {
  [arbitrum.id]: getAddress("0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"),
  [arbitrumGoerli.id]: getAddress("0x6775842AE82BF2F0f987b10526768Ad89d79536E"),
  [base.id]: zeroAddress,
};

export const SeasonalMerkleTreeAddresses: AddressMapping = {
  [arbitrum.id]: getAddress("0x4Fc1cC62E5d0b12f5a9e3213B4177d2edb301F30"),
  [arbitrumGoerli.id]: getAddress("0xFc396EB5f44AEd885f12aa1ec09Ac7F110aCcB9D"),
  [base.id]: zeroAddress,
};
