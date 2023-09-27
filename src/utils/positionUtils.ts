import {
  PositionSide2,
  PositionStatus,
  SupportedAsset,
} from "../constants/markets";
import { SupportedChainId, interfaceFeeBps } from "../constants/network";
import { MaxUint256 } from "../constants/units";
import { ProductSnapshotWithTradeLimitations } from "../libs/markets";
import {
  MarketSnapshot,
  MarketSnapshots,
  UserMarketSnapshot,
} from "../libs/markets";

import {
  Position,
  PrePosition,
  ProductSnapshot,
  UserProductSnapshot,
} from "../types/perennial";

import { Big6Math, formatBig6Percent } from "./big6Utils";
import { Big18Math } from "./big18Utils";
import { computeInterestRate } from "./fundingAndInterestUtils";
import { Day, Hour, Year } from "./timeUtils";

export const UpdateNoOp = MaxUint256;

export function next(pre: PrePosition, pos: Position) {
  return {
    maker: pos.maker + pre.openPosition.maker - pre.closePosition.maker,
    taker: pos.taker + pre.openPosition.taker - pre.closePosition.taker,
  };
}

export function size(pos: Position) {
  return pos.maker || pos.taker || BigInt(0);
}

export function magnitude(
  maker: bigint | string,
  long: bigint | string,
  short: bigint | string
) {
  return Big6Math.max(BigInt(maker), Big6Math.max(BigInt(long), BigInt(short)));
}

export function side2(
  maker: bigint | string,
  long: bigint | string,
  short: bigint | string
): PositionSide2 {
  if (BigInt(maker) > BigInt(0)) return PositionSide2.maker;
  if (BigInt(long) > BigInt(0)) return PositionSide2.long;
  if (BigInt(short) > BigInt(0)) return PositionSide2.short;

  return PositionSide2.none;
}

export function add(a: Position, b: Position) {
  return {
    maker: a.maker + b.maker,
    taker: a.taker + b.taker,
  };
}

export function utilization(pre: PrePosition, pos: Position) {
  const nextPosition = next(pre, pos);
  if (nextPosition.maker === BigInt(0)) return Big6Math.ONE;

  return Big6Math.min(
    Big6Math.ONE,
    Big6Math.div(BigInt(nextPosition.taker), BigInt(nextPosition.maker))
  );
}

export function socialization(pre: PrePosition, pos: Position) {
  const nextPosition = next(pre, pos);
  if (nextPosition.taker === BigInt(0)) return Big6Math.ONE;

  return Big6Math.min(
    Big6Math.ONE,
    Big6Math.div(BigInt(nextPosition.maker), BigInt(nextPosition.taker))
  );
}

// LiquidationPrice = ((position * abs(price) + collateral) / (position * (1 + maintenanceRatio))
export const calcLiquidationPrice = ({
  marketSnapshot,
  collateral,
  position,
}: {
  marketSnapshot?: MarketSnapshot;
  collateral?: bigint;
  position?: bigint;
}) => {
  const noValue = { long: BigInt(0), short: BigInt(0) };
  if (!collateral || !marketSnapshot || !position) return noValue;

  const minMaintenanceThreshold =
    Big6Math.mul(
      Big6Math.mul(position, marketSnapshot.global.latestPrice),
      marketSnapshot.riskParameter.maintenance
    ) < marketSnapshot.riskParameter.minMaintenance;

  if (minMaintenanceThreshold) {
    const minMaintenanceLiqPrice = Big6Math.abs(
      Big6Math.div(
        marketSnapshot.riskParameter.minMaintenance - collateral,
        position
      ) + marketSnapshot.global.latestPrice
    );
    return { long: minMaintenanceLiqPrice, short: minMaintenanceLiqPrice };
  }

  const notional = calcNotional(position, marketSnapshot.global.latestPrice);

  const longNumerator = Big6Math.sub(notional, collateral);
  const longDenominator = Big6Math.mul(
    position,
    Big6Math.sub(marketSnapshot.riskParameter.maintenance, Big6Math.ONE)
  );
  const long = Big6Math.abs(Big6Math.div(longNumerator, longDenominator));

  const shortNumerator = Big6Math.add(collateral, notional);
  const shortDenominator = Big6Math.mul(
    position,
    Big6Math.add(marketSnapshot.riskParameter.maintenance, Big6Math.ONE)
  );
  const short = Big6Math.abs(Big6Math.div(shortNumerator, shortDenominator));

  return { long, short };
};

