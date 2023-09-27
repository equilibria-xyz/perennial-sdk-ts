// ABIs
import ABIs from "./abi";
export const abi = ABIs;

/// Artifacts
import LensArtifact from "./artifacts/Lens.json";
import VaultArtifact from "./artifacts/VaultLens.json";

export const artifacts = {
  Lens: LensArtifact,
  Vault: VaultArtifact,
};

/// Contracts
import {
  ControllerAddresses,
  CollateralAddresses,
  MultiInvoker2Addresses,
  MarketFactoryAddresses,
  VaultFactoryAddresses,
  OracleFactoryAddresses,
  DSUAddresses,
  USDCAddresses,
} from "./constants/contracts";

export const contracts = {
  ControllerAddresses,
  CollateralAddresses,
  MultiInvoker2Addresses,
  MarketFactoryAddresses,
  VaultFactoryAddresses,
  OracleFactoryAddresses,
  DSUAddresses,
  USDCAddresses,
};

/// Networks
import {
  chains,
  Chains,
  isSupportedChain,
  isTestnet,
} from "./constants/network";

export const network = {
  chains,
  Chains,
  isSupportedChain,
  isTestnet,
};

/// Vaults
import { chainVaultsWithAddress, ChainVaults2 } from "./constants/vaults";
export const vaults = { chainVaultsWithAddress, ChainVaults2 };

/// Markets
import {
  fetchProtocolParameters,
  fetchMarketOracles2,
  fetchMarketSnapshots2,
  fetchChainLivePrices2,
  approveUSDC,
  approveOperator,
  modifyPosition,
} from "./libs/markets";

export const markets = {
  fetchProtocolParameters,
  fetchMarketOracles2,
  fetchMarketSnapshots2,
  fetchChainLivePrices2,
  approveUSDC,
  approveOperator,
  modifyPosition,
};

// Utils
import * as position from "./utils/positionUtils";
import * as pyth from "./utils/pythUtils";
import * as contract from "./utils/contractUtils";
import * as funding from "./utils/fundingAndInterestUtils";
import * as time from "./utils/timeUtils";
import * as Big6 from "./utils/big6Utils";
import * as Big18 from "./utils/big18Utils";
export const positionUtils = position;
export const pythUtils = pyth;
export const contractUtils = contract;
export const fundingAndInterestUtils = funding;
export const timeUtils = time;
export const big6Utils = Big6;
export const big18Utils = Big18;
