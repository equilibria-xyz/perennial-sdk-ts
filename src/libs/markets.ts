import { EvmPriceServiceConnection } from "@pythnetwork/pyth-evm-js";
import {
  Address,
  Hex,
  PublicClient,
  WalletClient,
  decodeFunctionResult,
  encodeFunctionData,
  encodePacked,
  getAddress,
  getContract,
  getContractAddress,
  keccak256,
  pad,
  parseEther, // eslint-disable-line no-restricted-imports
  toHex,
  zeroAddress,
} from "viem";

import {
  MarketFactoryAddresses,
  MultiInvoker2Addresses,
  USDCAddresses,
} from "../constants/contracts";
import { AssetMetadata, SupportedAsset } from "../constants/markets";
import {
  PositionSide2,
  PositionStatus,
  addressToAsset2,
  chainAssetsWithAddress,
} from "../constants/markets";
import {
  DefaultChain,
  SupportedChainId,
  interfaceFeeBps,
  isTestnet,
  usePyth,
} from "../constants/network";
import { MaxUint256 } from "../constants/units";
import { notEmpty, unique } from "../utils/arrayUtils";
import { Big6Math, BigOrZero } from "../utils/big6Utils";
import {
  getMarketContract,
  getOracleContract,
  getPythProviderContract,
} from "../utils/contractUtils";
import { calculateFundingForSides } from "../utils/fundingAndInterestUtils";
import {
  buildCommitPrice,
  buildInterfaceFee,
  buildUpdateMarket,
} from "../utils/multiinvoker2";
import {
  calcLeverage,
  calcNotional,
  getSideFromPosition,
  getStatusForSnapshot,
} from "../utils/positionUtils";
import { buildCommitmentsForOracles, getRecentVaa } from "../utils/pythUtils";

import { Lens2Abi } from "../abi/Lens2.abi";
import { LensArtifact } from "../artifacts/Lens";
import { MarketFactoryAbi } from "../abi/MarketFactory.abi";
import { ERC20Abi } from "../abi/ERC20.abi";
import { MultiInvoker2Abi } from "../abi/MultiInvoker2.abi";
import { ProductSnapshot, MultiInvoker2Action } from "../types/perennial";

export type ProductSnapshotWithTradeLimitations = ProductSnapshot & {
  canOpenMaker: boolean;
  canOpenTaker: boolean;
};

export type AssetSnapshots = {
  [key in SupportedAsset]?: {
    [PositionSide2.long]?: ProductSnapshotWithTradeLimitations;
    [PositionSide2.short]?: ProductSnapshotWithTradeLimitations;
  };
};

export const fetchProtocolParameters = async (publicClient: PublicClient) => {
  if (!publicClient.chain) throw new Error("Missing chain");
  const chainId = publicClient.chain.id as SupportedChainId;

  const marketFactory = getContract({
    address: MarketFactoryAddresses[chainId],
    abi: MarketFactoryAbi,
    publicClient,
  });
  return await marketFactory.read.parameter();
};

export type MarketOracles = NonNullable<
  Awaited<ReturnType<typeof fetchMarketOracles2>>
>;

export const fetchMarketOracles2 = async (
  publicClient: PublicClient,
  assetList?: string[]
) => {
  if (!publicClient.chain) throw new Error("Missing chain");
  const chainId = publicClient.chain.id as SupportedChainId;

  // Get markets
  const markets = assetList
    ? chainAssetsWithAddress(chainId).filter((m) => assetList.includes(m.asset))
    : chainAssetsWithAddress(chainId);
  // Get Oracles for markets
  const fetchMarketOracles = async (
    asset: SupportedAsset,
    marketAddress: Address
  ) => {
    const market = getMarketContract(marketAddress, publicClient);

    const oracleAddress = await market.read.oracle();
    // Fetch oracle data
    const oracle = await getOracleContract(oracleAddress, publicClient);
    const [oracleCurrent] = await oracle.read.global();
    const [oracleProviderAddress] = await oracle.read.oracles([oracleCurrent]);
    const oracleProviderContract = getPythProviderContract(
      oracleProviderAddress,
      publicClient
    );
    const [oracleId, minValidTime] = await Promise.all([
      oracleProviderContract.read.id(),
      oracleProviderContract.read.MIN_VALID_TIME_AFTER_VERSION(),
    ]);

    return {
      asset,
      marketAddress,
      address: oracleAddress,
      providerAddress: oracleProviderAddress,
      providerId: oracleId,
      minValidTime,
    };
  };

  const marketData = await Promise.all(
    markets.map(({ asset, marketAddress }) => {
      return fetchMarketOracles(asset as SupportedAsset, marketAddress);
    })
  );

  return marketData.reduce((acc, market) => {
    acc[market.asset] = market;
    return acc;
  }, {} as Record<SupportedAsset, Awaited<ReturnType<typeof fetchMarketOracles>>>);
};