export const positionStatus = (
  position: bigint,
  nextPosition: bigint,
  collateral: bigint
) => {
  if (Big6Math.isZero(nextPosition) && !Big6Math.isZero(position)) {
    return PositionStatus.closing;
  }
  if (
    Big6Math.isZero(nextPosition) &&
    Big6Math.isZero(position) &&
    !Big6Math.isZero(collateral)
  ) {
    return PositionStatus.closed;
  }
  if (!Big6Math.isZero(nextPosition) && Big6Math.isZero(position)) {
    return PositionStatus.opening;
  }
  if (
    !Big6Math.isZero(nextPosition) &&
    !Big6Math.isZero(position) &&
    !Big6Math.eq(nextPosition, position)
  ) {
    return PositionStatus.pricing;
  }
  if (!Big6Math.isZero(nextPosition) && !Big6Math.isZero(position)) {
    return PositionStatus.open;
  }
  return PositionStatus.resolved;
};

export const calcLeverage = (
  price: bigint,
  position: bigint,
  collateral: bigint
) => {
  if (Big6Math.isZero(collateral)) return BigInt(0);
  return Big6Math.div(Big6Math.mul(Big6Math.abs(price), position), collateral);
};

export const calcExposure = (
  userPosition: bigint,
  globalPosition: Position
) => {
  if (Big6Math.isZero(globalPosition.maker)) return Big6Math.ZERO;

  return Big6Math.div(
    Big6Math.mul(userPosition, globalPosition.taker),
    globalPosition.maker
  );
};

export const calcMakerExposure = (
  userMaker: bigint,
  globalMaker: bigint,
  globalLong: bigint,
  globalShort: bigint
) => {
  if (globalMaker === BigInt(0)) return BigInt(0);

  return Big6Math.div(
    Big6Math.mul(userMaker, globalShort - globalLong),
    globalMaker
  );
};

export const getStatusDetails = ({
  userMarketSnapshot,
  isMaker,
}: {
  userMarketSnapshot?: UserMarketSnapshot;
  isMaker?: boolean;
}) => {
  if (!userMarketSnapshot || !isActivePosition(userMarketSnapshot, isMaker))
    return {
      isOpenPosition: false,
      isTransitionPosition: false,
      statusColor: "darkGray",
      status: PositionStatus.resolved,
      directionTextColor: "darkGray",
      isClosing: false,
    };
  const { status, side, nextSide } = userMarketSnapshot;
  const isOpenPosition = [
    PositionStatus.open,
    PositionStatus.pricing,
    PositionStatus.closing,
    PositionStatus.opening,
  ].includes(status);
  const isTransitionPosition = [
    PositionStatus.pricing,
    PositionStatus.opening,
    PositionStatus.closing,
  ].includes(status);
  const hasPosition = PositionStatus.resolved !== status;
  const isClosing = status === PositionStatus.closing;
  return {
    isOpenPosition,
    isTransitionPosition,
    status,
    hasPosition,
    isClosing,
  };
};

export const closedOrResolved = (status?: PositionStatus) =>
  status && [PositionStatus.closed, PositionStatus.resolved].includes(status);

export const getTradeLimitations = (
  userProductSnapshot?: UserProductSnapshot
) => {
  if (!userProductSnapshot) {
    return {
      canOpenTaker: true,
      canOpenMaker: true,
    };
  }
  // @ts-ignore
  const { pre, position } = userProductSnapshot;
  const canOpenMaker = [
    pre.openPosition["taker"],
    pre.closePosition["taker"],
    position["taker"],
  ].every((num) => Big6Math.isZero(num));
  const canOpenTaker = [
    pre.openPosition["maker"],
    pre.closePosition["maker"],
    position["maker"],
  ].every((num) => Big6Math.isZero(num));

  return {
    canOpenTaker,
    canOpenMaker,
  };
};

export const calcNotional = (position: bigint, price: bigint) => {
  return Big6Math.abs(Big6Math.mul(position, price));
};

