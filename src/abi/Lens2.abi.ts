export const Lens2Abi = [
  {
    inputs: [
      {
        internalType: "contract IKeeperFactory",
        name: "keeperFactory",
        type: "address",
      },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "bytes32[]", name: "ids", type: "bytes32[]" },
      { internalType: "uint256", name: "version", type: "uint256" },
      { internalType: "bytes", name: "updateData", type: "bytes" },
    ],
    name: "commit",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IKeeperFactory",
            name: "keeperFactory",
            type: "address",
          },
          { internalType: "uint256", name: "value", type: "uint256" },
          { internalType: "bytes32[]", name: "ids", type: "bytes32[]" },
          { internalType: "uint256", name: "version", type: "uint256" },
          { internalType: "bytes", name: "updateData", type: "bytes" },
        ],
        internalType: "struct PriceCommitData[]",
        name: "commits",
        type: "tuple[]",
      },
      {
        internalType: "contract IMarket[]",
        name: "markets",
        type: "address[]",
      },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "snapshot",
    outputs: [
      {
        components: [
          {
            internalType: "bytes[]",
            name: "commitmentStatus",
            type: "bytes[]",
          },
          { internalType: "bytes[]", name: "updateStatus", type: "bytes[]" },
          {
            components: [
              {
                components: [
                  {
                    internalType: "contract IMarket",
                    name: "market",
                    type: "address",
                  },
                  {
                    components: [
                      {
                        internalType: "UFixed6",
                        name: "fundingFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "interestFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "positionFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "oracleFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "riskFee",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "maxPendingGlobal",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "maxPendingLocal",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "makerRewardRate",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "longRewardRate",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "shortRewardRate",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "settlementFee",
                        type: "uint256",
                      },
                      {
                        internalType: "bool",
                        name: "takerCloseAlways",
                        type: "bool",
                      },
                      {
                        internalType: "bool",
                        name: "makerCloseAlways",
                        type: "bool",
                      },
                      { internalType: "bool", name: "closed", type: "bool" },
                    ],
                    internalType: "struct MarketParameter",
                    name: "parameter",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "UFixed6",
                        name: "margin",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maintenance",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "takerFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "takerSkewFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "takerImpactFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "makerFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "makerImpactFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "makerLimit",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "efficiencyLimit",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "liquidationFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "minLiquidationFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maxLiquidationFee",
                        type: "uint256",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "minRate",
                            type: "uint256",
                          },
                          {
                            internalType: "UFixed6",
                            name: "maxRate",
                            type: "uint256",
                          },
                          {
                            internalType: "UFixed6",
                            name: "targetRate",
                            type: "uint256",
                          },
                          {
                            internalType: "UFixed6",
                            name: "targetUtilization",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UJumpRateUtilizationCurve6",
                        name: "utilizationCurve",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "k",
                            type: "uint256",
                          },
                          {
                            internalType: "UFixed6",
                            name: "max",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct PController6",
                        name: "pController",
                        type: "tuple",
                      },
                      {
                        internalType: "UFixed6",
                        name: "minMargin",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "minMaintenance",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "virtualTaker",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "staleAfter",
                        type: "uint256",
                      },
                      {
                        internalType: "bool",
                        name: "makerReceiveOnly",
                        type: "bool",
                      },
                    ],
                    internalType: "struct RiskParameter",
                    name: "riskParameter",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "currentId",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "latestId",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "protocolFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "oracleFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "riskFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "donation",
                        type: "uint256",
                      },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "_skew",
                            type: "int256",
                          },
                        ],
                        internalType: "struct PAccumulator6",
                        name: "pAccumulator",
                        type: "tuple",
                      },
                      {
                        internalType: "Fixed6",
                        name: "latestPrice",
                        type: "int256",
                      },
                    ],
                    internalType: "struct Global",
                    name: "global",
                    type: "tuple",
                  },
                  { internalType: "address", name: "oracle", type: "address" },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position",
                    name: "position",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position",
                    name: "nextPosition",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position[]",
                    name: "pendingPositions",
                    type: "tuple[]",
                  },
                  {
                    components: [
                      { internalType: "bool", name: "valid", type: "bool" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "makerValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "longValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "shortValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "makerReward",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "longReward",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "shortReward",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Version[]",
                    name: "versions",
                    type: "tuple[]",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      { internalType: "Fixed6", name: "price", type: "int256" },
                      { internalType: "bool", name: "valid", type: "bool" },
                    ],
                    internalType: "struct OracleVersion",
                    name: "latestOracleVersion",
                    type: "tuple",
                  },
                  {
                    internalType: "uint256",
                    name: "currentOracleVersion",
                    type: "uint256",
                  },
                ],
                internalType: "struct Lens.MarketSnapshot[]",
                name: "marketSnapshots",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "contract IMarket",
                    name: "market",
                    type: "address",
                  },
                  { internalType: "address", name: "account", type: "address" },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "currentId",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "latestId",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "reward",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "protection",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct Local",
                    name: "local",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position",
                    name: "position",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position",
                    name: "nextPosition",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position[]",
                    name: "pendingPositions",
                    type: "tuple[]",
                  },
                  {
                    components: [
                      { internalType: "bool", name: "valid", type: "bool" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "makerValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "longValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "shortValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "makerReward",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "longReward",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "shortReward",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Version[]",
                    name: "versions",
                    type: "tuple[]",
                  },
                  {
                    internalType: "Fixed6[]",
                    name: "prices",
                    type: "int256[]",
                  },
                ],
                internalType: "struct Lens.MarketAccountSnapshot[]",
                name: "marketAccountSnapshots",
                type: "tuple[]",
              },
            ],
            internalType: "struct Lens.SnapshotResult",
            name: "preUpdate",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "contract IMarket",
                    name: "market",
                    type: "address",
                  },
                  {
                    components: [
                      {
                        internalType: "UFixed6",
                        name: "fundingFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "interestFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "positionFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "oracleFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "riskFee",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "maxPendingGlobal",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "maxPendingLocal",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "makerRewardRate",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "longRewardRate",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "shortRewardRate",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "settlementFee",
                        type: "uint256",
                      },
                      {
                        internalType: "bool",
                        name: "takerCloseAlways",
                        type: "bool",
                      },
                      {
                        internalType: "bool",
                        name: "makerCloseAlways",
                        type: "bool",
                      },
                      { internalType: "bool", name: "closed", type: "bool" },
                    ],
                    internalType: "struct MarketParameter",
                    name: "parameter",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "UFixed6",
                        name: "margin",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maintenance",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "takerFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "takerSkewFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "takerImpactFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "makerFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "makerImpactFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "makerLimit",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "efficiencyLimit",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "liquidationFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "minLiquidationFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maxLiquidationFee",
                        type: "uint256",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "minRate",
                            type: "uint256",
                          },
                          {
                            internalType: "UFixed6",
                            name: "maxRate",
                            type: "uint256",
                          },
                          {
                            internalType: "UFixed6",
                            name: "targetRate",
                            type: "uint256",
                          },
                          {
                            internalType: "UFixed6",
                            name: "targetUtilization",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UJumpRateUtilizationCurve6",
                        name: "utilizationCurve",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "k",
                            type: "uint256",
                          },
                          {
                            internalType: "UFixed6",
                            name: "max",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct PController6",
                        name: "pController",
                        type: "tuple",
                      },
                      {
                        internalType: "UFixed6",
                        name: "minMargin",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "minMaintenance",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "virtualTaker",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "staleAfter",
                        type: "uint256",
                      },
                      {
                        internalType: "bool",
                        name: "makerReceiveOnly",
                        type: "bool",
                      },
                    ],
                    internalType: "struct RiskParameter",
                    name: "riskParameter",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "currentId",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "latestId",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "protocolFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "oracleFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "riskFee",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "donation",
                        type: "uint256",
                      },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "_skew",
                            type: "int256",
                          },
                        ],
                        internalType: "struct PAccumulator6",
                        name: "pAccumulator",
                        type: "tuple",
                      },
                      {
                        internalType: "Fixed6",
                        name: "latestPrice",
                        type: "int256",
                      },
                    ],
                    internalType: "struct Global",
                    name: "global",
                    type: "tuple",
                  },
                  { internalType: "address", name: "oracle", type: "address" },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position",
                    name: "position",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position",
                    name: "nextPosition",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position[]",
                    name: "pendingPositions",
                    type: "tuple[]",
                  },
                  {
                    components: [
                      { internalType: "bool", name: "valid", type: "bool" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "makerValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "longValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "shortValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "makerReward",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "longReward",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "shortReward",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Version[]",
                    name: "versions",
                    type: "tuple[]",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      { internalType: "Fixed6", name: "price", type: "int256" },
                      { internalType: "bool", name: "valid", type: "bool" },
                    ],
                    internalType: "struct OracleVersion",
                    name: "latestOracleVersion",
                    type: "tuple",
                  },
                  {
                    internalType: "uint256",
                    name: "currentOracleVersion",
                    type: "uint256",
                  },
                ],
                internalType: "struct Lens.MarketSnapshot[]",
                name: "marketSnapshots",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "contract IMarket",
                    name: "market",
                    type: "address",
                  },
                  { internalType: "address", name: "account", type: "address" },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "currentId",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "latestId",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "reward",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "protection",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct Local",
                    name: "local",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position",
                    name: "position",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position",
                    name: "nextPosition",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "maker",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "long",
                        type: "uint256",
                      },
                      {
                        internalType: "UFixed6",
                        name: "short",
                        type: "uint256",
                      },
                      { internalType: "UFixed6", name: "fee", type: "uint256" },
                      {
                        internalType: "UFixed6",
                        name: "keeper",
                        type: "uint256",
                      },
                      {
                        internalType: "Fixed6",
                        name: "collateral",
                        type: "int256",
                      },
                      { internalType: "Fixed6", name: "delta", type: "int256" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "maker",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "long",
                            type: "int256",
                          },
                          {
                            internalType: "Fixed6",
                            name: "short",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Invalidation",
                        name: "invalidation",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Position[]",
                    name: "pendingPositions",
                    type: "tuple[]",
                  },
                  {
                    components: [
                      { internalType: "bool", name: "valid", type: "bool" },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "makerValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "longValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "Fixed6",
                            name: "_value",
                            type: "int256",
                          },
                        ],
                        internalType: "struct Accumulator6",
                        name: "shortValue",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "makerReward",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "longReward",
                        type: "tuple",
                      },
                      {
                        components: [
                          {
                            internalType: "UFixed6",
                            name: "_value",
                            type: "uint256",
                          },
                        ],
                        internalType: "struct UAccumulator6",
                        name: "shortReward",
                        type: "tuple",
                      },
                    ],
                    internalType: "struct Version[]",
                    name: "versions",
                    type: "tuple[]",
                  },
                  {
                    internalType: "Fixed6[]",
                    name: "prices",
                    type: "int256[]",
                  },
                ],
                internalType: "struct Lens.MarketAccountSnapshot[]",
                name: "marketAccountSnapshots",
                type: "tuple[]",
              },
            ],
            internalType: "struct Lens.SnapshotResult",
            name: "postUpdate",
            type: "tuple",
          },
        ],
        internalType: "struct Lens.SnapshotReturnValue",
        name: "result",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IMarket", name: "market", type: "address" },
    ],
    name: "snapshotMarket",
    outputs: [
      {
        components: [
          { internalType: "contract IMarket", name: "market", type: "address" },
          {
            components: [
              { internalType: "UFixed6", name: "fundingFee", type: "uint256" },
              { internalType: "UFixed6", name: "interestFee", type: "uint256" },
              { internalType: "UFixed6", name: "positionFee", type: "uint256" },
              { internalType: "UFixed6", name: "oracleFee", type: "uint256" },
              { internalType: "UFixed6", name: "riskFee", type: "uint256" },
              {
                internalType: "uint256",
                name: "maxPendingGlobal",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxPendingLocal",
                type: "uint256",
              },
              {
                internalType: "UFixed6",
                name: "makerRewardRate",
                type: "uint256",
              },
              {
                internalType: "UFixed6",
                name: "longRewardRate",
                type: "uint256",
              },
              {
                internalType: "UFixed6",
                name: "shortRewardRate",
                type: "uint256",
              },
              {
                internalType: "UFixed6",
                name: "settlementFee",
                type: "uint256",
              },
              { internalType: "bool", name: "takerCloseAlways", type: "bool" },
              { internalType: "bool", name: "makerCloseAlways", type: "bool" },
              { internalType: "bool", name: "closed", type: "bool" },
            ],
            internalType: "struct MarketParameter",
            name: "parameter",
            type: "tuple",
          },
          {
            components: [
              { internalType: "UFixed6", name: "margin", type: "uint256" },
              { internalType: "UFixed6", name: "maintenance", type: "uint256" },
              { internalType: "UFixed6", name: "takerFee", type: "uint256" },
              {
                internalType: "UFixed6",
                name: "takerSkewFee",
                type: "uint256",
              },
              {
                internalType: "UFixed6",
                name: "takerImpactFee",
                type: "uint256",
              },
              { internalType: "UFixed6", name: "makerFee", type: "uint256" },
              {
                internalType: "UFixed6",
                name: "makerImpactFee",
                type: "uint256",
              },
              { internalType: "UFixed6", name: "makerLimit", type: "uint256" },
              {
                internalType: "UFixed6",
                name: "efficiencyLimit",
                type: "uint256",
              },
              {
                internalType: "UFixed6",
                name: "liquidationFee",
                type: "uint256",
              },
              {
                internalType: "UFixed6",
                name: "minLiquidationFee",
                type: "uint256",
              },
              {
                internalType: "UFixed6",
                name: "maxLiquidationFee",
                type: "uint256",
              },
              {
                components: [
                  { internalType: "UFixed6", name: "minRate", type: "uint256" },
                  { internalType: "UFixed6", name: "maxRate", type: "uint256" },
                  {
                    internalType: "UFixed6",
                    name: "targetRate",
                    type: "uint256",
                  },
                  {
                    internalType: "UFixed6",
                    name: "targetUtilization",
                    type: "uint256",
                  },
                ],
                internalType: "struct UJumpRateUtilizationCurve6",
                name: "utilizationCurve",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "UFixed6", name: "k", type: "uint256" },
                  { internalType: "UFixed6", name: "max", type: "uint256" },
                ],
                internalType: "struct PController6",
                name: "pController",
                type: "tuple",
              },
              { internalType: "UFixed6", name: "minMargin", type: "uint256" },
              {
                internalType: "UFixed6",
                name: "minMaintenance",
                type: "uint256",
              },
              {
                internalType: "UFixed6",
                name: "virtualTaker",
                type: "uint256",
              },
              { internalType: "uint256", name: "staleAfter", type: "uint256" },
              { internalType: "bool", name: "makerReceiveOnly", type: "bool" },
            ],
            internalType: "struct RiskParameter",
            name: "riskParameter",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256", name: "currentId", type: "uint256" },
              { internalType: "uint256", name: "latestId", type: "uint256" },
              { internalType: "UFixed6", name: "protocolFee", type: "uint256" },
              { internalType: "UFixed6", name: "oracleFee", type: "uint256" },
              { internalType: "UFixed6", name: "riskFee", type: "uint256" },
              { internalType: "UFixed6", name: "donation", type: "uint256" },
              {
                components: [
                  { internalType: "Fixed6", name: "_value", type: "int256" },
                  { internalType: "Fixed6", name: "_skew", type: "int256" },
                ],
                internalType: "struct PAccumulator6",
                name: "pAccumulator",
                type: "tuple",
              },
              { internalType: "Fixed6", name: "latestPrice", type: "int256" },
            ],
            internalType: "struct Global",
            name: "global",
            type: "tuple",
          },
          { internalType: "address", name: "oracle", type: "address" },
          {
            components: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
              { internalType: "UFixed6", name: "maker", type: "uint256" },
              { internalType: "UFixed6", name: "long", type: "uint256" },
              { internalType: "UFixed6", name: "short", type: "uint256" },
              { internalType: "UFixed6", name: "fee", type: "uint256" },
              { internalType: "UFixed6", name: "keeper", type: "uint256" },
              { internalType: "Fixed6", name: "collateral", type: "int256" },
              { internalType: "Fixed6", name: "delta", type: "int256" },
              {
                components: [
                  { internalType: "Fixed6", name: "maker", type: "int256" },
                  { internalType: "Fixed6", name: "long", type: "int256" },
                  { internalType: "Fixed6", name: "short", type: "int256" },
                ],
                internalType: "struct Invalidation",
                name: "invalidation",
                type: "tuple",
              },
            ],
            internalType: "struct Position",
            name: "position",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
              { internalType: "UFixed6", name: "maker", type: "uint256" },
              { internalType: "UFixed6", name: "long", type: "uint256" },
              { internalType: "UFixed6", name: "short", type: "uint256" },
              { internalType: "UFixed6", name: "fee", type: "uint256" },
              { internalType: "UFixed6", name: "keeper", type: "uint256" },
              { internalType: "Fixed6", name: "collateral", type: "int256" },
              { internalType: "Fixed6", name: "delta", type: "int256" },
              {
                components: [
                  { internalType: "Fixed6", name: "maker", type: "int256" },
                  { internalType: "Fixed6", name: "long", type: "int256" },
                  { internalType: "Fixed6", name: "short", type: "int256" },
                ],
                internalType: "struct Invalidation",
                name: "invalidation",
                type: "tuple",
              },
            ],
            internalType: "struct Position",
            name: "nextPosition",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
              { internalType: "UFixed6", name: "maker", type: "uint256" },
              { internalType: "UFixed6", name: "long", type: "uint256" },
              { internalType: "UFixed6", name: "short", type: "uint256" },
              { internalType: "UFixed6", name: "fee", type: "uint256" },
              { internalType: "UFixed6", name: "keeper", type: "uint256" },
              { internalType: "Fixed6", name: "collateral", type: "int256" },
              { internalType: "Fixed6", name: "delta", type: "int256" },
              {
                components: [
                  { internalType: "Fixed6", name: "maker", type: "int256" },
                  { internalType: "Fixed6", name: "long", type: "int256" },
                  { internalType: "Fixed6", name: "short", type: "int256" },
                ],
                internalType: "struct Invalidation",
                name: "invalidation",
                type: "tuple",
              },
            ],
            internalType: "struct Position[]",
            name: "pendingPositions",
            type: "tuple[]",
          },
          {
            components: [
              { internalType: "bool", name: "valid", type: "bool" },
              {
                components: [
                  { internalType: "Fixed6", name: "_value", type: "int256" },
                ],
                internalType: "struct Accumulator6",
                name: "makerValue",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "Fixed6", name: "_value", type: "int256" },
                ],
                internalType: "struct Accumulator6",
                name: "longValue",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "Fixed6", name: "_value", type: "int256" },
                ],
                internalType: "struct Accumulator6",
                name: "shortValue",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "UFixed6", name: "_value", type: "uint256" },
                ],
                internalType: "struct UAccumulator6",
                name: "makerReward",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "UFixed6", name: "_value", type: "uint256" },
                ],
                internalType: "struct UAccumulator6",
                name: "longReward",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "UFixed6", name: "_value", type: "uint256" },
                ],
                internalType: "struct UAccumulator6",
                name: "shortReward",
                type: "tuple",
              },
            ],
            internalType: "struct Version[]",
            name: "versions",
            type: "tuple[]",
          },
          {
            components: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
              { internalType: "Fixed6", name: "price", type: "int256" },
              { internalType: "bool", name: "valid", type: "bool" },
            ],
            internalType: "struct OracleVersion",
            name: "latestOracleVersion",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "currentOracleVersion",
            type: "uint256",
          },
        ],
        internalType: "struct Lens.MarketSnapshot",
        name: "marketSnapshot",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IMarket", name: "market", type: "address" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "snapshotMarketAccount",
    outputs: [
      {
        components: [
          { internalType: "contract IMarket", name: "market", type: "address" },
          { internalType: "address", name: "account", type: "address" },
          {
            components: [
              { internalType: "uint256", name: "currentId", type: "uint256" },
              { internalType: "uint256", name: "latestId", type: "uint256" },
              { internalType: "Fixed6", name: "collateral", type: "int256" },
              { internalType: "UFixed6", name: "reward", type: "uint256" },
              { internalType: "uint256", name: "protection", type: "uint256" },
            ],
            internalType: "struct Local",
            name: "local",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
              { internalType: "UFixed6", name: "maker", type: "uint256" },
              { internalType: "UFixed6", name: "long", type: "uint256" },
              { internalType: "UFixed6", name: "short", type: "uint256" },
              { internalType: "UFixed6", name: "fee", type: "uint256" },
              { internalType: "UFixed6", name: "keeper", type: "uint256" },
              { internalType: "Fixed6", name: "collateral", type: "int256" },
              { internalType: "Fixed6", name: "delta", type: "int256" },
              {
                components: [
                  { internalType: "Fixed6", name: "maker", type: "int256" },
                  { internalType: "Fixed6", name: "long", type: "int256" },
                  { internalType: "Fixed6", name: "short", type: "int256" },
                ],
                internalType: "struct Invalidation",
                name: "invalidation",
                type: "tuple",
              },
            ],
            internalType: "struct Position",
            name: "position",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
              { internalType: "UFixed6", name: "maker", type: "uint256" },
              { internalType: "UFixed6", name: "long", type: "uint256" },
              { internalType: "UFixed6", name: "short", type: "uint256" },
              { internalType: "UFixed6", name: "fee", type: "uint256" },
              { internalType: "UFixed6", name: "keeper", type: "uint256" },
              { internalType: "Fixed6", name: "collateral", type: "int256" },
              { internalType: "Fixed6", name: "delta", type: "int256" },
              {
                components: [
                  { internalType: "Fixed6", name: "maker", type: "int256" },
                  { internalType: "Fixed6", name: "long", type: "int256" },
                  { internalType: "Fixed6", name: "short", type: "int256" },
                ],
                internalType: "struct Invalidation",
                name: "invalidation",
                type: "tuple",
              },
            ],
            internalType: "struct Position",
            name: "nextPosition",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256", name: "timestamp", type: "uint256" },
              { internalType: "UFixed6", name: "maker", type: "uint256" },
              { internalType: "UFixed6", name: "long", type: "uint256" },
              { internalType: "UFixed6", name: "short", type: "uint256" },
              { internalType: "UFixed6", name: "fee", type: "uint256" },
              { internalType: "UFixed6", name: "keeper", type: "uint256" },
              { internalType: "Fixed6", name: "collateral", type: "int256" },
              { internalType: "Fixed6", name: "delta", type: "int256" },
              {
                components: [
                  { internalType: "Fixed6", name: "maker", type: "int256" },
                  { internalType: "Fixed6", name: "long", type: "int256" },
                  { internalType: "Fixed6", name: "short", type: "int256" },
                ],
                internalType: "struct Invalidation",
                name: "invalidation",
                type: "tuple",
              },
            ],
            internalType: "struct Position[]",
            name: "pendingPositions",
            type: "tuple[]",
          },
          {
            components: [
              { internalType: "bool", name: "valid", type: "bool" },
              {
                components: [
                  { internalType: "Fixed6", name: "_value", type: "int256" },
                ],
                internalType: "struct Accumulator6",
                name: "makerValue",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "Fixed6", name: "_value", type: "int256" },
                ],
                internalType: "struct Accumulator6",
                name: "longValue",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "Fixed6", name: "_value", type: "int256" },
                ],
                internalType: "struct Accumulator6",
                name: "shortValue",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "UFixed6", name: "_value", type: "uint256" },
                ],
                internalType: "struct UAccumulator6",
                name: "makerReward",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "UFixed6", name: "_value", type: "uint256" },
                ],
                internalType: "struct UAccumulator6",
                name: "longReward",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "UFixed6", name: "_value", type: "uint256" },
                ],
                internalType: "struct UAccumulator6",
                name: "shortReward",
                type: "tuple",
              },
            ],
            internalType: "struct Version[]",
            name: "versions",
            type: "tuple[]",
          },
          { internalType: "Fixed6[]", name: "prices", type: "int256[]" },
        ],
        internalType: "struct Lens.MarketAccountSnapshot",
        name: "marketAccountSnapshot",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IMarket", name: "market", type: "address" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "updateNoop",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
