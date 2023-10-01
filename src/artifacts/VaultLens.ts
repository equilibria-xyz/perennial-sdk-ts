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
              internalType: "contract IPythOracle",
              name: "pyth",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
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
    "0x608060405234801561001057600080fd5b5061568e80620000216000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f8b00d81461005157806366e7f423146100825780637204a64d146100b2578063ea646943146100e2575b600080fd5b61006b60048036038101906100669190611e4e565b610112565b604051610079929190611f31565b60405180910390f35b61009c60048036038101906100979190611fde565b610327565b6040516100a991906131c1565b60405180910390f35b6100cc60048036038101906100c791906135dd565b610cb1565b6040516100d99190613bde565b60405180910390f35b6100fc60048036038101906100f79190613c2c565b61133e565b6040516101099190613d26565b60405180910390f35b6060806101ac858673ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610164573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101889190613d6e565b73ffffffffffffffffffffffffffffffffffffffff166115f490919063ffffffff16565b8473ffffffffffffffffffffffffffffffffffffffff1663d2c3aaf230856000806040518563ffffffff1660e01b81526004016101ec9493929190613db9565b600060405180830381600087803b15801561020657600080fd5b505af1925050508015610217575060015b610256573d8060008114610247576040519150601f19603f3d011682016040523d82523d6000602084013e61024c565b606091505b5080925050610269565b6040518060200160405280600081525091505b8473ffffffffffffffffffffffffffffffffffffffff16636a256b29856040518263ffffffff1660e01b81526004016102a29190613dfe565b600060405180830381600087803b1580156102bc57600080fd5b505af19250505080156102cd575060015b61030c573d80600081146102fd576040519150601f19603f3d011682016040523d82523d6000602084013e610302565b606091505b508091505061031f565b6040518060200160405280600081525090505b935093915050565b61032f611774565b83816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa1580156103b2573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906103db9190613eba565b81602001819052508373ffffffffffffffffffffffffffffffffffffffff1663ad4d4e296040518163ffffffff1660e01b8152600401602060405180830381865afa15801561042e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104529190613f54565b81604001819052508373ffffffffffffffffffffffffffffffffffffffff166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c99190613f96565b8160600181815250508373ffffffffffffffffffffffffffffffffffffffff16633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa15801561051d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105419190613fc3565b8160800181815250508373ffffffffffffffffffffffffffffffffffffffff16638162486b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610595573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b99190614005565b8160a00181815250508060a0015167ffffffffffffffff8111156105e0576105df6131e8565b5b60405190808252806020026020018201604052801561061957816020015b61060661182b565b8152602001906001900390816105fe5790505b508160c001819052508060a0015167ffffffffffffffff8111156106405761063f6131e8565b5b60405190808252806020026020018201604052801561067957816020015b610666611862565b81526020019060019003908161065e5790505b50816101c001819052508060a0015167ffffffffffffffff8111156106a1576106a06131e8565b5b6040519080825280602002602001820160405280156106da57816020015b6106c761190c565b8152602001906001900390816106bf5790505b50816101e001819052508373ffffffffffffffffffffffffffffffffffffffff16635e5c06e260006040518263ffffffff1660e01b815260040161071e9190613dfe565b60c060405180830381865afa15801561073b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075f91906140d2565b8160e001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151602001516040518263ffffffff1660e01b81526004016107a8919061410e565b60e060405180830381865afa1580156107c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e991906141dd565b8161010001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151600001516040518263ffffffff1660e01b8152600401610833919061410e565b60e060405180830381865afa158015610850573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087491906141dd565b8161012001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151602001516040518263ffffffff1660e01b81526004016108be919061410e565b600060405180830381865afa1580156108db573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109049190614325565b8161014001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151600001516040518263ffffffff1660e01b815260040161094e919061410e565b600060405180830381865afa15801561096b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109949190614325565b81610160018190525060005b8160a00151811015610c78578473ffffffffffffffffffffffffffffffffffffffff1663f4ddb5be826040518263ffffffff1660e01b81526004016109e5919061410e565b606060405180830381865afa158015610a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190614410565b8260c001518281518110610a3d57610a3c61443d565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16636eb79f6a8360c001518381518110610a7b57610a7a61443d565b5b6020026020010151600001516040518263ffffffff1660e01b8152600401610aa3919061447b565b600060405180830381865afa158015610ac0573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610ae99190614f53565b826101c001518281518110610b0157610b0061443d565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16637987bd7f8360c001518381518110610b3f57610b3e61443d565b5b602002602001015160000151876040518363ffffffff1660e01b8152600401610b69929190614f9c565b600060405180830381865afa158015610b86573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610baf9190615236565b826101e001518281518110610bc757610bc661443d565b5b6020026020010181905250610c12826101c001518281518110610bed57610bec61443d565b5b602002602001015160200151610140015183610180015161169790919063ffffffff16565b82610180018181525050610c5b826101e001518281518110610c3757610c3661443d565b5b60200260200101516040015160400151836101a001516116ad90919063ffffffff16565b826101a00181815250508080610c70906152ae565b9150506109a0565b508115610caa57610ca081610120015160600151826101a001516116ad90919063ffffffff16565b8160600181815250505b9392505050565b610cb961198f565b6000845167ffffffffffffffff811115610cd657610cd56131e8565b5b604051908082528060200260200182016040528015610d0f57816020015b610cfc611774565b815260200190600190039081610cf45790505b5090506000855167ffffffffffffffff811115610d2f57610d2e6131e8565b5b604051908082528060200260200182016040528015610d6857816020015b610d556119ca565b815260200190600190039081610d4d5790505b50905060005b8651811015610e4f57610d9d878281518110610d8d57610d8c61443d565b5b6020026020010151896000610327565b838281518110610db057610daf61443d565b5b6020026020010181905250610e1e878281518110610dd157610dd061443d565b5b60200260200101518787868581518110610dee57610ded61443d565b5b602002602001015160800151878681518110610e0d57610e0c61443d565b5b60200260200101516060015161133e565b828281518110610e3157610e3061443d565b5b60200260200101819052508080610e47906152ae565b915050610d6e565b508183606001516000018190525080836060015160200181905250875167ffffffffffffffff811115610e8557610e846131e8565b5b604051908082528060200260200182016040528015610eb857816020015b6060815260200190600190039081610ea35790505b50836000018190525060005b8851811015611021578773ffffffffffffffffffffffffffffffffffffffff16637e8306ad8a8381518110610efc57610efb61443d565b5b6020026020010151600001518b8481518110610f1b57610f1a61443d565b5b6020026020010151602001518c8581518110610f3a57610f3961443d565b5b6020026020010151604001518d8681518110610f5957610f5861443d565b5b6020026020010151606001518e8781518110610f7857610f7761443d565b5b6020026020010151608001516040518663ffffffff1660e01b8152600401610fa4959493929190615317565b6000604051808303816000875af1158015610fc3573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610fec91906153e1565b846000015182815181106110035761100261443d565b5b60200260200101819052508080611019906152ae565b915050610ec4565b50855167ffffffffffffffff81111561103d5761103c6131e8565b5b60405190808252806020026020018201604052801561107057816020015b606081526020019060019003908161105b5790505b508360400181905250855167ffffffffffffffff811115611094576110936131e8565b5b6040519080825280602002602001820160405280156110c757816020015b60608152602001906001900390816110b25790505b50836020018190525060005b865181101561117f576111288782815181106110f2576110f161443d565b5b60200260200101518786606001516000015184815181106111165761111561443d565b5b60200260200101516101800151610112565b8560200151838151811061113f5761113e61443d565b5b602002602001018660400151848151811061115d5761115c61443d565b5b6020026020010182905282905250508080611177906152ae565b9150506110d3565b506000865167ffffffffffffffff81111561119d5761119c6131e8565b5b6040519080825280602002602001820160405280156111d657816020015b6111c3611774565b8152602001906001900390816111bb5790505b5090506000875167ffffffffffffffff8111156111f6576111f56131e8565b5b60405190808252806020026020018201604052801561122f57816020015b61121c6119ca565b8152602001906001900390816112145790505b50905060005b8851811015611316576112648982815181106112545761125361443d565b5b60200260200101518b6001610327565b8382815181106112775761127661443d565b5b60200260200101819052506112e58982815181106112985761129761443d565b5b602002602001015189898685815181106112b5576112b461443d565b5b6020026020010151608001518786815181106112d4576112d361443d565b5b60200260200101516060015161133e565b8282815181106112f8576112f761443d565b5b6020026020010181905250808061130e906152ae565b915050611235565b5081856080015160000181905250808560800151602001819052505050505095945050505050565b6113466119ca565b85816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505084816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508573ffffffffffffffffffffffffffffffffffffffff16635e5c06e2866040518263ffffffff1660e01b81526004016113ef9190613dfe565b60c060405180830381865afa15801561140c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143091906140d2565b8160400181905250611441836116c3565b6114825761147d61146461145f6000856116cf90919063ffffffff16565b6116e3565b848360400151604001516117389092919063ffffffff16565b61148c565b8060400151604001515b81606001818152505061149e836116c3565b6114df576114da6114c16114bc6000856116cf90919063ffffffff16565b6116e3565b84836040015160a001516117389092919063ffffffff16565b6114e9565b806040015160a001515b8160800181815250508573ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561153d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115619190615468565b73ffffffffffffffffffffffffffffffffffffffff16632637588e86866040518363ffffffff1660e01b815260040161159b929190615495565b602060405180830381865afa1580156115b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115dc91906154be565b8160a001901515908115158152505095945050505050565b8173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b815260040161164f9291906154eb565b6020604051808303816000875af115801561166e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169291906154be565b505050565b600081836116a59190615514565b905092915050565b600081836116bb9190615548565b905092915050565b60008082149050919050565b60006116db838361175a565b905092915050565b600080829050600081121561172f57806040517fb02ef087000000000000000000000000000000000000000000000000000000008152600401611726919061559b565b60405180910390fd5b80915050919050565b600081838561174791906155b6565b6117519190615627565b90509392505050565b60008183121561176a578161176c565b825b905092915050565b604051806102000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016117ac611a34565b8152602001600081526020016000815260200160008152602001606081526020016117d5611a47565b81526020016117e2611a7d565b81526020016117ef611a7d565b81526020016117fc611aba565b8152602001611809611aba565b8152602001600081526020016000815260200160608152602001606081525090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611893611acd565b81526020016118a0611b42565b81526020016118ad611be2565b8152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016118d7611c2d565b81526020016118e4611c2d565b815260200160608152602001606081526020016118ff611c7f565b8152602001600081525090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161195a611ca2565b8152602001611967611c2d565b8152602001611974611c2d565b81526020016060815260200160608152602001606081525090565b6040518060a001604052806060815260200160608152602001606081526020016119b7611cd1565b81526020016119c4611cd1565b81525090565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001611a17611a47565b815260200160008152602001600081526020016000151581525090565b6040518060200160405280600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280606081525090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581525090565b604051806102600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611baa611ceb565b8152602001611bb7611d13565b8152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611c20611d2d565b8152602001600081525090565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611c79611d47565b81525090565b604051806060016040528060008152602001600081526020016000151581525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060608152602001606081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611da782611d7c565b9050919050565b6000611db982611d9c565b9050919050565b611dc981611dae565b8114611dd457600080fd5b50565b600081359050611de681611dc0565b92915050565b611df581611d9c565b8114611e0057600080fd5b50565b600081359050611e1281611dec565b92915050565b6000819050919050565b611e2b81611e18565b8114611e3657600080fd5b50565b600081359050611e4881611e22565b92915050565b600080600060608486031215611e6757611e66611d72565b5b6000611e7586828701611dd7565b9350506020611e8686828701611e03565b9250506040611e9786828701611e39565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015611edb578082015181840152602081019050611ec0565b60008484015250505050565b6000601f19601f8301169050919050565b6000611f0382611ea1565b611f0d8185611eac565b9350611f1d818560208601611ebd565b611f2681611ee7565b840191505092915050565b60006040820190508181036000830152611f4b8185611ef8565b90508181036020830152611f5f8184611ef8565b90509392505050565b6000611f7382611d9c565b9050919050565b611f8381611f68565b8114611f8e57600080fd5b50565b600081359050611fa081611f7a565b92915050565b60008115159050919050565b611fbb81611fa6565b8114611fc657600080fd5b50565b600081359050611fd881611fb2565b92915050565b600080600060608486031215611ff757611ff6611d72565b5b600061200586828701611dd7565b935050602061201686828701611f91565b925050604061202786828701611fc9565b9150509250925092565b6000819050919050565b600061205661205161204c84611d7c565b612031565b611d7c565b9050919050565b60006120688261203b565b9050919050565b600061207a8261205d565b9050919050565b61208a8161206f565b82525050565b600081519050919050565b600082825260208201905092915050565b60006120b782612090565b6120c1818561209b565b93506120d1818560208601611ebd565b6120da81611ee7565b840191505092915050565b60006121006120fb6120f684611e18565b612031565b611e18565b9050919050565b612110816120e5565b82525050565b60208201600082015161212c6000850182612107565b50505050565b6000819050919050565b600061215761215261214d84612132565b612031565b612132565b9050919050565b6121678161213c565b82525050565b61217681611e18565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006121b38261205d565b9050919050565b6121c3816121a8565b82525050565b6060820160008201516121df60008501826121ba565b5060208201516121f2602085018261216d565b5060408201516122056040850182612107565b50505050565b600061221783836121c9565b60608301905092915050565b6000602082019050919050565b600061223b8261217c565b6122458185612187565b935061225083612198565b8060005b83811015612281578151612268888261220b565b975061227383612223565b925050600181019050612254565b5085935050505092915050565b60c0820160008201516122a4600085018261216d565b5060208201516122b7602085018261216d565b5060408201516122ca6040850182612107565b5060608201516122dd6060850182612107565b5060808201516122f06080850182612107565b5060a082015161230360a0850182612107565b50505050565b60e08201600082015161231f6000850182612107565b5060208201516123326020850182612107565b5060408201516123456040850182612107565b506060820151612358606085018261215e565b50608082015161236b6080850182612107565b5060a082015161237e60a0850182612107565b5060c082015161239160c085018261216d565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006123cf838361216d565b60208301905092915050565b6000602082019050919050565b60006123f382612397565b6123fd81856123a2565b9350612408836123b3565b8060005b8381101561243957815161242088826123c3565b975061242b836123db565b92505060018101905061240c565b5085935050505092915050565b6000602083016000830151848203600086015261246382826123e8565b9150508091505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6124a581611fa6565b82525050565b6101c0820160008201516124c26000850182612107565b5060208201516124d56020850182612107565b5060408201516124e86040850182612107565b5060608201516124fb6060850182612107565b50608082015161250e6080850182612107565b5060a082015161252160a085018261216d565b5060c082015161253460c085018261216d565b5060e082015161254760e0850182612107565b5061010082015161255c610100850182612107565b50610120820151612571610120850182612107565b50610140820151612586610140850182612107565b5061016082015161259b61016085018261249c565b506101808201516125b061018085018261249c565b506101a08201516125c56101a085018261249c565b50505050565b6080820160008201516125e16000850182612107565b5060208201516125f46020850182612107565b5060408201516126076040850182612107565b50606082015161261a6060850182612107565b50505050565b6040820160008201516126366000850182612107565b5060208201516126496020850182612107565b50505050565b6102e0820160008201516126666000850182612107565b5060208201516126796020850182612107565b50604082015161268c6040850182612107565b50606082015161269f6060850182612107565b5060808201516126b26080850182612107565b5060a08201516126c560a0850182612107565b5060c08201516126d860c0850182612107565b5060e08201516126eb60e0850182612107565b50610100820151612700610100850182612107565b50610120820151612715610120850182612107565b5061014082015161272a610140850182612107565b5061016082015161273f610160850182612107565b506101808201516127546101808501826125cb565b506101a0820151612769610200850182612620565b506101c082015161277e610240850182612107565b506101e0820151612793610260850182612107565b506102008201516127a8610280850182612107565b506102208201516127bd6102a085018261216d565b506102408201516127d26102c085018261249c565b50505050565b6040820160008201516127ee600085018261215e565b506020820151612801602085018261215e565b50505050565b6101208201600082015161281e600085018261216d565b506020820151612831602085018261216d565b5060408201516128446040850182612107565b5060608201516128576060850182612107565b50608082015161286a6080850182612107565b5060a082015161287d60a0850182612107565b5060c082015161289060c08501826127d8565b5060e08201516128a461010085018261215e565b50505050565b6128b381611d9c565b82525050565b6060820160008201516128cf600085018261215e565b5060208201516128e2602085018261215e565b5060408201516128f5604085018261215e565b50505050565b61016082016000820151612912600085018261216d565b5060208201516129256020850182612107565b5060408201516129386040850182612107565b50606082015161294b6060850182612107565b50608082015161295e6080850182612107565b5060a082015161297160a0850182612107565b5060c082015161298460c085018261215e565b5060e082015161299760e085018261215e565b506101008201516129ac6101008501826128b9565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006129ea83836128fb565b6101608301905092915050565b6000602082019050919050565b6000612a0f826129b2565b612a1981856129bd565b9350612a24836129ce565b8060005b83811015612a55578151612a3c88826129de565b9750612a47836129f7565b925050600181019050612a28565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b602082016000820151612aa4600085018261215e565b50505050565b602082016000820151612ac06000850182612107565b50505050565b60e082016000820151612adc600085018261249c565b506020820151612aef6020850182612a8e565b506040820151612b026040850182612a8e565b506060820151612b156060850182612a8e565b506080820151612b286080850182612aaa565b5060a0820151612b3b60a0850182612aaa565b5060c0820151612b4e60c0850182612aaa565b50505050565b6000612b608383612ac6565b60e08301905092915050565b6000602082019050919050565b6000612b8482612a62565b612b8e8185612a6d565b9350612b9983612a7e565b8060005b83811015612bca578151612bb18882612b54565b9750612bbc83612b6c565b925050600181019050612b9d565b5085935050505092915050565b606082016000820151612bed600085018261216d565b506020820151612c00602085018261215e565b506040820151612c13604085018261249c565b50505050565b600061098083016000830151612c3260008601826121ba565b506020830151612c4560208601826124ab565b506040830151612c596101e086018261264f565b506060830151612c6d6104c0860182612807565b506080830151612c816105e08601826128aa565b5060a0830151612c956106008601826128fb565b5060c0830151612ca96107608601826128fb565b5060e08301518482036108c0860152612cc28282612a04565b9150506101008301518482036108e0860152612cde8282612b79565b915050610120830151612cf5610900860182612bd7565b50610140830151612d0a61096086018261216d565b508091505092915050565b6000612d218383612c19565b905092915050565b6000602082019050919050565b6000612d4182612470565b612d4b818561247b565b935083602082028501612d5d8561248c565b8060005b85811015612d995784840389528151612d7a8582612d15565b9450612d8583612d29565b925060208a01995050600181019050612d61565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60a082016000820151612ded600085018261216d565b506020820151612e00602085018261216d565b506040820151612e13604085018261215e565b506060820151612e266060850182612107565b506080820151612e39608085018261216d565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612e77838361215e565b60208301905092915050565b6000602082019050919050565b6000612e9b82612e3f565b612ea58185612e4a565b9350612eb083612e5b565b8060005b83811015612ee1578151612ec88882612e6b565b9750612ed383612e83565b925050600181019050612eb4565b5085935050505092915050565b600061040083016000830151612f0760008601826121ba565b506020830151612f1a60208601826128aa565b506040830151612f2d6040860182612dd7565b506060830151612f4060e08601826128fb565b506080830151612f546102408601826128fb565b5060a08301518482036103a0860152612f6d8282612a04565b91505060c08301518482036103c0860152612f888282612b79565b91505060e08301518482036103e0860152612fa38282612e90565b9150508091505092915050565b6000612fbc8383612eee565b905092915050565b6000602082019050919050565b6000612fdc82612dab565b612fe68185612db6565b935083602082028501612ff885612dc7565b8060005b8581101561303457848403895281516130158582612fb0565b945061302083612fc4565b925060208a01995050600181019050612ffc565b50829750879550505050505092915050565b60006104208301600083015161305f6000860182612081565b506020830151848203602086015261307782826120ac565b915050604083015161308c6040860182612116565b50606083015161309f606086018261215e565b5060808301516130b26080860182612107565b5060a08301516130c560a086018261216d565b5060c083015184820360c08601526130dd8282612230565b91505060e08301516130f260e086018261228e565b506101008301516131076101a0860182612309565b5061012083015161311c610280860182612309565b506101408301518482036103608601526131368282612446565b9150506101608301518482036103808601526131528282612446565b9150506101808301516131696103a0860182612107565b506101a083015161317e6103c086018261215e565b506101c08301518482036103e08601526131988282612d36565b9150506101e08301518482036104008601526131b48282612fd1565b9150508091505092915050565b600060208201905081810360008301526131db8184613046565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61322082611ee7565b810181811067ffffffffffffffff8211171561323f5761323e6131e8565b5b80604052505050565b6000613252611d68565b905061325e8282613217565b919050565b600067ffffffffffffffff82111561327e5761327d6131e8565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b60006132a982611d9c565b9050919050565b6132b98161329e565b81146132c457600080fd5b50565b6000813590506132d6816132b0565b92915050565b6132e581611e18565b81146132f057600080fd5b50565b600081359050613302816132dc565b92915050565b600080fd5b600067ffffffffffffffff821115613328576133276131e8565b5b61333182611ee7565b9050602081019050919050565b82818337600083830152505050565b600061336061335b8461330d565b613248565b90508281526020810184848401111561337c5761337b613308565b5b61338784828561333e565b509392505050565b600082601f8301126133a4576133a36131e3565b5b81356133b484826020860161334d565b91505092915050565b600060a082840312156133d3576133d2613294565b5b6133dd60a0613248565b905060006133ed848285016132c7565b6000830152506020613401848285016132f3565b6020830152506040613415848285016132f3565b6040830152506060613429848285016132f3565b606083015250608082013567ffffffffffffffff81111561344d5761344c613299565b5b6134598482850161338f565b60808301525092915050565b600061347861347384613263565b613248565b9050808382526020820190506020840283018581111561349b5761349a61328f565b5b835b818110156134e257803567ffffffffffffffff8111156134c0576134bf6131e3565b5b8086016134cd89826133bd565b8552602085019450505060208101905061349d565b5050509392505050565b600082601f830112613501576135006131e3565b5b8135613511848260208601613465565b91505092915050565b600067ffffffffffffffff821115613535576135346131e8565b5b602082029050602081019050919050565b60006135596135548461351a565b613248565b9050808382526020820190506020840283018581111561357c5761357b61328f565b5b835b818110156135a557806135918882611dd7565b84526020840193505060208101905061357e565b5050509392505050565b600082601f8301126135c4576135c36131e3565b5b81356135d4848260208601613546565b91505092915050565b600080600080600060a086880312156135f9576135f8611d72565b5b600086013567ffffffffffffffff81111561361757613616611d77565b5b613623888289016134ec565b955050602061363488828901611f91565b945050604086013567ffffffffffffffff81111561365557613654611d77565b5b613661888289016135af565b935050606061367288828901611e03565b925050608061368388828901611e03565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b60006136d882611ea1565b6136e281856136bc565b93506136f2818560208601611ebd565b6136fb81611ee7565b840191505092915050565b600061371283836136cd565b905092915050565b6000602082019050919050565b600061373282613690565b61373c818561369b565b93508360208202850161374e856136ac565b8060005b8581101561378a578484038952815161376b8582613706565b94506137768361371a565b925060208a01995050600181019050613752565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610420830160008301516137e16000860182612081565b50602083015184820360208601526137f982826120ac565b915050604083015161380e6040860182612116565b506060830151613821606086018261215e565b5060808301516138346080860182612107565b5060a083015161384760a086018261216d565b5060c083015184820360c086015261385f8282612230565b91505060e083015161387460e086018261228e565b506101008301516138896101a0860182612309565b5061012083015161389e610280860182612309565b506101408301518482036103608601526138b88282612446565b9150506101608301518482036103808601526138d48282612446565b9150506101808301516138eb6103a0860182612107565b506101a08301516139006103c086018261215e565b506101c08301518482036103e086015261391a8282612d36565b9150506101e08301518482036104008601526139368282612fd1565b9150508091505092915050565b600061394f83836137c8565b905092915050565b6000602082019050919050565b600061396f8261379c565b61397981856137a7565b93508360208202850161398b856137b8565b8060005b858110156139c757848403895281516139a88582613943565b94506139b383613957565b925060208a0199505060018101905061398f565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61016082016000820151613a1c6000850182612081565b506020820151613a2f60208501826128aa565b506040820151613a42604085018261228e565b506060820151613a56610100850182612107565b506080820151613a6a610120850182612107565b5060a0820151613a7e61014085018261249c565b50505050565b6000613a908383613a05565b6101608301905092915050565b6000602082019050919050565b6000613ab5826139d9565b613abf81856139e4565b9350613aca836139f5565b8060005b83811015613afb578151613ae28882613a84565b9750613aed83613a9d565b925050600181019050613ace565b5085935050505092915050565b60006040830160008301518482036000860152613b258282613964565b91505060208301518482036020860152613b3f8282613aaa565b9150508091505092915050565b600060a0830160008301518482036000860152613b698282613727565b91505060208301518482036020860152613b838282613727565b91505060408301518482036040860152613b9d8282613727565b91505060608301518482036060860152613bb78282613b08565b91505060808301518482036080860152613bd18282613b08565b9150508091505092915050565b60006020820190508181036000830152613bf88184613b4c565b905092915050565b613c0981612132565b8114613c1457600080fd5b50565b600081359050613c2681613c00565b92915050565b600080600080600060a08688031215613c4857613c47611d72565b5b6000613c5688828901611dd7565b9550506020613c6788828901611e03565b9450506040613c7888828901611e03565b9350506060613c8988828901611e39565b9250506080613c9a88828901613c17565b9150509295509295909350565b61016082016000820151613cbe6000850182612081565b506020820151613cd160208501826128aa565b506040820151613ce4604085018261228e565b506060820151613cf8610100850182612107565b506080820151613d0c610120850182612107565b5060a0820151613d2061014085018261249c565b50505050565b600061016082019050613d3c6000830184613ca7565b92915050565b613d4b81611d9c565b8114613d5657600080fd5b50565b600081519050613d6881613d42565b92915050565b600060208284031215613d8457613d83611d72565b5b6000613d9284828501613d59565b91505092915050565b613da481611d9c565b82525050565b613db3816120e5565b82525050565b6000608082019050613dce6000830187613d9b565b613ddb6020830186613daa565b613de86040830185613daa565b613df56060830184613daa565b95945050505050565b6000602082019050613e136000830184613d9b565b92915050565b600067ffffffffffffffff821115613e3457613e336131e8565b5b613e3d82611ee7565b9050602081019050919050565b6000613e5d613e5884613e19565b613248565b905082815260208101848484011115613e7957613e78613308565b5b613e84848285611ebd565b509392505050565b600082601f830112613ea157613ea06131e3565b5b8151613eb1848260208601613e4a565b91505092915050565b600060208284031215613ed057613ecf611d72565b5b600082015167ffffffffffffffff811115613eee57613eed611d77565b5b613efa84828501613e8c565b91505092915050565b600081519050613f1281611e22565b92915050565b600060208284031215613f2e57613f2d613294565b5b613f386020613248565b90506000613f4884828501613f03565b60008301525092915050565b600060208284031215613f6a57613f69611d72565b5b6000613f7884828501613f18565b91505092915050565b600081519050613f9081613c00565b92915050565b600060208284031215613fac57613fab611d72565b5b6000613fba84828501613f81565b91505092915050565b600060208284031215613fd957613fd8611d72565b5b6000613fe784828501613f03565b91505092915050565b600081519050613fff816132dc565b92915050565b60006020828403121561401b5761401a611d72565b5b600061402984828501613ff0565b91505092915050565b600060c0828403121561404857614047613294565b5b61405260c0613248565b9050600061406284828501613ff0565b600083015250602061407684828501613ff0565b602083015250604061408a84828501613f03565b604083015250606061409e84828501613f03565b60608301525060806140b284828501613f03565b60808301525060a06140c684828501613f03565b60a08301525092915050565b600060c082840312156140e8576140e7611d72565b5b60006140f684828501614032565b91505092915050565b61410881611e18565b82525050565b600060208201905061412360008301846140ff565b92915050565b600060e0828403121561413f5761413e613294565b5b61414960e0613248565b9050600061415984828501613f03565b600083015250602061416d84828501613f03565b602083015250604061418184828501613f03565b604083015250606061419584828501613f81565b60608301525060806141a984828501613f03565b60808301525060a06141bd84828501613f03565b60a08301525060c06141d184828501613ff0565b60c08301525092915050565b600060e082840312156141f3576141f2611d72565b5b600061420184828501614129565b91505092915050565b600067ffffffffffffffff821115614225576142246131e8565b5b602082029050602081019050919050565b60006142496142448461420a565b613248565b9050808382526020820190506020840283018581111561426c5761426b61328f565b5b835b8181101561429557806142818882613ff0565b84526020840193505060208101905061426e565b5050509392505050565b600082601f8301126142b4576142b36131e3565b5b81516142c4848260208601614236565b91505092915050565b6000602082840312156142e3576142e2613294565b5b6142ed6020613248565b9050600082015167ffffffffffffffff81111561430d5761430c613299565b5b6143198482850161429f565b60008301525092915050565b60006020828403121561433b5761433a611d72565b5b600082015167ffffffffffffffff81111561435957614358611d77565b5b614365848285016142cd565b91505092915050565b600061437982611d9c565b9050919050565b6143898161436e565b811461439457600080fd5b50565b6000815190506143a681614380565b92915050565b6000606082840312156143c2576143c1613294565b5b6143cc6060613248565b905060006143dc84828501614397565b60008301525060206143f084828501613ff0565b602083015250604061440484828501613f03565b60408301525092915050565b60006060828403121561442657614425611d72565b5b6000614434848285016143ac565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b614475816121a8565b82525050565b6000602082019050614490600083018461446c565b92915050565b6000815190506144a581611fb2565b92915050565b60006101c082840312156144c2576144c1613294565b5b6144cd6101c0613248565b905060006144dd84828501613f03565b60008301525060206144f184828501613f03565b602083015250604061450584828501613f03565b604083015250606061451984828501613f03565b606083015250608061452d84828501613f03565b60808301525060a061454184828501613ff0565b60a08301525060c061455584828501613ff0565b60c08301525060e061456984828501613f03565b60e08301525061010061457e84828501613f03565b6101008301525061012061459484828501613f03565b610120830152506101406145aa84828501613f03565b610140830152506101606145c084828501614496565b610160830152506101806145d684828501614496565b610180830152506101a06145ec84828501614496565b6101a08301525092915050565b60006080828403121561460f5761460e613294565b5b6146196080613248565b9050600061462984828501613f03565b600083015250602061463d84828501613f03565b602083015250604061465184828501613f03565b604083015250606061466584828501613f03565b60608301525092915050565b60006040828403121561468757614686613294565b5b6146916040613248565b905060006146a184828501613f03565b60008301525060206146b584828501613f03565b60208301525092915050565b60006102e082840312156146d8576146d7613294565b5b6146e3610260613248565b905060006146f384828501613f03565b600083015250602061470784828501613f03565b602083015250604061471b84828501613f03565b604083015250606061472f84828501613f03565b606083015250608061474384828501613f03565b60808301525060a061475784828501613f03565b60a08301525060c061476b84828501613f03565b60c08301525060e061477f84828501613f03565b60e08301525061010061479484828501613f03565b610100830152506101206147aa84828501613f03565b610120830152506101406147c084828501613f03565b610140830152506101606147d684828501613f03565b610160830152506101806147ec848285016145f9565b6101808301525061020061480284828501614671565b6101a08301525061024061481884828501613f03565b6101c08301525061026061482e84828501613f03565b6101e08301525061028061484484828501613f03565b610200830152506102a061485a84828501613ff0565b610220830152506102c061487084828501614496565b6102408301525092915050565b60006040828403121561489357614892613294565b5b61489d6040613248565b905060006148ad84828501613f81565b60008301525060206148c184828501613f81565b60208301525092915050565b600061012082840312156148e4576148e3613294565b5b6148ef610100613248565b905060006148ff84828501613ff0565b600083015250602061491384828501613ff0565b602083015250604061492784828501613f03565b604083015250606061493b84828501613f03565b606083015250608061494f84828501613f03565b60808301525060a061496384828501613f03565b60a08301525060c06149778482850161487d565b60c08301525061010061498c84828501613f81565b60e08301525092915050565b6000815190506149a781611dec565b92915050565b6000606082840312156149c3576149c2613294565b5b6149cd6060613248565b905060006149dd84828501613f81565b60008301525060206149f184828501613f81565b6020830152506040614a0584828501613f81565b60408301525092915050565b60006101608284031215614a2857614a27613294565b5b614a33610120613248565b90506000614a4384828501613ff0565b6000830152506020614a5784828501613f03565b6020830152506040614a6b84828501613f03565b6040830152506060614a7f84828501613f03565b6060830152506080614a9384828501613f03565b60808301525060a0614aa784828501613f03565b60a08301525060c0614abb84828501613f81565b60c08301525060e0614acf84828501613f81565b60e083015250610100614ae4848285016149ad565b6101008301525092915050565b600067ffffffffffffffff821115614b0c57614b0b6131e8565b5b602082029050602081019050919050565b6000614b30614b2b84614af1565b613248565b9050808382526020820190506101608402830185811115614b5457614b5361328f565b5b835b81811015614b7e5780614b698882614a11565b84526020840193505061016081019050614b56565b5050509392505050565b600082601f830112614b9d57614b9c6131e3565b5b8151614bad848260208601614b1d565b91505092915050565b600067ffffffffffffffff821115614bd157614bd06131e8565b5b602082029050602081019050919050565b600060208284031215614bf857614bf7613294565b5b614c026020613248565b90506000614c1284828501613f81565b60008301525092915050565b600060208284031215614c3457614c33613294565b5b614c3e6020613248565b90506000614c4e84828501613f03565b60008301525092915050565b600060e08284031215614c7057614c6f613294565b5b614c7a60e0613248565b90506000614c8a84828501614496565b6000830152506020614c9e84828501614be2565b6020830152506040614cb284828501614be2565b6040830152506060614cc684828501614be2565b6060830152506080614cda84828501614c1e565b60808301525060a0614cee84828501614c1e565b60a08301525060c0614d0284828501614c1e565b60c08301525092915050565b6000614d21614d1c84614bb6565b613248565b90508083825260208201905060e08402830185811115614d4457614d4361328f565b5b835b81811015614d6d5780614d598882614c5a565b84526020840193505060e081019050614d46565b5050509392505050565b600082601f830112614d8c57614d8b6131e3565b5b8151614d9c848260208601614d0e565b91505092915050565b600060608284031215614dbb57614dba613294565b5b614dc56060613248565b90506000614dd584828501613ff0565b6000830152506020614de984828501613f81565b6020830152506040614dfd84828501614496565b60408301525092915050565b60006109808284031215614e2057614e1f613294565b5b614e2b610160613248565b90506000614e3b84828501614397565b6000830152506020614e4f848285016144ab565b6020830152506101e0614e64848285016146c1565b6040830152506104c0614e79848285016148cd565b6060830152506105e0614e8e84828501614998565b608083015250610600614ea384828501614a11565b60a083015250610760614eb884828501614a11565b60c0830152506108c082015167ffffffffffffffff811115614edd57614edc613299565b5b614ee984828501614b88565b60e0830152506108e082015167ffffffffffffffff811115614f0e57614f0d613299565b5b614f1a84828501614d77565b61010083015250610900614f3084828501614da5565b61012083015250610960614f4684828501613ff0565b6101408301525092915050565b600060208284031215614f6957614f68611d72565b5b600082015167ffffffffffffffff811115614f8757614f86611d77565b5b614f9384828501614e09565b91505092915050565b6000604082019050614fb1600083018561446c565b614fbe6020830184613d9b565b9392505050565b600060a08284031215614fdb57614fda613294565b5b614fe560a0613248565b90506000614ff584828501613ff0565b600083015250602061500984828501613ff0565b602083015250604061501d84828501613f81565b604083015250606061503184828501613f03565b606083015250608061504584828501613ff0565b60808301525092915050565b600067ffffffffffffffff82111561506c5761506b6131e8565b5b602082029050602081019050919050565b600061509061508b84615051565b613248565b905080838252602082019050602084028301858111156150b3576150b261328f565b5b835b818110156150dc57806150c88882613f81565b8452602084019350506020810190506150b5565b5050509392505050565b600082601f8301126150fb576150fa6131e3565b5b815161510b84826020860161507d565b91505092915050565b6000610400828403121561512b5761512a613294565b5b615136610100613248565b9050600061514684828501614397565b600083015250602061515a84828501614998565b602083015250604061516e84828501614fc5565b60408301525060e061518284828501614a11565b60608301525061024061519784828501614a11565b6080830152506103a082015167ffffffffffffffff8111156151bc576151bb613299565b5b6151c884828501614b88565b60a0830152506103c082015167ffffffffffffffff8111156151ed576151ec613299565b5b6151f984828501614d77565b60c0830152506103e082015167ffffffffffffffff81111561521e5761521d613299565b5b61522a848285016150e6565b60e08301525092915050565b60006020828403121561524c5761524b611d72565b5b600082015167ffffffffffffffff81111561526a57615269611d77565b5b61527684828501615114565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006152b982611e18565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036152eb576152ea61527f565b5b600182019050919050565b60006153018261205d565b9050919050565b615311816152f6565b82525050565b600060a08201905061532c6000830188615308565b61533960208301876140ff565b61534660408301866140ff565b61535360608301856140ff565b81810360808301526153658184611ef8565b90509695505050505050565b600061538461537f8461330d565b613248565b9050828152602081018484840111156153a05761539f613308565b5b6153ab848285611ebd565b509392505050565b600082601f8301126153c8576153c76131e3565b5b81516153d8848260208601615371565b91505092915050565b6000602082840312156153f7576153f6611d72565b5b600082015167ffffffffffffffff81111561541557615414611d77565b5b615421848285016153b3565b91505092915050565b600061543582611d9c565b9050919050565b6154458161542a565b811461545057600080fd5b50565b6000815190506154628161543c565b92915050565b60006020828403121561547e5761547d611d72565b5b600061548c84828501615453565b91505092915050565b60006040820190506154aa6000830185613d9b565b6154b76020830184613d9b565b9392505050565b6000602082840312156154d4576154d3611d72565b5b60006154e284828501614496565b91505092915050565b60006040820190506155006000830185613d9b565b61550d60208301846140ff565b9392505050565b600061551f82611e18565b915061552a83611e18565b92508282019050808211156155425761554161527f565b5b92915050565b600061555382612132565b915061555e83612132565b9250828201905082811215600083121683821260008412151617156155865761558561527f565b5b92915050565b61559581612132565b82525050565b60006020820190506155b0600083018461558c565b92915050565b60006155c182611e18565b91506155cc83611e18565b92508282026155da81611e18565b915082820484148315176155f1576155f061527f565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061563282611e18565b915061563d83611e18565b92508261564d5761564c6155f8565b5b82820490509291505056fea264697066735822122000f7293f59bd216f22410edb6558e558029916208f165c123c9fc9b7e4e5668864736f6c63430008130033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f8b00d81461005157806366e7f423146100825780637204a64d146100b2578063ea646943146100e2575b600080fd5b61006b60048036038101906100669190611e4e565b610112565b604051610079929190611f31565b60405180910390f35b61009c60048036038101906100979190611fde565b610327565b6040516100a991906131c1565b60405180910390f35b6100cc60048036038101906100c791906135dd565b610cb1565b6040516100d99190613bde565b60405180910390f35b6100fc60048036038101906100f79190613c2c565b61133e565b6040516101099190613d26565b60405180910390f35b6060806101ac858673ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610164573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101889190613d6e565b73ffffffffffffffffffffffffffffffffffffffff166115f490919063ffffffff16565b8473ffffffffffffffffffffffffffffffffffffffff1663d2c3aaf230856000806040518563ffffffff1660e01b81526004016101ec9493929190613db9565b600060405180830381600087803b15801561020657600080fd5b505af1925050508015610217575060015b610256573d8060008114610247576040519150601f19603f3d011682016040523d82523d6000602084013e61024c565b606091505b5080925050610269565b6040518060200160405280600081525091505b8473ffffffffffffffffffffffffffffffffffffffff16636a256b29856040518263ffffffff1660e01b81526004016102a29190613dfe565b600060405180830381600087803b1580156102bc57600080fd5b505af19250505080156102cd575060015b61030c573d80600081146102fd576040519150601f19603f3d011682016040523d82523d6000602084013e610302565b606091505b508091505061031f565b6040518060200160405280600081525090505b935093915050565b61032f611774565b83816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa1580156103b2573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906103db9190613eba565b81602001819052508373ffffffffffffffffffffffffffffffffffffffff1663ad4d4e296040518163ffffffff1660e01b8152600401602060405180830381865afa15801561042e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104529190613f54565b81604001819052508373ffffffffffffffffffffffffffffffffffffffff166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c99190613f96565b8160600181815250508373ffffffffffffffffffffffffffffffffffffffff16633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa15801561051d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105419190613fc3565b8160800181815250508373ffffffffffffffffffffffffffffffffffffffff16638162486b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610595573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b99190614005565b8160a00181815250508060a0015167ffffffffffffffff8111156105e0576105df6131e8565b5b60405190808252806020026020018201604052801561061957816020015b61060661182b565b8152602001906001900390816105fe5790505b508160c001819052508060a0015167ffffffffffffffff8111156106405761063f6131e8565b5b60405190808252806020026020018201604052801561067957816020015b610666611862565b81526020019060019003908161065e5790505b50816101c001819052508060a0015167ffffffffffffffff8111156106a1576106a06131e8565b5b6040519080825280602002602001820160405280156106da57816020015b6106c761190c565b8152602001906001900390816106bf5790505b50816101e001819052508373ffffffffffffffffffffffffffffffffffffffff16635e5c06e260006040518263ffffffff1660e01b815260040161071e9190613dfe565b60c060405180830381865afa15801561073b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075f91906140d2565b8160e001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151602001516040518263ffffffff1660e01b81526004016107a8919061410e565b60e060405180830381865afa1580156107c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e991906141dd565b8161010001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151600001516040518263ffffffff1660e01b8152600401610833919061410e565b60e060405180830381865afa158015610850573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087491906141dd565b8161012001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151602001516040518263ffffffff1660e01b81526004016108be919061410e565b600060405180830381865afa1580156108db573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109049190614325565b8161014001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151600001516040518263ffffffff1660e01b815260040161094e919061410e565b600060405180830381865afa15801561096b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109949190614325565b81610160018190525060005b8160a00151811015610c78578473ffffffffffffffffffffffffffffffffffffffff1663f4ddb5be826040518263ffffffff1660e01b81526004016109e5919061410e565b606060405180830381865afa158015610a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190614410565b8260c001518281518110610a3d57610a3c61443d565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16636eb79f6a8360c001518381518110610a7b57610a7a61443d565b5b6020026020010151600001516040518263ffffffff1660e01b8152600401610aa3919061447b565b600060405180830381865afa158015610ac0573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610ae99190614f53565b826101c001518281518110610b0157610b0061443d565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16637987bd7f8360c001518381518110610b3f57610b3e61443d565b5b602002602001015160000151876040518363ffffffff1660e01b8152600401610b69929190614f9c565b600060405180830381865afa158015610b86573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610baf9190615236565b826101e001518281518110610bc757610bc661443d565b5b6020026020010181905250610c12826101c001518281518110610bed57610bec61443d565b5b602002602001015160200151610140015183610180015161169790919063ffffffff16565b82610180018181525050610c5b826101e001518281518110610c3757610c3661443d565b5b60200260200101516040015160400151836101a001516116ad90919063ffffffff16565b826101a00181815250508080610c70906152ae565b9150506109a0565b508115610caa57610ca081610120015160600151826101a001516116ad90919063ffffffff16565b8160600181815250505b9392505050565b610cb961198f565b6000845167ffffffffffffffff811115610cd657610cd56131e8565b5b604051908082528060200260200182016040528015610d0f57816020015b610cfc611774565b815260200190600190039081610cf45790505b5090506000855167ffffffffffffffff811115610d2f57610d2e6131e8565b5b604051908082528060200260200182016040528015610d6857816020015b610d556119ca565b815260200190600190039081610d4d5790505b50905060005b8651811015610e4f57610d9d878281518110610d8d57610d8c61443d565b5b6020026020010151896000610327565b838281518110610db057610daf61443d565b5b6020026020010181905250610e1e878281518110610dd157610dd061443d565b5b60200260200101518787868581518110610dee57610ded61443d565b5b602002602001015160800151878681518110610e0d57610e0c61443d565b5b60200260200101516060015161133e565b828281518110610e3157610e3061443d565b5b60200260200101819052508080610e47906152ae565b915050610d6e565b508183606001516000018190525080836060015160200181905250875167ffffffffffffffff811115610e8557610e846131e8565b5b604051908082528060200260200182016040528015610eb857816020015b6060815260200190600190039081610ea35790505b50836000018190525060005b8851811015611021578773ffffffffffffffffffffffffffffffffffffffff16637e8306ad8a8381518110610efc57610efb61443d565b5b6020026020010151600001518b8481518110610f1b57610f1a61443d565b5b6020026020010151602001518c8581518110610f3a57610f3961443d565b5b6020026020010151604001518d8681518110610f5957610f5861443d565b5b6020026020010151606001518e8781518110610f7857610f7761443d565b5b6020026020010151608001516040518663ffffffff1660e01b8152600401610fa4959493929190615317565b6000604051808303816000875af1158015610fc3573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610fec91906153e1565b846000015182815181106110035761100261443d565b5b60200260200101819052508080611019906152ae565b915050610ec4565b50855167ffffffffffffffff81111561103d5761103c6131e8565b5b60405190808252806020026020018201604052801561107057816020015b606081526020019060019003908161105b5790505b508360400181905250855167ffffffffffffffff811115611094576110936131e8565b5b6040519080825280602002602001820160405280156110c757816020015b60608152602001906001900390816110b25790505b50836020018190525060005b865181101561117f576111288782815181106110f2576110f161443d565b5b60200260200101518786606001516000015184815181106111165761111561443d565b5b60200260200101516101800151610112565b8560200151838151811061113f5761113e61443d565b5b602002602001018660400151848151811061115d5761115c61443d565b5b6020026020010182905282905250508080611177906152ae565b9150506110d3565b506000865167ffffffffffffffff81111561119d5761119c6131e8565b5b6040519080825280602002602001820160405280156111d657816020015b6111c3611774565b8152602001906001900390816111bb5790505b5090506000875167ffffffffffffffff8111156111f6576111f56131e8565b5b60405190808252806020026020018201604052801561122f57816020015b61121c6119ca565b8152602001906001900390816112145790505b50905060005b8851811015611316576112648982815181106112545761125361443d565b5b60200260200101518b6001610327565b8382815181106112775761127661443d565b5b60200260200101819052506112e58982815181106112985761129761443d565b5b602002602001015189898685815181106112b5576112b461443d565b5b6020026020010151608001518786815181106112d4576112d361443d565b5b60200260200101516060015161133e565b8282815181106112f8576112f761443d565b5b6020026020010181905250808061130e906152ae565b915050611235565b5081856080015160000181905250808560800151602001819052505050505095945050505050565b6113466119ca565b85816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505084816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508573ffffffffffffffffffffffffffffffffffffffff16635e5c06e2866040518263ffffffff1660e01b81526004016113ef9190613dfe565b60c060405180830381865afa15801561140c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143091906140d2565b8160400181905250611441836116c3565b6114825761147d61146461145f6000856116cf90919063ffffffff16565b6116e3565b848360400151604001516117389092919063ffffffff16565b61148c565b8060400151604001515b81606001818152505061149e836116c3565b6114df576114da6114c16114bc6000856116cf90919063ffffffff16565b6116e3565b84836040015160a001516117389092919063ffffffff16565b6114e9565b806040015160a001515b8160800181815250508573ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561153d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115619190615468565b73ffffffffffffffffffffffffffffffffffffffff16632637588e86866040518363ffffffff1660e01b815260040161159b929190615495565b602060405180830381865afa1580156115b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115dc91906154be565b8160a001901515908115158152505095945050505050565b8173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b815260040161164f9291906154eb565b6020604051808303816000875af115801561166e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169291906154be565b505050565b600081836116a59190615514565b905092915050565b600081836116bb9190615548565b905092915050565b60008082149050919050565b60006116db838361175a565b905092915050565b600080829050600081121561172f57806040517fb02ef087000000000000000000000000000000000000000000000000000000008152600401611726919061559b565b60405180910390fd5b80915050919050565b600081838561174791906155b6565b6117519190615627565b90509392505050565b60008183121561176a578161176c565b825b905092915050565b604051806102000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016117ac611a34565b8152602001600081526020016000815260200160008152602001606081526020016117d5611a47565b81526020016117e2611a7d565b81526020016117ef611a7d565b81526020016117fc611aba565b8152602001611809611aba565b8152602001600081526020016000815260200160608152602001606081525090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611893611acd565b81526020016118a0611b42565b81526020016118ad611be2565b8152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016118d7611c2d565b81526020016118e4611c2d565b815260200160608152602001606081526020016118ff611c7f565b8152602001600081525090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161195a611ca2565b8152602001611967611c2d565b8152602001611974611c2d565b81526020016060815260200160608152602001606081525090565b6040518060a001604052806060815260200160608152602001606081526020016119b7611cd1565b81526020016119c4611cd1565b81525090565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001611a17611a47565b815260200160008152602001600081526020016000151581525090565b6040518060200160405280600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280606081525090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581525090565b604051806102600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611baa611ceb565b8152602001611bb7611d13565b8152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611c20611d2d565b8152602001600081525090565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611c79611d47565b81525090565b604051806060016040528060008152602001600081526020016000151581525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060608152602001606081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611da782611d7c565b9050919050565b6000611db982611d9c565b9050919050565b611dc981611dae565b8114611dd457600080fd5b50565b600081359050611de681611dc0565b92915050565b611df581611d9c565b8114611e0057600080fd5b50565b600081359050611e1281611dec565b92915050565b6000819050919050565b611e2b81611e18565b8114611e3657600080fd5b50565b600081359050611e4881611e22565b92915050565b600080600060608486031215611e6757611e66611d72565b5b6000611e7586828701611dd7565b9350506020611e8686828701611e03565b9250506040611e9786828701611e39565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015611edb578082015181840152602081019050611ec0565b60008484015250505050565b6000601f19601f8301169050919050565b6000611f0382611ea1565b611f0d8185611eac565b9350611f1d818560208601611ebd565b611f2681611ee7565b840191505092915050565b60006040820190508181036000830152611f4b8185611ef8565b90508181036020830152611f5f8184611ef8565b90509392505050565b6000611f7382611d9c565b9050919050565b611f8381611f68565b8114611f8e57600080fd5b50565b600081359050611fa081611f7a565b92915050565b60008115159050919050565b611fbb81611fa6565b8114611fc657600080fd5b50565b600081359050611fd881611fb2565b92915050565b600080600060608486031215611ff757611ff6611d72565b5b600061200586828701611dd7565b935050602061201686828701611f91565b925050604061202786828701611fc9565b9150509250925092565b6000819050919050565b600061205661205161204c84611d7c565b612031565b611d7c565b9050919050565b60006120688261203b565b9050919050565b600061207a8261205d565b9050919050565b61208a8161206f565b82525050565b600081519050919050565b600082825260208201905092915050565b60006120b782612090565b6120c1818561209b565b93506120d1818560208601611ebd565b6120da81611ee7565b840191505092915050565b60006121006120fb6120f684611e18565b612031565b611e18565b9050919050565b612110816120e5565b82525050565b60208201600082015161212c6000850182612107565b50505050565b6000819050919050565b600061215761215261214d84612132565b612031565b612132565b9050919050565b6121678161213c565b82525050565b61217681611e18565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006121b38261205d565b9050919050565b6121c3816121a8565b82525050565b6060820160008201516121df60008501826121ba565b5060208201516121f2602085018261216d565b5060408201516122056040850182612107565b50505050565b600061221783836121c9565b60608301905092915050565b6000602082019050919050565b600061223b8261217c565b6122458185612187565b935061225083612198565b8060005b83811015612281578151612268888261220b565b975061227383612223565b925050600181019050612254565b5085935050505092915050565b60c0820160008201516122a4600085018261216d565b5060208201516122b7602085018261216d565b5060408201516122ca6040850182612107565b5060608201516122dd6060850182612107565b5060808201516122f06080850182612107565b5060a082015161230360a0850182612107565b50505050565b60e08201600082015161231f6000850182612107565b5060208201516123326020850182612107565b5060408201516123456040850182612107565b506060820151612358606085018261215e565b50608082015161236b6080850182612107565b5060a082015161237e60a0850182612107565b5060c082015161239160c085018261216d565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006123cf838361216d565b60208301905092915050565b6000602082019050919050565b60006123f382612397565b6123fd81856123a2565b9350612408836123b3565b8060005b8381101561243957815161242088826123c3565b975061242b836123db565b92505060018101905061240c565b5085935050505092915050565b6000602083016000830151848203600086015261246382826123e8565b9150508091505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6124a581611fa6565b82525050565b6101c0820160008201516124c26000850182612107565b5060208201516124d56020850182612107565b5060408201516124e86040850182612107565b5060608201516124fb6060850182612107565b50608082015161250e6080850182612107565b5060a082015161252160a085018261216d565b5060c082015161253460c085018261216d565b5060e082015161254760e0850182612107565b5061010082015161255c610100850182612107565b50610120820151612571610120850182612107565b50610140820151612586610140850182612107565b5061016082015161259b61016085018261249c565b506101808201516125b061018085018261249c565b506101a08201516125c56101a085018261249c565b50505050565b6080820160008201516125e16000850182612107565b5060208201516125f46020850182612107565b5060408201516126076040850182612107565b50606082015161261a6060850182612107565b50505050565b6040820160008201516126366000850182612107565b5060208201516126496020850182612107565b50505050565b6102e0820160008201516126666000850182612107565b5060208201516126796020850182612107565b50604082015161268c6040850182612107565b50606082015161269f6060850182612107565b5060808201516126b26080850182612107565b5060a08201516126c560a0850182612107565b5060c08201516126d860c0850182612107565b5060e08201516126eb60e0850182612107565b50610100820151612700610100850182612107565b50610120820151612715610120850182612107565b5061014082015161272a610140850182612107565b5061016082015161273f610160850182612107565b506101808201516127546101808501826125cb565b506101a0820151612769610200850182612620565b506101c082015161277e610240850182612107565b506101e0820151612793610260850182612107565b506102008201516127a8610280850182612107565b506102208201516127bd6102a085018261216d565b506102408201516127d26102c085018261249c565b50505050565b6040820160008201516127ee600085018261215e565b506020820151612801602085018261215e565b50505050565b6101208201600082015161281e600085018261216d565b506020820151612831602085018261216d565b5060408201516128446040850182612107565b5060608201516128576060850182612107565b50608082015161286a6080850182612107565b5060a082015161287d60a0850182612107565b5060c082015161289060c08501826127d8565b5060e08201516128a461010085018261215e565b50505050565b6128b381611d9c565b82525050565b6060820160008201516128cf600085018261215e565b5060208201516128e2602085018261215e565b5060408201516128f5604085018261215e565b50505050565b61016082016000820151612912600085018261216d565b5060208201516129256020850182612107565b5060408201516129386040850182612107565b50606082015161294b6060850182612107565b50608082015161295e6080850182612107565b5060a082015161297160a0850182612107565b5060c082015161298460c085018261215e565b5060e082015161299760e085018261215e565b506101008201516129ac6101008501826128b9565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006129ea83836128fb565b6101608301905092915050565b6000602082019050919050565b6000612a0f826129b2565b612a1981856129bd565b9350612a24836129ce565b8060005b83811015612a55578151612a3c88826129de565b9750612a47836129f7565b925050600181019050612a28565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b602082016000820151612aa4600085018261215e565b50505050565b602082016000820151612ac06000850182612107565b50505050565b60e082016000820151612adc600085018261249c565b506020820151612aef6020850182612a8e565b506040820151612b026040850182612a8e565b506060820151612b156060850182612a8e565b506080820151612b286080850182612aaa565b5060a0820151612b3b60a0850182612aaa565b5060c0820151612b4e60c0850182612aaa565b50505050565b6000612b608383612ac6565b60e08301905092915050565b6000602082019050919050565b6000612b8482612a62565b612b8e8185612a6d565b9350612b9983612a7e565b8060005b83811015612bca578151612bb18882612b54565b9750612bbc83612b6c565b925050600181019050612b9d565b5085935050505092915050565b606082016000820151612bed600085018261216d565b506020820151612c00602085018261215e565b506040820151612c13604085018261249c565b50505050565b600061098083016000830151612c3260008601826121ba565b506020830151612c4560208601826124ab565b506040830151612c596101e086018261264f565b506060830151612c6d6104c0860182612807565b506080830151612c816105e08601826128aa565b5060a0830151612c956106008601826128fb565b5060c0830151612ca96107608601826128fb565b5060e08301518482036108c0860152612cc28282612a04565b9150506101008301518482036108e0860152612cde8282612b79565b915050610120830151612cf5610900860182612bd7565b50610140830151612d0a61096086018261216d565b508091505092915050565b6000612d218383612c19565b905092915050565b6000602082019050919050565b6000612d4182612470565b612d4b818561247b565b935083602082028501612d5d8561248c565b8060005b85811015612d995784840389528151612d7a8582612d15565b9450612d8583612d29565b925060208a01995050600181019050612d61565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60a082016000820151612ded600085018261216d565b506020820151612e00602085018261216d565b506040820151612e13604085018261215e565b506060820151612e266060850182612107565b506080820151612e39608085018261216d565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612e77838361215e565b60208301905092915050565b6000602082019050919050565b6000612e9b82612e3f565b612ea58185612e4a565b9350612eb083612e5b565b8060005b83811015612ee1578151612ec88882612e6b565b9750612ed383612e83565b925050600181019050612eb4565b5085935050505092915050565b600061040083016000830151612f0760008601826121ba565b506020830151612f1a60208601826128aa565b506040830151612f2d6040860182612dd7565b506060830151612f4060e08601826128fb565b506080830151612f546102408601826128fb565b5060a08301518482036103a0860152612f6d8282612a04565b91505060c08301518482036103c0860152612f888282612b79565b91505060e08301518482036103e0860152612fa38282612e90565b9150508091505092915050565b6000612fbc8383612eee565b905092915050565b6000602082019050919050565b6000612fdc82612dab565b612fe68185612db6565b935083602082028501612ff885612dc7565b8060005b8581101561303457848403895281516130158582612fb0565b945061302083612fc4565b925060208a01995050600181019050612ffc565b50829750879550505050505092915050565b60006104208301600083015161305f6000860182612081565b506020830151848203602086015261307782826120ac565b915050604083015161308c6040860182612116565b50606083015161309f606086018261215e565b5060808301516130b26080860182612107565b5060a08301516130c560a086018261216d565b5060c083015184820360c08601526130dd8282612230565b91505060e08301516130f260e086018261228e565b506101008301516131076101a0860182612309565b5061012083015161311c610280860182612309565b506101408301518482036103608601526131368282612446565b9150506101608301518482036103808601526131528282612446565b9150506101808301516131696103a0860182612107565b506101a083015161317e6103c086018261215e565b506101c08301518482036103e08601526131988282612d36565b9150506101e08301518482036104008601526131b48282612fd1565b9150508091505092915050565b600060208201905081810360008301526131db8184613046565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61322082611ee7565b810181811067ffffffffffffffff8211171561323f5761323e6131e8565b5b80604052505050565b6000613252611d68565b905061325e8282613217565b919050565b600067ffffffffffffffff82111561327e5761327d6131e8565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b60006132a982611d9c565b9050919050565b6132b98161329e565b81146132c457600080fd5b50565b6000813590506132d6816132b0565b92915050565b6132e581611e18565b81146132f057600080fd5b50565b600081359050613302816132dc565b92915050565b600080fd5b600067ffffffffffffffff821115613328576133276131e8565b5b61333182611ee7565b9050602081019050919050565b82818337600083830152505050565b600061336061335b8461330d565b613248565b90508281526020810184848401111561337c5761337b613308565b5b61338784828561333e565b509392505050565b600082601f8301126133a4576133a36131e3565b5b81356133b484826020860161334d565b91505092915050565b600060a082840312156133d3576133d2613294565b5b6133dd60a0613248565b905060006133ed848285016132c7565b6000830152506020613401848285016132f3565b6020830152506040613415848285016132f3565b6040830152506060613429848285016132f3565b606083015250608082013567ffffffffffffffff81111561344d5761344c613299565b5b6134598482850161338f565b60808301525092915050565b600061347861347384613263565b613248565b9050808382526020820190506020840283018581111561349b5761349a61328f565b5b835b818110156134e257803567ffffffffffffffff8111156134c0576134bf6131e3565b5b8086016134cd89826133bd565b8552602085019450505060208101905061349d565b5050509392505050565b600082601f830112613501576135006131e3565b5b8135613511848260208601613465565b91505092915050565b600067ffffffffffffffff821115613535576135346131e8565b5b602082029050602081019050919050565b60006135596135548461351a565b613248565b9050808382526020820190506020840283018581111561357c5761357b61328f565b5b835b818110156135a557806135918882611dd7565b84526020840193505060208101905061357e565b5050509392505050565b600082601f8301126135c4576135c36131e3565b5b81356135d4848260208601613546565b91505092915050565b600080600080600060a086880312156135f9576135f8611d72565b5b600086013567ffffffffffffffff81111561361757613616611d77565b5b613623888289016134ec565b955050602061363488828901611f91565b945050604086013567ffffffffffffffff81111561365557613654611d77565b5b613661888289016135af565b935050606061367288828901611e03565b925050608061368388828901611e03565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b60006136d882611ea1565b6136e281856136bc565b93506136f2818560208601611ebd565b6136fb81611ee7565b840191505092915050565b600061371283836136cd565b905092915050565b6000602082019050919050565b600061373282613690565b61373c818561369b565b93508360208202850161374e856136ac565b8060005b8581101561378a578484038952815161376b8582613706565b94506137768361371a565b925060208a01995050600181019050613752565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610420830160008301516137e16000860182612081565b50602083015184820360208601526137f982826120ac565b915050604083015161380e6040860182612116565b506060830151613821606086018261215e565b5060808301516138346080860182612107565b5060a083015161384760a086018261216d565b5060c083015184820360c086015261385f8282612230565b91505060e083015161387460e086018261228e565b506101008301516138896101a0860182612309565b5061012083015161389e610280860182612309565b506101408301518482036103608601526138b88282612446565b9150506101608301518482036103808601526138d48282612446565b9150506101808301516138eb6103a0860182612107565b506101a08301516139006103c086018261215e565b506101c08301518482036103e086015261391a8282612d36565b9150506101e08301518482036104008601526139368282612fd1565b9150508091505092915050565b600061394f83836137c8565b905092915050565b6000602082019050919050565b600061396f8261379c565b61397981856137a7565b93508360208202850161398b856137b8565b8060005b858110156139c757848403895281516139a88582613943565b94506139b383613957565b925060208a0199505060018101905061398f565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61016082016000820151613a1c6000850182612081565b506020820151613a2f60208501826128aa565b506040820151613a42604085018261228e565b506060820151613a56610100850182612107565b506080820151613a6a610120850182612107565b5060a0820151613a7e61014085018261249c565b50505050565b6000613a908383613a05565b6101608301905092915050565b6000602082019050919050565b6000613ab5826139d9565b613abf81856139e4565b9350613aca836139f5565b8060005b83811015613afb578151613ae28882613a84565b9750613aed83613a9d565b925050600181019050613ace565b5085935050505092915050565b60006040830160008301518482036000860152613b258282613964565b91505060208301518482036020860152613b3f8282613aaa565b9150508091505092915050565b600060a0830160008301518482036000860152613b698282613727565b91505060208301518482036020860152613b838282613727565b91505060408301518482036040860152613b9d8282613727565b91505060608301518482036060860152613bb78282613b08565b91505060808301518482036080860152613bd18282613b08565b9150508091505092915050565b60006020820190508181036000830152613bf88184613b4c565b905092915050565b613c0981612132565b8114613c1457600080fd5b50565b600081359050613c2681613c00565b92915050565b600080600080600060a08688031215613c4857613c47611d72565b5b6000613c5688828901611dd7565b9550506020613c6788828901611e03565b9450506040613c7888828901611e03565b9350506060613c8988828901611e39565b9250506080613c9a88828901613c17565b9150509295509295909350565b61016082016000820151613cbe6000850182612081565b506020820151613cd160208501826128aa565b506040820151613ce4604085018261228e565b506060820151613cf8610100850182612107565b506080820151613d0c610120850182612107565b5060a0820151613d2061014085018261249c565b50505050565b600061016082019050613d3c6000830184613ca7565b92915050565b613d4b81611d9c565b8114613d5657600080fd5b50565b600081519050613d6881613d42565b92915050565b600060208284031215613d8457613d83611d72565b5b6000613d9284828501613d59565b91505092915050565b613da481611d9c565b82525050565b613db3816120e5565b82525050565b6000608082019050613dce6000830187613d9b565b613ddb6020830186613daa565b613de86040830185613daa565b613df56060830184613daa565b95945050505050565b6000602082019050613e136000830184613d9b565b92915050565b600067ffffffffffffffff821115613e3457613e336131e8565b5b613e3d82611ee7565b9050602081019050919050565b6000613e5d613e5884613e19565b613248565b905082815260208101848484011115613e7957613e78613308565b5b613e84848285611ebd565b509392505050565b600082601f830112613ea157613ea06131e3565b5b8151613eb1848260208601613e4a565b91505092915050565b600060208284031215613ed057613ecf611d72565b5b600082015167ffffffffffffffff811115613eee57613eed611d77565b5b613efa84828501613e8c565b91505092915050565b600081519050613f1281611e22565b92915050565b600060208284031215613f2e57613f2d613294565b5b613f386020613248565b90506000613f4884828501613f03565b60008301525092915050565b600060208284031215613f6a57613f69611d72565b5b6000613f7884828501613f18565b91505092915050565b600081519050613f9081613c00565b92915050565b600060208284031215613fac57613fab611d72565b5b6000613fba84828501613f81565b91505092915050565b600060208284031215613fd957613fd8611d72565b5b6000613fe784828501613f03565b91505092915050565b600081519050613fff816132dc565b92915050565b60006020828403121561401b5761401a611d72565b5b600061402984828501613ff0565b91505092915050565b600060c0828403121561404857614047613294565b5b61405260c0613248565b9050600061406284828501613ff0565b600083015250602061407684828501613ff0565b602083015250604061408a84828501613f03565b604083015250606061409e84828501613f03565b60608301525060806140b284828501613f03565b60808301525060a06140c684828501613f03565b60a08301525092915050565b600060c082840312156140e8576140e7611d72565b5b60006140f684828501614032565b91505092915050565b61410881611e18565b82525050565b600060208201905061412360008301846140ff565b92915050565b600060e0828403121561413f5761413e613294565b5b61414960e0613248565b9050600061415984828501613f03565b600083015250602061416d84828501613f03565b602083015250604061418184828501613f03565b604083015250606061419584828501613f81565b60608301525060806141a984828501613f03565b60808301525060a06141bd84828501613f03565b60a08301525060c06141d184828501613ff0565b60c08301525092915050565b600060e082840312156141f3576141f2611d72565b5b600061420184828501614129565b91505092915050565b600067ffffffffffffffff821115614225576142246131e8565b5b602082029050602081019050919050565b60006142496142448461420a565b613248565b9050808382526020820190506020840283018581111561426c5761426b61328f565b5b835b8181101561429557806142818882613ff0565b84526020840193505060208101905061426e565b5050509392505050565b600082601f8301126142b4576142b36131e3565b5b81516142c4848260208601614236565b91505092915050565b6000602082840312156142e3576142e2613294565b5b6142ed6020613248565b9050600082015167ffffffffffffffff81111561430d5761430c613299565b5b6143198482850161429f565b60008301525092915050565b60006020828403121561433b5761433a611d72565b5b600082015167ffffffffffffffff81111561435957614358611d77565b5b614365848285016142cd565b91505092915050565b600061437982611d9c565b9050919050565b6143898161436e565b811461439457600080fd5b50565b6000815190506143a681614380565b92915050565b6000606082840312156143c2576143c1613294565b5b6143cc6060613248565b905060006143dc84828501614397565b60008301525060206143f084828501613ff0565b602083015250604061440484828501613f03565b60408301525092915050565b60006060828403121561442657614425611d72565b5b6000614434848285016143ac565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b614475816121a8565b82525050565b6000602082019050614490600083018461446c565b92915050565b6000815190506144a581611fb2565b92915050565b60006101c082840312156144c2576144c1613294565b5b6144cd6101c0613248565b905060006144dd84828501613f03565b60008301525060206144f184828501613f03565b602083015250604061450584828501613f03565b604083015250606061451984828501613f03565b606083015250608061452d84828501613f03565b60808301525060a061454184828501613ff0565b60a08301525060c061455584828501613ff0565b60c08301525060e061456984828501613f03565b60e08301525061010061457e84828501613f03565b6101008301525061012061459484828501613f03565b610120830152506101406145aa84828501613f03565b610140830152506101606145c084828501614496565b610160830152506101806145d684828501614496565b610180830152506101a06145ec84828501614496565b6101a08301525092915050565b60006080828403121561460f5761460e613294565b5b6146196080613248565b9050600061462984828501613f03565b600083015250602061463d84828501613f03565b602083015250604061465184828501613f03565b604083015250606061466584828501613f03565b60608301525092915050565b60006040828403121561468757614686613294565b5b6146916040613248565b905060006146a184828501613f03565b60008301525060206146b584828501613f03565b60208301525092915050565b60006102e082840312156146d8576146d7613294565b5b6146e3610260613248565b905060006146f384828501613f03565b600083015250602061470784828501613f03565b602083015250604061471b84828501613f03565b604083015250606061472f84828501613f03565b606083015250608061474384828501613f03565b60808301525060a061475784828501613f03565b60a08301525060c061476b84828501613f03565b60c08301525060e061477f84828501613f03565b60e08301525061010061479484828501613f03565b610100830152506101206147aa84828501613f03565b610120830152506101406147c084828501613f03565b610140830152506101606147d684828501613f03565b610160830152506101806147ec848285016145f9565b6101808301525061020061480284828501614671565b6101a08301525061024061481884828501613f03565b6101c08301525061026061482e84828501613f03565b6101e08301525061028061484484828501613f03565b610200830152506102a061485a84828501613ff0565b610220830152506102c061487084828501614496565b6102408301525092915050565b60006040828403121561489357614892613294565b5b61489d6040613248565b905060006148ad84828501613f81565b60008301525060206148c184828501613f81565b60208301525092915050565b600061012082840312156148e4576148e3613294565b5b6148ef610100613248565b905060006148ff84828501613ff0565b600083015250602061491384828501613ff0565b602083015250604061492784828501613f03565b604083015250606061493b84828501613f03565b606083015250608061494f84828501613f03565b60808301525060a061496384828501613f03565b60a08301525060c06149778482850161487d565b60c08301525061010061498c84828501613f81565b60e08301525092915050565b6000815190506149a781611dec565b92915050565b6000606082840312156149c3576149c2613294565b5b6149cd6060613248565b905060006149dd84828501613f81565b60008301525060206149f184828501613f81565b6020830152506040614a0584828501613f81565b60408301525092915050565b60006101608284031215614a2857614a27613294565b5b614a33610120613248565b90506000614a4384828501613ff0565b6000830152506020614a5784828501613f03565b6020830152506040614a6b84828501613f03565b6040830152506060614a7f84828501613f03565b6060830152506080614a9384828501613f03565b60808301525060a0614aa784828501613f03565b60a08301525060c0614abb84828501613f81565b60c08301525060e0614acf84828501613f81565b60e083015250610100614ae4848285016149ad565b6101008301525092915050565b600067ffffffffffffffff821115614b0c57614b0b6131e8565b5b602082029050602081019050919050565b6000614b30614b2b84614af1565b613248565b9050808382526020820190506101608402830185811115614b5457614b5361328f565b5b835b81811015614b7e5780614b698882614a11565b84526020840193505061016081019050614b56565b5050509392505050565b600082601f830112614b9d57614b9c6131e3565b5b8151614bad848260208601614b1d565b91505092915050565b600067ffffffffffffffff821115614bd157614bd06131e8565b5b602082029050602081019050919050565b600060208284031215614bf857614bf7613294565b5b614c026020613248565b90506000614c1284828501613f81565b60008301525092915050565b600060208284031215614c3457614c33613294565b5b614c3e6020613248565b90506000614c4e84828501613f03565b60008301525092915050565b600060e08284031215614c7057614c6f613294565b5b614c7a60e0613248565b90506000614c8a84828501614496565b6000830152506020614c9e84828501614be2565b6020830152506040614cb284828501614be2565b6040830152506060614cc684828501614be2565b6060830152506080614cda84828501614c1e565b60808301525060a0614cee84828501614c1e565b60a08301525060c0614d0284828501614c1e565b60c08301525092915050565b6000614d21614d1c84614bb6565b613248565b90508083825260208201905060e08402830185811115614d4457614d4361328f565b5b835b81811015614d6d5780614d598882614c5a565b84526020840193505060e081019050614d46565b5050509392505050565b600082601f830112614d8c57614d8b6131e3565b5b8151614d9c848260208601614d0e565b91505092915050565b600060608284031215614dbb57614dba613294565b5b614dc56060613248565b90506000614dd584828501613ff0565b6000830152506020614de984828501613f81565b6020830152506040614dfd84828501614496565b60408301525092915050565b60006109808284031215614e2057614e1f613294565b5b614e2b610160613248565b90506000614e3b84828501614397565b6000830152506020614e4f848285016144ab565b6020830152506101e0614e64848285016146c1565b6040830152506104c0614e79848285016148cd565b6060830152506105e0614e8e84828501614998565b608083015250610600614ea384828501614a11565b60a083015250610760614eb884828501614a11565b60c0830152506108c082015167ffffffffffffffff811115614edd57614edc613299565b5b614ee984828501614b88565b60e0830152506108e082015167ffffffffffffffff811115614f0e57614f0d613299565b5b614f1a84828501614d77565b61010083015250610900614f3084828501614da5565b61012083015250610960614f4684828501613ff0565b6101408301525092915050565b600060208284031215614f6957614f68611d72565b5b600082015167ffffffffffffffff811115614f8757614f86611d77565b5b614f9384828501614e09565b91505092915050565b6000604082019050614fb1600083018561446c565b614fbe6020830184613d9b565b9392505050565b600060a08284031215614fdb57614fda613294565b5b614fe560a0613248565b90506000614ff584828501613ff0565b600083015250602061500984828501613ff0565b602083015250604061501d84828501613f81565b604083015250606061503184828501613f03565b606083015250608061504584828501613ff0565b60808301525092915050565b600067ffffffffffffffff82111561506c5761506b6131e8565b5b602082029050602081019050919050565b600061509061508b84615051565b613248565b905080838252602082019050602084028301858111156150b3576150b261328f565b5b835b818110156150dc57806150c88882613f81565b8452602084019350506020810190506150b5565b5050509392505050565b600082601f8301126150fb576150fa6131e3565b5b815161510b84826020860161507d565b91505092915050565b6000610400828403121561512b5761512a613294565b5b615136610100613248565b9050600061514684828501614397565b600083015250602061515a84828501614998565b602083015250604061516e84828501614fc5565b60408301525060e061518284828501614a11565b60608301525061024061519784828501614a11565b6080830152506103a082015167ffffffffffffffff8111156151bc576151bb613299565b5b6151c884828501614b88565b60a0830152506103c082015167ffffffffffffffff8111156151ed576151ec613299565b5b6151f984828501614d77565b60c0830152506103e082015167ffffffffffffffff81111561521e5761521d613299565b5b61522a848285016150e6565b60e08301525092915050565b60006020828403121561524c5761524b611d72565b5b600082015167ffffffffffffffff81111561526a57615269611d77565b5b61527684828501615114565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006152b982611e18565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036152eb576152ea61527f565b5b600182019050919050565b60006153018261205d565b9050919050565b615311816152f6565b82525050565b600060a08201905061532c6000830188615308565b61533960208301876140ff565b61534660408301866140ff565b61535360608301856140ff565b81810360808301526153658184611ef8565b90509695505050505050565b600061538461537f8461330d565b613248565b9050828152602081018484840111156153a05761539f613308565b5b6153ab848285611ebd565b509392505050565b600082601f8301126153c8576153c76131e3565b5b81516153d8848260208601615371565b91505092915050565b6000602082840312156153f7576153f6611d72565b5b600082015167ffffffffffffffff81111561541557615414611d77565b5b615421848285016153b3565b91505092915050565b600061543582611d9c565b9050919050565b6154458161542a565b811461545057600080fd5b50565b6000815190506154628161543c565b92915050565b60006020828403121561547e5761547d611d72565b5b600061548c84828501615453565b91505092915050565b60006040820190506154aa6000830185613d9b565b6154b76020830184613d9b565b9392505050565b6000602082840312156154d4576154d3611d72565b5b60006154e284828501614496565b91505092915050565b60006040820190506155006000830185613d9b565b61550d60208301846140ff565b9392505050565b600061551f82611e18565b915061552a83611e18565b92508282019050808211156155425761554161527f565b5b92915050565b600061555382612132565b915061555e83612132565b9250828201905082811215600083121683821260008412151617156155865761558561527f565b5b92915050565b61559581612132565b82525050565b60006020820190506155b0600083018461558c565b92915050565b60006155c182611e18565b91506155cc83611e18565b92508282026155da81611e18565b915082820484148315176155f1576155f061527f565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061563282611e18565b915061563d83611e18565b92508261564d5761564c6155f8565b5b82820490509291505056fea264697066735822122000f7293f59bd216f22410edb6558e558029916208f165c123c9fc9b7e4e5668864736f6c63430008130033",
  linkReferences: {},
  deployedLinkReferences: {},
};