export const calcTradeFeeApr = ({
  fees7Day,
  makerOi,
  collateral,
  notional,
}: {
  fees7Day: bigint;
  makerOi: bigint;
  collateral: bigint;
  notional: bigint;
}) => {
  if (!fees7Day || !makerOi || !collateral || !notional) return BigInt(0);
  const dailyAvgFee = Big6Math.div(
    fees7Day,
    Big6Math.fromDecimals(BigInt(7), 0)
  );
  const annualFees = Big6Math.mul(
    dailyAvgFee,
    Big6Math.fromDecimals(BigInt(365), 0)
  );
  const annualFeesPerUser = Big6Math.mul(annualFees, notional);
  const denominator = Big6Math.mul(makerOi, collateral);
  return Big6Math.div(annualFeesPerUser, denominator);
};

export const getMakerStats = ({
  product,
  leverage,
  userPosition,
  collateral,
  snapshot,
  fees7Day,
  positionDelta,
}: {
  product?: ProductSnapshot;
  leverage?: bigint;
  userPosition?: bigint;
  collateral?: bigint;
  snapshot?: ProductSnapshotWithTradeLimitations;
  fees7Day?: bigint;
  positionDelta?: bigint;
}) => {
  if (
    !product ||
    !snapshot ||
    leverage === undefined ||
    userPosition === undefined ||
    collateral == undefined ||
    fees7Day === undefined
  ) {
    return undefined;
  }

  // Not sure here
  const {
    // @ts-ignore
    productInfo: { utilizationCurve },
    // @ts-ignore
    latestVersion: { price },
    // @ts-ignore
    pre: globalPre,
    // @ts-ignore
    position,
  } = product;

  const globalPosition = {
    taker: position.taker,
    maker: position.maker + (positionDelta ? positionDelta : BigInt(0)),
  };
  const currentUtilization = utilization(globalPre, globalPosition);
  const fundingRate = computeInterestRate(utilizationCurve, currentUtilization);
  const exposure = Big6Math.mul(currentUtilization, leverage);
  const notional = calcNotional(userPosition, price);
  // @ts-ignore - TODO: fix this
  const makerOi = snapshot?.openInterest?.maker ?? BigInt(0);

  const fundingFeeAPR = Big6Math.mul(fundingRate, exposure);
  const tradingFeeAPR = calcTradeFeeApr({
    fees7Day,
    makerOi,
    collateral,
    notional,
  });
  const totalAPR = tradingFeeAPR + fundingFeeAPR;

  return { fundingFeeAPR, tradingFeeAPR, totalAPR, exposure };
};

export const getPositionFromSelectedMarket = ({
  isMaker,
  userMarketSnapshots,
  selectedMarket,
  selectedMakerMarket,
}: {
  isMaker?: boolean;
  userMarketSnapshots?: MarketSnapshots["user"];
  selectedMarket: SupportedAsset;
  selectedMakerMarket: SupportedAsset;
}) => {
  if (!userMarketSnapshots) return undefined;
  if (isMaker) {
    // TODO: we need to check also if the user has collateral
    const userMarketSnapshot = userMarketSnapshots[selectedMakerMarket];
    return [userMarketSnapshot.side, userMarketSnapshot.nextSide].includes(
      PositionSide2.maker
    )
      ? userMarketSnapshot
      : undefined;
  }
  const userMarketSnapshot = userMarketSnapshots[selectedMarket];
  return [PositionSide2.long, PositionSide2.short].includes(
    userMarketSnapshot.side
  ) ||
    [PositionSide2.long, PositionSide2.short].includes(
      userMarketSnapshot.nextSide
    )
    ? userMarketSnapshot
    : undefined;
};

export function getSideFromPosition(position?: UserMarketSnapshot["position"]) {
  if (!position) return PositionSide2.none;
  return position.maker > BigInt(0)
    ? PositionSide2.maker
    : position.long > BigInt(0)
    ? PositionSide2.long
    : position.short > BigInt(0)
    ? PositionSide2.short
    : PositionSide2.none;
}

export function getStatusForSnapshot(
  magnitude: bigint,
  nextMagnitude: bigint,
  collateral: bigint,
  hasVersionError: boolean
): PositionStatus {
  if (hasVersionError && magnitude !== nextMagnitude)
    return PositionStatus.failed;
  if (Big6Math.isZero(magnitude) && !Big6Math.isZero(nextMagnitude))
    return PositionStatus.opening;
  if (!Big6Math.isZero(magnitude) && Big6Math.eq(magnitude, nextMagnitude))
    return PositionStatus.open;
  if (!Big6Math.isZero(magnitude) && Big6Math.isZero(nextMagnitude))
    return PositionStatus.closing;
  if (!Big6Math.isZero(magnitude) && !Big6Math.eq(magnitude, nextMagnitude))
    return PositionStatus.pricing;
  if (
    Big18Math.isZero(magnitude) &&
    Big18Math.isZero(nextMagnitude) &&
    !Big18Math.isZero(collateral)
  )
    return PositionStatus.closed;
  return PositionStatus.resolved;
}