export type MarketSnapshot = ChainMarketSnapshot & {
  pre: ChainMarketSnapshot;
  major: bigint;
  majorSide: PositionSide2;
  minor: bigint;
  minorSide: PositionSide2;
  fundingRate: {
    long: bigint;
    short: bigint;
  };
};
export type UserMarketSnapshot = ChainUserMarketSnapshot & {
  pre: ChainUserMarketSnapshot;
  side: PositionSide2;
  nextSide: PositionSide2;
  status: PositionStatus;
  magnitude: bigint;
  nextMagnitude: bigint;
  maintenance: bigint;
  nextMaintenance: bigint;
  leverage: bigint;
  nextLeverage: bigint;
  notional: bigint;
  nextNotional: bigint;
};
export type MarketSnapshots = NonNullable<
  Awaited<ReturnType<typeof fetchMarketSnapshots2>>
>;

export const fetchMarketSnapshots2 = async (
  publicClient: PublicClient,
  addressOverride?: Address,
  assetList?: string[]
) => {
  const marketOracles = await fetchMarketOracles2(publicClient, assetList);
  const pyth = usePyth(publicClient);
  const address = addressOverride || zeroAddress;

  if (!address || !marketOracles) return;

  const snapshotData = await fetchMarketSnapshotsAfterSettle(
    publicClient,
    address,
    marketOracles,
    pyth
  );

  const marketSnapshots = snapshotData.market.reduce((acc, snapshot) => {
    const major = Big6Math.max(snapshot.position.long, snapshot.position.short);
    const minor = Big6Math.min(snapshot.position.long, snapshot.position.short);
    const fundingRates = calculateFundingForSides(snapshot);
    acc[snapshot.asset] = {
      ...snapshot,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      pre: snapshotData.marketPre.find((pre) => pre.asset === snapshot.asset)!,
      major,
      majorSide:
        major === snapshot.position.long
          ? PositionSide2.long
          : PositionSide2.short,
      minor,
      minorSide:
        minor === snapshot.position.long
          ? PositionSide2.long
          : PositionSide2.short,
      fundingRate: {
        long: fundingRates.long,
        short: fundingRates.short,
      },
    };
    return acc;
  }, {} as Record<SupportedAsset, MarketSnapshot>);
  const userSnapshots = snapshotData.user.reduce((acc, snapshot) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const pre = snapshotData.userPre.find(
      (pre) => pre.asset === snapshot.asset
    )!;
    const marketSnapshot = marketSnapshots[snapshot.asset];
    const marketPrice = marketSnapshot.global.latestPrice;
    const latestPosition = snapshot.versions[0].valid
      ? snapshot.position
      : pre.position;
    const nextPosition = snapshot.versions[0].valid
      ? snapshot.nextPosition
      : pre.nextPosition;
    const side = getSideFromPosition(latestPosition);
    const nextSide = getSideFromPosition(nextPosition);
    const magnitude =
      side === PositionSide2.none ? BigInt(0) : latestPosition[side];
    const nextMagnitude =
      nextSide === PositionSide2.none
        ? BigInt(0)
        : nextPosition?.[nextSide] ?? BigInt(0);
    const hasVersionError =
      !snapshot.versions[0].valid &&
      (pre.nextPosition.timestamp <
        marketSnapshots[snapshot.asset].pre.latestOracleVersion.timestamp ||
        pre.nextPosition.timestamp + BigInt(60) <
          BigInt(Math.floor(Date.now() / 1000)));
    acc[snapshot.asset] = {
      ...snapshot,
      pre,
      side,
      nextSide,
      status: getStatusForSnapshot(
        magnitude,
        nextMagnitude,
        snapshot.local.collateral,
        hasVersionError
      ),
      magnitude,
      nextMagnitude,
      maintenance: !Big6Math.isZero(magnitude)
        ? Big6Math.max(
            marketSnapshot.riskParameter.minMaintenance,
            Big6Math.mul(
              marketSnapshot.riskParameter.maintenance,
              calcNotional(magnitude, marketPrice)
            )
          )
        : BigInt(0),
      nextMaintenance: !Big6Math.isZero(nextMagnitude)
        ? Big6Math.max(
            marketSnapshot.riskParameter.minMaintenance,
            Big6Math.mul(
              marketSnapshot.riskParameter.maintenance,
              calcNotional(nextMagnitude, marketPrice)
            )
          )
        : BigInt(0),
      leverage: calcLeverage(marketPrice, magnitude, snapshot.local.collateral),
      nextLeverage: calcLeverage(
        marketPrice,
        nextMagnitude,
        snapshot.local.collateral
      ),
      notional: calcNotional(magnitude, marketPrice),
      nextNotional: calcNotional(nextMagnitude, marketPrice),
    };
    return acc;
  }, {} as Record<SupportedAsset, UserMarketSnapshot>);

  return {
    user: address === zeroAddress ? undefined : userSnapshots,
    market: marketSnapshots,
    commitments: snapshotData.commitments,
    updates: snapshotData.updates,
  };
};

