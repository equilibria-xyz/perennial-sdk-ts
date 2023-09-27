import { Address, encodeAbiParameters } from "viem";

import { MultiInvoker2Action } from "../types/perennial";

import { UpdateNoOp } from "./positionUtils";

export const buildNoop = (): MultiInvoker2Action => ({
  action: 0,
  args: "0x",
});

export const buildUpdateMarket = ({
  market,
  maker,
  long,
  short,
  collateral,
  wrap,
}: {
  market: Address;
  maker?: bigint;
  long?: bigint;
  short?: bigint;
  collateral?: bigint;
  wrap?: boolean;
}): MultiInvoker2Action => ({
  action: 1,
  args: encodeAbiParameters(
    [
      { type: "address" },
      { type: "uint256" },
      { type: "uint256" },
      { type: "uint256" },
      { type: "int256" },
      { type: "bool" },
    ],
    [
      market,
      maker ?? UpdateNoOp,
      long ?? UpdateNoOp,
      short ?? UpdateNoOp,
      collateral ?? BigInt(0),
      !!wrap,
    ]
  ),
});

export const buildUpdateVault = ({
  vault,
  deposit,
  redeem,
  claim,
  wrap,
}: {
  vault: Address;
  deposit?: bigint;
  redeem?: bigint;
  claim?: bigint;
  wrap?: boolean;
}): MultiInvoker2Action => ({
  action: 2,
  args: encodeAbiParameters(
    ["address", "uint256", "uint256", "uint256", "bool"].map((type) => ({
      type,
    })),
    [vault, deposit ?? BigInt(0), redeem ?? BigInt(0), claim ?? BigInt(0), wrap]
  ),
});

/* export const buildPlaceOrder = ({
  market,
  long,
  short,
  triggerType,
  collateral,
  handleWrap,
  order,
  comparisonOverride,
  sideOverride,
}: {
  market: string
  long?: BigNumberish
  short?: BigNumberish
  triggerType?: TriggerType
  collateral: BigNumberish
  handleWrap?: boolean
  order: TriggerOrderStruct
  comparisonOverride?: number
  sideOverride?: number
}): Actions => {
  if (!triggerType) triggerType = 'LM'

  order.delta = BigNumber.from(order.delta)
  order.fee = BigNumber.from(order.fee)

  if (long && short) {
    if (BigNumber.from(long).gt(short)) {
      order.side = 1
      order.delta = BigNumber.from(long).sub(short)
    } else {
      order.side = 2
      order.delta = BigNumber.from(short).sub(long)
    }
  } else if (long) {
    order.side = 1
    order.delta = long
  } else if (short) {
    order.side = 2
    order.delta = short
  } else {
    long = order.side === 1 ? order.delta.abs() : '0'
    short = order.side === 2 ? order.delta.abs() : '0'
  }

  order.fee = BigNumber.from(collateral).div(BigNumber.from(order.delta).abs()).mul(order.fee)
  order = triggerDirection(order, triggerType, comparisonOverride)
  order.side = sideOverride || sideOverride === 0 ? sideOverride : order.side

  // dont open position if limit order
  if (triggerType === 'LM') {
    long = BigNumber.from(0)
    short = BigNumber.from(0)
  }
  return [
    {
      action: 1,
      args: utils.defaultAbiCoder.encode(
        ['address', 'uint256', 'uint256', 'uint256', 'int256', 'bool'],
        [
          market,
          '0',
          long ? long : '0',
          short ? short : '0',
          collateral ? collateral : '0',
          handleWrap ? handleWrap : false,
        ],
      ),
    },
    {
      action: 3,
      args: utils.defaultAbiCoder.encode(
        ['address', 'tuple(uint8,int8,uint256,int256,int256)'],
        [
          market,
          [
            order.side, // default long side
            order.comparison,
            order.fee ? order.fee : '0',
            order.price ? order.price : '0',
            order.delta ? order.delta : '0',
          ],
        ],
      ),
    },
  ]
} */

/* function triggerDirection(order: TriggerOrderStruct, triggerType: TriggerType, comparisonOverride?: number) {
  order.delta = BigNumber.from(order.delta)

  order.delta = delta(order.delta, triggerType)

  if (comparisonOverride && comparisonOverride !== 0) {
    order.comparison = comparisonOverride
  } else if (
    (order.side === 1 && (triggerType === 'LM' || triggerType === 'SL')) ||
    (order.side === 2 && triggerType === 'TP')
  ) {
    order.comparison = -1
  } else {
    order.comparison = 1
  }

  return order
}

function delta(num: BigNumber, trigger: TriggerType) {
  if (trigger === 'LM') {
    if (num.isNegative()) return num.mul(-1)
    return num
  }
  if (num.isNegative()) return num
  return num.mul(-1)
} */

export const buildCancelOrder = ({
  market,
  orderId,
}: {
  market: Address;
  orderId: bigint;
}): MultiInvoker2Action => ({
  action: 4,
  args: encodeAbiParameters(
    ["address", "uint256"].map((type) => ({ type })),
    [market, orderId]
  ),
});

export const buildExecOrder = ({
  user,
  market,
  orderId,
}: {
  user: Address;
  market: Address;
  orderId: bigint;
}): MultiInvoker2Action => ({
  action: 5,
  args: encodeAbiParameters(
    ["address", "address", "uint256"].map((type) => ({ type })),
    [user, market, orderId]
  ),
});

export const buildCommitPrice = ({
  oracle,
  version,
  value,
  index,
  vaa,
  revertOnFailure,
}: {
  oracle: Address;
  version: bigint;
  value: bigint;
  index: bigint;
  vaa: string;
  revertOnFailure: boolean;
}): MultiInvoker2Action => ({
  action: 6,
  args: encodeAbiParameters(
    ["address", "uint256", "uint256", "uint256", "bytes", "bool"].map(
      (type) => ({ type })
    ),
    [oracle, value, index, version, vaa, revertOnFailure]
  ),
});

export const buildLiquidate = ({
  market,
  user,
}: {
  market: Address;
  user: Address;
}): MultiInvoker2Action => ({
  action: 7,
  args: encodeAbiParameters(
    ["address", "address"].map((type) => ({ type })),
    [market, user]
  ),
});

export const buildApproveTarget = ({
  target,
}: {
  target: Address;
}): MultiInvoker2Action => ({
  action: 8,
  args: encodeAbiParameters(
    ["address"].map((type) => ({ type })),
    [target]
  ),
});

export const buildInterfaceFee = ({
  to,
  amount,
}: {
  to: Address;
  amount: bigint;
}): MultiInvoker2Action => ({
  action: 9,
  args: encodeAbiParameters(
    ["address", "uint256"].map((type) => ({ type })),
    [to, amount]
  ),
});
