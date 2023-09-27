export const IProductAbi = [
  {
    inputs: [],
    name: "ParamProviderInvalidParamValue",
    type: "error",
  },
  {
    inputs: [],
    name: "PayoffProviderInvalidOracle",
    type: "error",
  },
  {
    inputs: [],
    name: "PayoffProviderInvalidPayoffDefinitionError",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductClosedError",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductDoubleSidedError",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductInLiquidationError",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductInsufficientCollateralError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "UFixed18",
        name: "socializationFactor",
        type: "uint256",
      },
    ],
    name: "ProductInsufficientLiquidityError",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductMakerOverLimitError",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductOracleBootstrappingError",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductOverClosedError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "preVersion",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toVersion",
        type: "uint256",
      },
    ],
    name: "AccountSettle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "newClosed",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "ClosedUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "UFixed18",
        name: "newFundingFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "FundingFeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "PackedFixed18",
            name: "minRate",
            type: "int128",
          },
          {
            internalType: "PackedFixed18",
            name: "maxRate",
            type: "int128",
          },
          {
            internalType: "PackedFixed18",
            name: "targetRate",
            type: "int128",
          },
          {
            internalType: "PackedUFixed18",
            name: "targetUtilization",
            type: "uint128",
          },
        ],
        indexed: false,
        internalType: "struct JumpRateUtilizationCurve",
        name: "",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "JumpRateUtilizationCurveUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "UFixed18",
        name: "newMaintenance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "MaintenanceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "MakeClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "MakeOpened",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "UFixed18",
        name: "newMakerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "MakerFeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "UFixed18",
        name: "newMakerLimit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "MakerLimitUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oracleVersion",
        type: "uint256",
      },
    ],
    name: "OracleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "UFixed18",
        name: "newMakerFee",
        type: "uint256",
      },
    ],
    name: "PendingMakerFeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "UFixed18",
        name: "newPositionFee",
        type: "uint256",
      },
    ],
    name: "PendingPositionFeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "UFixed18",
        name: "newTakerFee",
        type: "uint256",
      },
    ],
    name: "PendingTakerFeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "UFixed18",
        name: "newPositionFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "PositionFeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "preVersion",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toVersion",
        type: "uint256",
      },
    ],
    name: "Settle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TakeClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TakeOpened",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "UFixed18",
        name: "newTakerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "TakerFeeUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "oracleVersion",
        type: "uint256",
      },
    ],
    name: "atVersion",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "version",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "Fixed18",
            name: "price",
            type: "int256",
          },
        ],
        internalType: "struct IOracleProvider.OracleVersion",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "closeAll",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "closeMake",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "closeMakeFor",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "closeTake",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "closeTakeFor",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "closed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentVersion",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "version",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "Fixed18",
            name: "price",
            type: "int256",
          },
        ],
        internalType: "struct IOracleProvider.OracleVersion",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fundingFee",
    outputs: [
      {
        internalType: "UFixed18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            components: [
              {
                internalType: "enum PayoffDefinitionLib.PayoffType",
                name: "payoffType",
                type: "uint8",
              },
              {
                internalType: "enum PayoffDefinitionLib.PayoffDirection",
                name: "payoffDirection",
                type: "uint8",
              },
              {
                internalType: "bytes30",
                name: "data",
                type: "bytes30",
              },
            ],
            internalType: "struct PayoffDefinition",
            name: "payoffDefinition",
            type: "tuple",
          },
          {
            internalType: "contract IOracleProvider",
            name: "oracle",
            type: "address",
          },
          {
            internalType: "UFixed18",
            name: "maintenance",
            type: "uint256",
          },
          {
            internalType: "UFixed18",
            name: "fundingFee",
            type: "uint256",
          },
          {
            internalType: "UFixed18",
            name: "makerFee",
            type: "uint256",
          },
          {
            internalType: "UFixed18",
            name: "takerFee",
            type: "uint256",
          },
          {
            internalType: "UFixed18",
            name: "positionFee",
            type: "uint256",
          },
          {
            internalType: "UFixed18",
            name: "makerLimit",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "PackedFixed18",
                name: "minRate",
                type: "int128",
              },
              {
                internalType: "PackedFixed18",
                name: "maxRate",
                type: "int128",
              },
              {
                internalType: "PackedFixed18",
                name: "targetRate",
                type: "int128",
              },
              {
                internalType: "PackedUFixed18",
                name: "targetUtilization",
                type: "uint128",
              },
            ],
            internalType: "struct JumpRateUtilizationCurve",
            name: "utilizationCurve",
            type: "tuple",
          },
        ],
        internalType: "struct IProduct.ProductInfo",
        name: "productInfo_",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isClosed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isLiquidating",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "latestVersion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestVersion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maintenance",
    outputs: [
      {
        internalType: "UFixed18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "maintenance",
    outputs: [
      {
        internalType: "UFixed18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "maintenanceNext",
    outputs: [
      {
        internalType: "UFixed18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "makerFee",
    outputs: [
      {
        internalType: "UFixed18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "makerLimit",
    outputs: [
      {
        internalType: "UFixed18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "openMake",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "openMakeFor",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "openTake",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "UFixed18",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "openTakeFor",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract IOracleProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payoffDefinition",
    outputs: [
      {
        components: [
          {
            internalType: "enum PayoffDefinitionLib.PayoffType",
            name: "payoffType",
            type: "uint8",
          },
          {
            internalType: "enum PayoffDefinitionLib.PayoffDirection",
            name: "payoffDirection",
            type: "uint8",
          },
          {
            internalType: "bytes30",
            name: "data",
            type: "bytes30",
          },
        ],
        internalType: "struct PayoffDefinition",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingFeeUpdates",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "makerFeeUpdated",
            type: "bool",
          },
          {
            internalType: "uint64",
            name: "pendingMakerFee",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "takerFeeUpdated",
            type: "bool",
          },
          {
            internalType: "uint64",
            name: "pendingTakerFee",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "positionFeeUpdated",
            type: "bool",
          },
          {
            internalType: "uint64",
            name: "pendingPositionFee",
            type: "uint64",
          },
        ],
        internalType: "struct PendingFeeUpdates",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "position",
    outputs: [
      {
        components: [
          {
            internalType: "UFixed18",
            name: "maker",
            type: "uint256",
          },
          {
            internalType: "UFixed18",
            name: "taker",
            type: "uint256",
          },
        ],
        internalType: "struct Position",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "oracleVersion",
        type: "uint256",
      },
    ],
    name: "positionAtVersion",
    outputs: [
      {
        components: [
          {
            internalType: "UFixed18",
            name: "maker",
            type: "uint256",
          },
          {
            internalType: "UFixed18",
            name: "taker",
            type: "uint256",
          },
        ],
        internalType: "struct Position",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "positionFee",
    outputs: [
      {
        internalType: "UFixed18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "pre",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "oracleVersion",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "UFixed18",
                name: "maker",
                type: "uint256",
              },
              {
                internalType: "UFixed18",
                name: "taker",
                type: "uint256",
              },
            ],
            internalType: "struct Position",
            name: "openPosition",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "UFixed18",
                name: "maker",
                type: "uint256",
              },
              {
                internalType: "UFixed18",
                name: "taker",
                type: "uint256",
              },
            ],
            internalType: "struct Position",
            name: "closePosition",
            type: "tuple",
          },
        ],
        internalType: "struct PrePosition",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pre",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "oracleVersion",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "UFixed18",
                name: "maker",
                type: "uint256",
              },
              {
                internalType: "UFixed18",
                name: "taker",
                type: "uint256",
              },
            ],
            internalType: "struct Position",
            name: "openPosition",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "UFixed18",
                name: "maker",
                type: "uint256",
              },
              {
                internalType: "UFixed18",
                name: "taker",
                type: "uint256",
              },
            ],
            internalType: "struct Position",
            name: "closePosition",
            type: "tuple",
          },
        ],
        internalType: "struct PrePosition",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "UFixed18",
            name: "maker",
            type: "uint256",
          },
          {
            internalType: "UFixed18",
            name: "taker",
            type: "uint256",
          },
        ],
        internalType: "struct Position",
        name: "position",
        type: "tuple",
      },
    ],
    name: "rate",
    outputs: [
      {
        internalType: "Fixed18",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "settle",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "settleAccount",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "oracleVersion",
        type: "uint256",
      },
    ],
    name: "shareAtVersion",
    outputs: [
      {
        components: [
          {
            internalType: "Fixed18",
            name: "maker",
            type: "int256",
          },
          {
            internalType: "Fixed18",
            name: "taker",
            type: "int256",
          },
        ],
        internalType: "struct Accumulator",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "takerFee",
    outputs: [
      {
        internalType: "UFixed18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "newClosed",
        type: "bool",
      },
    ],
    name: "updateClosed",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed18",
        name: "newFundingFee",
        type: "uint256",
      },
    ],
    name: "updateFundingFee",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed18",
        name: "newMaintenance",
        type: "uint256",
      },
    ],
    name: "updateMaintenance",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed18",
        name: "newMakerFee",
        type: "uint256",
      },
    ],
    name: "updateMakerFee",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed18",
        name: "newMakerLimit",
        type: "uint256",
      },
    ],
    name: "updateMakerLimit",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOracleProvider",
        name: "newOracle",
        type: "address",
      },
    ],
    name: "updateOracle",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed18",
        name: "newPositionFee",
        type: "uint256",
      },
    ],
    name: "updatePositionFee",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed18",
        name: "newTakerFee",
        type: "uint256",
      },
    ],
    name: "updateTakerFee",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "PackedFixed18",
            name: "minRate",
            type: "int128",
          },
          {
            internalType: "PackedFixed18",
            name: "maxRate",
            type: "int128",
          },
          {
            internalType: "PackedFixed18",
            name: "targetRate",
            type: "int128",
          },
          {
            internalType: "PackedUFixed18",
            name: "targetUtilization",
            type: "uint128",
          },
        ],
        internalType: "struct JumpRateUtilizationCurve",
        name: "newUtilizationCurve",
        type: "tuple",
      },
    ],
    name: "updateUtilizationCurve",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "utilizationCurve",
    outputs: [
      {
        components: [
          {
            internalType: "PackedFixed18",
            name: "minRate",
            type: "int128",
          },
          {
            internalType: "PackedFixed18",
            name: "maxRate",
            type: "int128",
          },
          {
            internalType: "PackedFixed18",
            name: "targetRate",
            type: "int128",
          },
          {
            internalType: "PackedUFixed18",
            name: "targetUtilization",
            type: "uint128",
          },
        ],
        internalType: "struct JumpRateUtilizationCurve",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "oracleVersion",
        type: "uint256",
      },
    ],
    name: "valueAtVersion",
    outputs: [
      {
        components: [
          {
            internalType: "Fixed18",
            name: "maker",
            type: "int256",
          },
          {
            internalType: "Fixed18",
            name: "taker",
            type: "int256",
          },
        ],
        internalType: "struct Accumulator",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
