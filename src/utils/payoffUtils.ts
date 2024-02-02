import { Big6Math } from "./big6Utils";

export const linearTransform = (value: bigint) => value;
export const milliPowerTwoTransform = (value: bigint) =>
  Big6Math.div(Big6Math.mul(value, value), Big6Math.fromFloatString("1000"));
export const microPowerTwoTransform = (value: bigint) =>
  Big6Math.div(Big6Math.mul(value, value), Big6Math.fromFloatString("1000000"));
export const centimilliPowerTwoTransform = (value: bigint) =>
  Big6Math.div(Big6Math.mul(value, value), Big6Math.fromFloatString("100000"));
export const microPowerTwoUntransform = (value: bigint) =>
  Big6Math.sqrt(value * Big6Math.fromFloatString("1000000"));
export const centimilliPowerTwoUntransform = (value: bigint) =>
  Big6Math.sqrt(value * Big6Math.fromFloatString("100000"));