export type ChainMarketSnapshot = Awaited<
  ReturnType<typeof fetchMarketSnapshotsAfterSettle>
>["market"][number];
type ChainUserMarketSnapshot = Awaited<
  ReturnType<typeof fetchMarketSnapshotsAfterSettle>
>["user"][number];

const fetchMarketSnapshotsAfterSettle = async (
  publicClient: PublicClient,
  address: Address,
  marketOracles: MarketOracles,
  pyth: EvmPriceServiceConnection
) => {
  if (!publicClient.chain) throw new Error("Missing chain");
  const chainId = publicClient.chain.id as SupportedChainId;
  const providerUrl: string = publicClient.transport.url;

  const lensAddress = getContractAddress({ from: address, nonce: MaxUint256 });
  const priceCommitments = await buildCommitmentsForOracles({
    publicClient,
    marketOracles: Object.values(marketOracles),
    pyth,
  });

  const marketAddresses = Object.values(marketOracles).map(
    ({ marketAddress }) => marketAddress
  );

  const ethCallPayload = {
    to: lensAddress,
    from: address,
    data: encodeFunctionData({
      abi: Lens2Abi,
      functionName: "snapshot",
      args: [priceCommitments, marketAddresses, address],
    }),
  };

  // Update marketFactory operator storage to allow lens to update address
  // Operator storage mapping is at index 1
  const operatorStorage = keccak256(
    encodePacked(
      ["bytes32", "bytes32"],
      [pad(address), toHex(BigInt(1), { size: 32 })]
    )
  );
  const operatorStorageIndex = keccak256(
    encodePacked(["bytes32", "bytes32"], [pad(lensAddress), operatorStorage])
  );
  const alchemyRes = await fetch(providerUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: 1,
      jsonrpc: "2.0",
      method: "eth_call", // use a manual eth_call here to use state overrides
      params: [
        ethCallPayload,
        "latest",
        {
          // state diff overrides
          [lensAddress]: {
            code: LensArtifact.deployedBytecode,
            balance: toHex(parseEther("1000")),
          },
          [MarketFactoryAddresses[chainId]]: {
            stateDiff: {
              [operatorStorageIndex]: pad(toHex(true)), // Set the deployed lens as an approved operator
            },
          },
        },
      ],
    }),
  });
  const batchRes = (await alchemyRes.json()) as { result: Hex };
  const lensRes = decodeFunctionResult({
    abi: Lens2Abi,
    functionName: "snapshot",
    data: batchRes.result,
  });

  return {
    commitments: lensRes.commitmentStatus,
    updates: lensRes.updateStatus,
    market: lensRes.postUpdate.marketSnapshots
      .map((s) => {
        const asset = addressToAsset2(getAddress(s.market));
        if (!asset) return;
        return {
          ...s,
          asset,
        };
      })
      .filter(notEmpty),
    marketPre: lensRes.preUpdate.marketSnapshots
      .map((s) => {
        const asset = addressToAsset2(getAddress(s.market));
        if (!asset) return;
        return {
          ...s,
          asset,
        };
      })
      .filter(notEmpty),
    user: lensRes.postUpdate.marketAccountSnapshots
      .map((s) => {
        const asset = addressToAsset2(getAddress(s.market));
        if (!asset) return;
        return {
          ...s,
          asset,
        };
      })
      .filter(notEmpty),
    userPre: lensRes.preUpdate.marketAccountSnapshots
      .map((s) => {
        const asset = addressToAsset2(getAddress(s.market));
        if (!asset) return;
        return {
          ...s,
          asset,
        };
      })
      .filter(notEmpty),
  };
};

