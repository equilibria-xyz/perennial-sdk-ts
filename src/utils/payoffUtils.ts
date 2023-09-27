import { Big6Math } from "./big6Utils";

export const linearTransform = (value: bigint) => value;
export const milliPowerTwoTransform = (value: bigint) =>
  Big6Math.div(Big6Math.mul(value, value), Big6Math.fromFloatString("1000"));
