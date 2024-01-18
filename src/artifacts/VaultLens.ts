export const VaultArtifact = {
  _format: "hh-sol-artifact-1",
  contractName: "VaultLens",
  sourceName: "contracts/Lens.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "int256",
          name: "value",
          type: "int256",
        },
      ],
      name: "UFixed6UnderflowError",
      type: "error",
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
          internalType: "contract Lens",
          name: "marketLens",
          type: "address",
        },
        {
          internalType: "contract IVault[]",
          name: "vaults",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "address",
          name: "multiInvoker",
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
              internalType: "bytes[]",
              name: "settleStatus",
              type: "bytes[]",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "contract IVault",
                      name: "vault",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "cap",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct VaultParameter",
                      name: "parameter",
                      type: "tuple",
                    },
                    {
                      internalType: "Fixed6",
                      name: "totalAssets",
                      type: "int256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "totalShares",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "totalMarkets",
                      type: "uint256",
                    },
                    {
                      components: [
                        {
                          internalType: "contract IMarket",
                          name: "market",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "weight",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "leverage",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Registration[]",
                      name: "registrations",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "current",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latest",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "assets",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Account",
                      name: "vaultAccount",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "assets",
                          type: "int256",
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
                          internalType: "uint256",
                          name: "count",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Checkpoint",
                      name: "latestCheckpoint",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "assets",
                          type: "int256",
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
                          internalType: "uint256",
                          name: "count",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Checkpoint",
                      name: "currentCheckpoint",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256[]",
                          name: "_ids",
                          type: "uint256[]",
                        },
                      ],
                      internalType: "struct Mapping",
                      name: "latestMapping",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256[]",
                          name: "_ids",
                          type: "uint256[]",
                        },
                      ],
                      internalType: "struct Mapping",
                      name: "currentMapping",
                      type: "tuple",
                    },
                    {
                      internalType: "UFixed6",
                      name: "totalSettlementFee",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "totalMarketCollateral",
                      type: "int256",
                    },
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
                      name: "marketVaultSnapshots",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct VaultLens.VaultSnapshot[]",
                  name: "vaultSnapshots",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "contract IVault",
                      name: "vault",
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
                          name: "current",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latest",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "assets",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Account",
                      name: "accountData",
                      type: "tuple",
                    },
                    {
                      internalType: "UFixed6",
                      name: "assets",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "redemptionAssets",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "multiInvokerApproved",
                      type: "bool",
                    },
                  ],
                  internalType: "struct VaultLens.VaultAccountSnapshot[]",
                  name: "vaultAccountSnapshots",
                  type: "tuple[]",
                },
              ],
              internalType: "struct VaultLens.SnapshotResult",
              name: "preUpdate",
              type: "tuple",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "contract IVault",
                      name: "vault",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "cap",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct VaultParameter",
                      name: "parameter",
                      type: "tuple",
                    },
                    {
                      internalType: "Fixed6",
                      name: "totalAssets",
                      type: "int256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "totalShares",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "totalMarkets",
                      type: "uint256",
                    },
                    {
                      components: [
                        {
                          internalType: "contract IMarket",
                          name: "market",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "weight",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "leverage",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Registration[]",
                      name: "registrations",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "current",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latest",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "assets",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Account",
                      name: "vaultAccount",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "assets",
                          type: "int256",
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
                          internalType: "uint256",
                          name: "count",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Checkpoint",
                      name: "latestCheckpoint",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "assets",
                          type: "int256",
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
                          internalType: "uint256",
                          name: "count",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Checkpoint",
                      name: "currentCheckpoint",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256[]",
                          name: "_ids",
                          type: "uint256[]",
                        },
                      ],
                      internalType: "struct Mapping",
                      name: "latestMapping",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256[]",
                          name: "_ids",
                          type: "uint256[]",
                        },
                      ],
                      internalType: "struct Mapping",
                      name: "currentMapping",
                      type: "tuple",
                    },
                    {
                      internalType: "UFixed6",
                      name: "totalSettlementFee",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "totalMarketCollateral",
                      type: "int256",
                    },
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
                      name: "marketVaultSnapshots",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct VaultLens.VaultSnapshot[]",
                  name: "vaultSnapshots",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "contract IVault",
                      name: "vault",
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
                          name: "current",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latest",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "assets",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Account",
                      name: "accountData",
                      type: "tuple",
                    },
                    {
                      internalType: "UFixed6",
                      name: "assets",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "redemptionAssets",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "multiInvokerApproved",
                      type: "bool",
                    },
                  ],
                  internalType: "struct VaultLens.VaultAccountSnapshot[]",
                  name: "vaultAccountSnapshots",
                  type: "tuple[]",
                },
              ],
              internalType: "struct VaultLens.SnapshotResult",
              name: "postUpdate",
              type: "tuple",
            },
          ],
          internalType: "struct VaultLens.SnapshotReturnValue",
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
          internalType: "contract IVault",
          name: "vault",
          type: "address",
        },
        {
          internalType: "contract Lens",
          name: "marketLens",
          type: "address",
        },
        {
          internalType: "bool",
          name: "postSettle",
          type: "bool",
        },
      ],
      name: "snapshotVault",
      outputs: [
        {
          components: [
            {
              internalType: "contract IVault",
              name: "vault",
              type: "address",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "UFixed6",
                  name: "cap",
                  type: "uint256",
                },
              ],
              internalType: "struct VaultParameter",
              name: "parameter",
              type: "tuple",
            },
            {
              internalType: "Fixed6",
              name: "totalAssets",
              type: "int256",
            },
            {
              internalType: "UFixed6",
              name: "totalShares",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalMarkets",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "contract IMarket",
                  name: "market",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "weight",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "leverage",
                  type: "uint256",
                },
              ],
              internalType: "struct Registration[]",
              name: "registrations",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "current",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "latest",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "shares",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "assets",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "deposit",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "redemption",
                  type: "uint256",
                },
              ],
              internalType: "struct Account",
              name: "vaultAccount",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "UFixed6",
                  name: "deposit",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "redemption",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "shares",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "assets",
                  type: "int256",
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
                  internalType: "uint256",
                  name: "count",
                  type: "uint256",
                },
              ],
              internalType: "struct Checkpoint",
              name: "latestCheckpoint",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "UFixed6",
                  name: "deposit",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "redemption",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "shares",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "assets",
                  type: "int256",
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
                  internalType: "uint256",
                  name: "count",
                  type: "uint256",
                },
              ],
              internalType: "struct Checkpoint",
              name: "currentCheckpoint",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256[]",
                  name: "_ids",
                  type: "uint256[]",
                },
              ],
              internalType: "struct Mapping",
              name: "latestMapping",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256[]",
                  name: "_ids",
                  type: "uint256[]",
                },
              ],
              internalType: "struct Mapping",
              name: "currentMapping",
              type: "tuple",
            },
            {
              internalType: "UFixed6",
              name: "totalSettlementFee",
              type: "uint256",
            },
            {
              internalType: "Fixed6",
              name: "totalMarketCollateral",
              type: "int256",
            },
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
              name: "marketVaultSnapshots",
              type: "tuple[]",
            },
          ],
          internalType: "struct VaultLens.VaultSnapshot",
          name: "vaultSnapshot",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IVault",
          name: "vault",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "address",
          name: "multiInvoker",
          type: "address",
        },
        {
          internalType: "UFixed6",
          name: "vaultShares",
          type: "uint256",
        },
        {
          internalType: "Fixed6",
          name: "vaultAssets",
          type: "int256",
        },
      ],
      name: "snapshotVaultAccount",
      outputs: [
        {
          components: [
            {
              internalType: "contract IVault",
              name: "vault",
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
                  name: "current",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "latest",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "shares",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "assets",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "deposit",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "redemption",
                  type: "uint256",
                },
              ],
              internalType: "struct Account",
              name: "accountData",
              type: "tuple",
            },
            {
              internalType: "UFixed6",
              name: "assets",
              type: "uint256",
            },
            {
              internalType: "UFixed6",
              name: "redemptionAssets",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "multiInvokerApproved",
              type: "bool",
            },
          ],
          internalType: "struct VaultLens.VaultAccountSnapshot",
          name: "vaultAccountSnapshot",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IVault",
          name: "vault",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "UFixed6",
          name: "totalSettlementFee",
          type: "uint256",
        },
      ],
      name: "updateAndSettle",
      outputs: [
        {
          internalType: "bytes",
          name: "updateErr",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "settleErr",
          type: "bytes",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x608060405234801561001057600080fd5b5061586880620000216000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f8b00d81461005157806332dd5bd41461008257806366e7f423146100b2578063ea646943146100e2575b600080fd5b61006b60048036038101906100669190611e4e565b610112565b604051610079929190611f31565b60405180910390f35b61009c600480360381019061009791906124b5565b610327565b6040516100a99190613ad7565b60405180910390f35b6100cc60048036038101906100c79190613b25565b6109b4565b6040516100d99190613cf3565b60405180910390f35b6100fc60048036038101906100f79190613d41565b61133e565b6040516101099190613e3b565b60405180910390f35b6060806101ac858673ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610164573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101889190613e83565b73ffffffffffffffffffffffffffffffffffffffff166115f490919063ffffffff16565b8473ffffffffffffffffffffffffffffffffffffffff1663d2c3aaf230856000806040518563ffffffff1660e01b81526004016101ec9493929190613ece565b600060405180830381600087803b15801561020657600080fd5b505af1925050508015610217575060015b610256573d8060008114610247576040519150601f19603f3d011682016040523d82523d6000602084013e61024c565b606091505b5080925050610269565b6040518060200160405280600081525091505b8473ffffffffffffffffffffffffffffffffffffffff16636a256b29856040518263ffffffff1660e01b81526004016102a29190613f13565b600060405180830381600087803b1580156102bc57600080fd5b505af19250505080156102cd575060015b61030c573d80600081146102fd576040519150601f19603f3d011682016040523d82523d6000602084013e610302565b606091505b508091505061031f565b6040518060200160405280600081525090505b935093915050565b61032f611774565b6000845167ffffffffffffffff81111561034c5761034b611f6d565b5b60405190808252806020026020018201604052801561038557816020015b6103726117af565b81526020019060019003908161036a5790505b5090506000855167ffffffffffffffff8111156103a5576103a4611f6d565b5b6040519080825280602002602001820160405280156103de57816020015b6103cb611866565b8152602001906001900390816103c35790505b50905060005b86518110156104c55761041387828151811061040357610402613f2e565b5b60200260200101518960006109b4565b83828151811061042657610425613f2e565b5b602002602001018190525061049487828151811061044757610446613f2e565b5b6020026020010151878786858151811061046457610463613f2e565b5b60200260200101516080015187868151811061048357610482613f2e565b5b60200260200101516060015161133e565b8282815181106104a7576104a6613f2e565b5b602002602001018190525080806104bd90613f8c565b9150506103e4565b508183606001516000018190525080836060015160200181905250875167ffffffffffffffff8111156104fb576104fa611f6d565b5b60405190808252806020026020018201604052801561052e57816020015b60608152602001906001900390816105195790505b50836000018190525060005b8851811015610697578773ffffffffffffffffffffffffffffffffffffffff1663a05a212e8a838151811061057257610571613f2e565b5b6020026020010151600001518b848151811061059157610590613f2e565b5b6020026020010151602001518c85815181106105b0576105af613f2e565b5b6020026020010151604001518d86815181106105cf576105ce613f2e565b5b6020026020010151606001518e87815181106105ee576105ed613f2e565b5b6020026020010151608001516040518663ffffffff1660e01b815260040161061a9594939291906140c2565b6000604051808303816000875af1158015610639573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906106629190614193565b8460000151828151811061067957610678613f2e565b5b6020026020010181905250808061068f90613f8c565b91505061053a565b50855167ffffffffffffffff8111156106b3576106b2611f6d565b5b6040519080825280602002602001820160405280156106e657816020015b60608152602001906001900390816106d15790505b508360400181905250855167ffffffffffffffff81111561070a57610709611f6d565b5b60405190808252806020026020018201604052801561073d57816020015b60608152602001906001900390816107285790505b50836020018190525060005b86518110156107f55761079e87828151811061076857610767613f2e565b5b602002602001015187866060015160000151848151811061078c5761078b613f2e565b5b60200260200101516101800151610112565b856020015183815181106107b5576107b4613f2e565b5b60200260200101866040015184815181106107d3576107d2613f2e565b5b60200260200101829052829052505080806107ed90613f8c565b915050610749565b506000865167ffffffffffffffff81111561081357610812611f6d565b5b60405190808252806020026020018201604052801561084c57816020015b6108396117af565b8152602001906001900390816108315790505b5090506000875167ffffffffffffffff81111561086c5761086b611f6d565b5b6040519080825280602002602001820160405280156108a557816020015b610892611866565b81526020019060019003908161088a5790505b50905060005b885181101561098c576108da8982815181106108ca576108c9613f2e565b5b60200260200101518b60016109b4565b8382815181106108ed576108ec613f2e565b5b602002602001018190525061095b89828151811061090e5761090d613f2e565b5b6020026020010151898986858151811061092b5761092a613f2e565b5b60200260200101516080015187868151811061094a57610949613f2e565b5b60200260200101516060015161133e565b82828151811061096e5761096d613f2e565b5b6020026020010181905250808061098490613f8c565b9150506108ab565b5081856080015160000181905250808560800151602001819052505050505095945050505050565b6109bc6117af565b83816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a3f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610a68919061427d565b81602001819052508373ffffffffffffffffffffffffffffffffffffffff1663ad4d4e296040518163ffffffff1660e01b8152600401602060405180830381865afa158015610abb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adf9190614317565b81604001819052508373ffffffffffffffffffffffffffffffffffffffff166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b569190614359565b8160600181815250508373ffffffffffffffffffffffffffffffffffffffff16633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa158015610baa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bce9190614386565b8160800181815250508373ffffffffffffffffffffffffffffffffffffffff16638162486b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4691906143c8565b8160a00181815250508060a0015167ffffffffffffffff811115610c6d57610c6c611f6d565b5b604051908082528060200260200182016040528015610ca657816020015b610c936118d0565b815260200190600190039081610c8b5790505b508160c001819052508060a0015167ffffffffffffffff811115610ccd57610ccc611f6d565b5b604051908082528060200260200182016040528015610d0657816020015b610cf3611907565b815260200190600190039081610ceb5790505b50816101c001819052508060a0015167ffffffffffffffff811115610d2e57610d2d611f6d565b5b604051908082528060200260200182016040528015610d6757816020015b610d546119b1565b815260200190600190039081610d4c5790505b50816101e001819052508373ffffffffffffffffffffffffffffffffffffffff16635e5c06e260006040518263ffffffff1660e01b8152600401610dab9190613f13565b60c060405180830381865afa158015610dc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dec9190614495565b8160e001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151602001516040518263ffffffff1660e01b8152600401610e3591906144c2565b60e060405180830381865afa158015610e52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e769190614591565b8161010001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151600001516040518263ffffffff1660e01b8152600401610ec091906144c2565b60e060405180830381865afa158015610edd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f019190614591565b8161012001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151602001516040518263ffffffff1660e01b8152600401610f4b91906144c2565b600060405180830381865afa158015610f68573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610f9191906146d9565b8161014001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151600001516040518263ffffffff1660e01b8152600401610fdb91906144c2565b600060405180830381865afa158015610ff8573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061102191906146d9565b81610160018190525060005b8160a00151811015611305578473ffffffffffffffffffffffffffffffffffffffff1663f4ddb5be826040518263ffffffff1660e01b815260040161107291906144c2565b606060405180830381865afa15801561108f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b391906147c4565b8260c0015182815181106110ca576110c9613f2e565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16636eb79f6a8360c00151838151811061110857611107613f2e565b5b6020026020010151600001516040518263ffffffff1660e01b81526004016111309190614800565b600060405180830381865afa15801561114d573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061117691906152d8565b826101c00151828151811061118e5761118d613f2e565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16637987bd7f8360c0015183815181106111cc576111cb613f2e565b5b602002602001015160000151876040518363ffffffff1660e01b81526004016111f6929190615321565b600060405180830381865afa158015611213573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061123c91906155bb565b826101e00151828151811061125457611253613f2e565b5b602002602001018190525061129f826101c00151828151811061127a57611279613f2e565b5b602002602001015160200151610140015183610180015161169790919063ffffffff16565b826101800181815250506112e8826101e0015182815181106112c4576112c3613f2e565b5b60200260200101516040015160400151836101a001516116ad90919063ffffffff16565b826101a001818152505080806112fd90613f8c565b91505061102d565b5081156113375761132d81610120015160600151826101a001516116ad90919063ffffffff16565b8160600181815250505b9392505050565b611346611866565b85816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505084816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508573ffffffffffffffffffffffffffffffffffffffff16635e5c06e2866040518263ffffffff1660e01b81526004016113ef9190613f13565b60c060405180830381865afa15801561140c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114309190614495565b8160400181905250611441836116c3565b6114825761147d61146461145f6000856116cf90919063ffffffff16565b6116e3565b848360400151604001516117389092919063ffffffff16565b61148c565b8060400151604001515b81606001818152505061149e836116c3565b6114df576114da6114c16114bc6000856116cf90919063ffffffff16565b6116e3565b84836040015160a001516117389092919063ffffffff16565b6114e9565b806040015160a001515b8160800181815250508573ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561153d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115619190615642565b73ffffffffffffffffffffffffffffffffffffffff16632637588e86866040518363ffffffff1660e01b815260040161159b92919061566f565b602060405180830381865afa1580156115b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115dc9190615698565b8160a001901515908115158152505095945050505050565b8173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b815260040161164f9291906156c5565b6020604051808303816000875af115801561166e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116929190615698565b505050565b600081836116a591906156ee565b905092915050565b600081836116bb9190615722565b905092915050565b60008082149050919050565b60006116db838361175a565b905092915050565b600080829050600081121561172f57806040517fb02ef0870000000000000000000000000000000000000000000000000000000081526004016117269190615775565b60405180910390fd5b80915050919050565b60008183856117479190615790565b6117519190615801565b90509392505050565b60008183121561176a578161176c565b825b905092915050565b6040518060a0016040528060608152602001606081526020016060815260200161179c611a34565b81526020016117a9611a34565b81525090565b604051806102000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016117e7611a4e565b815260200160008152602001600081526020016000815260200160608152602001611810611a61565b815260200161181d611a97565b815260200161182a611a97565b8152602001611837611ad4565b8152602001611844611ad4565b8152602001600081526020016000815260200160608152602001606081525090565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016118b3611a61565b815260200160008152602001600081526020016000151581525090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611938611ae7565b8152602001611945611b5c565b8152602001611952611bfc565b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161197c611c47565b8152602001611989611c47565b815260200160608152602001606081526020016119a4611c99565b8152602001600081525090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016119ff611cbc565b8152602001611a0c611c47565b8152602001611a19611c47565b81526020016060815260200160608152602001606081525090565b604051806040016040528060608152602001606081525090565b6040518060200160405280600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280606081525090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581525090565b604051806102600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611bc4611ceb565b8152602001611bd1611d13565b8152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611c3a611d2d565b8152602001600081525090565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611c93611d47565b81525090565b604051806060016040528060008152602001600081526020016000151581525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611da782611d7c565b9050919050565b6000611db982611d9c565b9050919050565b611dc981611dae565b8114611dd457600080fd5b50565b600081359050611de681611dc0565b92915050565b611df581611d9c565b8114611e0057600080fd5b50565b600081359050611e1281611dec565b92915050565b6000819050919050565b611e2b81611e18565b8114611e3657600080fd5b50565b600081359050611e4881611e22565b92915050565b600080600060608486031215611e6757611e66611d72565b5b6000611e7586828701611dd7565b9350506020611e8686828701611e03565b9250506040611e9786828701611e39565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015611edb578082015181840152602081019050611ec0565b60008484015250505050565b6000601f19601f8301169050919050565b6000611f0382611ea1565b611f0d8185611eac565b9350611f1d818560208601611ebd565b611f2681611ee7565b840191505092915050565b60006040820190508181036000830152611f4b8185611ef8565b90508181036020830152611f5f8184611ef8565b90509392505050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611fa582611ee7565b810181811067ffffffffffffffff82111715611fc457611fc3611f6d565b5b80604052505050565b6000611fd7611d68565b9050611fe38282611f9c565b919050565b600067ffffffffffffffff82111561200357612002611f6d565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600061202e82611d9c565b9050919050565b61203e81612023565b811461204957600080fd5b50565b60008135905061205b81612035565b92915050565b61206a81611e18565b811461207557600080fd5b50565b60008135905061208781612061565b92915050565b600067ffffffffffffffff8211156120a8576120a7611f6d565b5b602082029050602081019050919050565b6000819050919050565b6120cc816120b9565b81146120d757600080fd5b50565b6000813590506120e9816120c3565b92915050565b60006121026120fd8461208d565b611fcd565b9050808382526020820190506020840283018581111561212557612124612014565b5b835b8181101561214e578061213a88826120da565b845260208401935050602081019050612127565b5050509392505050565b600082601f83011261216d5761216c611f68565b5b813561217d8482602086016120ef565b91505092915050565b600080fd5b600067ffffffffffffffff8211156121a6576121a5611f6d565b5b6121af82611ee7565b9050602081019050919050565b82818337600083830152505050565b60006121de6121d98461218b565b611fcd565b9050828152602081018484840111156121fa576121f9612186565b5b6122058482856121bc565b509392505050565b600082601f83011261222257612221611f68565b5b81356122328482602086016121cb565b91505092915050565b600060a0828403121561225157612250612019565b5b61225b60a0611fcd565b9050600061226b8482850161204c565b600083015250602061227f84828501612078565b602083015250604082013567ffffffffffffffff8111156122a3576122a261201e565b5b6122af84828501612158565b60408301525060606122c384828501612078565b606083015250608082013567ffffffffffffffff8111156122e7576122e661201e565b5b6122f38482850161220d565b60808301525092915050565b600061231261230d84611fe8565b611fcd565b9050808382526020820190506020840283018581111561233557612334612014565b5b835b8181101561237c57803567ffffffffffffffff81111561235a57612359611f68565b5b808601612367898261223b565b85526020850194505050602081019050612337565b5050509392505050565b600082601f83011261239b5761239a611f68565b5b81356123ab8482602086016122ff565b91505092915050565b60006123bf82611d9c565b9050919050565b6123cf816123b4565b81146123da57600080fd5b50565b6000813590506123ec816123c6565b92915050565b600067ffffffffffffffff82111561240d5761240c611f6d565b5b602082029050602081019050919050565b600061243161242c846123f2565b611fcd565b9050808382526020820190506020840283018581111561245457612453612014565b5b835b8181101561247d57806124698882611dd7565b845260208401935050602081019050612456565b5050509392505050565b600082601f83011261249c5761249b611f68565b5b81356124ac84826020860161241e565b91505092915050565b600080600080600060a086880312156124d1576124d0611d72565b5b600086013567ffffffffffffffff8111156124ef576124ee611d77565b5b6124fb88828901612386565b955050602061250c888289016123dd565b945050604086013567ffffffffffffffff81111561252d5761252c611d77565b5b61253988828901612487565b935050606061254a88828901611e03565b925050608061255b88828901611e03565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b60006125b082611ea1565b6125ba8185612594565b93506125ca818560208601611ebd565b6125d381611ee7565b840191505092915050565b60006125ea83836125a5565b905092915050565b6000602082019050919050565b600061260a82612568565b6126148185612573565b93508360208202850161262685612584565b8060005b85811015612662578484038952815161264385826125de565b945061264e836125f2565b925060208a0199505060018101905061262a565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b60006126c56126c06126bb84611d7c565b6126a0565b611d7c565b9050919050565b60006126d7826126aa565b9050919050565b60006126e9826126cc565b9050919050565b6126f9816126de565b82525050565b600081519050919050565b600082825260208201905092915050565b6000612726826126ff565b612730818561270a565b9350612740818560208601611ebd565b61274981611ee7565b840191505092915050565b600061276f61276a61276584611e18565b6126a0565b611e18565b9050919050565b61277f81612754565b82525050565b60208201600082015161279b6000850182612776565b50505050565b6000819050919050565b60006127c66127c16127bc846127a1565b6126a0565b6127a1565b9050919050565b6127d6816127ab565b82525050565b6127e581611e18565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612822826126cc565b9050919050565b61283281612817565b82525050565b60608201600082015161284e6000850182612829565b50602082015161286160208501826127dc565b5060408201516128746040850182612776565b50505050565b60006128868383612838565b60608301905092915050565b6000602082019050919050565b60006128aa826127eb565b6128b481856127f6565b93506128bf83612807565b8060005b838110156128f05781516128d7888261287a565b97506128e283612892565b9250506001810190506128c3565b5085935050505092915050565b60c08201600082015161291360008501826127dc565b50602082015161292660208501826127dc565b5060408201516129396040850182612776565b50606082015161294c6060850182612776565b50608082015161295f6080850182612776565b5060a082015161297260a0850182612776565b50505050565b60e08201600082015161298e6000850182612776565b5060208201516129a16020850182612776565b5060408201516129b46040850182612776565b5060608201516129c760608501826127cd565b5060808201516129da6080850182612776565b5060a08201516129ed60a0850182612776565b5060c0820151612a0060c08501826127dc565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612a3e83836127dc565b60208301905092915050565b6000602082019050919050565b6000612a6282612a06565b612a6c8185612a11565b9350612a7783612a22565b8060005b83811015612aa8578151612a8f8882612a32565b9750612a9a83612a4a565b925050600181019050612a7b565b5085935050505092915050565b60006020830160008301518482036000860152612ad28282612a57565b9150508091505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b612b2081612b0b565b82525050565b6101c082016000820151612b3d6000850182612776565b506020820151612b506020850182612776565b506040820151612b636040850182612776565b506060820151612b766060850182612776565b506080820151612b896080850182612776565b5060a0820151612b9c60a08501826127dc565b5060c0820151612baf60c08501826127dc565b5060e0820151612bc260e0850182612776565b50610100820151612bd7610100850182612776565b50610120820151612bec610120850182612776565b50610140820151612c01610140850182612776565b50610160820151612c16610160850182612b17565b50610180820151612c2b610180850182612b17565b506101a0820151612c406101a0850182612b17565b50505050565b608082016000820151612c5c6000850182612776565b506020820151612c6f6020850182612776565b506040820151612c826040850182612776565b506060820151612c956060850182612776565b50505050565b604082016000820151612cb16000850182612776565b506020820151612cc46020850182612776565b50505050565b6102e082016000820151612ce16000850182612776565b506020820151612cf46020850182612776565b506040820151612d076040850182612776565b506060820151612d1a6060850182612776565b506080820151612d2d6080850182612776565b5060a0820151612d4060a0850182612776565b5060c0820151612d5360c0850182612776565b5060e0820151612d6660e0850182612776565b50610100820151612d7b610100850182612776565b50610120820151612d90610120850182612776565b50610140820151612da5610140850182612776565b50610160820151612dba610160850182612776565b50610180820151612dcf610180850182612c46565b506101a0820151612de4610200850182612c9b565b506101c0820151612df9610240850182612776565b506101e0820151612e0e610260850182612776565b50610200820151612e23610280850182612776565b50610220820151612e386102a08501826127dc565b50610240820151612e4d6102c0850182612b17565b50505050565b604082016000820151612e6960008501826127cd565b506020820151612e7c60208501826127cd565b50505050565b61012082016000820151612e9960008501826127dc565b506020820151612eac60208501826127dc565b506040820151612ebf6040850182612776565b506060820151612ed26060850182612776565b506080820151612ee56080850182612776565b5060a0820151612ef860a0850182612776565b5060c0820151612f0b60c0850182612e53565b5060e0820151612f1f6101008501826127cd565b50505050565b612f2e81611d9c565b82525050565b606082016000820151612f4a60008501826127cd565b506020820151612f5d60208501826127cd565b506040820151612f7060408501826127cd565b50505050565b61016082016000820151612f8d60008501826127dc565b506020820151612fa06020850182612776565b506040820151612fb36040850182612776565b506060820151612fc66060850182612776565b506080820151612fd96080850182612776565b5060a0820151612fec60a0850182612776565b5060c0820151612fff60c08501826127cd565b5060e082015161301260e08501826127cd565b50610100820151613027610100850182612f34565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006130658383612f76565b6101608301905092915050565b6000602082019050919050565b600061308a8261302d565b6130948185613038565b935061309f83613049565b8060005b838110156130d05781516130b78882613059565b97506130c283613072565b9250506001810190506130a3565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60208201600082015161311f60008501826127cd565b50505050565b60208201600082015161313b6000850182612776565b50505050565b60e0820160008201516131576000850182612b17565b50602082015161316a6020850182613109565b50604082015161317d6040850182613109565b5060608201516131906060850182613109565b5060808201516131a36080850182613125565b5060a08201516131b660a0850182613125565b5060c08201516131c960c0850182613125565b50505050565b60006131db8383613141565b60e08301905092915050565b6000602082019050919050565b60006131ff826130dd565b61320981856130e8565b9350613214836130f9565b8060005b8381101561324557815161322c88826131cf565b9750613237836131e7565b925050600181019050613218565b5085935050505092915050565b60608201600082015161326860008501826127dc565b50602082015161327b60208501826127cd565b50604082015161328e6040850182612b17565b50505050565b6000610980830160008301516132ad6000860182612829565b5060208301516132c06020860182612b26565b5060408301516132d46101e0860182612cca565b5060608301516132e86104c0860182612e82565b5060808301516132fc6105e0860182612f25565b5060a0830151613310610600860182612f76565b5060c0830151613324610760860182612f76565b5060e08301518482036108c086015261333d828261307f565b9150506101008301518482036108e086015261335982826131f4565b915050610120830151613370610900860182613252565b506101408301516133856109608601826127dc565b508091505092915050565b600061339c8383613294565b905092915050565b6000602082019050919050565b60006133bc82612adf565b6133c68185612aea565b9350836020820285016133d885612afb565b8060005b8581101561341457848403895281516133f58582613390565b9450613400836133a4565b925060208a019950506001810190506133dc565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60a08201600082015161346860008501826127dc565b50602082015161347b60208501826127dc565b50604082015161348e60408501826127cd565b5060608201516134a16060850182612776565b5060808201516134b460808501826127dc565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006134f283836127cd565b60208301905092915050565b6000602082019050919050565b6000613516826134ba565b61352081856134c5565b935061352b836134d6565b8060005b8381101561355c57815161354388826134e6565b975061354e836134fe565b92505060018101905061352f565b5085935050505092915050565b6000610400830160008301516135826000860182612829565b5060208301516135956020860182612f25565b5060408301516135a86040860182613452565b5060608301516135bb60e0860182612f76565b5060808301516135cf610240860182612f76565b5060a08301518482036103a08601526135e8828261307f565b91505060c08301518482036103c086015261360382826131f4565b91505060e08301518482036103e086015261361e828261350b565b9150508091505092915050565b60006136378383613569565b905092915050565b6000602082019050919050565b600061365782613426565b6136618185613431565b93508360208202850161367385613442565b8060005b858110156136af5784840389528151613690858261362b565b945061369b8361363f565b925060208a01995050600181019050613677565b50829750879550505050505092915050565b6000610420830160008301516136da60008601826126f0565b50602083015184820360208601526136f2828261271b565b91505060408301516137076040860182612785565b50606083015161371a60608601826127cd565b50608083015161372d6080860182612776565b5060a083015161374060a08601826127dc565b5060c083015184820360c0860152613758828261289f565b91505060e083015161376d60e08601826128fd565b506101008301516137826101a0860182612978565b50610120830151613797610280860182612978565b506101408301518482036103608601526137b18282612ab5565b9150506101608301518482036103808601526137cd8282612ab5565b9150506101808301516137e46103a0860182612776565b506101a08301516137f96103c08601826127cd565b506101c08301518482036103e086015261381382826133b1565b9150506101e083015184820361040086015261382f828261364c565b9150508091505092915050565b600061384883836136c1565b905092915050565b6000602082019050919050565b600061386882612674565b613872818561267f565b93508360208202850161388485612690565b8060005b858110156138c057848403895281516138a1858261383c565b94506138ac83613850565b925060208a01995050600181019050613888565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6101608201600082015161391560008501826126f0565b5060208201516139286020850182612f25565b50604082015161393b60408501826128fd565b50606082015161394f610100850182612776565b506080820151613963610120850182612776565b5060a0820151613977610140850182612b17565b50505050565b600061398983836138fe565b6101608301905092915050565b6000602082019050919050565b60006139ae826138d2565b6139b881856138dd565b93506139c3836138ee565b8060005b838110156139f45781516139db888261397d565b97506139e683613996565b9250506001810190506139c7565b5085935050505092915050565b60006040830160008301518482036000860152613a1e828261385d565b91505060208301518482036020860152613a3882826139a3565b9150508091505092915050565b600060a0830160008301518482036000860152613a6282826125ff565b91505060208301518482036020860152613a7c82826125ff565b91505060408301518482036040860152613a9682826125ff565b91505060608301518482036060860152613ab08282613a01565b91505060808301518482036080860152613aca8282613a01565b9150508091505092915050565b60006020820190508181036000830152613af18184613a45565b905092915050565b613b0281612b0b565b8114613b0d57600080fd5b50565b600081359050613b1f81613af9565b92915050565b600080600060608486031215613b3e57613b3d611d72565b5b6000613b4c86828701611dd7565b9350506020613b5d868287016123dd565b9250506040613b6e86828701613b10565b9150509250925092565b600061042083016000830151613b9160008601826126f0565b5060208301518482036020860152613ba9828261271b565b9150506040830151613bbe6040860182612785565b506060830151613bd160608601826127cd565b506080830151613be46080860182612776565b5060a0830151613bf760a08601826127dc565b5060c083015184820360c0860152613c0f828261289f565b91505060e0830151613c2460e08601826128fd565b50610100830151613c396101a0860182612978565b50610120830151613c4e610280860182612978565b50610140830151848203610360860152613c688282612ab5565b915050610160830151848203610380860152613c848282612ab5565b915050610180830151613c9b6103a0860182612776565b506101a0830151613cb06103c08601826127cd565b506101c08301518482036103e0860152613cca82826133b1565b9150506101e0830151848203610400860152613ce6828261364c565b9150508091505092915050565b60006020820190508181036000830152613d0d8184613b78565b905092915050565b613d1e816127a1565b8114613d2957600080fd5b50565b600081359050613d3b81613d15565b92915050565b600080600080600060a08688031215613d5d57613d5c611d72565b5b6000613d6b88828901611dd7565b9550506020613d7c88828901611e03565b9450506040613d8d88828901611e03565b9350506060613d9e88828901611e39565b9250506080613daf88828901613d2c565b9150509295509295909350565b61016082016000820151613dd360008501826126f0565b506020820151613de66020850182612f25565b506040820151613df960408501826128fd565b506060820151613e0d610100850182612776565b506080820151613e21610120850182612776565b5060a0820151613e35610140850182612b17565b50505050565b600061016082019050613e516000830184613dbc565b92915050565b613e6081611d9c565b8114613e6b57600080fd5b50565b600081519050613e7d81613e57565b92915050565b600060208284031215613e9957613e98611d72565b5b6000613ea784828501613e6e565b91505092915050565b613eb981611d9c565b82525050565b613ec881612754565b82525050565b6000608082019050613ee36000830187613eb0565b613ef06020830186613ebf565b613efd6040830185613ebf565b613f0a6060830184613ebf565b95945050505050565b6000602082019050613f286000830184613eb0565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613f9782611e18565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613fc957613fc8613f5d565b5b600182019050919050565b6000613fdf826126cc565b9050919050565b613fef81613fd4565b82525050565b613ffe81611e18565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b614039816120b9565b82525050565b600061404b8383614030565b60208301905092915050565b6000602082019050919050565b600061406f82614004565b614079818561400f565b935061408483614020565b8060005b838110156140b557815161409c888261403f565b97506140a783614057565b925050600181019050614088565b5085935050505092915050565b600060a0820190506140d76000830188613fe6565b6140e46020830187613ff5565b81810360408301526140f68186614064565b90506141056060830185613ff5565b81810360808301526141178184611ef8565b90509695505050505050565b60006141366141318461218b565b611fcd565b90508281526020810184848401111561415257614151612186565b5b61415d848285611ebd565b509392505050565b600082601f83011261417a57614179611f68565b5b815161418a848260208601614123565b91505092915050565b6000602082840312156141a9576141a8611d72565b5b600082015167ffffffffffffffff8111156141c7576141c6611d77565b5b6141d384828501614165565b91505092915050565b600067ffffffffffffffff8211156141f7576141f6611f6d565b5b61420082611ee7565b9050602081019050919050565b600061422061421b846141dc565b611fcd565b90508281526020810184848401111561423c5761423b612186565b5b614247848285611ebd565b509392505050565b600082601f83011261426457614263611f68565b5b815161427484826020860161420d565b91505092915050565b60006020828403121561429357614292611d72565b5b600082015167ffffffffffffffff8111156142b1576142b0611d77565b5b6142bd8482850161424f565b91505092915050565b6000815190506142d581611e22565b92915050565b6000602082840312156142f1576142f0612019565b5b6142fb6020611fcd565b9050600061430b848285016142c6565b60008301525092915050565b60006020828403121561432d5761432c611d72565b5b600061433b848285016142db565b91505092915050565b60008151905061435381613d15565b92915050565b60006020828403121561436f5761436e611d72565b5b600061437d84828501614344565b91505092915050565b60006020828403121561439c5761439b611d72565b5b60006143aa848285016142c6565b91505092915050565b6000815190506143c281612061565b92915050565b6000602082840312156143de576143dd611d72565b5b60006143ec848285016143b3565b91505092915050565b600060c0828403121561440b5761440a612019565b5b61441560c0611fcd565b90506000614425848285016143b3565b6000830152506020614439848285016143b3565b602083015250604061444d848285016142c6565b6040830152506060614461848285016142c6565b6060830152506080614475848285016142c6565b60808301525060a0614489848285016142c6565b60a08301525092915050565b600060c082840312156144ab576144aa611d72565b5b60006144b9848285016143f5565b91505092915050565b60006020820190506144d76000830184613ff5565b92915050565b600060e082840312156144f3576144f2612019565b5b6144fd60e0611fcd565b9050600061450d848285016142c6565b6000830152506020614521848285016142c6565b6020830152506040614535848285016142c6565b604083015250606061454984828501614344565b606083015250608061455d848285016142c6565b60808301525060a0614571848285016142c6565b60a08301525060c0614585848285016143b3565b60c08301525092915050565b600060e082840312156145a7576145a6611d72565b5b60006145b5848285016144dd565b91505092915050565b600067ffffffffffffffff8211156145d9576145d8611f6d565b5b602082029050602081019050919050565b60006145fd6145f8846145be565b611fcd565b905080838252602082019050602084028301858111156146205761461f612014565b5b835b81811015614649578061463588826143b3565b845260208401935050602081019050614622565b5050509392505050565b600082601f83011261466857614667611f68565b5b81516146788482602086016145ea565b91505092915050565b60006020828403121561469757614696612019565b5b6146a16020611fcd565b9050600082015167ffffffffffffffff8111156146c1576146c061201e565b5b6146cd84828501614653565b60008301525092915050565b6000602082840312156146ef576146ee611d72565b5b600082015167ffffffffffffffff81111561470d5761470c611d77565b5b61471984828501614681565b91505092915050565b600061472d82611d9c565b9050919050565b61473d81614722565b811461474857600080fd5b50565b60008151905061475a81614734565b92915050565b60006060828403121561477657614775612019565b5b6147806060611fcd565b905060006147908482850161474b565b60008301525060206147a4848285016143b3565b60208301525060406147b8848285016142c6565b60408301525092915050565b6000606082840312156147da576147d9611d72565b5b60006147e884828501614760565b91505092915050565b6147fa81612817565b82525050565b600060208201905061481560008301846147f1565b92915050565b60008151905061482a81613af9565b92915050565b60006101c0828403121561484757614846612019565b5b6148526101c0611fcd565b90506000614862848285016142c6565b6000830152506020614876848285016142c6565b602083015250604061488a848285016142c6565b604083015250606061489e848285016142c6565b60608301525060806148b2848285016142c6565b60808301525060a06148c6848285016143b3565b60a08301525060c06148da848285016143b3565b60c08301525060e06148ee848285016142c6565b60e083015250610100614903848285016142c6565b61010083015250610120614919848285016142c6565b6101208301525061014061492f848285016142c6565b610140830152506101606149458482850161481b565b6101608301525061018061495b8482850161481b565b610180830152506101a06149718482850161481b565b6101a08301525092915050565b60006080828403121561499457614993612019565b5b61499e6080611fcd565b905060006149ae848285016142c6565b60008301525060206149c2848285016142c6565b60208301525060406149d6848285016142c6565b60408301525060606149ea848285016142c6565b60608301525092915050565b600060408284031215614a0c57614a0b612019565b5b614a166040611fcd565b90506000614a26848285016142c6565b6000830152506020614a3a848285016142c6565b60208301525092915050565b60006102e08284031215614a5d57614a5c612019565b5b614a68610260611fcd565b90506000614a78848285016142c6565b6000830152506020614a8c848285016142c6565b6020830152506040614aa0848285016142c6565b6040830152506060614ab4848285016142c6565b6060830152506080614ac8848285016142c6565b60808301525060a0614adc848285016142c6565b60a08301525060c0614af0848285016142c6565b60c08301525060e0614b04848285016142c6565b60e083015250610100614b19848285016142c6565b61010083015250610120614b2f848285016142c6565b61012083015250610140614b45848285016142c6565b61014083015250610160614b5b848285016142c6565b61016083015250610180614b718482850161497e565b61018083015250610200614b87848285016149f6565b6101a083015250610240614b9d848285016142c6565b6101c083015250610260614bb3848285016142c6565b6101e083015250610280614bc9848285016142c6565b610200830152506102a0614bdf848285016143b3565b610220830152506102c0614bf58482850161481b565b6102408301525092915050565b600060408284031215614c1857614c17612019565b5b614c226040611fcd565b90506000614c3284828501614344565b6000830152506020614c4684828501614344565b60208301525092915050565b60006101208284031215614c6957614c68612019565b5b614c74610100611fcd565b90506000614c84848285016143b3565b6000830152506020614c98848285016143b3565b6020830152506040614cac848285016142c6565b6040830152506060614cc0848285016142c6565b6060830152506080614cd4848285016142c6565b60808301525060a0614ce8848285016142c6565b60a08301525060c0614cfc84828501614c02565b60c083015250610100614d1184828501614344565b60e08301525092915050565b600081519050614d2c81611dec565b92915050565b600060608284031215614d4857614d47612019565b5b614d526060611fcd565b90506000614d6284828501614344565b6000830152506020614d7684828501614344565b6020830152506040614d8a84828501614344565b60408301525092915050565b60006101608284031215614dad57614dac612019565b5b614db8610120611fcd565b90506000614dc8848285016143b3565b6000830152506020614ddc848285016142c6565b6020830152506040614df0848285016142c6565b6040830152506060614e04848285016142c6565b6060830152506080614e18848285016142c6565b60808301525060a0614e2c848285016142c6565b60a08301525060c0614e4084828501614344565b60c08301525060e0614e5484828501614344565b60e083015250610100614e6984828501614d32565b6101008301525092915050565b600067ffffffffffffffff821115614e9157614e90611f6d565b5b602082029050602081019050919050565b6000614eb5614eb084614e76565b611fcd565b9050808382526020820190506101608402830185811115614ed957614ed8612014565b5b835b81811015614f035780614eee8882614d96565b84526020840193505061016081019050614edb565b5050509392505050565b600082601f830112614f2257614f21611f68565b5b8151614f32848260208601614ea2565b91505092915050565b600067ffffffffffffffff821115614f5657614f55611f6d565b5b602082029050602081019050919050565b600060208284031215614f7d57614f7c612019565b5b614f876020611fcd565b90506000614f9784828501614344565b60008301525092915050565b600060208284031215614fb957614fb8612019565b5b614fc36020611fcd565b90506000614fd3848285016142c6565b60008301525092915050565b600060e08284031215614ff557614ff4612019565b5b614fff60e0611fcd565b9050600061500f8482850161481b565b600083015250602061502384828501614f67565b602083015250604061503784828501614f67565b604083015250606061504b84828501614f67565b606083015250608061505f84828501614fa3565b60808301525060a061507384828501614fa3565b60a08301525060c061508784828501614fa3565b60c08301525092915050565b60006150a66150a184614f3b565b611fcd565b90508083825260208201905060e084028301858111156150c9576150c8612014565b5b835b818110156150f257806150de8882614fdf565b84526020840193505060e0810190506150cb565b5050509392505050565b600082601f83011261511157615110611f68565b5b8151615121848260208601615093565b91505092915050565b6000606082840312156151405761513f612019565b5b61514a6060611fcd565b9050600061515a848285016143b3565b600083015250602061516e84828501614344565b60208301525060406151828482850161481b565b60408301525092915050565b600061098082840312156151a5576151a4612019565b5b6151b0610160611fcd565b905060006151c08482850161474b565b60008301525060206151d484828501614830565b6020830152506101e06151e984828501614a46565b6040830152506104c06151fe84828501614c52565b6060830152506105e061521384828501614d1d565b60808301525061060061522884828501614d96565b60a08301525061076061523d84828501614d96565b60c0830152506108c082015167ffffffffffffffff8111156152625761526161201e565b5b61526e84828501614f0d565b60e0830152506108e082015167ffffffffffffffff8111156152935761529261201e565b5b61529f848285016150fc565b610100830152506109006152b58482850161512a565b610120830152506109606152cb848285016143b3565b6101408301525092915050565b6000602082840312156152ee576152ed611d72565b5b600082015167ffffffffffffffff81111561530c5761530b611d77565b5b6153188482850161518e565b91505092915050565b600060408201905061533660008301856147f1565b6153436020830184613eb0565b9392505050565b600060a082840312156153605761535f612019565b5b61536a60a0611fcd565b9050600061537a848285016143b3565b600083015250602061538e848285016143b3565b60208301525060406153a284828501614344565b60408301525060606153b6848285016142c6565b60608301525060806153ca848285016143b3565b60808301525092915050565b600067ffffffffffffffff8211156153f1576153f0611f6d565b5b602082029050602081019050919050565b6000615415615410846153d6565b611fcd565b9050808382526020820190506020840283018581111561543857615437612014565b5b835b81811015615461578061544d8882614344565b84526020840193505060208101905061543a565b5050509392505050565b600082601f8301126154805761547f611f68565b5b8151615490848260208601615402565b91505092915050565b600061040082840312156154b0576154af612019565b5b6154bb610100611fcd565b905060006154cb8482850161474b565b60008301525060206154df84828501614d1d565b60208301525060406154f38482850161534a565b60408301525060e061550784828501614d96565b60608301525061024061551c84828501614d96565b6080830152506103a082015167ffffffffffffffff8111156155415761554061201e565b5b61554d84828501614f0d565b60a0830152506103c082015167ffffffffffffffff8111156155725761557161201e565b5b61557e848285016150fc565b60c0830152506103e082015167ffffffffffffffff8111156155a3576155a261201e565b5b6155af8482850161546b565b60e08301525092915050565b6000602082840312156155d1576155d0611d72565b5b600082015167ffffffffffffffff8111156155ef576155ee611d77565b5b6155fb84828501615499565b91505092915050565b600061560f82611d9c565b9050919050565b61561f81615604565b811461562a57600080fd5b50565b60008151905061563c81615616565b92915050565b60006020828403121561565857615657611d72565b5b60006156668482850161562d565b91505092915050565b60006040820190506156846000830185613eb0565b6156916020830184613eb0565b9392505050565b6000602082840312156156ae576156ad611d72565b5b60006156bc8482850161481b565b91505092915050565b60006040820190506156da6000830185613eb0565b6156e76020830184613ff5565b9392505050565b60006156f982611e18565b915061570483611e18565b925082820190508082111561571c5761571b613f5d565b5b92915050565b600061572d826127a1565b9150615738836127a1565b9250828201905082811215600083121683821260008412151617156157605761575f613f5d565b5b92915050565b61576f816127a1565b82525050565b600060208201905061578a6000830184615766565b92915050565b600061579b82611e18565b91506157a683611e18565b92508282026157b481611e18565b915082820484148315176157cb576157ca613f5d565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061580c82611e18565b915061581783611e18565b925082615827576158266157d2565b5b82820490509291505056fea2646970667358221220fed8fb3aff70ed3705a52b4025d07e572bb1c8ad3d383716eaa15bc1486c61ac64736f6c63430008130033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f8b00d81461005157806332dd5bd41461008257806366e7f423146100b2578063ea646943146100e2575b600080fd5b61006b60048036038101906100669190611e4e565b610112565b604051610079929190611f31565b60405180910390f35b61009c600480360381019061009791906124b5565b610327565b6040516100a99190613ad7565b60405180910390f35b6100cc60048036038101906100c79190613b25565b6109b4565b6040516100d99190613cf3565b60405180910390f35b6100fc60048036038101906100f79190613d41565b61133e565b6040516101099190613e3b565b60405180910390f35b6060806101ac858673ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610164573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101889190613e83565b73ffffffffffffffffffffffffffffffffffffffff166115f490919063ffffffff16565b8473ffffffffffffffffffffffffffffffffffffffff1663d2c3aaf230856000806040518563ffffffff1660e01b81526004016101ec9493929190613ece565b600060405180830381600087803b15801561020657600080fd5b505af1925050508015610217575060015b610256573d8060008114610247576040519150601f19603f3d011682016040523d82523d6000602084013e61024c565b606091505b5080925050610269565b6040518060200160405280600081525091505b8473ffffffffffffffffffffffffffffffffffffffff16636a256b29856040518263ffffffff1660e01b81526004016102a29190613f13565b600060405180830381600087803b1580156102bc57600080fd5b505af19250505080156102cd575060015b61030c573d80600081146102fd576040519150601f19603f3d011682016040523d82523d6000602084013e610302565b606091505b508091505061031f565b6040518060200160405280600081525090505b935093915050565b61032f611774565b6000845167ffffffffffffffff81111561034c5761034b611f6d565b5b60405190808252806020026020018201604052801561038557816020015b6103726117af565b81526020019060019003908161036a5790505b5090506000855167ffffffffffffffff8111156103a5576103a4611f6d565b5b6040519080825280602002602001820160405280156103de57816020015b6103cb611866565b8152602001906001900390816103c35790505b50905060005b86518110156104c55761041387828151811061040357610402613f2e565b5b60200260200101518960006109b4565b83828151811061042657610425613f2e565b5b602002602001018190525061049487828151811061044757610446613f2e565b5b6020026020010151878786858151811061046457610463613f2e565b5b60200260200101516080015187868151811061048357610482613f2e565b5b60200260200101516060015161133e565b8282815181106104a7576104a6613f2e565b5b602002602001018190525080806104bd90613f8c565b9150506103e4565b508183606001516000018190525080836060015160200181905250875167ffffffffffffffff8111156104fb576104fa611f6d565b5b60405190808252806020026020018201604052801561052e57816020015b60608152602001906001900390816105195790505b50836000018190525060005b8851811015610697578773ffffffffffffffffffffffffffffffffffffffff1663a05a212e8a838151811061057257610571613f2e565b5b6020026020010151600001518b848151811061059157610590613f2e565b5b6020026020010151602001518c85815181106105b0576105af613f2e565b5b6020026020010151604001518d86815181106105cf576105ce613f2e565b5b6020026020010151606001518e87815181106105ee576105ed613f2e565b5b6020026020010151608001516040518663ffffffff1660e01b815260040161061a9594939291906140c2565b6000604051808303816000875af1158015610639573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906106629190614193565b8460000151828151811061067957610678613f2e565b5b6020026020010181905250808061068f90613f8c565b91505061053a565b50855167ffffffffffffffff8111156106b3576106b2611f6d565b5b6040519080825280602002602001820160405280156106e657816020015b60608152602001906001900390816106d15790505b508360400181905250855167ffffffffffffffff81111561070a57610709611f6d565b5b60405190808252806020026020018201604052801561073d57816020015b60608152602001906001900390816107285790505b50836020018190525060005b86518110156107f55761079e87828151811061076857610767613f2e565b5b602002602001015187866060015160000151848151811061078c5761078b613f2e565b5b60200260200101516101800151610112565b856020015183815181106107b5576107b4613f2e565b5b60200260200101866040015184815181106107d3576107d2613f2e565b5b60200260200101829052829052505080806107ed90613f8c565b915050610749565b506000865167ffffffffffffffff81111561081357610812611f6d565b5b60405190808252806020026020018201604052801561084c57816020015b6108396117af565b8152602001906001900390816108315790505b5090506000875167ffffffffffffffff81111561086c5761086b611f6d565b5b6040519080825280602002602001820160405280156108a557816020015b610892611866565b81526020019060019003908161088a5790505b50905060005b885181101561098c576108da8982815181106108ca576108c9613f2e565b5b60200260200101518b60016109b4565b8382815181106108ed576108ec613f2e565b5b602002602001018190525061095b89828151811061090e5761090d613f2e565b5b6020026020010151898986858151811061092b5761092a613f2e565b5b60200260200101516080015187868151811061094a57610949613f2e565b5b60200260200101516060015161133e565b82828151811061096e5761096d613f2e565b5b6020026020010181905250808061098490613f8c565b9150506108ab565b5081856080015160000181905250808560800151602001819052505050505095945050505050565b6109bc6117af565b83816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a3f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610a68919061427d565b81602001819052508373ffffffffffffffffffffffffffffffffffffffff1663ad4d4e296040518163ffffffff1660e01b8152600401602060405180830381865afa158015610abb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adf9190614317565b81604001819052508373ffffffffffffffffffffffffffffffffffffffff166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b569190614359565b8160600181815250508373ffffffffffffffffffffffffffffffffffffffff16633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa158015610baa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bce9190614386565b8160800181815250508373ffffffffffffffffffffffffffffffffffffffff16638162486b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4691906143c8565b8160a00181815250508060a0015167ffffffffffffffff811115610c6d57610c6c611f6d565b5b604051908082528060200260200182016040528015610ca657816020015b610c936118d0565b815260200190600190039081610c8b5790505b508160c001819052508060a0015167ffffffffffffffff811115610ccd57610ccc611f6d565b5b604051908082528060200260200182016040528015610d0657816020015b610cf3611907565b815260200190600190039081610ceb5790505b50816101c001819052508060a0015167ffffffffffffffff811115610d2e57610d2d611f6d565b5b604051908082528060200260200182016040528015610d6757816020015b610d546119b1565b815260200190600190039081610d4c5790505b50816101e001819052508373ffffffffffffffffffffffffffffffffffffffff16635e5c06e260006040518263ffffffff1660e01b8152600401610dab9190613f13565b60c060405180830381865afa158015610dc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dec9190614495565b8160e001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151602001516040518263ffffffff1660e01b8152600401610e3591906144c2565b60e060405180830381865afa158015610e52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e769190614591565b8161010001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151600001516040518263ffffffff1660e01b8152600401610ec091906144c2565b60e060405180830381865afa158015610edd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f019190614591565b8161012001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151602001516040518263ffffffff1660e01b8152600401610f4b91906144c2565b600060405180830381865afa158015610f68573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610f9191906146d9565b8161014001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151600001516040518263ffffffff1660e01b8152600401610fdb91906144c2565b600060405180830381865afa158015610ff8573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061102191906146d9565b81610160018190525060005b8160a00151811015611305578473ffffffffffffffffffffffffffffffffffffffff1663f4ddb5be826040518263ffffffff1660e01b815260040161107291906144c2565b606060405180830381865afa15801561108f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b391906147c4565b8260c0015182815181106110ca576110c9613f2e565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16636eb79f6a8360c00151838151811061110857611107613f2e565b5b6020026020010151600001516040518263ffffffff1660e01b81526004016111309190614800565b600060405180830381865afa15801561114d573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061117691906152d8565b826101c00151828151811061118e5761118d613f2e565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16637987bd7f8360c0015183815181106111cc576111cb613f2e565b5b602002602001015160000151876040518363ffffffff1660e01b81526004016111f6929190615321565b600060405180830381865afa158015611213573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061123c91906155bb565b826101e00151828151811061125457611253613f2e565b5b602002602001018190525061129f826101c00151828151811061127a57611279613f2e565b5b602002602001015160200151610140015183610180015161169790919063ffffffff16565b826101800181815250506112e8826101e0015182815181106112c4576112c3613f2e565b5b60200260200101516040015160400151836101a001516116ad90919063ffffffff16565b826101a001818152505080806112fd90613f8c565b91505061102d565b5081156113375761132d81610120015160600151826101a001516116ad90919063ffffffff16565b8160600181815250505b9392505050565b611346611866565b85816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505084816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508573ffffffffffffffffffffffffffffffffffffffff16635e5c06e2866040518263ffffffff1660e01b81526004016113ef9190613f13565b60c060405180830381865afa15801561140c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114309190614495565b8160400181905250611441836116c3565b6114825761147d61146461145f6000856116cf90919063ffffffff16565b6116e3565b848360400151604001516117389092919063ffffffff16565b61148c565b8060400151604001515b81606001818152505061149e836116c3565b6114df576114da6114c16114bc6000856116cf90919063ffffffff16565b6116e3565b84836040015160a001516117389092919063ffffffff16565b6114e9565b806040015160a001515b8160800181815250508573ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561153d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115619190615642565b73ffffffffffffffffffffffffffffffffffffffff16632637588e86866040518363ffffffff1660e01b815260040161159b92919061566f565b602060405180830381865afa1580156115b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115dc9190615698565b8160a001901515908115158152505095945050505050565b8173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b815260040161164f9291906156c5565b6020604051808303816000875af115801561166e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116929190615698565b505050565b600081836116a591906156ee565b905092915050565b600081836116bb9190615722565b905092915050565b60008082149050919050565b60006116db838361175a565b905092915050565b600080829050600081121561172f57806040517fb02ef0870000000000000000000000000000000000000000000000000000000081526004016117269190615775565b60405180910390fd5b80915050919050565b60008183856117479190615790565b6117519190615801565b90509392505050565b60008183121561176a578161176c565b825b905092915050565b6040518060a0016040528060608152602001606081526020016060815260200161179c611a34565b81526020016117a9611a34565b81525090565b604051806102000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016117e7611a4e565b815260200160008152602001600081526020016000815260200160608152602001611810611a61565b815260200161181d611a97565b815260200161182a611a97565b8152602001611837611ad4565b8152602001611844611ad4565b8152602001600081526020016000815260200160608152602001606081525090565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016118b3611a61565b815260200160008152602001600081526020016000151581525090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611938611ae7565b8152602001611945611b5c565b8152602001611952611bfc565b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161197c611c47565b8152602001611989611c47565b815260200160608152602001606081526020016119a4611c99565b8152602001600081525090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016119ff611cbc565b8152602001611a0c611c47565b8152602001611a19611c47565b81526020016060815260200160608152602001606081525090565b604051806040016040528060608152602001606081525090565b6040518060200160405280600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280606081525090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581525090565b604051806102600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611bc4611ceb565b8152602001611bd1611d13565b8152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611c3a611d2d565b8152602001600081525090565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611c93611d47565b81525090565b604051806060016040528060008152602001600081526020016000151581525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611da782611d7c565b9050919050565b6000611db982611d9c565b9050919050565b611dc981611dae565b8114611dd457600080fd5b50565b600081359050611de681611dc0565b92915050565b611df581611d9c565b8114611e0057600080fd5b50565b600081359050611e1281611dec565b92915050565b6000819050919050565b611e2b81611e18565b8114611e3657600080fd5b50565b600081359050611e4881611e22565b92915050565b600080600060608486031215611e6757611e66611d72565b5b6000611e7586828701611dd7565b9350506020611e8686828701611e03565b9250506040611e9786828701611e39565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015611edb578082015181840152602081019050611ec0565b60008484015250505050565b6000601f19601f8301169050919050565b6000611f0382611ea1565b611f0d8185611eac565b9350611f1d818560208601611ebd565b611f2681611ee7565b840191505092915050565b60006040820190508181036000830152611f4b8185611ef8565b90508181036020830152611f5f8184611ef8565b90509392505050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611fa582611ee7565b810181811067ffffffffffffffff82111715611fc457611fc3611f6d565b5b80604052505050565b6000611fd7611d68565b9050611fe38282611f9c565b919050565b600067ffffffffffffffff82111561200357612002611f6d565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600061202e82611d9c565b9050919050565b61203e81612023565b811461204957600080fd5b50565b60008135905061205b81612035565b92915050565b61206a81611e18565b811461207557600080fd5b50565b60008135905061208781612061565b92915050565b600067ffffffffffffffff8211156120a8576120a7611f6d565b5b602082029050602081019050919050565b6000819050919050565b6120cc816120b9565b81146120d757600080fd5b50565b6000813590506120e9816120c3565b92915050565b60006121026120fd8461208d565b611fcd565b9050808382526020820190506020840283018581111561212557612124612014565b5b835b8181101561214e578061213a88826120da565b845260208401935050602081019050612127565b5050509392505050565b600082601f83011261216d5761216c611f68565b5b813561217d8482602086016120ef565b91505092915050565b600080fd5b600067ffffffffffffffff8211156121a6576121a5611f6d565b5b6121af82611ee7565b9050602081019050919050565b82818337600083830152505050565b60006121de6121d98461218b565b611fcd565b9050828152602081018484840111156121fa576121f9612186565b5b6122058482856121bc565b509392505050565b600082601f83011261222257612221611f68565b5b81356122328482602086016121cb565b91505092915050565b600060a0828403121561225157612250612019565b5b61225b60a0611fcd565b9050600061226b8482850161204c565b600083015250602061227f84828501612078565b602083015250604082013567ffffffffffffffff8111156122a3576122a261201e565b5b6122af84828501612158565b60408301525060606122c384828501612078565b606083015250608082013567ffffffffffffffff8111156122e7576122e661201e565b5b6122f38482850161220d565b60808301525092915050565b600061231261230d84611fe8565b611fcd565b9050808382526020820190506020840283018581111561233557612334612014565b5b835b8181101561237c57803567ffffffffffffffff81111561235a57612359611f68565b5b808601612367898261223b565b85526020850194505050602081019050612337565b5050509392505050565b600082601f83011261239b5761239a611f68565b5b81356123ab8482602086016122ff565b91505092915050565b60006123bf82611d9c565b9050919050565b6123cf816123b4565b81146123da57600080fd5b50565b6000813590506123ec816123c6565b92915050565b600067ffffffffffffffff82111561240d5761240c611f6d565b5b602082029050602081019050919050565b600061243161242c846123f2565b611fcd565b9050808382526020820190506020840283018581111561245457612453612014565b5b835b8181101561247d57806124698882611dd7565b845260208401935050602081019050612456565b5050509392505050565b600082601f83011261249c5761249b611f68565b5b81356124ac84826020860161241e565b91505092915050565b600080600080600060a086880312156124d1576124d0611d72565b5b600086013567ffffffffffffffff8111156124ef576124ee611d77565b5b6124fb88828901612386565b955050602061250c888289016123dd565b945050604086013567ffffffffffffffff81111561252d5761252c611d77565b5b61253988828901612487565b935050606061254a88828901611e03565b925050608061255b88828901611e03565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b60006125b082611ea1565b6125ba8185612594565b93506125ca818560208601611ebd565b6125d381611ee7565b840191505092915050565b60006125ea83836125a5565b905092915050565b6000602082019050919050565b600061260a82612568565b6126148185612573565b93508360208202850161262685612584565b8060005b85811015612662578484038952815161264385826125de565b945061264e836125f2565b925060208a0199505060018101905061262a565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b60006126c56126c06126bb84611d7c565b6126a0565b611d7c565b9050919050565b60006126d7826126aa565b9050919050565b60006126e9826126cc565b9050919050565b6126f9816126de565b82525050565b600081519050919050565b600082825260208201905092915050565b6000612726826126ff565b612730818561270a565b9350612740818560208601611ebd565b61274981611ee7565b840191505092915050565b600061276f61276a61276584611e18565b6126a0565b611e18565b9050919050565b61277f81612754565b82525050565b60208201600082015161279b6000850182612776565b50505050565b6000819050919050565b60006127c66127c16127bc846127a1565b6126a0565b6127a1565b9050919050565b6127d6816127ab565b82525050565b6127e581611e18565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612822826126cc565b9050919050565b61283281612817565b82525050565b60608201600082015161284e6000850182612829565b50602082015161286160208501826127dc565b5060408201516128746040850182612776565b50505050565b60006128868383612838565b60608301905092915050565b6000602082019050919050565b60006128aa826127eb565b6128b481856127f6565b93506128bf83612807565b8060005b838110156128f05781516128d7888261287a565b97506128e283612892565b9250506001810190506128c3565b5085935050505092915050565b60c08201600082015161291360008501826127dc565b50602082015161292660208501826127dc565b5060408201516129396040850182612776565b50606082015161294c6060850182612776565b50608082015161295f6080850182612776565b5060a082015161297260a0850182612776565b50505050565b60e08201600082015161298e6000850182612776565b5060208201516129a16020850182612776565b5060408201516129b46040850182612776565b5060608201516129c760608501826127cd565b5060808201516129da6080850182612776565b5060a08201516129ed60a0850182612776565b5060c0820151612a0060c08501826127dc565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612a3e83836127dc565b60208301905092915050565b6000602082019050919050565b6000612a6282612a06565b612a6c8185612a11565b9350612a7783612a22565b8060005b83811015612aa8578151612a8f8882612a32565b9750612a9a83612a4a565b925050600181019050612a7b565b5085935050505092915050565b60006020830160008301518482036000860152612ad28282612a57565b9150508091505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b612b2081612b0b565b82525050565b6101c082016000820151612b3d6000850182612776565b506020820151612b506020850182612776565b506040820151612b636040850182612776565b506060820151612b766060850182612776565b506080820151612b896080850182612776565b5060a0820151612b9c60a08501826127dc565b5060c0820151612baf60c08501826127dc565b5060e0820151612bc260e0850182612776565b50610100820151612bd7610100850182612776565b50610120820151612bec610120850182612776565b50610140820151612c01610140850182612776565b50610160820151612c16610160850182612b17565b50610180820151612c2b610180850182612b17565b506101a0820151612c406101a0850182612b17565b50505050565b608082016000820151612c5c6000850182612776565b506020820151612c6f6020850182612776565b506040820151612c826040850182612776565b506060820151612c956060850182612776565b50505050565b604082016000820151612cb16000850182612776565b506020820151612cc46020850182612776565b50505050565b6102e082016000820151612ce16000850182612776565b506020820151612cf46020850182612776565b506040820151612d076040850182612776565b506060820151612d1a6060850182612776565b506080820151612d2d6080850182612776565b5060a0820151612d4060a0850182612776565b5060c0820151612d5360c0850182612776565b5060e0820151612d6660e0850182612776565b50610100820151612d7b610100850182612776565b50610120820151612d90610120850182612776565b50610140820151612da5610140850182612776565b50610160820151612dba610160850182612776565b50610180820151612dcf610180850182612c46565b506101a0820151612de4610200850182612c9b565b506101c0820151612df9610240850182612776565b506101e0820151612e0e610260850182612776565b50610200820151612e23610280850182612776565b50610220820151612e386102a08501826127dc565b50610240820151612e4d6102c0850182612b17565b50505050565b604082016000820151612e6960008501826127cd565b506020820151612e7c60208501826127cd565b50505050565b61012082016000820151612e9960008501826127dc565b506020820151612eac60208501826127dc565b506040820151612ebf6040850182612776565b506060820151612ed26060850182612776565b506080820151612ee56080850182612776565b5060a0820151612ef860a0850182612776565b5060c0820151612f0b60c0850182612e53565b5060e0820151612f1f6101008501826127cd565b50505050565b612f2e81611d9c565b82525050565b606082016000820151612f4a60008501826127cd565b506020820151612f5d60208501826127cd565b506040820151612f7060408501826127cd565b50505050565b61016082016000820151612f8d60008501826127dc565b506020820151612fa06020850182612776565b506040820151612fb36040850182612776565b506060820151612fc66060850182612776565b506080820151612fd96080850182612776565b5060a0820151612fec60a0850182612776565b5060c0820151612fff60c08501826127cd565b5060e082015161301260e08501826127cd565b50610100820151613027610100850182612f34565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006130658383612f76565b6101608301905092915050565b6000602082019050919050565b600061308a8261302d565b6130948185613038565b935061309f83613049565b8060005b838110156130d05781516130b78882613059565b97506130c283613072565b9250506001810190506130a3565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60208201600082015161311f60008501826127cd565b50505050565b60208201600082015161313b6000850182612776565b50505050565b60e0820160008201516131576000850182612b17565b50602082015161316a6020850182613109565b50604082015161317d6040850182613109565b5060608201516131906060850182613109565b5060808201516131a36080850182613125565b5060a08201516131b660a0850182613125565b5060c08201516131c960c0850182613125565b50505050565b60006131db8383613141565b60e08301905092915050565b6000602082019050919050565b60006131ff826130dd565b61320981856130e8565b9350613214836130f9565b8060005b8381101561324557815161322c88826131cf565b9750613237836131e7565b925050600181019050613218565b5085935050505092915050565b60608201600082015161326860008501826127dc565b50602082015161327b60208501826127cd565b50604082015161328e6040850182612b17565b50505050565b6000610980830160008301516132ad6000860182612829565b5060208301516132c06020860182612b26565b5060408301516132d46101e0860182612cca565b5060608301516132e86104c0860182612e82565b5060808301516132fc6105e0860182612f25565b5060a0830151613310610600860182612f76565b5060c0830151613324610760860182612f76565b5060e08301518482036108c086015261333d828261307f565b9150506101008301518482036108e086015261335982826131f4565b915050610120830151613370610900860182613252565b506101408301516133856109608601826127dc565b508091505092915050565b600061339c8383613294565b905092915050565b6000602082019050919050565b60006133bc82612adf565b6133c68185612aea565b9350836020820285016133d885612afb565b8060005b8581101561341457848403895281516133f58582613390565b9450613400836133a4565b925060208a019950506001810190506133dc565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60a08201600082015161346860008501826127dc565b50602082015161347b60208501826127dc565b50604082015161348e60408501826127cd565b5060608201516134a16060850182612776565b5060808201516134b460808501826127dc565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006134f283836127cd565b60208301905092915050565b6000602082019050919050565b6000613516826134ba565b61352081856134c5565b935061352b836134d6565b8060005b8381101561355c57815161354388826134e6565b975061354e836134fe565b92505060018101905061352f565b5085935050505092915050565b6000610400830160008301516135826000860182612829565b5060208301516135956020860182612f25565b5060408301516135a86040860182613452565b5060608301516135bb60e0860182612f76565b5060808301516135cf610240860182612f76565b5060a08301518482036103a08601526135e8828261307f565b91505060c08301518482036103c086015261360382826131f4565b91505060e08301518482036103e086015261361e828261350b565b9150508091505092915050565b60006136378383613569565b905092915050565b6000602082019050919050565b600061365782613426565b6136618185613431565b93508360208202850161367385613442565b8060005b858110156136af5784840389528151613690858261362b565b945061369b8361363f565b925060208a01995050600181019050613677565b50829750879550505050505092915050565b6000610420830160008301516136da60008601826126f0565b50602083015184820360208601526136f2828261271b565b91505060408301516137076040860182612785565b50606083015161371a60608601826127cd565b50608083015161372d6080860182612776565b5060a083015161374060a08601826127dc565b5060c083015184820360c0860152613758828261289f565b91505060e083015161376d60e08601826128fd565b506101008301516137826101a0860182612978565b50610120830151613797610280860182612978565b506101408301518482036103608601526137b18282612ab5565b9150506101608301518482036103808601526137cd8282612ab5565b9150506101808301516137e46103a0860182612776565b506101a08301516137f96103c08601826127cd565b506101c08301518482036103e086015261381382826133b1565b9150506101e083015184820361040086015261382f828261364c565b9150508091505092915050565b600061384883836136c1565b905092915050565b6000602082019050919050565b600061386882612674565b613872818561267f565b93508360208202850161388485612690565b8060005b858110156138c057848403895281516138a1858261383c565b94506138ac83613850565b925060208a01995050600181019050613888565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6101608201600082015161391560008501826126f0565b5060208201516139286020850182612f25565b50604082015161393b60408501826128fd565b50606082015161394f610100850182612776565b506080820151613963610120850182612776565b5060a0820151613977610140850182612b17565b50505050565b600061398983836138fe565b6101608301905092915050565b6000602082019050919050565b60006139ae826138d2565b6139b881856138dd565b93506139c3836138ee565b8060005b838110156139f45781516139db888261397d565b97506139e683613996565b9250506001810190506139c7565b5085935050505092915050565b60006040830160008301518482036000860152613a1e828261385d565b91505060208301518482036020860152613a3882826139a3565b9150508091505092915050565b600060a0830160008301518482036000860152613a6282826125ff565b91505060208301518482036020860152613a7c82826125ff565b91505060408301518482036040860152613a9682826125ff565b91505060608301518482036060860152613ab08282613a01565b91505060808301518482036080860152613aca8282613a01565b9150508091505092915050565b60006020820190508181036000830152613af18184613a45565b905092915050565b613b0281612b0b565b8114613b0d57600080fd5b50565b600081359050613b1f81613af9565b92915050565b600080600060608486031215613b3e57613b3d611d72565b5b6000613b4c86828701611dd7565b9350506020613b5d868287016123dd565b9250506040613b6e86828701613b10565b9150509250925092565b600061042083016000830151613b9160008601826126f0565b5060208301518482036020860152613ba9828261271b565b9150506040830151613bbe6040860182612785565b506060830151613bd160608601826127cd565b506080830151613be46080860182612776565b5060a0830151613bf760a08601826127dc565b5060c083015184820360c0860152613c0f828261289f565b91505060e0830151613c2460e08601826128fd565b50610100830151613c396101a0860182612978565b50610120830151613c4e610280860182612978565b50610140830151848203610360860152613c688282612ab5565b915050610160830151848203610380860152613c848282612ab5565b915050610180830151613c9b6103a0860182612776565b506101a0830151613cb06103c08601826127cd565b506101c08301518482036103e0860152613cca82826133b1565b9150506101e0830151848203610400860152613ce6828261364c565b9150508091505092915050565b60006020820190508181036000830152613d0d8184613b78565b905092915050565b613d1e816127a1565b8114613d2957600080fd5b50565b600081359050613d3b81613d15565b92915050565b600080600080600060a08688031215613d5d57613d5c611d72565b5b6000613d6b88828901611dd7565b9550506020613d7c88828901611e03565b9450506040613d8d88828901611e03565b9350506060613d9e88828901611e39565b9250506080613daf88828901613d2c565b9150509295509295909350565b61016082016000820151613dd360008501826126f0565b506020820151613de66020850182612f25565b506040820151613df960408501826128fd565b506060820151613e0d610100850182612776565b506080820151613e21610120850182612776565b5060a0820151613e35610140850182612b17565b50505050565b600061016082019050613e516000830184613dbc565b92915050565b613e6081611d9c565b8114613e6b57600080fd5b50565b600081519050613e7d81613e57565b92915050565b600060208284031215613e9957613e98611d72565b5b6000613ea784828501613e6e565b91505092915050565b613eb981611d9c565b82525050565b613ec881612754565b82525050565b6000608082019050613ee36000830187613eb0565b613ef06020830186613ebf565b613efd6040830185613ebf565b613f0a6060830184613ebf565b95945050505050565b6000602082019050613f286000830184613eb0565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613f9782611e18565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613fc957613fc8613f5d565b5b600182019050919050565b6000613fdf826126cc565b9050919050565b613fef81613fd4565b82525050565b613ffe81611e18565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b614039816120b9565b82525050565b600061404b8383614030565b60208301905092915050565b6000602082019050919050565b600061406f82614004565b614079818561400f565b935061408483614020565b8060005b838110156140b557815161409c888261403f565b97506140a783614057565b925050600181019050614088565b5085935050505092915050565b600060a0820190506140d76000830188613fe6565b6140e46020830187613ff5565b81810360408301526140f68186614064565b90506141056060830185613ff5565b81810360808301526141178184611ef8565b90509695505050505050565b60006141366141318461218b565b611fcd565b90508281526020810184848401111561415257614151612186565b5b61415d848285611ebd565b509392505050565b600082601f83011261417a57614179611f68565b5b815161418a848260208601614123565b91505092915050565b6000602082840312156141a9576141a8611d72565b5b600082015167ffffffffffffffff8111156141c7576141c6611d77565b5b6141d384828501614165565b91505092915050565b600067ffffffffffffffff8211156141f7576141f6611f6d565b5b61420082611ee7565b9050602081019050919050565b600061422061421b846141dc565b611fcd565b90508281526020810184848401111561423c5761423b612186565b5b614247848285611ebd565b509392505050565b600082601f83011261426457614263611f68565b5b815161427484826020860161420d565b91505092915050565b60006020828403121561429357614292611d72565b5b600082015167ffffffffffffffff8111156142b1576142b0611d77565b5b6142bd8482850161424f565b91505092915050565b6000815190506142d581611e22565b92915050565b6000602082840312156142f1576142f0612019565b5b6142fb6020611fcd565b9050600061430b848285016142c6565b60008301525092915050565b60006020828403121561432d5761432c611d72565b5b600061433b848285016142db565b91505092915050565b60008151905061435381613d15565b92915050565b60006020828403121561436f5761436e611d72565b5b600061437d84828501614344565b91505092915050565b60006020828403121561439c5761439b611d72565b5b60006143aa848285016142c6565b91505092915050565b6000815190506143c281612061565b92915050565b6000602082840312156143de576143dd611d72565b5b60006143ec848285016143b3565b91505092915050565b600060c0828403121561440b5761440a612019565b5b61441560c0611fcd565b90506000614425848285016143b3565b6000830152506020614439848285016143b3565b602083015250604061444d848285016142c6565b6040830152506060614461848285016142c6565b6060830152506080614475848285016142c6565b60808301525060a0614489848285016142c6565b60a08301525092915050565b600060c082840312156144ab576144aa611d72565b5b60006144b9848285016143f5565b91505092915050565b60006020820190506144d76000830184613ff5565b92915050565b600060e082840312156144f3576144f2612019565b5b6144fd60e0611fcd565b9050600061450d848285016142c6565b6000830152506020614521848285016142c6565b6020830152506040614535848285016142c6565b604083015250606061454984828501614344565b606083015250608061455d848285016142c6565b60808301525060a0614571848285016142c6565b60a08301525060c0614585848285016143b3565b60c08301525092915050565b600060e082840312156145a7576145a6611d72565b5b60006145b5848285016144dd565b91505092915050565b600067ffffffffffffffff8211156145d9576145d8611f6d565b5b602082029050602081019050919050565b60006145fd6145f8846145be565b611fcd565b905080838252602082019050602084028301858111156146205761461f612014565b5b835b81811015614649578061463588826143b3565b845260208401935050602081019050614622565b5050509392505050565b600082601f83011261466857614667611f68565b5b81516146788482602086016145ea565b91505092915050565b60006020828403121561469757614696612019565b5b6146a16020611fcd565b9050600082015167ffffffffffffffff8111156146c1576146c061201e565b5b6146cd84828501614653565b60008301525092915050565b6000602082840312156146ef576146ee611d72565b5b600082015167ffffffffffffffff81111561470d5761470c611d77565b5b61471984828501614681565b91505092915050565b600061472d82611d9c565b9050919050565b61473d81614722565b811461474857600080fd5b50565b60008151905061475a81614734565b92915050565b60006060828403121561477657614775612019565b5b6147806060611fcd565b905060006147908482850161474b565b60008301525060206147a4848285016143b3565b60208301525060406147b8848285016142c6565b60408301525092915050565b6000606082840312156147da576147d9611d72565b5b60006147e884828501614760565b91505092915050565b6147fa81612817565b82525050565b600060208201905061481560008301846147f1565b92915050565b60008151905061482a81613af9565b92915050565b60006101c0828403121561484757614846612019565b5b6148526101c0611fcd565b90506000614862848285016142c6565b6000830152506020614876848285016142c6565b602083015250604061488a848285016142c6565b604083015250606061489e848285016142c6565b60608301525060806148b2848285016142c6565b60808301525060a06148c6848285016143b3565b60a08301525060c06148da848285016143b3565b60c08301525060e06148ee848285016142c6565b60e083015250610100614903848285016142c6565b61010083015250610120614919848285016142c6565b6101208301525061014061492f848285016142c6565b610140830152506101606149458482850161481b565b6101608301525061018061495b8482850161481b565b610180830152506101a06149718482850161481b565b6101a08301525092915050565b60006080828403121561499457614993612019565b5b61499e6080611fcd565b905060006149ae848285016142c6565b60008301525060206149c2848285016142c6565b60208301525060406149d6848285016142c6565b60408301525060606149ea848285016142c6565b60608301525092915050565b600060408284031215614a0c57614a0b612019565b5b614a166040611fcd565b90506000614a26848285016142c6565b6000830152506020614a3a848285016142c6565b60208301525092915050565b60006102e08284031215614a5d57614a5c612019565b5b614a68610260611fcd565b90506000614a78848285016142c6565b6000830152506020614a8c848285016142c6565b6020830152506040614aa0848285016142c6565b6040830152506060614ab4848285016142c6565b6060830152506080614ac8848285016142c6565b60808301525060a0614adc848285016142c6565b60a08301525060c0614af0848285016142c6565b60c08301525060e0614b04848285016142c6565b60e083015250610100614b19848285016142c6565b61010083015250610120614b2f848285016142c6565b61012083015250610140614b45848285016142c6565b61014083015250610160614b5b848285016142c6565b61016083015250610180614b718482850161497e565b61018083015250610200614b87848285016149f6565b6101a083015250610240614b9d848285016142c6565b6101c083015250610260614bb3848285016142c6565b6101e083015250610280614bc9848285016142c6565b610200830152506102a0614bdf848285016143b3565b610220830152506102c0614bf58482850161481b565b6102408301525092915050565b600060408284031215614c1857614c17612019565b5b614c226040611fcd565b90506000614c3284828501614344565b6000830152506020614c4684828501614344565b60208301525092915050565b60006101208284031215614c6957614c68612019565b5b614c74610100611fcd565b90506000614c84848285016143b3565b6000830152506020614c98848285016143b3565b6020830152506040614cac848285016142c6565b6040830152506060614cc0848285016142c6565b6060830152506080614cd4848285016142c6565b60808301525060a0614ce8848285016142c6565b60a08301525060c0614cfc84828501614c02565b60c083015250610100614d1184828501614344565b60e08301525092915050565b600081519050614d2c81611dec565b92915050565b600060608284031215614d4857614d47612019565b5b614d526060611fcd565b90506000614d6284828501614344565b6000830152506020614d7684828501614344565b6020830152506040614d8a84828501614344565b60408301525092915050565b60006101608284031215614dad57614dac612019565b5b614db8610120611fcd565b90506000614dc8848285016143b3565b6000830152506020614ddc848285016142c6565b6020830152506040614df0848285016142c6565b6040830152506060614e04848285016142c6565b6060830152506080614e18848285016142c6565b60808301525060a0614e2c848285016142c6565b60a08301525060c0614e4084828501614344565b60c08301525060e0614e5484828501614344565b60e083015250610100614e6984828501614d32565b6101008301525092915050565b600067ffffffffffffffff821115614e9157614e90611f6d565b5b602082029050602081019050919050565b6000614eb5614eb084614e76565b611fcd565b9050808382526020820190506101608402830185811115614ed957614ed8612014565b5b835b81811015614f035780614eee8882614d96565b84526020840193505061016081019050614edb565b5050509392505050565b600082601f830112614f2257614f21611f68565b5b8151614f32848260208601614ea2565b91505092915050565b600067ffffffffffffffff821115614f5657614f55611f6d565b5b602082029050602081019050919050565b600060208284031215614f7d57614f7c612019565b5b614f876020611fcd565b90506000614f9784828501614344565b60008301525092915050565b600060208284031215614fb957614fb8612019565b5b614fc36020611fcd565b90506000614fd3848285016142c6565b60008301525092915050565b600060e08284031215614ff557614ff4612019565b5b614fff60e0611fcd565b9050600061500f8482850161481b565b600083015250602061502384828501614f67565b602083015250604061503784828501614f67565b604083015250606061504b84828501614f67565b606083015250608061505f84828501614fa3565b60808301525060a061507384828501614fa3565b60a08301525060c061508784828501614fa3565b60c08301525092915050565b60006150a66150a184614f3b565b611fcd565b90508083825260208201905060e084028301858111156150c9576150c8612014565b5b835b818110156150f257806150de8882614fdf565b84526020840193505060e0810190506150cb565b5050509392505050565b600082601f83011261511157615110611f68565b5b8151615121848260208601615093565b91505092915050565b6000606082840312156151405761513f612019565b5b61514a6060611fcd565b9050600061515a848285016143b3565b600083015250602061516e84828501614344565b60208301525060406151828482850161481b565b60408301525092915050565b600061098082840312156151a5576151a4612019565b5b6151b0610160611fcd565b905060006151c08482850161474b565b60008301525060206151d484828501614830565b6020830152506101e06151e984828501614a46565b6040830152506104c06151fe84828501614c52565b6060830152506105e061521384828501614d1d565b60808301525061060061522884828501614d96565b60a08301525061076061523d84828501614d96565b60c0830152506108c082015167ffffffffffffffff8111156152625761526161201e565b5b61526e84828501614f0d565b60e0830152506108e082015167ffffffffffffffff8111156152935761529261201e565b5b61529f848285016150fc565b610100830152506109006152b58482850161512a565b610120830152506109606152cb848285016143b3565b6101408301525092915050565b6000602082840312156152ee576152ed611d72565b5b600082015167ffffffffffffffff81111561530c5761530b611d77565b5b6153188482850161518e565b91505092915050565b600060408201905061533660008301856147f1565b6153436020830184613eb0565b9392505050565b600060a082840312156153605761535f612019565b5b61536a60a0611fcd565b9050600061537a848285016143b3565b600083015250602061538e848285016143b3565b60208301525060406153a284828501614344565b60408301525060606153b6848285016142c6565b60608301525060806153ca848285016143b3565b60808301525092915050565b600067ffffffffffffffff8211156153f1576153f0611f6d565b5b602082029050602081019050919050565b6000615415615410846153d6565b611fcd565b9050808382526020820190506020840283018581111561543857615437612014565b5b835b81811015615461578061544d8882614344565b84526020840193505060208101905061543a565b5050509392505050565b600082601f8301126154805761547f611f68565b5b8151615490848260208601615402565b91505092915050565b600061040082840312156154b0576154af612019565b5b6154bb610100611fcd565b905060006154cb8482850161474b565b60008301525060206154df84828501614d1d565b60208301525060406154f38482850161534a565b60408301525060e061550784828501614d96565b60608301525061024061551c84828501614d96565b6080830152506103a082015167ffffffffffffffff8111156155415761554061201e565b5b61554d84828501614f0d565b60a0830152506103c082015167ffffffffffffffff8111156155725761557161201e565b5b61557e848285016150fc565b60c0830152506103e082015167ffffffffffffffff8111156155a3576155a261201e565b5b6155af8482850161546b565b60e08301525092915050565b6000602082840312156155d1576155d0611d72565b5b600082015167ffffffffffffffff8111156155ef576155ee611d77565b5b6155fb84828501615499565b91505092915050565b600061560f82611d9c565b9050919050565b61561f81615604565b811461562a57600080fd5b50565b60008151905061563c81615616565b92915050565b60006020828403121561565857615657611d72565b5b60006156668482850161562d565b91505092915050565b60006040820190506156846000830185613eb0565b6156916020830184613eb0565b9392505050565b6000602082840312156156ae576156ad611d72565b5b60006156bc8482850161481b565b91505092915050565b60006040820190506156da6000830185613eb0565b6156e76020830184613ff5565b9392505050565b60006156f982611e18565b915061570483611e18565b925082820190508082111561571c5761571b613f5d565b5b92915050565b600061572d826127a1565b9150615738836127a1565b9250828201905082811215600083121683821260008412151617156157605761575f613f5d565b5b92915050565b61576f816127a1565b82525050565b600060208201905061578a6000830184615766565b92915050565b600061579b82611e18565b91506157a683611e18565b92508282026157b481611e18565b915082820484148315176157cb576157ca613f5d565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061580c82611e18565b915061581783611e18565b925082615827576158266157d2565b5b82820490509291505056fea2646970667358221220fed8fb3aff70ed3705a52b4025d07e572bb1c8ad3d383716eaa15bc1486c61ac64736f6c63430008130033",
  linkReferences: {},
  deployedLinkReferences: {},
};