// Approve Call()
export const approveUSDC = async (
  walletClient: WalletClient,
  publicClient: PublicClient,
  suggestedAmount: bigint = MaxUint256
) => {
  if (!walletClient.chain) throw new Error("Missing chain");
  const chainId = walletClient.chain.id as SupportedChainId;
  const { chain, account } = walletClient;

  // Contract Factory
  const usdcContract = getContract({
    address: USDCAddresses[chainId],
    abi: ERC20Abi,
    walletClient,
  });

  const txOpts = {
    account: account?.address || zeroAddress,
    chainId,
    chain,
    gas: BigInt(69420),
  };
  const hash = await usdcContract.write.approve(
    [MultiInvoker2Addresses[chainId], Big6Math.abs(suggestedAmount)],
    txOpts
  );

  return hash;
};

export const approveOperator = async (
  walletClient: WalletClient,
  operatorAddress: Address
) => {
  if (!walletClient.chain) throw new Error("Missing chain");
  const chainId = walletClient.chain.id as SupportedChainId;
  const { chain, account } = walletClient;

  // Contract Factory
  const marketFactory = getContract({
    address: MarketFactoryAddresses[chainId],
    abi: MarketFactoryAbi,
    walletClient,
  });

  const txOpts = {
    account: account?.address || zeroAddress,
    chainId,
    chain,
    gas: BigInt(100000),
  };
  const hash = await marketFactory.write.updateOperator(
    [operatorAddress, true],
    txOpts
  );

  return hash;
};

// Update() Call
export const modifyPosition = async (
  publicClient: PublicClient,
  walletClient: WalletClient,
  productAddress: Address,
  modifyData: {
    positionSide?: PositionSide2;
    positionAbs?: bigint;
    collateralDelta?: bigint;
    txHistoryLabel?: string;
    interfaceFee?: bigint;
  } = {}
) => {
  if (!walletClient.chain || !walletClient.account)
    throw new Error("Missing data");

  const chainId = walletClient.chain.id as SupportedChainId;
  const address = walletClient.account.address;

  const marketOracles = await fetchMarketOracles2(publicClient);
  const marketSnapshots = await fetchMarketSnapshots2(publicClient, address);
  const pyth = usePyth(publicClient);

  // Position Change Values
  const {
    positionSide,
    positionAbs,
    txHistoryLabel,
    interfaceFee,
    collateralDelta,
  } = modifyData;

  const oracleInfo = Object.values(marketOracles).find(
    (o) => o.marketAddress === productAddress
  );
  if (!oracleInfo) return;
  const asset = addressToAsset2(productAddress);

  // Interface fee
  const interfaceFeeInfo = interfaceFeeBps[chainId];
  let chargeFeeAction;
  if (interfaceFee && interfaceFeeInfo) {
    chargeFeeAction = buildInterfaceFee({
      to: interfaceFeeInfo.feeRecipientAddress,
      amount: interfaceFee,
    });
  }

  const updateAction = buildUpdateMarket({
    market: productAddress,
    maker: positionSide === PositionSide2.maker ? positionAbs : undefined, // Absolute position size
    long: positionSide === PositionSide2.long ? positionAbs : undefined,
    short: positionSide === PositionSide2.short ? positionAbs : undefined,
    collateral: (collateralDelta ?? BigInt(0)) - (interfaceFee ?? BigInt(0)), // Delta collateral
    wrap: true,
  });

  const actions: MultiInvoker2Action[] = [updateAction, chargeFeeAction].filter(
    notEmpty
  );

  let isPriceStale = false;
  if (asset && marketSnapshots?.market[asset]) {
    const {
      parameter: { maxPendingGlobal, maxPendingLocal },
      riskParameter: { staleAfter },
      pendingPositions,
    } = marketSnapshots.market[asset];
    const lastUpdated = await getOracleContract(
      oracleInfo.address,
      publicClient
    ).read.latest();
    isPriceStale =
      BigInt(Math.floor(Date.now() / 1000)) - lastUpdated.timestamp >
      staleAfter;
    // If there is a backlog of pending positions, we need to commit the price
    isPriceStale =
      isPriceStale || BigInt(pendingPositions.length) >= maxPendingGlobal;
    // If there is a backlog of pending positions for this user, we need to commit the price
    isPriceStale =
      isPriceStale ||
      BigOrZero(marketSnapshots.user?.[asset]?.pendingPositions?.length) >=
        maxPendingLocal;
  }

  // Only add the price commit if the price is stale
  if (isPriceStale) {
    const { vaa, version } = await getRecentVaa({
      pyth,
      feedId: oracleInfo.providerId,
      minValidTime: oracleInfo.minValidTime,
    });

    const commitAction = buildCommitPrice({
      oracle: oracleInfo.providerAddress,
      version,
      value: BigInt(1),
      index: await getPythProviderContract(
        oracleInfo.providerAddress,
        publicClient
      ).read.versionListLength(),
      vaa,
      revertOnFailure: false,
    });

    actions.unshift(commitAction);
  }

  const txOpts = {
    account: address || zeroAddress,
    chainId,
    chain: walletClient.chain,
    gas: BigInt(2000000), // Stand in Figure. TODO: Calculate gas
  };
  const multiInvoker = getContract({
    abi: MultiInvoker2Abi,
    address: MultiInvoker2Addresses[chainId],
    walletClient,
  });

  const hash = await multiInvoker.write.invoke([actions], {
    ...txOpts,
    value: BigInt(1),
  });

  return hash;
};