export function calcTakerLiqudidity(marketSnapshot?: MarketSnapshot) {
  if (!marketSnapshot) return undefined;
  const {
    nextPosition: { long, short, maker },
  } = marketSnapshot;
  const availableLongLiquidity = Big6Math.sub(Big6Math.add(short, maker), long);
  const totalLongLiquidity = Big6Math.add(short, maker);
  const availableShortLiquidity = Big6Math.sub(
    Big6Math.add(long, maker),
    short
  );
  const totalShortLiquidity = Big6Math.add(long, maker);

  return {
    availableLongLiquidity,
    totalLongLiquidity,
    availableShortLiquidity,
    totalShortLiquidity,
  };
}

export function calcLpUtilization(marketSnapshot?: MarketSnapshot) {
  if (!marketSnapshot) return undefined;
  const {
    majorSide,
    minorSide,
    nextPosition: { long, short, maker },
  } = marketSnapshot;

  const majorPosition = majorSide === PositionSide2.long ? long : short;
  const minorPosition = majorSide === PositionSide2.long ? short : long;

  const lpUtilization =
    maker > BigInt(0)
      ? Big6Math.div(Big6Math.sub(majorPosition, minorPosition), maker)
      : BigInt(0);

  return {
    lpUtilization,
    formattedLpUtilization: formatBig6Percent(lpUtilization, {
      numDecimals: 2,
    }),
    exposureSide: minorSide,
  };
}

export const isActivePosition = (
  userMarketSnapshot?: UserMarketSnapshot,
  isMaker?: boolean
) => {
  const orderDirections = [PositionSide2.long, PositionSide2.short];
  if (!userMarketSnapshot) {
    return false;
  }
  if (isMaker) {
    return [userMarketSnapshot.side, userMarketSnapshot.nextSide].includes(
      PositionSide2.maker
    );
  }
  return (
    orderDirections.includes(userMarketSnapshot.side) ||
    orderDirections.includes(userMarketSnapshot.nextSide)
  );
};

export const calcSkew = (marketSnapshot?: MarketSnapshot) => {
  if (!marketSnapshot) return undefined;
  const {
    nextPosition: { long, short },
    riskParameter: { virtualTaker },
  } = marketSnapshot;
  const nextMajor = long > short ? long : short;
  const skew = Big6Math.div(
    Big6Math.sub(long, short),
    Big6Math.add(nextMajor, virtualTaker)
  );
  const longSkew = skew > BigInt(0) ? skew : Big6Math.ONE - Big6Math.abs(skew);
  const shortSkew = skew < BigInt(0) ? Big6Math.abs(skew) : Big6Math.ONE - skew;
  return {
    skew,
    longSkew,
    shortSkew,
  };
};

export const calcFundingRates = (fundingRate: bigint = BigInt(0)) => {
  const rate = Big6Math.div(fundingRate, Year);
  const hourlyFunding = Big6Math.mul(rate, Hour);
  const eightHourFunding = Big6Math.mul(rate, Hour * BigInt(8));
  const dailyFunding = Big6Math.mul(rate, Day);
  return {
    hourlyFunding,
    eightHourFunding,
    dailyFunding,
    yearlyFunding: fundingRate,
  };
};

