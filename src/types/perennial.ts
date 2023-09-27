import { AbiParametersToPrimitiveTypes, ExtractAbiFunction } from "abitype";

import { IProductAbi } from "../abi/IProduct.abi";
import { Lens2Abi } from "../abi/Lens2.abi";
import { MarketAbi } from "../abi/Market.abi";
import { MultiInvoker2Abi } from "../abi/MultiInvoker2.abi";

import { ContractReturnType } from "./helpers";

export type Position = ContractReturnType<typeof IProductAbi, "position">;
export type PrePosition = ContractReturnType<typeof IProductAbi, "pre", []>;
export type ProtocolSnapshot = ContractReturnType<typeof Lens2Abi, "snapshot">;
export type ProductSnapshot = ContractReturnType<
  typeof Lens2Abi,
  "snapshot",
  ["0x"]
>;
export type UserProductSnapshot = ContractReturnType<
  typeof Lens2Abi,
  "snapshot",
  ["0x", "0x"]
>;
export type JumpRateUtilizationCurve = AbiParametersToPrimitiveTypes<
  ExtractAbiFunction<typeof MarketAbi, "riskParameter">["outputs"]
>[0]["utilizationCurve"];
export type MultiInvoker2Action = AbiParametersToPrimitiveTypes<
  ExtractAbiFunction<typeof MultiInvoker2Abi, "invoke">["inputs"]
>[0][0];
