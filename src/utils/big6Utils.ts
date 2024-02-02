// eslint-disable-next-line no-restricted-imports
import { formatUnits, parseUnits } from "viem";

export const BigOrZero = (
  value: number | bigint | string | undefined | null
): bigint => {
  return BigInt(value ?? 0);
};

export const formatBig6 = (
  value: bigint = BigInt(0),
  {
    numSigFigs = 2,
    useGrouping = true,
    minDecimals,
  }: {
    numSigFigs?: number;
    useGrouping?: boolean | undefined;
    minDecimals?: number;
  } = {}
) => {
  return Intl.NumberFormat("en-US", {
    minimumSignificantDigits: numSigFigs,
    maximumSignificantDigits: numSigFigs,
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: minDecimals,

    useGrouping,
    // @ts-ignore
    roundingPriority: "morePrecision",
  }).format(Big6Math.toUnsafeFloat(value));
};

// Formats an 18 decimal bigint as a USD price
export const formatBig6USDPrice = (
  value: bigint = BigInt(0),
  {
    compact = false,
    fromUsdc = false,
  }: { compact?: boolean; fromUsdc?: boolean } = {}
) => {
  // Hardcoding this to return $0.00 because 'roundingPriority' option is not supported in node 18
  // resulting in a hydration error when the resolution occurs on first client render
  if (value === BigInt(0)) {
    return "$0.00";
  }
  const valueToFormat = fromUsdc
    ? Number(formatUnits(value, 6))
    : Big6Math.toUnsafeFloat(value);
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : undefined,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    minimumSignificantDigits: compact ? 2 : 6,
    maximumSignificantDigits: compact ? 2 : 6,
    // @ts-ignore
    roundingPriority: "morePrecision",
  }).format(valueToFormat);
};

// Formats an 18 decimal bigint as a USD price
export const formatBig6Percent = (
  value: bigint = BigInt(0),
  { numDecimals = 2 }: { numDecimals?: number } = {}
) => {
  return Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: numDecimals,
    maximumFractionDigits: numDecimals,
  }).format(Big6Math.toUnsafeFloat(value));
};
export class Big6Math {
  public static FIXED_DECIMALS = 6;
  public static BASE = BigInt("1000000");
  public static ZERO = BigInt(0);
  public static ONE = BigInt(1) * Big6Math.BASE;
  public static TWO = BigInt(2) * Big6Math.BASE;

  public static mul(a: bigint, b: bigint): bigint {
    return (a * b) / this.BASE;
  }

  public static div(a: bigint, b: bigint): bigint {
    return (a * this.BASE) / b;
  }

  public static add(a: bigint, b: bigint): bigint {
    return a + b;
  }

  public static sub(a: bigint, b: bigint): bigint {
    return a - b;
  }

  public static isZero(a: bigint): boolean {
    return this.ZERO === a;
  }

  public static eq(a: bigint, b: bigint): boolean {
    return a === b;
  }

  public static abs(a: bigint): bigint {
    return a < BigInt(0) ? -a : a;
  }

  public static max(a: bigint, b: bigint): bigint {
    return a >= b ? a : b;
  }

  public static min(a: bigint, b: bigint): bigint {
    return a <= b ? a : b;
  }

  public static cmp(a: bigint, b: bigint): number {
    return a === b ? 0 : a < b ? -1 : 1;
  }

  public static fromFloatString(a: string): bigint {
    if (!a || a === ".") return BigInt(0);
    return parseUnits(
      a.replace(/','/g, "") as `${number}`,
      Big6Math.FIXED_DECIMALS
    );
  }

  public static toFloatString(a: bigint): string {
    return formatUnits(a, Big6Math.FIXED_DECIMALS);
  }

  public static toUnsafeFloat(a: bigint): number {
    return parseFloat(Big6Math.toFloatString(a));
  }

  public static fromDecimals(amount: bigint, decimals: number): bigint {
    return amount * BigInt(10) ** BigInt(Big6Math.FIXED_DECIMALS - decimals);
  }

  public static to18Decimals(amount: bigint): bigint {
    return amount * BigInt("1000000000000");
  }
  public static sqrt(a: bigint): bigint {
    if (a < 0n) {
      throw "square root of negative numbers is not supported";
    }

    if (a < 2n) {
      return a;
    }

    function newtonIteration(n: bigint, x0: bigint): bigint {
      const x1 = (n / x0 + x0) >> 1n;
      if (x0 === x1 || x0 === x1 - 1n) {
        return x0;
      }
      return newtonIteration(n, x1);
    }

    return newtonIteration(a, 1n);
  }
}
