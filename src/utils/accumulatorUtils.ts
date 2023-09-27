export type AccumulatorType = 'value' | 'pnl' | 'funding' | 'interest' | 'positionFees' | 'keeperFees'
export const AccumulatorTypes = [
  {
    type: 'value',
    realizedKey: 'accumulatedValue',
    unrealizedKey: { maker: 'makerValue', long: 'longValue', short: 'shortValue' } as const,
  },
  {
    type: 'pnl',
    realizedKey: `accumulatedPnl`,
    unrealizedKey: { maker: `pnlMaker`, long: `pnlLong`, short: `pnlShort` } as const,
  },
  {
    type: 'funding',
    realizedKey: `accumulatedFunding`,
    unrealizedKey: { maker: `fundingMaker`, long: `fundingLong`, short: `fundingShort` } as const,
  },
  {
    type: 'interest',
    realizedKey: `accumulatedInterest`,
    unrealizedKey: { maker: `interestMaker`, long: `interestLong`, short: `interestShort` } as const,
  },
  {
    type: 'makerPositionFee',
    realizedKey: `accumulatedMakerPositionFee`,
    unrealizedKey: { maker: `positionFeeMaker`, long: `positionFeeMaker`, short: `positionFeeMaker` } as const,
  },
] as const
