import { sum } from "./arrayUtils";

export type AccumulatorType = (typeof AccumulatorTypes)[number]["type"];
export const AccumulatorTypes = [
  {
    type: "value",
    realizedKey: "accumulatedValue",
    unrealizedKey: {
      maker: "makerValue",
      long: "longValue",
      short: "shortValue",
    } as const,
  },
  {
    type: "pnl",
    realizedKey: `accumulatedPnl`,
    unrealizedKey: {
      maker: `pnlMaker`,
      long: `pnlLong`,
      short: `pnlShort`,
    } as const,
  },
  {
    type: "funding",
    realizedKey: `accumulatedFunding`,
    unrealizedKey: {
      maker: `fundingMaker`,
      long: `fundingLong`,
      short: `fundingShort`,
    } as const,
  },
  {
    type: "interest",
    realizedKey: `accumulatedInterest`,
    unrealizedKey: {
      maker: `interestMaker`,
      long: `interestLong`,
      short: `interestShort`,
    } as const,
  },
  {
    type: "makerPositionFee",
    realizedKey: `accumulatedMakerPositionFee`,
    unrealizedKey: {
      maker: `positionFeeMaker`,
      long: `positionFeeMaker`,
      short: `positionFeeMaker`,
    } as const,
  },
] as const;

export type RealizedAccumulations = Record<
  (typeof AccumulatorTypes)[number]["type"],
  bigint
>;
export function accumulateRealized(
  payload: Record<
    (typeof AccumulatorTypes)[number]["realizedKey"],
    bigint | string
  >[]
) {
  return AccumulatorTypes.reduce((acc, { realizedKey, type }) => {
    const total = sum(payload.map((p) => BigInt(p[realizedKey])));
    return { ...acc, [type]: total };
  }, {} as RealizedAccumulations);
}