export const calcTradeFee = ({
  positionDelta,
  marketSnapshot,
  isMaker,
  direction,
}: {
  positionDelta: bigint;
  marketSnapshot?: MarketSnapshot;
  isMaker: boolean;
  direction: PositionSide2;
}) => {
  const noValue = {
    total: BigInt(0),
    impactFee: BigInt(0),
    skewFee: BigInt(0),
    feeBasisPoints: BigInt(0),
  };
  if (!marketSnapshot || !positionDelta) return noValue;

  const {
    riskParameter: {
      takerFee,
      takerSkewFee,
      takerImpactFee,
      makerFee,
      makerImpactFee,
      virtualTaker,
    },
    nextPosition: { long, short, maker },
    global: { latestPrice },
  } = marketSnapshot;

  const notional = calcNotional(positionDelta, latestPrice);

  if (isMaker) {
    const major = Big6Math.max(long, short);
    const minor = Big6Math.min(long, short);
    const utilizationDenominator = Big6Math.add(major, minor);
    if (
      Big6Math.isZero(utilizationDenominator) ||
      Big6Math.isZero(major) ||
      Big6Math.isZero(minor)
    )
      return noValue;
    const currentUtilization = Big6Math.div(major, utilizationDenominator);
    const newUtilization = Big6Math.div(major, maker + minor + positionDelta);
    const utilizationDelta = newUtilization - currentUtilization;
    const impactFee = Big6Math.mul(makerImpactFee, utilizationDelta);
    const total = Big6Math.max(
      Big6Math.mul(notional, impactFee + makerFee),
      BigInt(0)
    );
    const feeBasisPoints = !Big6Math.isZero(total)
      ? Big6Math.div(total, notional)
      : makerFee;

    return { impactFee, total, skewFee: undefined, feeBasisPoints };
  }

  const adjustedLong = BigInt(
    direction === PositionSide2.long ? long + positionDelta : long
  );
  const adjustedShort = BigInt(
    direction === PositionSide2.short ? short + positionDelta : short
  );
  const major = Big6Math.max(adjustedLong, adjustedShort);
  const calculatedSkew = calcSkew(marketSnapshot);
  const currentSKew = calculatedSkew?.skew ?? BigInt(0);
  const skewDenominator = Big6Math.add(major, virtualTaker);
  if (Big6Math.isZero(skewDenominator)) return noValue;
  const newSkew = Big6Math.div(adjustedLong - adjustedShort, skewDenominator);
  const skewDelta = Big6Math.abs(newSkew - currentSKew);
  const absSkewDelta = Big6Math.abs(newSkew) - Big6Math.abs(currentSKew);
  const skewFee = Big6Math.mul(takerSkewFee, skewDelta);
  const impactFee = Big6Math.mul(takerImpactFee, absSkewDelta);
  const total = Big6Math.max(
    Big6Math.mul(notional, skewFee + impactFee + takerFee),
    BigInt(0)
  );
  const feeBasisPoints = !Big6Math.isZero(total)
    ? Big6Math.div(total, notional)
    : takerFee;

  return { skewFee, impactFee, total, feeBasisPoints };
};

export function calcPriceImpactFromTradeFee({
  totalTradeFee,
  positionFee,
}: {
  totalTradeFee: bigint;
  positionFee: bigint;
}) {
  return Big6Math.mul(totalTradeFee, Big6Math.ONE - positionFee);
}

export function calcEstExecutionPrice({
  oraclePrice,
  calculatedFee,
  positionFee,
  orderDirection,
  position,
}: {
  position: bigint;
  oraclePrice: bigint;
  calculatedFee: bigint;
  positionFee: bigint; // marketSnapshot.parameter.positionFee
  orderDirection: PositionSide2.long | PositionSide2.short;
}) {
  const priceImpact = calcPriceImpactFromTradeFee({
    totalTradeFee: calculatedFee,
    positionFee,
  });
  const fee = Big6Math.div(priceImpact, position);
  return {
    priceImpact: fee,
    total:
      orderDirection === PositionSide2.long
        ? oraclePrice + fee
        : oraclePrice - fee,
  };
}

export function calcInterfaceFee({
  marketSnapshot,
  chainId,
  positionDelta,
}: {
  marketSnapshot: MarketSnapshot;
  chainId: SupportedChainId;
  positionDelta: bigint;
}) {
  const feeInfo = interfaceFeeBps[chainId];
  if (!marketSnapshot || !positionDelta || !feeInfo) {
    return {
      interfaceFeeBps: feeInfo?.feeAmount ?? BigInt(0),
      interfaceFee: BigInt(0),
    };
  }
  const {
    global: { latestPrice },
  } = marketSnapshot;

  const notional = calcNotional(positionDelta, latestPrice);
  const interfaceFee = Big6Math.mul(notional, feeInfo.feeAmount);

  return {
    interfaceFeeBps: feeInfo.feeAmount,
    interfaceFee,
  };
}
