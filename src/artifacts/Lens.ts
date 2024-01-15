export const LensArtifact = {
  _format: "hh-sol-artifact-1",
  contractName: "Lens",
  sourceName: "contracts/Lens.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "contract IKeeperFactory",
          name: "keeperFactory",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "bytes32[]",
          name: "ids",
          type: "bytes32[]",
        },
        {
          internalType: "uint256",
          name: "version",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "updateData",
          type: "bytes",
        },
      ],
      name: "commit",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
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
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "bytes32[]",
              name: "ids",
              type: "bytes32[]",
            },
            {
              internalType: "uint256",
              name: "version",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "updateData",
              type: "bytes",
            },
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
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
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
            {
              internalType: "bytes[]",
              name: "updateStatus",
              type: "bytes[]",
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
                        {
                          internalType: "bool",
                          name: "closed",
                          type: "bool",
                        },
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
                    {
                      internalType: "address",
                      name: "oracle",
                      type: "address",
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
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
                        {
                          internalType: "Fixed6",
                          name: "price",
                          type: "int256",
                        },
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
                        },
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
                    {
                      internalType: "address",
                      name: "account",
                      type: "address",
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
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
                        {
                          internalType: "bool",
                          name: "closed",
                          type: "bool",
                        },
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
                    {
                      internalType: "address",
                      name: "oracle",
                      type: "address",
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
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
                        {
                          internalType: "Fixed6",
                          name: "price",
                          type: "int256",
                        },
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
                        },
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
                    {
                      internalType: "address",
                      name: "account",
                      type: "address",
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
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
                        {
                          internalType: "Fixed6",
                          name: "delta",
                          type: "int256",
                        },
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
                        {
                          internalType: "bool",
                          name: "valid",
                          type: "bool",
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
        {
          internalType: "contract IMarket",
          name: "market",
          type: "address",
        },
      ],
      name: "snapshotMarket",
      outputs: [
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
                {
                  internalType: "bool",
                  name: "closed",
                  type: "bool",
                },
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
            {
              internalType: "address",
              name: "oracle",
              type: "address",
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
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
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
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
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
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
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
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
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
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
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
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
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
                {
                  internalType: "bool",
                  name: "valid",
                  type: "bool",
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
                {
                  internalType: "Fixed6",
                  name: "price",
                  type: "int256",
                },
                {
                  internalType: "bool",
                  name: "valid",
                  type: "bool",
                },
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
        {
          internalType: "contract IMarket",
          name: "market",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "snapshotMarketAccount",
      outputs: [
        {
          components: [
            {
              internalType: "contract IMarket",
              name: "market",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
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
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
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
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
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
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
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
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
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
                {
                  internalType: "Fixed6",
                  name: "delta",
                  type: "int256",
                },
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
                {
                  internalType: "bool",
                  name: "valid",
                  type: "bool",
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
        {
          internalType: "contract IMarket",
          name: "market",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "updateNoop",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x608060405234801561001057600080fd5b50614404806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630fb647f21461005c578063558484641461008c5780636eb79f6a146100bc5780637987bd7f146100ec578063a05a212e1461011c575b600080fd5b61007660048036038101906100719190612132565b61014c565b6040516100839190613076565b60405180910390f35b6100a660048036038101906100a19190613098565b610636565b6040516100b39190613122565b60405180910390f35b6100d660048036038101906100d19190613144565b61073f565b6040516100e3919061326d565b60405180910390f35b61010660048036038101906101019190613098565b610e87565b6040516101139190613351565b60405180910390f35b61013660048036038101906101319190613373565b611598565b6040516101439190613122565b60405180910390f35b6101546116d3565b6000835167ffffffffffffffff81111561017157610170611b82565b5b6040519080825280602002602001820160405280156101aa57816020015b610197611707565b81526020019060019003908161018f5790505b5090506000845167ffffffffffffffff8111156101ca576101c9611b82565b5b60405190808252806020026020018201604052801561020357816020015b6101f06117b1565b8152602001906001900390816101e85790505b50905060005b85518110156102a85761023586828151811061022857610227613426565b5b602002602001015161073f565b83828151811061024857610247613426565b5b602002602001018190525061027786828151811061026957610268613426565b5b602002602001015186610e87565b82828151811061028a57610289613426565b5b602002602001018190525080806102a090613484565b915050610209565b508183604001516000018190525080836040015160200181905250855167ffffffffffffffff8111156102de576102dd611b82565b5b60405190808252806020026020018201604052801561031157816020015b60608152602001906001900390816102fc5790505b50836000018190525060005b86518110156103fe576103c987828151811061033c5761033b613426565b5b60200260200101516000015188838151811061035b5761035a613426565b5b60200260200101516020015189848151811061037a57610379613426565b5b6020026020010151604001518a858151811061039957610398613426565b5b6020026020010151606001518b86815181106103b8576103b7613426565b5b602002602001015160800151611598565b846000015182815181106103e0576103df613426565b5b602002602001018190525080806103f690613484565b91505061031d565b50845167ffffffffffffffff81111561041a57610419611b82565b5b60405190808252806020026020018201604052801561044d57816020015b60608152602001906001900390816104385790505b50836020018190525060005b85518110156104bb5761048686828151811061047857610477613426565b5b602002602001015186610636565b8460200151828151811061049d5761049c613426565b5b602002602001018190525080806104b390613484565b915050610459565b506000855167ffffffffffffffff8111156104d9576104d8611b82565b5b60405190808252806020026020018201604052801561051257816020015b6104ff611707565b8152602001906001900390816104f75790505b5090506000865167ffffffffffffffff81111561053257610531611b82565b5b60405190808252806020026020018201604052801561056b57816020015b6105586117b1565b8152602001906001900390816105505790505b50905060005b87518110156106105761059d8882815181106105905761058f613426565b5b602002602001015161073f565b8382815181106105b0576105af613426565b5b60200260200101819052506105df8882815181106105d1576105d0613426565b5b602002602001015188610e87565b8282815181106105f2576105f1613426565b5b6020026020010181905250808061060890613484565b915050610571565b508185606001516000018190525080856060015160200181905250505050509392505050565b60608273ffffffffffffffffffffffffffffffffffffffff166391eece28837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6000806040518763ffffffff1660e01b81526004016106bc96959493929190613508565b600060405180830381600087803b1580156106d657600080fd5b505af19250505080156106e7575060015b610726573d8060008114610717576040519150601f19603f3d011682016040523d82523d6000602084013e61071c565b606091505b5080915050610739565b6040518060200160405280600081525090505b92915050565b610747611707565b81816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1663ad4d4e296040518163ffffffff1660e01b81526004016101c060405180830381865afa1580156107cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ef9190613724565b81602001819052508173ffffffffffffffffffffffffffffffffffffffff16634549a6296040518163ffffffff1660e01b81526004016102e060405180830381865afa158015610843573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086791906139d6565b81604001819052508173ffffffffffffffffffffffffffffffffffffffff1663a05f99066040518163ffffffff1660e01b815260040161012060405180830381865afa1580156108bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108df9190613b4b565b81606001819052508173ffffffffffffffffffffffffffffffffffffffff166309218e916040518163ffffffff1660e01b815260040161016060405180830381865afa158015610933573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109579190613cbd565b8160a00181905250600181606001516020015182606001516000015161097d9190613ceb565b6109879190613d1f565b67ffffffffffffffff8111156109a05761099f611b82565b5b6040519080825280602002602001820160405280156109d957816020015b6109c6611834565b8152602001906001900390816109be5790505b508160e001819052508060e001515167ffffffffffffffff811115610a0157610a00611b82565b5b604051908082528060200260200182016040528015610a3a57816020015b610a27611886565b815260200190600190039081610a1f5790505b508161010001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab39190613d91565b816080019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060005b8160e0015151811015610c7c578273ffffffffffffffffffffffffffffffffffffffff1663a1d0a11382846060015160200151610b2a9190613d1f565b6040518263ffffffff1660e01b8152600401610b469190613dcd565b61016060405180830381865afa158015610b64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b889190613cbd565b8260e001518281518110610b9f57610b9e613426565b5b60200260200101819052508273ffffffffffffffffffffffffffffffffffffffff166387aee00e8360e001518381518110610bdd57610bdc613426565b5b6020026020010151600001516040518263ffffffff1660e01b8152600401610c059190613dcd565b60e060405180830381865afa158015610c22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c469190613f14565b8261010001518281518110610c5e57610c5d613426565b5b60200260200101819052508080610c7490613484565b915050610aed565b508060e0015160018260e0015151610c949190613ceb565b81518110610ca557610ca4613426565b5b60200260200101518160c001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d249190613d91565b73ffffffffffffffffffffffffffffffffffffffff166352bfe7896040518163ffffffff1660e01b8152600401606060405180830381865afa158015610d6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d929190613fa5565b8161012001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a9190613d91565b73ffffffffffffffffffffffffffffffffffffffff16639fa6a6e36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e789190613fd2565b81610140018181525050919050565b610e8f6117b1565b82816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff16635b4b9695836040518263ffffffff1660e01b8152600401610f389190613fff565b60a060405180830381865afa158015610f55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7991906140a6565b81604001819052508273ffffffffffffffffffffffffffffffffffffffff166355f57510836040518263ffffffff1660e01b8152600401610fba9190613fff565b61016060405180830381865afa158015610fd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffc9190613cbd565b816060018190525060018160400151602001518260400151600001516110229190613ceb565b61102c9190613d1f565b67ffffffffffffffff81111561104557611044611b82565b5b60405190808252806020026020018201604052801561107e57816020015b61106b611834565b8152602001906001900390816110635790505b508160a001819052508060a001515167ffffffffffffffff8111156110a6576110a5611b82565b5b6040519080825280602002602001820160405280156110df57816020015b6110cc611886565b8152602001906001900390816110c45790505b508160c001819052508060a001515167ffffffffffffffff81111561110757611106611b82565b5b6040519080825280602002602001820160405280156111355781602001602082028036833780820191505090505b508160e0018190525060008373ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa15801561118b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111af9190613d91565b905060008473ffffffffffffffffffffffffffffffffffffffff166395fcd8366040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112229190614111565b905060005b8360a0015151811015611557578573ffffffffffffffffffffffffffffffffffffffff1663ce813aed86838760400151602001516112659190613d1f565b6040518363ffffffff1660e01b815260040161128292919061413e565b61016060405180830381865afa1580156112a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c49190613cbd565b8460a0015182815181106112db576112da613426565b5b60200260200101819052508573ffffffffffffffffffffffffffffffffffffffff166387aee00e8560a00151838151811061131957611318613426565b5b6020026020010151600001516040518263ffffffff1660e01b81526004016113419190613dcd565b60e060405180830381865afa15801561135e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113829190613f14565b8460c00151828151811061139957611398613426565b5b602002602001018190525060008373ffffffffffffffffffffffffffffffffffffffff1663e0886f908660a0015184815181106113d9576113d8613426565b5b6020026020010151600001516040518263ffffffff1660e01b81526004016114019190613dcd565b606060405180830381865afa15801561141e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114429190613fa5565b602001519050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036114a557808560e00151838151811061149457611493613426565b5b602002602001018181525050611543565b8273ffffffffffffffffffffffffffffffffffffffff1663d7c7a935826040518263ffffffff1660e01b81526004016114de9190614167565b602060405180830381865afa1580156114fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151f9190614182565b8560e00151838151811061153657611535613426565b5b6020026020010181815250505b50808061154f90613484565b915050611227565b508260a0015160018460a001515161156f9190613ceb565b815181106115805761157f613426565b5b60200260200101518360800181905250505092915050565b60608573ffffffffffffffffffffffffffffffffffffffff16631e298b90868686866040518563ffffffff1660e01b81526004016115d89392919061426d565b6000604051808303818588803b1580156115f157600080fd5b505af193505050508015611603575060015b6116b75761160f6142bf565b806308c379a00361163757506116236142e1565b8061162e575061167c565b809150506116ca565b634e487b710361167c57611649614371565b90611654575061167c565b8060405160200161166591906143b3565b6040516020818303038152906040529150506116ca565b3d80600081146116a8576040519150601f19603f3d011682016040523d82523d6000602084013e6116ad565b606091505b50809150506116ca565b6040518060200160405280600081525090505b95945050505050565b604051806080016040528060608152602001606081526020016116f46118e9565b81526020016117016118e9565b81525090565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611738611903565b8152602001611745611978565b8152602001611752611a18565b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161177c611834565b8152602001611789611834565b815260200160608152602001606081526020016117a4611a63565b8152602001600081525090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016117ff611a86565b815260200161180c611834565b8152602001611819611834565b81526020016060815260200160608152602001606081525090565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611880611ab5565b81525090565b6040518060e001604052806000151581526020016118a2611ad6565b81526020016118af611ad6565b81526020016118bc611ad6565b81526020016118c9611ae9565b81526020016118d6611ae9565b81526020016118e3611ae9565b81525090565b604051806040016040528060608152602001606081525090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581525090565b6040518061026001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016119e0611afc565b81526020016119ed611b24565b8152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611a56611b3e565b8152602001600081525090565b604051806060016040528060008152602001600081526020016000151581525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6040518060200160405280600081525090565b6040518060200160405280600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611bba82611b71565b810181811067ffffffffffffffff82111715611bd957611bd8611b82565b5b80604052505050565b6000611bec611b58565b9050611bf88282611bb1565b919050565b600067ffffffffffffffff821115611c1857611c17611b82565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c6382611c38565b9050919050565b6000611c7582611c58565b9050919050565b611c8581611c6a565b8114611c9057600080fd5b50565b600081359050611ca281611c7c565b92915050565b6000819050919050565b611cbb81611ca8565b8114611cc657600080fd5b50565b600081359050611cd881611cb2565b92915050565b600067ffffffffffffffff821115611cf957611cf8611b82565b5b602082029050602081019050919050565b6000819050919050565b611d1d81611d0a565b8114611d2857600080fd5b50565b600081359050611d3a81611d14565b92915050565b6000611d53611d4e84611cde565b611be2565b90508083825260208201905060208402830185811115611d7657611d75611c29565b5b835b81811015611d9f5780611d8b8882611d2b565b845260208401935050602081019050611d78565b5050509392505050565b600082601f830112611dbe57611dbd611b6c565b5b8135611dce848260208601611d40565b91505092915050565b600080fd5b600067ffffffffffffffff821115611df757611df6611b82565b5b611e0082611b71565b9050602081019050919050565b82818337600083830152505050565b6000611e2f611e2a84611ddc565b611be2565b905082815260208101848484011115611e4b57611e4a611dd7565b5b611e56848285611e0d565b509392505050565b600082601f830112611e7357611e72611b6c565b5b8135611e83848260208601611e1c565b91505092915050565b600060a08284031215611ea257611ea1611c2e565b5b611eac60a0611be2565b90506000611ebc84828501611c93565b6000830152506020611ed084828501611cc9565b602083015250604082013567ffffffffffffffff811115611ef457611ef3611c33565b5b611f0084828501611da9565b6040830152506060611f1484828501611cc9565b606083015250608082013567ffffffffffffffff811115611f3857611f37611c33565b5b611f4484828501611e5e565b60808301525092915050565b6000611f63611f5e84611bfd565b611be2565b90508083825260208201905060208402830185811115611f8657611f85611c29565b5b835b81811015611fcd57803567ffffffffffffffff811115611fab57611faa611b6c565b5b808601611fb88982611e8c565b85526020850194505050602081019050611f88565b5050509392505050565b600082601f830112611fec57611feb611b6c565b5b8135611ffc848260208601611f50565b91505092915050565b600067ffffffffffffffff8211156120205761201f611b82565b5b602082029050602081019050919050565b600061203c82611c58565b9050919050565b61204c81612031565b811461205757600080fd5b50565b60008135905061206981612043565b92915050565b600061208261207d84612005565b611be2565b905080838252602082019050602084028301858111156120a5576120a4611c29565b5b835b818110156120ce57806120ba888261205a565b8452602084019350506020810190506120a7565b5050509392505050565b600082601f8301126120ed576120ec611b6c565b5b81356120fd84826020860161206f565b91505092915050565b61210f81611c58565b811461211a57600080fd5b50565b60008135905061212c81612106565b92915050565b60008060006060848603121561214b5761214a611b62565b5b600084013567ffffffffffffffff81111561216957612168611b67565b5b61217586828701611fd7565b935050602084013567ffffffffffffffff81111561219657612195611b67565b5b6121a2868287016120d8565b92505060406121b38682870161211d565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612223578082015181840152602081019050612208565b60008484015250505050565b600061223a826121e9565b61224481856121f4565b9350612254818560208601612205565b61225d81611b71565b840191505092915050565b6000612274838361222f565b905092915050565b6000602082019050919050565b6000612294826121bd565b61229e81856121c8565b9350836020820285016122b0856121d9565b8060005b858110156122ec57848403895281516122cd8582612268565b94506122d88361227c565b925060208a019950506001810190506122b4565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b600061234f61234a61234584611c38565b61232a565b611c38565b9050919050565b600061236182612334565b9050919050565b600061237382612356565b9050919050565b61238381612368565b82525050565b60006123a461239f61239a84611ca8565b61232a565b611ca8565b9050919050565b6123b481612389565b82525050565b6123c381611ca8565b82525050565b60008115159050919050565b6123de816123c9565b82525050565b6101c0820160008201516123fb60008501826123ab565b50602082015161240e60208501826123ab565b50604082015161242160408501826123ab565b50606082015161243460608501826123ab565b50608082015161244760808501826123ab565b5060a082015161245a60a08501826123ba565b5060c082015161246d60c08501826123ba565b5060e082015161248060e08501826123ab565b506101008201516124956101008501826123ab565b506101208201516124aa6101208501826123ab565b506101408201516124bf6101408501826123ab565b506101608201516124d46101608501826123d5565b506101808201516124e96101808501826123d5565b506101a08201516124fe6101a08501826123d5565b50505050565b60808201600082015161251a60008501826123ab565b50602082015161252d60208501826123ab565b50604082015161254060408501826123ab565b50606082015161255360608501826123ab565b50505050565b60408201600082015161256f60008501826123ab565b50602082015161258260208501826123ab565b50505050565b6102e08201600082015161259f60008501826123ab565b5060208201516125b260208501826123ab565b5060408201516125c560408501826123ab565b5060608201516125d860608501826123ab565b5060808201516125eb60808501826123ab565b5060a08201516125fe60a08501826123ab565b5060c082015161261160c08501826123ab565b5060e082015161262460e08501826123ab565b506101008201516126396101008501826123ab565b5061012082015161264e6101208501826123ab565b506101408201516126636101408501826123ab565b506101608201516126786101608501826123ab565b5061018082015161268d610180850182612504565b506101a08201516126a2610200850182612559565b506101c08201516126b76102408501826123ab565b506101e08201516126cc6102608501826123ab565b506102008201516126e16102808501826123ab565b506102208201516126f66102a08501826123ba565b5061024082015161270b6102c08501826123d5565b50505050565b6000819050919050565b600061273661273161272c84612711565b61232a565b612711565b9050919050565b6127468161271b565b82525050565b604082016000820151612762600085018261273d565b506020820151612775602085018261273d565b50505050565b6101208201600082015161279260008501826123ba565b5060208201516127a560208501826123ba565b5060408201516127b860408501826123ab565b5060608201516127cb60608501826123ab565b5060808201516127de60808501826123ab565b5060a08201516127f160a08501826123ab565b5060c082015161280460c085018261274c565b5060e082015161281861010085018261273d565b50505050565b61282781611c58565b82525050565b606082016000820151612843600085018261273d565b506020820151612856602085018261273d565b506040820151612869604085018261273d565b50505050565b6101608201600082015161288660008501826123ba565b50602082015161289960208501826123ab565b5060408201516128ac60408501826123ab565b5060608201516128bf60608501826123ab565b5060808201516128d260808501826123ab565b5060a08201516128e560a08501826123ab565b5060c08201516128f860c085018261273d565b5060e082015161290b60e085018261273d565b5061010082015161292061010085018261282d565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061295e838361286f565b6101608301905092915050565b6000602082019050919050565b600061298382612926565b61298d8185612931565b935061299883612942565b8060005b838110156129c95781516129b08882612952565b97506129bb8361296b565b92505060018101905061299c565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b602082016000820151612a18600085018261273d565b50505050565b602082016000820151612a3460008501826123ab565b50505050565b60e082016000820151612a5060008501826123d5565b506020820151612a636020850182612a02565b506040820151612a766040850182612a02565b506060820151612a896060850182612a02565b506080820151612a9c6080850182612a1e565b5060a0820151612aaf60a0850182612a1e565b5060c0820151612ac260c0850182612a1e565b50505050565b6000612ad48383612a3a565b60e08301905092915050565b6000602082019050919050565b6000612af8826129d6565b612b0281856129e1565b9350612b0d836129f2565b8060005b83811015612b3e578151612b258882612ac8565b9750612b3083612ae0565b925050600181019050612b11565b5085935050505092915050565b606082016000820151612b6160008501826123ba565b506020820151612b74602085018261273d565b506040820151612b8760408501826123d5565b50505050565b600061098083016000830151612ba6600086018261237a565b506020830151612bb960208601826123e4565b506040830151612bcd6101e0860182612588565b506060830151612be16104c086018261277b565b506080830151612bf56105e086018261281e565b5060a0830151612c0961060086018261286f565b5060c0830151612c1d61076086018261286f565b5060e08301518482036108c0860152612c368282612978565b9150506101008301518482036108e0860152612c528282612aed565b915050610120830151612c69610900860182612b4b565b50610140830151612c7e6109608601826123ba565b508091505092915050565b6000612c958383612b8d565b905092915050565b6000602082019050919050565b6000612cb5826122fe565b612cbf8185612309565b935083602082028501612cd18561231a565b8060005b85811015612d0d5784840389528151612cee8582612c89565b9450612cf983612c9d565b925060208a01995050600181019050612cd5565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60a082016000820151612d6160008501826123ba565b506020820151612d7460208501826123ba565b506040820151612d87604085018261273d565b506060820151612d9a60608501826123ab565b506080820151612dad60808501826123ba565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612deb838361273d565b60208301905092915050565b6000602082019050919050565b6000612e0f82612db3565b612e198185612dbe565b9350612e2483612dcf565b8060005b83811015612e55578151612e3c8882612ddf565b9750612e4783612df7565b925050600181019050612e28565b5085935050505092915050565b600061040083016000830151612e7b600086018261237a565b506020830151612e8e602086018261281e565b506040830151612ea16040860182612d4b565b506060830151612eb460e086018261286f565b506080830151612ec861024086018261286f565b5060a08301518482036103a0860152612ee18282612978565b91505060c08301518482036103c0860152612efc8282612aed565b91505060e08301518482036103e0860152612f178282612e04565b9150508091505092915050565b6000612f308383612e62565b905092915050565b6000602082019050919050565b6000612f5082612d1f565b612f5a8185612d2a565b935083602082028501612f6c85612d3b565b8060005b85811015612fa85784840389528151612f898582612f24565b9450612f9483612f38565b925060208a01995050600181019050612f70565b50829750879550505050505092915050565b60006040830160008301518482036000860152612fd78282612caa565b91505060208301518482036020860152612ff18282612f45565b9150508091505092915050565b6000608083016000830151848203600086015261301b8282612289565b915050602083015184820360208601526130358282612289565b9150506040830151848203604086015261304f8282612fba565b915050606083015184820360608601526130698282612fba565b9150508091505092915050565b600060208201905081810360008301526130908184612ffe565b905092915050565b600080604083850312156130af576130ae611b62565b5b60006130bd8582860161205a565b92505060206130ce8582860161211d565b9150509250929050565b600082825260208201905092915050565b60006130f4826121e9565b6130fe81856130d8565b935061310e818560208601612205565b61311781611b71565b840191505092915050565b6000602082019050818103600083015261313c81846130e9565b905092915050565b60006020828403121561315a57613159611b62565b5b60006131688482850161205a565b91505092915050565b60006109808301600083015161318a600086018261237a565b50602083015161319d60208601826123e4565b5060408301516131b16101e0860182612588565b5060608301516131c56104c086018261277b565b5060808301516131d96105e086018261281e565b5060a08301516131ed61060086018261286f565b5060c083015161320161076086018261286f565b5060e08301518482036108c086015261321a8282612978565b9150506101008301518482036108e08601526132368282612aed565b91505061012083015161324d610900860182612b4b565b506101408301516132626109608601826123ba565b508091505092915050565b600060208201905081810360008301526132878184613171565b905092915050565b6000610400830160008301516132a8600086018261237a565b5060208301516132bb602086018261281e565b5060408301516132ce6040860182612d4b565b5060608301516132e160e086018261286f565b5060808301516132f561024086018261286f565b5060a08301518482036103a086015261330e8282612978565b91505060c08301518482036103c08601526133298282612aed565b91505060e08301518482036103e08601526133448282612e04565b9150508091505092915050565b6000602082019050818103600083015261336b818461328f565b905092915050565b600080600080600060a0868803121561338f5761338e611b62565b5b600061339d88828901611c93565b95505060206133ae88828901611cc9565b945050604086013567ffffffffffffffff8111156133cf576133ce611b67565b5b6133db88828901611da9565b93505060606133ec88828901611cc9565b925050608086013567ffffffffffffffff81111561340d5761340c611b67565b5b61341988828901611e5e565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061348f82611ca8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036134c1576134c0613455565b5b600182019050919050565b6134d581611c58565b82525050565b6134e481612389565b82525050565b6134f38161271b565b82525050565b613502816123c9565b82525050565b600060c08201905061351d60008301896134cc565b61352a60208301886134db565b61353760408301876134db565b61354460608301866134db565b61355160808301856134ea565b61355e60a08301846134f9565b979650505050505050565b61357281611ca8565b811461357d57600080fd5b50565b60008151905061358f81613569565b92915050565b6000815190506135a481611cb2565b92915050565b6135b3816123c9565b81146135be57600080fd5b50565b6000815190506135d0816135aa565b92915050565b60006101c082840312156135ed576135ec611c2e565b5b6135f86101c0611be2565b9050600061360884828501613580565b600083015250602061361c84828501613580565b602083015250604061363084828501613580565b604083015250606061364484828501613580565b606083015250608061365884828501613580565b60808301525060a061366c84828501613595565b60a08301525060c061368084828501613595565b60c08301525060e061369484828501613580565b60e0830152506101006136a984828501613580565b610100830152506101206136bf84828501613580565b610120830152506101406136d584828501613580565b610140830152506101606136eb848285016135c1565b61016083015250610180613701848285016135c1565b610180830152506101a0613717848285016135c1565b6101a08301525092915050565b60006101c0828403121561373b5761373a611b62565b5b6000613749848285016135d6565b91505092915050565b60006080828403121561376857613767611c2e565b5b6137726080611be2565b9050600061378284828501613580565b600083015250602061379684828501613580565b60208301525060406137aa84828501613580565b60408301525060606137be84828501613580565b60608301525092915050565b6000604082840312156137e0576137df611c2e565b5b6137ea6040611be2565b905060006137fa84828501613580565b600083015250602061380e84828501613580565b60208301525092915050565b60006102e0828403121561383157613830611c2e565b5b61383c610260611be2565b9050600061384c84828501613580565b600083015250602061386084828501613580565b602083015250604061387484828501613580565b604083015250606061388884828501613580565b606083015250608061389c84828501613580565b60808301525060a06138b084828501613580565b60a08301525060c06138c484828501613580565b60c08301525060e06138d884828501613580565b60e0830152506101006138ed84828501613580565b6101008301525061012061390384828501613580565b6101208301525061014061391984828501613580565b6101408301525061016061392f84828501613580565b6101608301525061018061394584828501613752565b6101808301525061020061395b848285016137ca565b6101a08301525061024061397184828501613580565b6101c08301525061026061398784828501613580565b6101e08301525061028061399d84828501613580565b610200830152506102a06139b384828501613595565b610220830152506102c06139c9848285016135c1565b6102408301525092915050565b60006102e082840312156139ed576139ec611b62565b5b60006139fb8482850161381a565b91505092915050565b613a0d81612711565b8114613a1857600080fd5b50565b600081519050613a2a81613a04565b92915050565b600060408284031215613a4657613a45611c2e565b5b613a506040611be2565b90506000613a6084828501613a1b565b6000830152506020613a7484828501613a1b565b60208301525092915050565b60006101208284031215613a9757613a96611c2e565b5b613aa2610100611be2565b90506000613ab284828501613595565b6000830152506020613ac684828501613595565b6020830152506040613ada84828501613580565b6040830152506060613aee84828501613580565b6060830152506080613b0284828501613580565b60808301525060a0613b1684828501613580565b60a08301525060c0613b2a84828501613a30565b60c083015250610100613b3f84828501613a1b565b60e08301525092915050565b60006101208284031215613b6257613b61611b62565b5b6000613b7084828501613a80565b91505092915050565b600060608284031215613b8f57613b8e611c2e565b5b613b996060611be2565b90506000613ba984828501613a1b565b6000830152506020613bbd84828501613a1b565b6020830152506040613bd184828501613a1b565b60408301525092915050565b60006101608284031215613bf457613bf3611c2e565b5b613bff610120611be2565b90506000613c0f84828501613595565b6000830152506020613c2384828501613580565b6020830152506040613c3784828501613580565b6040830152506060613c4b84828501613580565b6060830152506080613c5f84828501613580565b60808301525060a0613c7384828501613580565b60a08301525060c0613c8784828501613a1b565b60c08301525060e0613c9b84828501613a1b565b60e083015250610100613cb084828501613b79565b6101008301525092915050565b60006101608284031215613cd457613cd3611b62565b5b6000613ce284828501613bdd565b91505092915050565b6000613cf682611ca8565b9150613d0183611ca8565b9250828203905081811115613d1957613d18613455565b5b92915050565b6000613d2a82611ca8565b9150613d3583611ca8565b9250828201905080821115613d4d57613d4c613455565b5b92915050565b6000613d5e82611c58565b9050919050565b613d6e81613d53565b8114613d7957600080fd5b50565b600081519050613d8b81613d65565b92915050565b600060208284031215613da757613da6611b62565b5b6000613db584828501613d7c565b91505092915050565b613dc781611ca8565b82525050565b6000602082019050613de26000830184613dbe565b92915050565b600060208284031215613dfe57613dfd611c2e565b5b613e086020611be2565b90506000613e1884828501613a1b565b60008301525092915050565b600060208284031215613e3a57613e39611c2e565b5b613e446020611be2565b90506000613e5484828501613580565b60008301525092915050565b600060e08284031215613e7657613e75611c2e565b5b613e8060e0611be2565b90506000613e90848285016135c1565b6000830152506020613ea484828501613de8565b6020830152506040613eb884828501613de8565b6040830152506060613ecc84828501613de8565b6060830152506080613ee084828501613e24565b60808301525060a0613ef484828501613e24565b60a08301525060c0613f0884828501613e24565b60c08301525092915050565b600060e08284031215613f2a57613f29611b62565b5b6000613f3884828501613e60565b91505092915050565b600060608284031215613f5757613f56611c2e565b5b613f616060611be2565b90506000613f7184828501613595565b6000830152506020613f8584828501613a1b565b6020830152506040613f99848285016135c1565b60408301525092915050565b600060608284031215613fbb57613fba611b62565b5b6000613fc984828501613f41565b91505092915050565b600060208284031215613fe857613fe7611b62565b5b6000613ff684828501613595565b91505092915050565b600060208201905061401460008301846134cc565b92915050565b600060a082840312156140305761402f611c2e565b5b61403a60a0611be2565b9050600061404a84828501613595565b600083015250602061405e84828501613595565b602083015250604061407284828501613a1b565b604083015250606061408684828501613580565b606083015250608061409a84828501613595565b60808301525092915050565b600060a082840312156140bc576140bb611b62565b5b60006140ca8482850161401a565b91505092915050565b60006140de82611c58565b9050919050565b6140ee816140d3565b81146140f957600080fd5b50565b60008151905061410b816140e5565b92915050565b60006020828403121561412757614126611b62565b5b6000614135848285016140fc565b91505092915050565b600060408201905061415360008301856134cc565b6141606020830184613dbe565b9392505050565b600060208201905061417c60008301846134ea565b92915050565b60006020828403121561419857614197611b62565b5b60006141a684828501613a1b565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6141e481611d0a565b82525050565b60006141f683836141db565b60208301905092915050565b6000602082019050919050565b600061421a826141af565b61422481856141ba565b935061422f836141cb565b8060005b8381101561426057815161424788826141ea565b975061425283614202565b925050600181019050614233565b5085935050505092915050565b60006060820190508181036000830152614287818661420f565b90506142966020830185613dbe565b81810360408301526142a881846130e9565b9050949350505050565b60008160e01c9050919050565b600060033d11156142de5760046000803e6142db6000516142b2565b90505b90565b600060443d1061436e576142f3611b58565b60043d036004823e80513d602482011167ffffffffffffffff8211171561431b57505061436e565b808201805167ffffffffffffffff811115614339575050505061436e565b80602083010160043d03850181111561435657505050505061436e565b61436582602001850186611bb1565b82955050505050505b90565b60008060233d111561438e576020600460003e6001915060005190505b9091565b6000819050919050565b6143ad6143a882611ca8565b614392565b82525050565b60006143bf828461439c565b6020820191508190509291505056fea2646970667358221220e9c886d3695226d8c4f1cb6fdb1fc74dc605e11c8b138a5b8b81385fb510ba5c64736f6c63430008130033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80630fb647f21461005c578063558484641461008c5780636eb79f6a146100bc5780637987bd7f146100ec578063a05a212e1461011c575b600080fd5b61007660048036038101906100719190612132565b61014c565b6040516100839190613076565b60405180910390f35b6100a660048036038101906100a19190613098565b610636565b6040516100b39190613122565b60405180910390f35b6100d660048036038101906100d19190613144565b61073f565b6040516100e3919061326d565b60405180910390f35b61010660048036038101906101019190613098565b610e87565b6040516101139190613351565b60405180910390f35b61013660048036038101906101319190613373565b611598565b6040516101439190613122565b60405180910390f35b6101546116d3565b6000835167ffffffffffffffff81111561017157610170611b82565b5b6040519080825280602002602001820160405280156101aa57816020015b610197611707565b81526020019060019003908161018f5790505b5090506000845167ffffffffffffffff8111156101ca576101c9611b82565b5b60405190808252806020026020018201604052801561020357816020015b6101f06117b1565b8152602001906001900390816101e85790505b50905060005b85518110156102a85761023586828151811061022857610227613426565b5b602002602001015161073f565b83828151811061024857610247613426565b5b602002602001018190525061027786828151811061026957610268613426565b5b602002602001015186610e87565b82828151811061028a57610289613426565b5b602002602001018190525080806102a090613484565b915050610209565b508183604001516000018190525080836040015160200181905250855167ffffffffffffffff8111156102de576102dd611b82565b5b60405190808252806020026020018201604052801561031157816020015b60608152602001906001900390816102fc5790505b50836000018190525060005b86518110156103fe576103c987828151811061033c5761033b613426565b5b60200260200101516000015188838151811061035b5761035a613426565b5b60200260200101516020015189848151811061037a57610379613426565b5b6020026020010151604001518a858151811061039957610398613426565b5b6020026020010151606001518b86815181106103b8576103b7613426565b5b602002602001015160800151611598565b846000015182815181106103e0576103df613426565b5b602002602001018190525080806103f690613484565b91505061031d565b50845167ffffffffffffffff81111561041a57610419611b82565b5b60405190808252806020026020018201604052801561044d57816020015b60608152602001906001900390816104385790505b50836020018190525060005b85518110156104bb5761048686828151811061047857610477613426565b5b602002602001015186610636565b8460200151828151811061049d5761049c613426565b5b602002602001018190525080806104b390613484565b915050610459565b506000855167ffffffffffffffff8111156104d9576104d8611b82565b5b60405190808252806020026020018201604052801561051257816020015b6104ff611707565b8152602001906001900390816104f75790505b5090506000865167ffffffffffffffff81111561053257610531611b82565b5b60405190808252806020026020018201604052801561056b57816020015b6105586117b1565b8152602001906001900390816105505790505b50905060005b87518110156106105761059d8882815181106105905761058f613426565b5b602002602001015161073f565b8382815181106105b0576105af613426565b5b60200260200101819052506105df8882815181106105d1576105d0613426565b5b602002602001015188610e87565b8282815181106105f2576105f1613426565b5b6020026020010181905250808061060890613484565b915050610571565b508185606001516000018190525080856060015160200181905250505050509392505050565b60608273ffffffffffffffffffffffffffffffffffffffff166391eece28837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6000806040518763ffffffff1660e01b81526004016106bc96959493929190613508565b600060405180830381600087803b1580156106d657600080fd5b505af19250505080156106e7575060015b610726573d8060008114610717576040519150601f19603f3d011682016040523d82523d6000602084013e61071c565b606091505b5080915050610739565b6040518060200160405280600081525090505b92915050565b610747611707565b81816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1663ad4d4e296040518163ffffffff1660e01b81526004016101c060405180830381865afa1580156107cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ef9190613724565b81602001819052508173ffffffffffffffffffffffffffffffffffffffff16634549a6296040518163ffffffff1660e01b81526004016102e060405180830381865afa158015610843573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086791906139d6565b81604001819052508173ffffffffffffffffffffffffffffffffffffffff1663a05f99066040518163ffffffff1660e01b815260040161012060405180830381865afa1580156108bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108df9190613b4b565b81606001819052508173ffffffffffffffffffffffffffffffffffffffff166309218e916040518163ffffffff1660e01b815260040161016060405180830381865afa158015610933573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109579190613cbd565b8160a00181905250600181606001516020015182606001516000015161097d9190613ceb565b6109879190613d1f565b67ffffffffffffffff8111156109a05761099f611b82565b5b6040519080825280602002602001820160405280156109d957816020015b6109c6611834565b8152602001906001900390816109be5790505b508160e001819052508060e001515167ffffffffffffffff811115610a0157610a00611b82565b5b604051908082528060200260200182016040528015610a3a57816020015b610a27611886565b815260200190600190039081610a1f5790505b508161010001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab39190613d91565b816080019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060005b8160e0015151811015610c7c578273ffffffffffffffffffffffffffffffffffffffff1663a1d0a11382846060015160200151610b2a9190613d1f565b6040518263ffffffff1660e01b8152600401610b469190613dcd565b61016060405180830381865afa158015610b64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b889190613cbd565b8260e001518281518110610b9f57610b9e613426565b5b60200260200101819052508273ffffffffffffffffffffffffffffffffffffffff166387aee00e8360e001518381518110610bdd57610bdc613426565b5b6020026020010151600001516040518263ffffffff1660e01b8152600401610c059190613dcd565b60e060405180830381865afa158015610c22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c469190613f14565b8261010001518281518110610c5e57610c5d613426565b5b60200260200101819052508080610c7490613484565b915050610aed565b508060e0015160018260e0015151610c949190613ceb565b81518110610ca557610ca4613426565b5b60200260200101518160c001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d249190613d91565b73ffffffffffffffffffffffffffffffffffffffff166352bfe7896040518163ffffffff1660e01b8152600401606060405180830381865afa158015610d6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d929190613fa5565b8161012001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a9190613d91565b73ffffffffffffffffffffffffffffffffffffffff16639fa6a6e36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e789190613fd2565b81610140018181525050919050565b610e8f6117b1565b82816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff16635b4b9695836040518263ffffffff1660e01b8152600401610f389190613fff565b60a060405180830381865afa158015610f55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7991906140a6565b81604001819052508273ffffffffffffffffffffffffffffffffffffffff166355f57510836040518263ffffffff1660e01b8152600401610fba9190613fff565b61016060405180830381865afa158015610fd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffc9190613cbd565b816060018190525060018160400151602001518260400151600001516110229190613ceb565b61102c9190613d1f565b67ffffffffffffffff81111561104557611044611b82565b5b60405190808252806020026020018201604052801561107e57816020015b61106b611834565b8152602001906001900390816110635790505b508160a001819052508060a001515167ffffffffffffffff8111156110a6576110a5611b82565b5b6040519080825280602002602001820160405280156110df57816020015b6110cc611886565b8152602001906001900390816110c45790505b508160c001819052508060a001515167ffffffffffffffff81111561110757611106611b82565b5b6040519080825280602002602001820160405280156111355781602001602082028036833780820191505090505b508160e0018190525060008373ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa15801561118b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111af9190613d91565b905060008473ffffffffffffffffffffffffffffffffffffffff166395fcd8366040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112229190614111565b905060005b8360a0015151811015611557578573ffffffffffffffffffffffffffffffffffffffff1663ce813aed86838760400151602001516112659190613d1f565b6040518363ffffffff1660e01b815260040161128292919061413e565b61016060405180830381865afa1580156112a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c49190613cbd565b8460a0015182815181106112db576112da613426565b5b60200260200101819052508573ffffffffffffffffffffffffffffffffffffffff166387aee00e8560a00151838151811061131957611318613426565b5b6020026020010151600001516040518263ffffffff1660e01b81526004016113419190613dcd565b60e060405180830381865afa15801561135e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113829190613f14565b8460c00151828151811061139957611398613426565b5b602002602001018190525060008373ffffffffffffffffffffffffffffffffffffffff1663e0886f908660a0015184815181106113d9576113d8613426565b5b6020026020010151600001516040518263ffffffff1660e01b81526004016114019190613dcd565b606060405180830381865afa15801561141e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114429190613fa5565b602001519050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036114a557808560e00151838151811061149457611493613426565b5b602002602001018181525050611543565b8273ffffffffffffffffffffffffffffffffffffffff1663d7c7a935826040518263ffffffff1660e01b81526004016114de9190614167565b602060405180830381865afa1580156114fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151f9190614182565b8560e00151838151811061153657611535613426565b5b6020026020010181815250505b50808061154f90613484565b915050611227565b508260a0015160018460a001515161156f9190613ceb565b815181106115805761157f613426565b5b60200260200101518360800181905250505092915050565b60608573ffffffffffffffffffffffffffffffffffffffff16631e298b90868686866040518563ffffffff1660e01b81526004016115d89392919061426d565b6000604051808303818588803b1580156115f157600080fd5b505af193505050508015611603575060015b6116b75761160f6142bf565b806308c379a00361163757506116236142e1565b8061162e575061167c565b809150506116ca565b634e487b710361167c57611649614371565b90611654575061167c565b8060405160200161166591906143b3565b6040516020818303038152906040529150506116ca565b3d80600081146116a8576040519150601f19603f3d011682016040523d82523d6000602084013e6116ad565b606091505b50809150506116ca565b6040518060200160405280600081525090505b95945050505050565b604051806080016040528060608152602001606081526020016116f46118e9565b81526020016117016118e9565b81525090565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611738611903565b8152602001611745611978565b8152602001611752611a18565b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161177c611834565b8152602001611789611834565b815260200160608152602001606081526020016117a4611a63565b8152602001600081525090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016117ff611a86565b815260200161180c611834565b8152602001611819611834565b81526020016060815260200160608152602001606081525090565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611880611ab5565b81525090565b6040518060e001604052806000151581526020016118a2611ad6565b81526020016118af611ad6565b81526020016118bc611ad6565b81526020016118c9611ae9565b81526020016118d6611ae9565b81526020016118e3611ae9565b81525090565b604051806040016040528060608152602001606081525090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581525090565b6040518061026001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016119e0611afc565b81526020016119ed611b24565b8152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611a56611b3e565b8152602001600081525090565b604051806060016040528060008152602001600081526020016000151581525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6040518060200160405280600081525090565b6040518060200160405280600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611bba82611b71565b810181811067ffffffffffffffff82111715611bd957611bd8611b82565b5b80604052505050565b6000611bec611b58565b9050611bf88282611bb1565b919050565b600067ffffffffffffffff821115611c1857611c17611b82565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c6382611c38565b9050919050565b6000611c7582611c58565b9050919050565b611c8581611c6a565b8114611c9057600080fd5b50565b600081359050611ca281611c7c565b92915050565b6000819050919050565b611cbb81611ca8565b8114611cc657600080fd5b50565b600081359050611cd881611cb2565b92915050565b600067ffffffffffffffff821115611cf957611cf8611b82565b5b602082029050602081019050919050565b6000819050919050565b611d1d81611d0a565b8114611d2857600080fd5b50565b600081359050611d3a81611d14565b92915050565b6000611d53611d4e84611cde565b611be2565b90508083825260208201905060208402830185811115611d7657611d75611c29565b5b835b81811015611d9f5780611d8b8882611d2b565b845260208401935050602081019050611d78565b5050509392505050565b600082601f830112611dbe57611dbd611b6c565b5b8135611dce848260208601611d40565b91505092915050565b600080fd5b600067ffffffffffffffff821115611df757611df6611b82565b5b611e0082611b71565b9050602081019050919050565b82818337600083830152505050565b6000611e2f611e2a84611ddc565b611be2565b905082815260208101848484011115611e4b57611e4a611dd7565b5b611e56848285611e0d565b509392505050565b600082601f830112611e7357611e72611b6c565b5b8135611e83848260208601611e1c565b91505092915050565b600060a08284031215611ea257611ea1611c2e565b5b611eac60a0611be2565b90506000611ebc84828501611c93565b6000830152506020611ed084828501611cc9565b602083015250604082013567ffffffffffffffff811115611ef457611ef3611c33565b5b611f0084828501611da9565b6040830152506060611f1484828501611cc9565b606083015250608082013567ffffffffffffffff811115611f3857611f37611c33565b5b611f4484828501611e5e565b60808301525092915050565b6000611f63611f5e84611bfd565b611be2565b90508083825260208201905060208402830185811115611f8657611f85611c29565b5b835b81811015611fcd57803567ffffffffffffffff811115611fab57611faa611b6c565b5b808601611fb88982611e8c565b85526020850194505050602081019050611f88565b5050509392505050565b600082601f830112611fec57611feb611b6c565b5b8135611ffc848260208601611f50565b91505092915050565b600067ffffffffffffffff8211156120205761201f611b82565b5b602082029050602081019050919050565b600061203c82611c58565b9050919050565b61204c81612031565b811461205757600080fd5b50565b60008135905061206981612043565b92915050565b600061208261207d84612005565b611be2565b905080838252602082019050602084028301858111156120a5576120a4611c29565b5b835b818110156120ce57806120ba888261205a565b8452602084019350506020810190506120a7565b5050509392505050565b600082601f8301126120ed576120ec611b6c565b5b81356120fd84826020860161206f565b91505092915050565b61210f81611c58565b811461211a57600080fd5b50565b60008135905061212c81612106565b92915050565b60008060006060848603121561214b5761214a611b62565b5b600084013567ffffffffffffffff81111561216957612168611b67565b5b61217586828701611fd7565b935050602084013567ffffffffffffffff81111561219657612195611b67565b5b6121a2868287016120d8565b92505060406121b38682870161211d565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612223578082015181840152602081019050612208565b60008484015250505050565b600061223a826121e9565b61224481856121f4565b9350612254818560208601612205565b61225d81611b71565b840191505092915050565b6000612274838361222f565b905092915050565b6000602082019050919050565b6000612294826121bd565b61229e81856121c8565b9350836020820285016122b0856121d9565b8060005b858110156122ec57848403895281516122cd8582612268565b94506122d88361227c565b925060208a019950506001810190506122b4565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b600061234f61234a61234584611c38565b61232a565b611c38565b9050919050565b600061236182612334565b9050919050565b600061237382612356565b9050919050565b61238381612368565b82525050565b60006123a461239f61239a84611ca8565b61232a565b611ca8565b9050919050565b6123b481612389565b82525050565b6123c381611ca8565b82525050565b60008115159050919050565b6123de816123c9565b82525050565b6101c0820160008201516123fb60008501826123ab565b50602082015161240e60208501826123ab565b50604082015161242160408501826123ab565b50606082015161243460608501826123ab565b50608082015161244760808501826123ab565b5060a082015161245a60a08501826123ba565b5060c082015161246d60c08501826123ba565b5060e082015161248060e08501826123ab565b506101008201516124956101008501826123ab565b506101208201516124aa6101208501826123ab565b506101408201516124bf6101408501826123ab565b506101608201516124d46101608501826123d5565b506101808201516124e96101808501826123d5565b506101a08201516124fe6101a08501826123d5565b50505050565b60808201600082015161251a60008501826123ab565b50602082015161252d60208501826123ab565b50604082015161254060408501826123ab565b50606082015161255360608501826123ab565b50505050565b60408201600082015161256f60008501826123ab565b50602082015161258260208501826123ab565b50505050565b6102e08201600082015161259f60008501826123ab565b5060208201516125b260208501826123ab565b5060408201516125c560408501826123ab565b5060608201516125d860608501826123ab565b5060808201516125eb60808501826123ab565b5060a08201516125fe60a08501826123ab565b5060c082015161261160c08501826123ab565b5060e082015161262460e08501826123ab565b506101008201516126396101008501826123ab565b5061012082015161264e6101208501826123ab565b506101408201516126636101408501826123ab565b506101608201516126786101608501826123ab565b5061018082015161268d610180850182612504565b506101a08201516126a2610200850182612559565b506101c08201516126b76102408501826123ab565b506101e08201516126cc6102608501826123ab565b506102008201516126e16102808501826123ab565b506102208201516126f66102a08501826123ba565b5061024082015161270b6102c08501826123d5565b50505050565b6000819050919050565b600061273661273161272c84612711565b61232a565b612711565b9050919050565b6127468161271b565b82525050565b604082016000820151612762600085018261273d565b506020820151612775602085018261273d565b50505050565b6101208201600082015161279260008501826123ba565b5060208201516127a560208501826123ba565b5060408201516127b860408501826123ab565b5060608201516127cb60608501826123ab565b5060808201516127de60808501826123ab565b5060a08201516127f160a08501826123ab565b5060c082015161280460c085018261274c565b5060e082015161281861010085018261273d565b50505050565b61282781611c58565b82525050565b606082016000820151612843600085018261273d565b506020820151612856602085018261273d565b506040820151612869604085018261273d565b50505050565b6101608201600082015161288660008501826123ba565b50602082015161289960208501826123ab565b5060408201516128ac60408501826123ab565b5060608201516128bf60608501826123ab565b5060808201516128d260808501826123ab565b5060a08201516128e560a08501826123ab565b5060c08201516128f860c085018261273d565b5060e082015161290b60e085018261273d565b5061010082015161292061010085018261282d565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061295e838361286f565b6101608301905092915050565b6000602082019050919050565b600061298382612926565b61298d8185612931565b935061299883612942565b8060005b838110156129c95781516129b08882612952565b97506129bb8361296b565b92505060018101905061299c565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b602082016000820151612a18600085018261273d565b50505050565b602082016000820151612a3460008501826123ab565b50505050565b60e082016000820151612a5060008501826123d5565b506020820151612a636020850182612a02565b506040820151612a766040850182612a02565b506060820151612a896060850182612a02565b506080820151612a9c6080850182612a1e565b5060a0820151612aaf60a0850182612a1e565b5060c0820151612ac260c0850182612a1e565b50505050565b6000612ad48383612a3a565b60e08301905092915050565b6000602082019050919050565b6000612af8826129d6565b612b0281856129e1565b9350612b0d836129f2565b8060005b83811015612b3e578151612b258882612ac8565b9750612b3083612ae0565b925050600181019050612b11565b5085935050505092915050565b606082016000820151612b6160008501826123ba565b506020820151612b74602085018261273d565b506040820151612b8760408501826123d5565b50505050565b600061098083016000830151612ba6600086018261237a565b506020830151612bb960208601826123e4565b506040830151612bcd6101e0860182612588565b506060830151612be16104c086018261277b565b506080830151612bf56105e086018261281e565b5060a0830151612c0961060086018261286f565b5060c0830151612c1d61076086018261286f565b5060e08301518482036108c0860152612c368282612978565b9150506101008301518482036108e0860152612c528282612aed565b915050610120830151612c69610900860182612b4b565b50610140830151612c7e6109608601826123ba565b508091505092915050565b6000612c958383612b8d565b905092915050565b6000602082019050919050565b6000612cb5826122fe565b612cbf8185612309565b935083602082028501612cd18561231a565b8060005b85811015612d0d5784840389528151612cee8582612c89565b9450612cf983612c9d565b925060208a01995050600181019050612cd5565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60a082016000820151612d6160008501826123ba565b506020820151612d7460208501826123ba565b506040820151612d87604085018261273d565b506060820151612d9a60608501826123ab565b506080820151612dad60808501826123ba565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612deb838361273d565b60208301905092915050565b6000602082019050919050565b6000612e0f82612db3565b612e198185612dbe565b9350612e2483612dcf565b8060005b83811015612e55578151612e3c8882612ddf565b9750612e4783612df7565b925050600181019050612e28565b5085935050505092915050565b600061040083016000830151612e7b600086018261237a565b506020830151612e8e602086018261281e565b506040830151612ea16040860182612d4b565b506060830151612eb460e086018261286f565b506080830151612ec861024086018261286f565b5060a08301518482036103a0860152612ee18282612978565b91505060c08301518482036103c0860152612efc8282612aed565b91505060e08301518482036103e0860152612f178282612e04565b9150508091505092915050565b6000612f308383612e62565b905092915050565b6000602082019050919050565b6000612f5082612d1f565b612f5a8185612d2a565b935083602082028501612f6c85612d3b565b8060005b85811015612fa85784840389528151612f898582612f24565b9450612f9483612f38565b925060208a01995050600181019050612f70565b50829750879550505050505092915050565b60006040830160008301518482036000860152612fd78282612caa565b91505060208301518482036020860152612ff18282612f45565b9150508091505092915050565b6000608083016000830151848203600086015261301b8282612289565b915050602083015184820360208601526130358282612289565b9150506040830151848203604086015261304f8282612fba565b915050606083015184820360608601526130698282612fba565b9150508091505092915050565b600060208201905081810360008301526130908184612ffe565b905092915050565b600080604083850312156130af576130ae611b62565b5b60006130bd8582860161205a565b92505060206130ce8582860161211d565b9150509250929050565b600082825260208201905092915050565b60006130f4826121e9565b6130fe81856130d8565b935061310e818560208601612205565b61311781611b71565b840191505092915050565b6000602082019050818103600083015261313c81846130e9565b905092915050565b60006020828403121561315a57613159611b62565b5b60006131688482850161205a565b91505092915050565b60006109808301600083015161318a600086018261237a565b50602083015161319d60208601826123e4565b5060408301516131b16101e0860182612588565b5060608301516131c56104c086018261277b565b5060808301516131d96105e086018261281e565b5060a08301516131ed61060086018261286f565b5060c083015161320161076086018261286f565b5060e08301518482036108c086015261321a8282612978565b9150506101008301518482036108e08601526132368282612aed565b91505061012083015161324d610900860182612b4b565b506101408301516132626109608601826123ba565b508091505092915050565b600060208201905081810360008301526132878184613171565b905092915050565b6000610400830160008301516132a8600086018261237a565b5060208301516132bb602086018261281e565b5060408301516132ce6040860182612d4b565b5060608301516132e160e086018261286f565b5060808301516132f561024086018261286f565b5060a08301518482036103a086015261330e8282612978565b91505060c08301518482036103c08601526133298282612aed565b91505060e08301518482036103e08601526133448282612e04565b9150508091505092915050565b6000602082019050818103600083015261336b818461328f565b905092915050565b600080600080600060a0868803121561338f5761338e611b62565b5b600061339d88828901611c93565b95505060206133ae88828901611cc9565b945050604086013567ffffffffffffffff8111156133cf576133ce611b67565b5b6133db88828901611da9565b93505060606133ec88828901611cc9565b925050608086013567ffffffffffffffff81111561340d5761340c611b67565b5b61341988828901611e5e565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061348f82611ca8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036134c1576134c0613455565b5b600182019050919050565b6134d581611c58565b82525050565b6134e481612389565b82525050565b6134f38161271b565b82525050565b613502816123c9565b82525050565b600060c08201905061351d60008301896134cc565b61352a60208301886134db565b61353760408301876134db565b61354460608301866134db565b61355160808301856134ea565b61355e60a08301846134f9565b979650505050505050565b61357281611ca8565b811461357d57600080fd5b50565b60008151905061358f81613569565b92915050565b6000815190506135a481611cb2565b92915050565b6135b3816123c9565b81146135be57600080fd5b50565b6000815190506135d0816135aa565b92915050565b60006101c082840312156135ed576135ec611c2e565b5b6135f86101c0611be2565b9050600061360884828501613580565b600083015250602061361c84828501613580565b602083015250604061363084828501613580565b604083015250606061364484828501613580565b606083015250608061365884828501613580565b60808301525060a061366c84828501613595565b60a08301525060c061368084828501613595565b60c08301525060e061369484828501613580565b60e0830152506101006136a984828501613580565b610100830152506101206136bf84828501613580565b610120830152506101406136d584828501613580565b610140830152506101606136eb848285016135c1565b61016083015250610180613701848285016135c1565b610180830152506101a0613717848285016135c1565b6101a08301525092915050565b60006101c0828403121561373b5761373a611b62565b5b6000613749848285016135d6565b91505092915050565b60006080828403121561376857613767611c2e565b5b6137726080611be2565b9050600061378284828501613580565b600083015250602061379684828501613580565b60208301525060406137aa84828501613580565b60408301525060606137be84828501613580565b60608301525092915050565b6000604082840312156137e0576137df611c2e565b5b6137ea6040611be2565b905060006137fa84828501613580565b600083015250602061380e84828501613580565b60208301525092915050565b60006102e0828403121561383157613830611c2e565b5b61383c610260611be2565b9050600061384c84828501613580565b600083015250602061386084828501613580565b602083015250604061387484828501613580565b604083015250606061388884828501613580565b606083015250608061389c84828501613580565b60808301525060a06138b084828501613580565b60a08301525060c06138c484828501613580565b60c08301525060e06138d884828501613580565b60e0830152506101006138ed84828501613580565b6101008301525061012061390384828501613580565b6101208301525061014061391984828501613580565b6101408301525061016061392f84828501613580565b6101608301525061018061394584828501613752565b6101808301525061020061395b848285016137ca565b6101a08301525061024061397184828501613580565b6101c08301525061026061398784828501613580565b6101e08301525061028061399d84828501613580565b610200830152506102a06139b384828501613595565b610220830152506102c06139c9848285016135c1565b6102408301525092915050565b60006102e082840312156139ed576139ec611b62565b5b60006139fb8482850161381a565b91505092915050565b613a0d81612711565b8114613a1857600080fd5b50565b600081519050613a2a81613a04565b92915050565b600060408284031215613a4657613a45611c2e565b5b613a506040611be2565b90506000613a6084828501613a1b565b6000830152506020613a7484828501613a1b565b60208301525092915050565b60006101208284031215613a9757613a96611c2e565b5b613aa2610100611be2565b90506000613ab284828501613595565b6000830152506020613ac684828501613595565b6020830152506040613ada84828501613580565b6040830152506060613aee84828501613580565b6060830152506080613b0284828501613580565b60808301525060a0613b1684828501613580565b60a08301525060c0613b2a84828501613a30565b60c083015250610100613b3f84828501613a1b565b60e08301525092915050565b60006101208284031215613b6257613b61611b62565b5b6000613b7084828501613a80565b91505092915050565b600060608284031215613b8f57613b8e611c2e565b5b613b996060611be2565b90506000613ba984828501613a1b565b6000830152506020613bbd84828501613a1b565b6020830152506040613bd184828501613a1b565b60408301525092915050565b60006101608284031215613bf457613bf3611c2e565b5b613bff610120611be2565b90506000613c0f84828501613595565b6000830152506020613c2384828501613580565b6020830152506040613c3784828501613580565b6040830152506060613c4b84828501613580565b6060830152506080613c5f84828501613580565b60808301525060a0613c7384828501613580565b60a08301525060c0613c8784828501613a1b565b60c08301525060e0613c9b84828501613a1b565b60e083015250610100613cb084828501613b79565b6101008301525092915050565b60006101608284031215613cd457613cd3611b62565b5b6000613ce284828501613bdd565b91505092915050565b6000613cf682611ca8565b9150613d0183611ca8565b9250828203905081811115613d1957613d18613455565b5b92915050565b6000613d2a82611ca8565b9150613d3583611ca8565b9250828201905080821115613d4d57613d4c613455565b5b92915050565b6000613d5e82611c58565b9050919050565b613d6e81613d53565b8114613d7957600080fd5b50565b600081519050613d8b81613d65565b92915050565b600060208284031215613da757613da6611b62565b5b6000613db584828501613d7c565b91505092915050565b613dc781611ca8565b82525050565b6000602082019050613de26000830184613dbe565b92915050565b600060208284031215613dfe57613dfd611c2e565b5b613e086020611be2565b90506000613e1884828501613a1b565b60008301525092915050565b600060208284031215613e3a57613e39611c2e565b5b613e446020611be2565b90506000613e5484828501613580565b60008301525092915050565b600060e08284031215613e7657613e75611c2e565b5b613e8060e0611be2565b90506000613e90848285016135c1565b6000830152506020613ea484828501613de8565b6020830152506040613eb884828501613de8565b6040830152506060613ecc84828501613de8565b6060830152506080613ee084828501613e24565b60808301525060a0613ef484828501613e24565b60a08301525060c0613f0884828501613e24565b60c08301525092915050565b600060e08284031215613f2a57613f29611b62565b5b6000613f3884828501613e60565b91505092915050565b600060608284031215613f5757613f56611c2e565b5b613f616060611be2565b90506000613f7184828501613595565b6000830152506020613f8584828501613a1b565b6020830152506040613f99848285016135c1565b60408301525092915050565b600060608284031215613fbb57613fba611b62565b5b6000613fc984828501613f41565b91505092915050565b600060208284031215613fe857613fe7611b62565b5b6000613ff684828501613595565b91505092915050565b600060208201905061401460008301846134cc565b92915050565b600060a082840312156140305761402f611c2e565b5b61403a60a0611be2565b9050600061404a84828501613595565b600083015250602061405e84828501613595565b602083015250604061407284828501613a1b565b604083015250606061408684828501613580565b606083015250608061409a84828501613595565b60808301525092915050565b600060a082840312156140bc576140bb611b62565b5b60006140ca8482850161401a565b91505092915050565b60006140de82611c58565b9050919050565b6140ee816140d3565b81146140f957600080fd5b50565b60008151905061410b816140e5565b92915050565b60006020828403121561412757614126611b62565b5b6000614135848285016140fc565b91505092915050565b600060408201905061415360008301856134cc565b6141606020830184613dbe565b9392505050565b600060208201905061417c60008301846134ea565b92915050565b60006020828403121561419857614197611b62565b5b60006141a684828501613a1b565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6141e481611d0a565b82525050565b60006141f683836141db565b60208301905092915050565b6000602082019050919050565b600061421a826141af565b61422481856141ba565b935061422f836141cb565b8060005b8381101561426057815161424788826141ea565b975061425283614202565b925050600181019050614233565b5085935050505092915050565b60006060820190508181036000830152614287818661420f565b90506142966020830185613dbe565b81810360408301526142a881846130e9565b9050949350505050565b60008160e01c9050919050565b600060033d11156142de5760046000803e6142db6000516142b2565b90505b90565b600060443d1061436e576142f3611b58565b60043d036004823e80513d602482011167ffffffffffffffff8211171561431b57505061436e565b808201805167ffffffffffffffff811115614339575050505061436e565b80602083010160043d03850181111561435657505050505061436e565b61436582602001850186611bb1565b82955050505050505b90565b60008060233d111561438e576020600460003e6001915060005190505b9091565b6000819050919050565b6143ad6143a882611ca8565b614392565b82525050565b60006143bf828461439c565b6020820191508190509291505056fea2646970667358221220e9c886d3695226d8c4f1cb6fdb1fc74dc605e11c8b138a5b8b81385fb510ba5c64736f6c63430008130033",
  linkReferences: {},
  deployedLinkReferences: {},
};