export const fetchChainLivePrices2 = async (publicClient: PublicClient) => {
  if (!publicClient.chain) throw new Error("Missing chain");
  const chain = publicClient.chain.id as SupportedChainId;
  const pyth = usePyth(publicClient);

  const markets = chainAssetsWithAddress(chain);
  const feedKey = isTestnet(chain) ? "pythFeedIdTestnet" : "pythFeedId";

  const feedToAsset = markets.reduce((acc, { asset }) => {
    const feed = AssetMetadata[asset as SupportedAsset][feedKey];
    if (!feed) return acc;
    if (acc[feed]) {
      acc[feed].push(asset as SupportedAsset);
    } else {
      acc[feed] = [asset as SupportedAsset];
    }
    return acc;
  }, {} as { [key: string]: SupportedAsset[] });

  const feedIds = Object.keys(feedToAsset);
  const priceFeeds = await pyth.getLatestPriceFeeds(feedIds);
  if (!priceFeeds) throw new Error("No price feeds");

  let prices: { [key in SupportedAsset]?: bigint } = {};

  priceFeeds.map((feed) => {
    const price = feed.getPriceNoOlderThan(60);
    const normalizedExpo = price ? 6 + price?.expo : 0;
    const normalizedPrice =
      normalizedExpo >= 0
        ? BigOrZero(price?.price) * BigInt(10) ** BigInt(normalizedExpo)
        : BigOrZero(price?.price) /
          BigInt(10) ** BigInt(Math.abs(normalizedExpo));

    prices = {
      ...prices,
      ...feedToAsset["0x" + feed.id].reduce((acc, asset) => {
        const { transform } = AssetMetadata[asset];
        // Pyth price is has `expo` (negative number) decimals, normalize to expected 18 decimals by multiplying by 10^(18 + expo)
        acc[asset] = price ? transform(normalizedPrice) : undefined;
        return acc;
      }, {} as { [key in SupportedAsset]?: bigint }),
    };
  });
  return prices;
};

export type LivePrices = ReturnType<typeof fetchChainLivePrices2>;

// const RefreshKeys = ["marketSnapshots2", "marketPnls2"];
// export const useRefreshKeysOnPriceUpdates2 = (
//   invalidKeys: string[] = RefreshKeys
// ) => {
//   const chainId = useChainId();
//   const queryClient = useQueryClient();
//   const { data: marketOracles, isPreviousData } = useMarketOracles2();
//   const wsClient = useViemWsClient();

//   const refresh = useCallback(() => {
//     return queryClient.invalidateQueries({
//       predicate: ({ queryKey }) =>
//         invalidKeys.includes(queryKey.at(0) as string) &&
//         queryKey.includes(chainId),
//     });
//   }, [invalidKeys, queryClient, chainId]);

//   const oracleProviders = useMemo(() => {
//     if (!marketOracles || isPreviousData) return [];
//     return unique(
//       Object.values(marketOracles).flatMap((p) => p.providerAddress)
//     );
//   }, [marketOracles, isPreviousData]);

//   useEffect(() => {
//     if (!oracleProviders.length) return;
//     const unwatchFns = oracleProviders.map((a) => {
//       return [
//         wsClient.watchContractEvent({
//           address: a,
//           abi: PythOracleAbi,
//           eventName: "OracleProviderVersionRequested",
//           onLogs: () => refresh(),
//         }),

//         wsClient.watchContractEvent({
//           address: a,
//           abi: PythOracleAbi,
//           eventName: "OracleProviderVersionFulfilled",
//           onLogs: () => refresh(),
//         }),
//       ];
//     });
//     return () => unwatchFns.flat().forEach((unwatch) => unwatch());
//   }, [oracleProviders, refresh, wsClient]);
// };
