/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: string; output: string; }
  Bytes: { input: string; output: string; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
};

export type AccountPositionProcessed = {
  account: Scalars['Bytes']['output'];
  accumulatedFunding: Scalars['BigInt']['output'];
  accumulatedInterest: Scalars['BigInt']['output'];
  accumulatedMakerPositionFee: Scalars['BigInt']['output'];
  accumulatedPnl: Scalars['BigInt']['output'];
  accumulatedReward: Scalars['BigInt']['output'];
  accumulatedValue: Scalars['BigInt']['output'];
  accumulationResult_collateralAmount: Scalars['BigInt']['output'];
  accumulationResult_keeper: Scalars['BigInt']['output'];
  accumulationResult_positionFee: Scalars['BigInt']['output'];
  accumulationResult_rewardAmount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  collateral: Scalars['BigInt']['output'];
  fromOracleVersion: Scalars['BigInt']['output'];
  fromPosition: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  priceImpactFee: Scalars['BigInt']['output'];
  side: PositionSide;
  size: Scalars['BigInt']['output'];
  toOracleVersion: Scalars['BigInt']['output'];
  toPosition: Scalars['BigInt']['output'];
  toVersionPrice: Scalars['BigInt']['output'];
  toVersionValid: Scalars['Boolean']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AccountPositionProcessed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accumulatedFunding?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedInterest?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedInterest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedMakerPositionFee?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedMakerPositionFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPnl?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedReward?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedValue?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_collateralAmount?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_collateralAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_collateralAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_collateralAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_collateralAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_collateralAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_collateralAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_collateralAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_keeper?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_keeper_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_keeper_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_keeper_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_keeper_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_keeper_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_keeper_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_keeper_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_positionFee?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_positionFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_rewardAmount?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_rewardAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AccountPositionProcessed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateral?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromOracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromOracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromPosition?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromPosition_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_not?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountPositionProcessed_Filter>>>;
  priceImpactFee?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceImpactFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  side?: InputMaybe<PositionSide>;
  side_in?: InputMaybe<Array<PositionSide>>;
  side_not?: InputMaybe<PositionSide>;
  side_not_in?: InputMaybe<Array<PositionSide>>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toOracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toOracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toPosition?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_gt?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_gte?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toPosition_lt?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_lte?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_not?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toVersionPrice?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toVersionPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toVersionValid?: InputMaybe<Scalars['Boolean']['input']>;
  toVersionValid_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  toVersionValid_not?: InputMaybe<Scalars['Boolean']['input']>;
  toVersionValid_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AccountPositionProcessed_OrderBy {
  Account = 'account',
  AccumulatedFunding = 'accumulatedFunding',
  AccumulatedInterest = 'accumulatedInterest',
  AccumulatedMakerPositionFee = 'accumulatedMakerPositionFee',
  AccumulatedPnl = 'accumulatedPnl',
  AccumulatedReward = 'accumulatedReward',
  AccumulatedValue = 'accumulatedValue',
  AccumulationResultCollateralAmount = 'accumulationResult_collateralAmount',
  AccumulationResultKeeper = 'accumulationResult_keeper',
  AccumulationResultPositionFee = 'accumulationResult_positionFee',
  AccumulationResultRewardAmount = 'accumulationResult_rewardAmount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Collateral = 'collateral',
  FromOracleVersion = 'fromOracleVersion',
  FromPosition = 'fromPosition',
  Id = 'id',
  Market = 'market',
  PriceImpactFee = 'priceImpactFee',
  Side = 'side',
  Size = 'size',
  ToOracleVersion = 'toOracleVersion',
  ToPosition = 'toPosition',
  ToVersionPrice = 'toVersionPrice',
  ToVersionValid = 'toVersionValid',
  TransactionHash = 'transactionHash'
}

export type BeneficiaryUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  newBeneficiary: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BeneficiaryUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BeneficiaryUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newBeneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  newBeneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newBeneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newBeneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newBeneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newBeneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newBeneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newBeneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  newBeneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newBeneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BeneficiaryUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BeneficiaryUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  NewBeneficiary = 'newBeneficiary',
  TransactionHash = 'transactionHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export enum Bucket {
  All = 'all',
  Daily = 'daily',
  Hourly = 'hourly',
  Weekly = 'weekly'
}

export type BucketedVolume = {
  bucket: Bucket;
  fundingFee: Scalars['BigInt']['output'];
  fundingLong: Scalars['BigInt']['output'];
  fundingMaker: Scalars['BigInt']['output'];
  fundingShort: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  interestFee: Scalars['BigInt']['output'];
  interestLong: Scalars['BigInt']['output'];
  interestMaker: Scalars['BigInt']['output'];
  interestShort: Scalars['BigInt']['output'];
  longAmount: Scalars['BigInt']['output'];
  longNotional: Scalars['BigInt']['output'];
  makerAmount: Scalars['BigInt']['output'];
  makerNotional: Scalars['BigInt']['output'];
  market: Scalars['Bytes']['output'];
  periodEndBlock: Scalars['BigInt']['output'];
  periodEndTimestamp: Scalars['BigInt']['output'];
  periodEndVersion: Scalars['BigInt']['output'];
  periodStartBlock: Scalars['BigInt']['output'];
  periodStartTimestamp: Scalars['BigInt']['output'];
  periodStartVersion: Scalars['BigInt']['output'];
  pnlLong: Scalars['BigInt']['output'];
  pnlMaker: Scalars['BigInt']['output'];
  pnlShort: Scalars['BigInt']['output'];
  positionFeeFee: Scalars['BigInt']['output'];
  positionFeeMaker: Scalars['BigInt']['output'];
  rewardLong: Scalars['BigInt']['output'];
  rewardMaker: Scalars['BigInt']['output'];
  rewardShort: Scalars['BigInt']['output'];
  shortAmount: Scalars['BigInt']['output'];
  shortNotional: Scalars['BigInt']['output'];
  totalWeight: Scalars['BigInt']['output'];
  weightedLongFunding: Scalars['BigInt']['output'];
  weightedLongInterest: Scalars['BigInt']['output'];
  weightedMakerFunding: Scalars['BigInt']['output'];
  weightedMakerInterest: Scalars['BigInt']['output'];
  weightedMakerPositionFees: Scalars['BigInt']['output'];
  weightedShortFunding: Scalars['BigInt']['output'];
  weightedShortInterest: Scalars['BigInt']['output'];
};

export type BucketedVolume_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BucketedVolume_Filter>>>;
  bucket?: InputMaybe<Bucket>;
  bucket_in?: InputMaybe<Array<Bucket>>;
  bucket_not?: InputMaybe<Bucket>;
  bucket_not_in?: InputMaybe<Array<Bucket>>;
  fundingFee?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingLong?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingMaker?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingShort?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  interestFee?: InputMaybe<Scalars['BigInt']['input']>;
  interestFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestLong?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestMaker?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestShort?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longAmount?: InputMaybe<Scalars['BigInt']['input']>;
  longAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  longAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longNotional?: InputMaybe<Scalars['BigInt']['input']>;
  longNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
  longNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerAmount?: InputMaybe<Scalars['BigInt']['input']>;
  makerAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  makerAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  makerAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  makerAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  makerAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  makerAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerNotional?: InputMaybe<Scalars['BigInt']['input']>;
  makerNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
  makerNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
  makerNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
  makerNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
  makerNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
  makerNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BucketedVolume_Filter>>>;
  periodEndBlock?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodEndBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodEndTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodEndTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodEndVersion?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodEndVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  periodEndVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodStartBlock?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodStartBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodStartTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodStartTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodStartVersion?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodStartVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  periodStartVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlLong?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlMaker?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlShort?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeFee?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeMaker?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardLong?: InputMaybe<Scalars['BigInt']['input']>;
  rewardLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewardLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardMaker?: InputMaybe<Scalars['BigInt']['input']>;
  rewardMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewardMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardShort?: InputMaybe<Scalars['BigInt']['input']>;
  rewardShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewardShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortAmount?: InputMaybe<Scalars['BigInt']['input']>;
  shortAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  shortAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortNotional?: InputMaybe<Scalars['BigInt']['input']>;
  shortNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
  shortNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWeight?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWeight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedLongFunding?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedLongFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedLongInterest?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongInterest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongInterest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongInterest_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedLongInterest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongInterest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongInterest_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedLongInterest_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedMakerFunding?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedMakerFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedMakerInterest?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerInterest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerInterest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerInterest_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedMakerInterest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerInterest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerInterest_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerInterest_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedMakerPositionFees?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedMakerPositionFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedShortFunding?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedShortFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedShortInterest?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortInterest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortInterest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortInterest_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedShortInterest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortInterest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortInterest_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedShortInterest_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum BucketedVolume_OrderBy {
  Bucket = 'bucket',
  FundingFee = 'fundingFee',
  FundingLong = 'fundingLong',
  FundingMaker = 'fundingMaker',
  FundingShort = 'fundingShort',
  Id = 'id',
  InterestFee = 'interestFee',
  InterestLong = 'interestLong',
  InterestMaker = 'interestMaker',
  InterestShort = 'interestShort',
  LongAmount = 'longAmount',
  LongNotional = 'longNotional',
  MakerAmount = 'makerAmount',
  MakerNotional = 'makerNotional',
  Market = 'market',
  PeriodEndBlock = 'periodEndBlock',
  PeriodEndTimestamp = 'periodEndTimestamp',
  PeriodEndVersion = 'periodEndVersion',
  PeriodStartBlock = 'periodStartBlock',
  PeriodStartTimestamp = 'periodStartTimestamp',
  PeriodStartVersion = 'periodStartVersion',
  PnlLong = 'pnlLong',
  PnlMaker = 'pnlMaker',
  PnlShort = 'pnlShort',
  PositionFeeFee = 'positionFeeFee',
  PositionFeeMaker = 'positionFeeMaker',
  RewardLong = 'rewardLong',
  RewardMaker = 'rewardMaker',
  RewardShort = 'rewardShort',
  ShortAmount = 'shortAmount',
  ShortNotional = 'shortNotional',
  TotalWeight = 'totalWeight',
  WeightedLongFunding = 'weightedLongFunding',
  WeightedLongInterest = 'weightedLongInterest',
  WeightedMakerFunding = 'weightedMakerFunding',
  WeightedMakerInterest = 'weightedMakerInterest',
  WeightedMakerPositionFees = 'weightedMakerPositionFees',
  WeightedShortFunding = 'weightedShortFunding',
  WeightedShortInterest = 'weightedShortInterest'
}

export type CallerAuthorized = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  caller: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CallerAuthorized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CallerAuthorized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CallerAuthorized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CallerAuthorized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Caller = 'caller',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export enum CheckpointType {
  Close = 'close',
  Open = 'open'
}

export type CoordinatorUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  newCoordinator: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CoordinatorUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CoordinatorUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newCoordinator?: InputMaybe<Scalars['Bytes']['input']>;
  newCoordinator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newCoordinator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newCoordinator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newCoordinator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newCoordinator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newCoordinator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newCoordinator_not?: InputMaybe<Scalars['Bytes']['input']>;
  newCoordinator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newCoordinator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CoordinatorUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CoordinatorUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  NewCoordinator = 'newCoordinator',
  TransactionHash = 'transactionHash'
}

export type FactoryRegistered = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  factory: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FactoryRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FactoryRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  factory?: InputMaybe<Scalars['Bytes']['input']>;
  factory_contains?: InputMaybe<Scalars['Bytes']['input']>;
  factory_gt?: InputMaybe<Scalars['Bytes']['input']>;
  factory_gte?: InputMaybe<Scalars['Bytes']['input']>;
  factory_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  factory_lt?: InputMaybe<Scalars['Bytes']['input']>;
  factory_lte?: InputMaybe<Scalars['Bytes']['input']>;
  factory_not?: InputMaybe<Scalars['Bytes']['input']>;
  factory_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  factory_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FactoryRegistered_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum FactoryRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Factory = 'factory',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type FeeClaimed = {
  account: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FeeClaimed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<FeeClaimed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FeeClaimed_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum FeeClaimed_OrderBy {
  Account = 'account',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  TransactionHash = 'transactionHash'
}

export type GranularityUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  effectiveAfter: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newGranularity: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type GranularityUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GranularityUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  effectiveAfter?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAfter_gt?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAfter_gte?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAfter_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  effectiveAfter_lt?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAfter_lte?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAfter_not?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAfter_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newGranularity?: InputMaybe<Scalars['BigInt']['input']>;
  newGranularity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newGranularity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newGranularity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newGranularity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newGranularity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newGranularity_not?: InputMaybe<Scalars['BigInt']['input']>;
  newGranularity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GranularityUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum GranularityUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  EffectiveAfter = 'effectiveAfter',
  Id = 'id',
  NewGranularity = 'newGranularity',
  TransactionHash = 'transactionHash'
}

export type Initialized = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type Initialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Initialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type InstanceRegistered = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  instance: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type InstanceRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<InstanceRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  instance?: InputMaybe<Scalars['Bytes']['input']>;
  instance_contains?: InputMaybe<Scalars['Bytes']['input']>;
  instance_gt?: InputMaybe<Scalars['Bytes']['input']>;
  instance_gte?: InputMaybe<Scalars['Bytes']['input']>;
  instance_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  instance_lt?: InputMaybe<Scalars['Bytes']['input']>;
  instance_lte?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<InstanceRegistered_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum InstanceRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Instance = 'instance',
  TransactionHash = 'transactionHash'
}

export type MarketAccountCheckpoint = {
  account: Scalars['Bytes']['output'];
  accumulatedCollateral: Scalars['BigInt']['output'];
  accumulatedFunding: Scalars['BigInt']['output'];
  accumulatedInterest: Scalars['BigInt']['output'];
  accumulatedInterfaceFees: Scalars['BigInt']['output'];
  accumulatedKeeperFees: Scalars['BigInt']['output'];
  accumulatedMakerPositionFee: Scalars['BigInt']['output'];
  accumulatedOrderFees: Scalars['BigInt']['output'];
  accumulatedPnl: Scalars['BigInt']['output'];
  accumulatedPositionFees: Scalars['BigInt']['output'];
  accumulatedPriceImpactFees: Scalars['BigInt']['output'];
  accumulatedReward: Scalars['BigInt']['output'];
  accumulatedValue: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  collateral: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  market: Scalars['Bytes']['output'];
  netDeposits: Scalars['BigInt']['output'];
  openNotional: Scalars['BigInt']['output'];
  openPriceImpactFees: Scalars['BigInt']['output'];
  openSize: Scalars['BigInt']['output'];
  side: PositionSide;
  startMagnitude: Scalars['BigInt']['output'];
  totalWeight: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  type: CheckpointType;
  version: Scalars['BigInt']['output'];
  weightedFunding: Scalars['BigInt']['output'];
  weightedInterest: Scalars['BigInt']['output'];
  weightedMakerPositionFees: Scalars['BigInt']['output'];
};

export type MarketAccountCheckpoint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accumulatedCollateral?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedCollateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedFunding?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedInterest?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedInterest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedInterfaceFees?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedInterfaceFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedKeeperFees?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedKeeperFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedMakerPositionFee?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedMakerPositionFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedOrderFees?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedOrderFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPnl?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPositionFees?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPositionFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPriceImpactFees?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPriceImpactFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedReward?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedValue?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<MarketAccountCheckpoint_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateral?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  netDeposits?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netDeposits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_not?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openPriceImpactFees?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openPriceImpactFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openSize?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketAccountCheckpoint_Filter>>>;
  side?: InputMaybe<PositionSide>;
  side_in?: InputMaybe<Array<PositionSide>>;
  side_not?: InputMaybe<PositionSide>;
  side_not_in?: InputMaybe<Array<PositionSide>>;
  startMagnitude?: InputMaybe<Scalars['BigInt']['input']>;
  startMagnitude_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startMagnitude_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startMagnitude_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startMagnitude_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startMagnitude_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startMagnitude_not?: InputMaybe<Scalars['BigInt']['input']>;
  startMagnitude_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWeight?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWeight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  type?: InputMaybe<CheckpointType>;
  type_in?: InputMaybe<Array<CheckpointType>>;
  type_not?: InputMaybe<CheckpointType>;
  type_not_in?: InputMaybe<Array<CheckpointType>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedFunding?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedInterest?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedInterest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedMakerPositionFees?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedMakerPositionFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MarketAccountCheckpoint_OrderBy {
  Account = 'account',
  AccumulatedCollateral = 'accumulatedCollateral',
  AccumulatedFunding = 'accumulatedFunding',
  AccumulatedInterest = 'accumulatedInterest',
  AccumulatedInterfaceFees = 'accumulatedInterfaceFees',
  AccumulatedKeeperFees = 'accumulatedKeeperFees',
  AccumulatedMakerPositionFee = 'accumulatedMakerPositionFee',
  AccumulatedOrderFees = 'accumulatedOrderFees',
  AccumulatedPnl = 'accumulatedPnl',
  AccumulatedPositionFees = 'accumulatedPositionFees',
  AccumulatedPriceImpactFees = 'accumulatedPriceImpactFees',
  AccumulatedReward = 'accumulatedReward',
  AccumulatedValue = 'accumulatedValue',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Collateral = 'collateral',
  Id = 'id',
  Market = 'market',
  NetDeposits = 'netDeposits',
  OpenNotional = 'openNotional',
  OpenPriceImpactFees = 'openPriceImpactFees',
  OpenSize = 'openSize',
  Side = 'side',
  StartMagnitude = 'startMagnitude',
  TotalWeight = 'totalWeight',
  TransactionHash = 'transactionHash',
  Type = 'type',
  Version = 'version',
  WeightedFunding = 'weightedFunding',
  WeightedInterest = 'weightedInterest',
  WeightedMakerPositionFees = 'weightedMakerPositionFees'
}

export type MarketAccountPosition = {
  account: Scalars['Bytes']['output'];
  accumulatedCollateral: Scalars['BigInt']['output'];
  accumulatedFunding: Scalars['BigInt']['output'];
  accumulatedInterest: Scalars['BigInt']['output'];
  accumulatedInterfaceFees: Scalars['BigInt']['output'];
  accumulatedKeeperFees: Scalars['BigInt']['output'];
  accumulatedMakerPositionFee: Scalars['BigInt']['output'];
  accumulatedOrderFees: Scalars['BigInt']['output'];
  accumulatedPnl: Scalars['BigInt']['output'];
  accumulatedPositionFees: Scalars['BigInt']['output'];
  accumulatedPriceImpactFees: Scalars['BigInt']['output'];
  accumulatedReward: Scalars['BigInt']['output'];
  accumulatedValue: Scalars['BigInt']['output'];
  collateral: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  lastUpdatedBlockNumber: Scalars['BigInt']['output'];
  lastUpdatedBlockTimestamp: Scalars['BigInt']['output'];
  lastUpdatedVersion: Scalars['BigInt']['output'];
  long: Scalars['BigInt']['output'];
  longInvalidation: Scalars['BigInt']['output'];
  maker: Scalars['BigInt']['output'];
  makerInvalidation: Scalars['BigInt']['output'];
  market: Scalars['Bytes']['output'];
  netDeposits: Scalars['BigInt']['output'];
  openNotional: Scalars['BigInt']['output'];
  openPriceImpactFees: Scalars['BigInt']['output'];
  openSize: Scalars['BigInt']['output'];
  short: Scalars['BigInt']['output'];
  shortInvalidation: Scalars['BigInt']['output'];
  totalWeight: Scalars['BigInt']['output'];
  weightedFunding: Scalars['BigInt']['output'];
  weightedInterest: Scalars['BigInt']['output'];
  weightedMakerPositionFees: Scalars['BigInt']['output'];
};

export type MarketAccountPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accumulatedCollateral?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedCollateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedFunding?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedInterest?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedInterest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterest_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedInterfaceFees?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedInterfaceFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedInterfaceFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedKeeperFees?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedKeeperFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedKeeperFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedMakerPositionFee?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedMakerPositionFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedMakerPositionFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedOrderFees?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedOrderFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedOrderFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPnl?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPositionFees?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPositionFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPositionFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPriceImpactFees?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedPriceImpactFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedPriceImpactFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedReward?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedValue?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<MarketAccountPosition_Filter>>>;
  collateral?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastUpdatedBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedVersion?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  long?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longInvalidation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_not?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  long_gt?: InputMaybe<Scalars['BigInt']['input']>;
  long_gte?: InputMaybe<Scalars['BigInt']['input']>;
  long_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  long_lt?: InputMaybe<Scalars['BigInt']['input']>;
  long_lte?: InputMaybe<Scalars['BigInt']['input']>;
  long_not?: InputMaybe<Scalars['BigInt']['input']>;
  long_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maker?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerInvalidation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_not?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maker_not?: InputMaybe<Scalars['BigInt']['input']>;
  maker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  netDeposits?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netDeposits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_not?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openPriceImpactFees?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openPriceImpactFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  openPriceImpactFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openSize?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  openSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketAccountPosition_Filter>>>;
  short?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortInvalidation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_not?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  short_gt?: InputMaybe<Scalars['BigInt']['input']>;
  short_gte?: InputMaybe<Scalars['BigInt']['input']>;
  short_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  short_lt?: InputMaybe<Scalars['BigInt']['input']>;
  short_lte?: InputMaybe<Scalars['BigInt']['input']>;
  short_not?: InputMaybe<Scalars['BigInt']['input']>;
  short_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWeight?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWeight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalWeight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedFunding?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedFunding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedFunding_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedInterest?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedInterest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedInterest_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedMakerPositionFees?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedMakerPositionFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedMakerPositionFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MarketAccountPosition_OrderBy {
  Account = 'account',
  AccumulatedCollateral = 'accumulatedCollateral',
  AccumulatedFunding = 'accumulatedFunding',
  AccumulatedInterest = 'accumulatedInterest',
  AccumulatedInterfaceFees = 'accumulatedInterfaceFees',
  AccumulatedKeeperFees = 'accumulatedKeeperFees',
  AccumulatedMakerPositionFee = 'accumulatedMakerPositionFee',
  AccumulatedOrderFees = 'accumulatedOrderFees',
  AccumulatedPnl = 'accumulatedPnl',
  AccumulatedPositionFees = 'accumulatedPositionFees',
  AccumulatedPriceImpactFees = 'accumulatedPriceImpactFees',
  AccumulatedReward = 'accumulatedReward',
  AccumulatedValue = 'accumulatedValue',
  Collateral = 'collateral',
  Id = 'id',
  LastUpdatedBlockNumber = 'lastUpdatedBlockNumber',
  LastUpdatedBlockTimestamp = 'lastUpdatedBlockTimestamp',
  LastUpdatedVersion = 'lastUpdatedVersion',
  Long = 'long',
  LongInvalidation = 'longInvalidation',
  Maker = 'maker',
  MakerInvalidation = 'makerInvalidation',
  Market = 'market',
  NetDeposits = 'netDeposits',
  OpenNotional = 'openNotional',
  OpenPriceImpactFees = 'openPriceImpactFees',
  OpenSize = 'openSize',
  Short = 'short',
  ShortInvalidation = 'shortInvalidation',
  TotalWeight = 'totalWeight',
  WeightedFunding = 'weightedFunding',
  WeightedInterest = 'weightedInterest',
  WeightedMakerPositionFees = 'weightedMakerPositionFees'
}

export type MarketAccumulator = {
  fundingLong: Scalars['BigInt']['output'];
  fundingMaker: Scalars['BigInt']['output'];
  fundingShort: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  interestLong: Scalars['BigInt']['output'];
  interestMaker: Scalars['BigInt']['output'];
  interestShort: Scalars['BigInt']['output'];
  latest: Scalars['Boolean']['output'];
  longReward: Scalars['BigInt']['output'];
  longValue: Scalars['BigInt']['output'];
  makerReward: Scalars['BigInt']['output'];
  makerValue: Scalars['BigInt']['output'];
  market: Scalars['Bytes']['output'];
  pnlLong: Scalars['BigInt']['output'];
  pnlMaker: Scalars['BigInt']['output'];
  pnlShort: Scalars['BigInt']['output'];
  positionFeeMaker: Scalars['BigInt']['output'];
  positionId: Scalars['BigInt']['output'];
  positionLong: Scalars['BigInt']['output'];
  positionMaker: Scalars['BigInt']['output'];
  positionShort: Scalars['BigInt']['output'];
  shortReward: Scalars['BigInt']['output'];
  shortValue: Scalars['BigInt']['output'];
  version: Scalars['BigInt']['output'];
};

export type MarketAccumulator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketAccumulator_Filter>>>;
  fundingLong?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingMaker?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingShort?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  interestLong?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestMaker?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestShort?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latest?: InputMaybe<Scalars['Boolean']['input']>;
  latest_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  latest_not?: InputMaybe<Scalars['Boolean']['input']>;
  latest_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  longReward?: InputMaybe<Scalars['BigInt']['input']>;
  longReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  longReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longValue?: InputMaybe<Scalars['BigInt']['input']>;
  longValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  longValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerReward?: InputMaybe<Scalars['BigInt']['input']>;
  makerReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  makerReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  makerReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  makerReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  makerReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  makerReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerValue?: InputMaybe<Scalars['BigInt']['input']>;
  makerValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  makerValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  makerValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  makerValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  makerValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  makerValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketAccumulator_Filter>>>;
  pnlLong?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  pnlLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlMaker?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  pnlMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlShort?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnlShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  pnlShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeMaker?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFeeMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionFeeMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionId?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionLong?: InputMaybe<Scalars['BigInt']['input']>;
  positionLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionMaker?: InputMaybe<Scalars['BigInt']['input']>;
  positionMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionShort?: InputMaybe<Scalars['BigInt']['input']>;
  positionShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortReward?: InputMaybe<Scalars['BigInt']['input']>;
  shortReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  shortReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortValue?: InputMaybe<Scalars['BigInt']['input']>;
  shortValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  shortValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MarketAccumulator_OrderBy {
  FundingLong = 'fundingLong',
  FundingMaker = 'fundingMaker',
  FundingShort = 'fundingShort',
  Id = 'id',
  InterestLong = 'interestLong',
  InterestMaker = 'interestMaker',
  InterestShort = 'interestShort',
  Latest = 'latest',
  LongReward = 'longReward',
  LongValue = 'longValue',
  MakerReward = 'makerReward',
  MakerValue = 'makerValue',
  Market = 'market',
  PnlLong = 'pnlLong',
  PnlMaker = 'pnlMaker',
  PnlShort = 'pnlShort',
  PositionFeeMaker = 'positionFeeMaker',
  PositionId = 'positionId',
  PositionLong = 'positionLong',
  PositionMaker = 'positionMaker',
  PositionShort = 'positionShort',
  ShortReward = 'shortReward',
  ShortValue = 'shortValue',
  Version = 'version'
}

export type MarketCreated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  definition_oracle: Scalars['Bytes']['output'];
  definition_payoff: Scalars['Bytes']['output'];
  definition_token: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MarketCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  definition_oracle?: InputMaybe<Scalars['Bytes']['input']>;
  definition_oracle_contains?: InputMaybe<Scalars['Bytes']['input']>;
  definition_oracle_gt?: InputMaybe<Scalars['Bytes']['input']>;
  definition_oracle_gte?: InputMaybe<Scalars['Bytes']['input']>;
  definition_oracle_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  definition_oracle_lt?: InputMaybe<Scalars['Bytes']['input']>;
  definition_oracle_lte?: InputMaybe<Scalars['Bytes']['input']>;
  definition_oracle_not?: InputMaybe<Scalars['Bytes']['input']>;
  definition_oracle_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  definition_oracle_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  definition_payoff?: InputMaybe<Scalars['Bytes']['input']>;
  definition_payoff_contains?: InputMaybe<Scalars['Bytes']['input']>;
  definition_payoff_gt?: InputMaybe<Scalars['Bytes']['input']>;
  definition_payoff_gte?: InputMaybe<Scalars['Bytes']['input']>;
  definition_payoff_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  definition_payoff_lt?: InputMaybe<Scalars['Bytes']['input']>;
  definition_payoff_lte?: InputMaybe<Scalars['Bytes']['input']>;
  definition_payoff_not?: InputMaybe<Scalars['Bytes']['input']>;
  definition_payoff_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  definition_payoff_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  definition_token?: InputMaybe<Scalars['Bytes']['input']>;
  definition_token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  definition_token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  definition_token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  definition_token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  definition_token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  definition_token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  definition_token_not?: InputMaybe<Scalars['Bytes']['input']>;
  definition_token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  definition_token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketCreated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MarketCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  DefinitionOracle = 'definition_oracle',
  DefinitionPayoff = 'definition_payoff',
  DefinitionToken = 'definition_token',
  Id = 'id',
  Market = 'market',
  TransactionHash = 'transactionHash'
}

export type MarketGlobalPosition = {
  id: Scalars['String']['output'];
  long: Scalars['BigInt']['output'];
  longInvalidation: Scalars['BigInt']['output'];
  maker: Scalars['BigInt']['output'];
  makerInvalidation: Scalars['BigInt']['output'];
  market: Scalars['Bytes']['output'];
  short: Scalars['BigInt']['output'];
  shortInvalidation: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type MarketGlobalPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketGlobalPosition_Filter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  long?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longInvalidation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_not?: InputMaybe<Scalars['BigInt']['input']>;
  longInvalidation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  long_gt?: InputMaybe<Scalars['BigInt']['input']>;
  long_gte?: InputMaybe<Scalars['BigInt']['input']>;
  long_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  long_lt?: InputMaybe<Scalars['BigInt']['input']>;
  long_lte?: InputMaybe<Scalars['BigInt']['input']>;
  long_not?: InputMaybe<Scalars['BigInt']['input']>;
  long_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maker?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerInvalidation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_not?: InputMaybe<Scalars['BigInt']['input']>;
  makerInvalidation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maker_not?: InputMaybe<Scalars['BigInt']['input']>;
  maker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketGlobalPosition_Filter>>>;
  short?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortInvalidation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_not?: InputMaybe<Scalars['BigInt']['input']>;
  shortInvalidation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  short_gt?: InputMaybe<Scalars['BigInt']['input']>;
  short_gte?: InputMaybe<Scalars['BigInt']['input']>;
  short_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  short_lt?: InputMaybe<Scalars['BigInt']['input']>;
  short_lte?: InputMaybe<Scalars['BigInt']['input']>;
  short_not?: InputMaybe<Scalars['BigInt']['input']>;
  short_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MarketGlobalPosition_OrderBy {
  Id = 'id',
  Long = 'long',
  LongInvalidation = 'longInvalidation',
  Maker = 'maker',
  MakerInvalidation = 'makerInvalidation',
  Market = 'market',
  Short = 'short',
  ShortInvalidation = 'shortInvalidation',
  Timestamp = 'timestamp'
}

export type MarketInitialized = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type MarketInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MarketInitialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type MarketParameterUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  newParameter_closed: Scalars['Boolean']['output'];
  newParameter_fundingFee: Scalars['BigInt']['output'];
  newParameter_interestFee: Scalars['BigInt']['output'];
  newParameter_longRewardRate: Scalars['BigInt']['output'];
  newParameter_makerCloseAlways: Scalars['Boolean']['output'];
  newParameter_makerRewardRate: Scalars['BigInt']['output'];
  newParameter_maxPendingGlobal: Scalars['BigInt']['output'];
  newParameter_maxPendingLocal: Scalars['BigInt']['output'];
  newParameter_oracleFee: Scalars['BigInt']['output'];
  newParameter_positionFee: Scalars['BigInt']['output'];
  newParameter_riskFee: Scalars['BigInt']['output'];
  newParameter_settlementFee: Scalars['BigInt']['output'];
  newParameter_shortRewardRate: Scalars['BigInt']['output'];
  newParameter_takerCloseAlways: Scalars['Boolean']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MarketParameterUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketParameterUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newParameter_closed?: InputMaybe<Scalars['Boolean']['input']>;
  newParameter_closed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newParameter_closed_not?: InputMaybe<Scalars['Boolean']['input']>;
  newParameter_closed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newParameter_fundingFee?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_fundingFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_fundingFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_fundingFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_fundingFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_fundingFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_fundingFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_fundingFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_interestFee?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_interestFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_interestFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_interestFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_interestFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_interestFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_interestFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_interestFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_longRewardRate?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_longRewardRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_longRewardRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_longRewardRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_longRewardRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_longRewardRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_longRewardRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_longRewardRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_makerCloseAlways?: InputMaybe<Scalars['Boolean']['input']>;
  newParameter_makerCloseAlways_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newParameter_makerCloseAlways_not?: InputMaybe<Scalars['Boolean']['input']>;
  newParameter_makerCloseAlways_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newParameter_makerRewardRate?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_makerRewardRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_makerRewardRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_makerRewardRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_makerRewardRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_makerRewardRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_makerRewardRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_makerRewardRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_maxPendingGlobal?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingGlobal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingGlobal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingGlobal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_maxPendingGlobal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingGlobal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingGlobal_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingGlobal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_maxPendingLocal?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingLocal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingLocal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingLocal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_maxPendingLocal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingLocal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingLocal_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxPendingLocal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_oracleFee?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_oracleFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_oracleFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_oracleFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_oracleFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_oracleFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_oracleFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_oracleFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_positionFee?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_positionFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_positionFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_positionFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_positionFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_positionFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_positionFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_positionFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_riskFee?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_riskFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_riskFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_riskFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_riskFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_riskFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_riskFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_riskFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_settlementFee?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_settlementFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_settlementFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_settlementFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_settlementFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_settlementFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_settlementFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_settlementFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_shortRewardRate?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_shortRewardRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_shortRewardRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_shortRewardRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_shortRewardRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_shortRewardRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_shortRewardRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_shortRewardRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_takerCloseAlways?: InputMaybe<Scalars['Boolean']['input']>;
  newParameter_takerCloseAlways_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newParameter_takerCloseAlways_not?: InputMaybe<Scalars['Boolean']['input']>;
  newParameter_takerCloseAlways_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MarketParameterUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MarketParameterUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  NewParameterClosed = 'newParameter_closed',
  NewParameterFundingFee = 'newParameter_fundingFee',
  NewParameterInterestFee = 'newParameter_interestFee',
  NewParameterLongRewardRate = 'newParameter_longRewardRate',
  NewParameterMakerCloseAlways = 'newParameter_makerCloseAlways',
  NewParameterMakerRewardRate = 'newParameter_makerRewardRate',
  NewParameterMaxPendingGlobal = 'newParameter_maxPendingGlobal',
  NewParameterMaxPendingLocal = 'newParameter_maxPendingLocal',
  NewParameterOracleFee = 'newParameter_oracleFee',
  NewParameterPositionFee = 'newParameter_positionFee',
  NewParameterRiskFee = 'newParameter_riskFee',
  NewParameterSettlementFee = 'newParameter_settlementFee',
  NewParameterShortRewardRate = 'newParameter_shortRewardRate',
  NewParameterTakerCloseAlways = 'newParameter_takerCloseAlways',
  TransactionHash = 'transactionHash'
}

export type MaxClaimUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newMaxClaim: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MaxClaimUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MaxClaimUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newMaxClaim?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxClaim_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxClaim_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxClaim_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMaxClaim_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxClaim_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxClaim_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxClaim_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MaxClaimUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MaxClaimUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewMaxClaim = 'newMaxClaim',
  TransactionHash = 'transactionHash'
}

export type MultiInvokerFeeCharged = {
  account: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MultiInvokerFeeCharged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<MultiInvokerFeeCharged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MultiInvokerFeeCharged_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MultiInvokerFeeCharged_OrderBy {
  Account = 'account',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  To = 'to',
  TransactionHash = 'transactionHash'
}

export type MultiInvokerInitialized = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type MultiInvokerInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MultiInvokerInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MultiInvokerInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MultiInvokerInitialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type MultiInvokerKeeperCall = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  buffer: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  keeperFee: Scalars['BigInt']['output'];
  multiplier: Scalars['BigInt']['output'];
  sender: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MultiInvokerKeeperCall_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MultiInvokerKeeperCall_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buffer?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_gt?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_gte?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buffer_lt?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_lte?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_not?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  keeperFee?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  keeperFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  multiplier?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  multiplier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_not?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MultiInvokerKeeperCall_Filter>>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MultiInvokerKeeperCall_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Buffer = 'buffer',
  GasUsed = 'gasUsed',
  Id = 'id',
  KeeperFee = 'keeperFee',
  Multiplier = 'multiplier',
  Sender = 'sender',
  TransactionHash = 'transactionHash'
}

export type MultiInvokerKeeperFeeCharged = {
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  fee: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MultiInvokerKeeperFeeCharged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<MultiInvokerKeeperFeeCharged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MultiInvokerKeeperFeeCharged_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MultiInvokerKeeperFeeCharged_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Fee = 'fee',
  Id = 'id',
  Market = 'market',
  To = 'to',
  TransactionHash = 'transactionHash'
}

export type MultiInvokerOrderCancelled = {
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  nonce: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MultiInvokerOrderCancelled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<MultiInvokerOrderCancelled_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MultiInvokerOrderCancelled_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MultiInvokerOrderCancelled_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  Nonce = 'nonce',
  TransactionHash = 'transactionHash'
}

export type MultiInvokerOrderExecuted = {
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  nonce: Scalars['BigInt']['output'];
  positionId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MultiInvokerOrderExecuted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<MultiInvokerOrderExecuted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MultiInvokerOrderExecuted_Filter>>>;
  positionId?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MultiInvokerOrderExecuted_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  Nonce = 'nonce',
  PositionId = 'positionId',
  TransactionHash = 'transactionHash'
}

export type MultiInvokerOrderPlaced = {
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  cancelled: Scalars['Boolean']['output'];
  executed: Scalars['Boolean']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  nonce: Scalars['BigInt']['output'];
  order_comparison: Scalars['Int']['output'];
  order_delta: Scalars['BigInt']['output'];
  order_fee: Scalars['BigInt']['output'];
  order_price: Scalars['BigInt']['output'];
  order_side: Scalars['Int']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MultiInvokerOrderPlaced_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<MultiInvokerOrderPlaced_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cancelled?: InputMaybe<Scalars['Boolean']['input']>;
  cancelled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  cancelled_not?: InputMaybe<Scalars['Boolean']['input']>;
  cancelled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  executed?: InputMaybe<Scalars['Boolean']['input']>;
  executed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  executed_not?: InputMaybe<Scalars['Boolean']['input']>;
  executed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MultiInvokerOrderPlaced_Filter>>>;
  order_comparison?: InputMaybe<Scalars['Int']['input']>;
  order_comparison_gt?: InputMaybe<Scalars['Int']['input']>;
  order_comparison_gte?: InputMaybe<Scalars['Int']['input']>;
  order_comparison_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  order_comparison_lt?: InputMaybe<Scalars['Int']['input']>;
  order_comparison_lte?: InputMaybe<Scalars['Int']['input']>;
  order_comparison_not?: InputMaybe<Scalars['Int']['input']>;
  order_comparison_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  order_delta?: InputMaybe<Scalars['BigInt']['input']>;
  order_delta_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_delta_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_delta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_delta_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_delta_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_delta_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_delta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_fee?: InputMaybe<Scalars['BigInt']['input']>;
  order_fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_fee_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_price?: InputMaybe<Scalars['BigInt']['input']>;
  order_price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  order_price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  order_price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  order_price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  order_price_not?: InputMaybe<Scalars['BigInt']['input']>;
  order_price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  order_side?: InputMaybe<Scalars['Int']['input']>;
  order_side_gt?: InputMaybe<Scalars['Int']['input']>;
  order_side_gte?: InputMaybe<Scalars['Int']['input']>;
  order_side_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  order_side_lt?: InputMaybe<Scalars['Int']['input']>;
  order_side_lte?: InputMaybe<Scalars['Int']['input']>;
  order_side_not?: InputMaybe<Scalars['Int']['input']>;
  order_side_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MultiInvokerOrderPlaced_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Cancelled = 'cancelled',
  Executed = 'executed',
  Id = 'id',
  Market = 'market',
  Nonce = 'nonce',
  OrderComparison = 'order_comparison',
  OrderDelta = 'order_delta',
  OrderFee = 'order_fee',
  OrderPrice = 'order_price',
  OrderSide = 'order_side',
  TransactionHash = 'transactionHash'
}

export type OperatorUpdated = {
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newEnabled: Scalars['Boolean']['output'];
  operator: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OperatorUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<OperatorUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  newEnabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newEnabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  newEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OperatorUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OperatorUpdated_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewEnabled = 'newEnabled',
  Operator = 'operator',
  TransactionHash = 'transactionHash'
}

export type OracleCreated = {
  OracleFactory_id: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  oracle: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OracleCreated_Filter = {
  OracleFactory_id?: InputMaybe<Scalars['Bytes']['input']>;
  OracleFactory_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  OracleFactory_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  OracleFactory_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  OracleFactory_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  OracleFactory_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  OracleFactory_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  OracleFactory_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  OracleFactory_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  OracleFactory_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OracleCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleCreated_Filter>>>;
  oracle?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oracle_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OracleCreated_OrderBy {
  OracleFactoryId = 'OracleFactory_id',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Oracle = 'oracle',
  TransactionHash = 'transactionHash'
}

export type OracleFactoryInitialized = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type OracleFactoryInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OracleFactoryInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleFactoryInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum OracleFactoryInitialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type OracleFactoryInstanceRegistered = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  instance: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OracleFactoryInstanceRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OracleFactoryInstanceRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  instance?: InputMaybe<Scalars['Bytes']['input']>;
  instance_contains?: InputMaybe<Scalars['Bytes']['input']>;
  instance_gt?: InputMaybe<Scalars['Bytes']['input']>;
  instance_gte?: InputMaybe<Scalars['Bytes']['input']>;
  instance_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  instance_lt?: InputMaybe<Scalars['Bytes']['input']>;
  instance_lte?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleFactoryInstanceRegistered_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OracleFactoryInstanceRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Instance = 'instance',
  TransactionHash = 'transactionHash'
}

export type OracleFactoryOwnerUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OracleFactoryOwnerUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OracleFactoryOwnerUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleFactoryOwnerUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OracleFactoryOwnerUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewOwner = 'newOwner',
  TransactionHash = 'transactionHash'
}

export type OracleFactoryPaused = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OracleFactoryPaused_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OracleFactoryPaused_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleFactoryPaused_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OracleFactoryPaused_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type OracleFactoryPauserUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newPauser: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OracleFactoryPauserUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OracleFactoryPauserUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPauser?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPauser_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleFactoryPauserUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OracleFactoryPauserUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewPauser = 'newPauser',
  TransactionHash = 'transactionHash'
}

export type OracleFactoryPendingOwnerUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newPendingOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OracleFactoryPendingOwnerUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OracleFactoryPendingOwnerUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPendingOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPendingOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleFactoryPendingOwnerUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OracleFactoryPendingOwnerUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewPendingOwner = 'newPendingOwner',
  TransactionHash = 'transactionHash'
}

export type OracleFactoryUnpaused = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OracleFactoryUnpaused_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OracleFactoryUnpaused_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleFactoryUnpaused_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OracleFactoryUnpaused_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type OracleProviderVersionFulfilled = {
  address: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type OracleProviderVersionFulfilled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<OracleProviderVersionFulfilled_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleProviderVersionFulfilled_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum OracleProviderVersionFulfilled_OrderBy {
  Address = 'address',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type OracleProviderVersionRequested = {
  address: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type OracleProviderVersionRequested_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<OracleProviderVersionRequested_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleProviderVersionRequested_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum OracleProviderVersionRequested_OrderBy {
  Address = 'address',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OwnerUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnerUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnerUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnerUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OwnerUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewOwner = 'newOwner',
  TransactionHash = 'transactionHash'
}

export type ParameterUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newParameter_maxCut: Scalars['BigInt']['output'];
  newParameter_maxFee: Scalars['BigInt']['output'];
  newParameter_maxFeeAbsolute: Scalars['BigInt']['output'];
  newParameter_maxRate: Scalars['BigInt']['output'];
  newParameter_minEfficiency: Scalars['BigInt']['output'];
  newParameter_minMaintenance: Scalars['BigInt']['output'];
  newParameter_protocolFee: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ParameterUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ParameterUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newParameter_maxCut?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxCut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxCut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxCut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_maxCut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxCut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxCut_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxCut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_maxFee?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFeeAbsolute?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFeeAbsolute_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFeeAbsolute_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFeeAbsolute_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_maxFeeAbsolute_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFeeAbsolute_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFeeAbsolute_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFeeAbsolute_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_maxFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_maxFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_maxRate?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_maxRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_maxRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_minEfficiency?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minEfficiency_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minEfficiency_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minEfficiency_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_minEfficiency_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minEfficiency_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minEfficiency_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minEfficiency_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_minMaintenance?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minMaintenance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minMaintenance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minMaintenance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_minMaintenance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minMaintenance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minMaintenance_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_minMaintenance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_protocolFee?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_protocolFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_protocolFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_protocolFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_protocolFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_protocolFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_protocolFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_protocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ParameterUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ParameterUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewParameterMaxCut = 'newParameter_maxCut',
  NewParameterMaxFee = 'newParameter_maxFee',
  NewParameterMaxFeeAbsolute = 'newParameter_maxFeeAbsolute',
  NewParameterMaxRate = 'newParameter_maxRate',
  NewParameterMinEfficiency = 'newParameter_minEfficiency',
  NewParameterMinMaintenance = 'newParameter_minMaintenance',
  NewParameterProtocolFee = 'newParameter_protocolFee',
  TransactionHash = 'transactionHash'
}

export type Paused = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Paused_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Paused_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Paused_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Paused_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type PauserUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newPauser: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PauserUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PauserUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPauser?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPauser_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PauserUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PauserUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewPauser = 'newPauser',
  TransactionHash = 'transactionHash'
}

export type PendingOwnerUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newPendingOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PendingOwnerUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PendingOwnerUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPendingOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPendingOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PendingOwnerUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PendingOwnerUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewPendingOwner = 'newPendingOwner',
  TransactionHash = 'transactionHash'
}

export type PositionProcessed = {
  accumulationResult_fundingFee: Scalars['BigInt']['output'];
  accumulationResult_fundingLong: Scalars['BigInt']['output'];
  accumulationResult_fundingMaker: Scalars['BigInt']['output'];
  accumulationResult_fundingShort: Scalars['BigInt']['output'];
  accumulationResult_interestFee: Scalars['BigInt']['output'];
  accumulationResult_interestLong: Scalars['BigInt']['output'];
  accumulationResult_interestMaker: Scalars['BigInt']['output'];
  accumulationResult_interestShort: Scalars['BigInt']['output'];
  accumulationResult_pnlLong: Scalars['BigInt']['output'];
  accumulationResult_pnlMaker: Scalars['BigInt']['output'];
  accumulationResult_pnlShort: Scalars['BigInt']['output'];
  accumulationResult_positionFeeFee: Scalars['BigInt']['output'];
  accumulationResult_positionFeeMaker: Scalars['BigInt']['output'];
  accumulationResult_rewardLong: Scalars['BigInt']['output'];
  accumulationResult_rewardMaker: Scalars['BigInt']['output'];
  accumulationResult_rewardShort: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  fromLong: Scalars['BigInt']['output'];
  fromMaker: Scalars['BigInt']['output'];
  fromOracleVersion: Scalars['BigInt']['output'];
  fromPosition: Scalars['BigInt']['output'];
  fromShort: Scalars['BigInt']['output'];
  fromVersionPrice: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  market: Scalars['Bytes']['output'];
  toOracleVersion: Scalars['BigInt']['output'];
  toPosition: Scalars['BigInt']['output'];
  toVersionPrice: Scalars['BigInt']['output'];
  toVersionValid: Scalars['Boolean']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PositionProcessed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accumulationResult_fundingFee?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_fundingFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_fundingLong?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_fundingLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_fundingMaker?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_fundingMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_fundingShort?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_fundingShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_fundingShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_interestFee?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_interestFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_interestLong?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_interestLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_interestMaker?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_interestMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_interestShort?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_interestShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_interestShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_pnlLong?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_pnlLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_pnlMaker?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_pnlMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_pnlShort?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_pnlShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_pnlShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_positionFeeFee?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_positionFeeFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_positionFeeMaker?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_positionFeeMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_positionFeeMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_rewardLong?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_rewardLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_rewardMaker?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_rewardMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_rewardShort?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulationResult_rewardShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulationResult_rewardShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PositionProcessed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromLong?: InputMaybe<Scalars['BigInt']['input']>;
  fromLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fromLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fromLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fromLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fromLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  fromLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromMaker?: InputMaybe<Scalars['BigInt']['input']>;
  fromMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fromMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fromMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fromMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fromMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  fromMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromOracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromOracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  fromOracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromPosition?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromPosition_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_not?: InputMaybe<Scalars['BigInt']['input']>;
  fromPosition_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromShort?: InputMaybe<Scalars['BigInt']['input']>;
  fromShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fromShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fromShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fromShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fromShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  fromShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromVersionPrice?: InputMaybe<Scalars['BigInt']['input']>;
  fromVersionPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fromVersionPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fromVersionPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromVersionPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fromVersionPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fromVersionPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  fromVersionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PositionProcessed_Filter>>>;
  toOracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toOracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  toOracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toPosition?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_gt?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_gte?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toPosition_lt?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_lte?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_not?: InputMaybe<Scalars['BigInt']['input']>;
  toPosition_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toVersionPrice?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toVersionPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  toVersionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toVersionValid?: InputMaybe<Scalars['Boolean']['input']>;
  toVersionValid_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  toVersionValid_not?: InputMaybe<Scalars['Boolean']['input']>;
  toVersionValid_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PositionProcessed_OrderBy {
  AccumulationResultFundingFee = 'accumulationResult_fundingFee',
  AccumulationResultFundingLong = 'accumulationResult_fundingLong',
  AccumulationResultFundingMaker = 'accumulationResult_fundingMaker',
  AccumulationResultFundingShort = 'accumulationResult_fundingShort',
  AccumulationResultInterestFee = 'accumulationResult_interestFee',
  AccumulationResultInterestLong = 'accumulationResult_interestLong',
  AccumulationResultInterestMaker = 'accumulationResult_interestMaker',
  AccumulationResultInterestShort = 'accumulationResult_interestShort',
  AccumulationResultPnlLong = 'accumulationResult_pnlLong',
  AccumulationResultPnlMaker = 'accumulationResult_pnlMaker',
  AccumulationResultPnlShort = 'accumulationResult_pnlShort',
  AccumulationResultPositionFeeFee = 'accumulationResult_positionFeeFee',
  AccumulationResultPositionFeeMaker = 'accumulationResult_positionFeeMaker',
  AccumulationResultRewardLong = 'accumulationResult_rewardLong',
  AccumulationResultRewardMaker = 'accumulationResult_rewardMaker',
  AccumulationResultRewardShort = 'accumulationResult_rewardShort',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  FromLong = 'fromLong',
  FromMaker = 'fromMaker',
  FromOracleVersion = 'fromOracleVersion',
  FromPosition = 'fromPosition',
  FromShort = 'fromShort',
  FromVersionPrice = 'fromVersionPrice',
  Id = 'id',
  Market = 'market',
  ToOracleVersion = 'toOracleVersion',
  ToPosition = 'toPosition',
  ToVersionPrice = 'toVersionPrice',
  ToVersionValid = 'toVersionValid',
  TransactionHash = 'transactionHash'
}

export enum PositionSide {
  Long = 'long',
  Maker = 'maker',
  Short = 'short'
}

export type PythFactoryInitialized = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type PythFactoryInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PythFactoryInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PythFactoryInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum PythFactoryInitialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type PythFactoryInstanceRegistered = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  instance: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PythFactoryInstanceRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PythFactoryInstanceRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  instance?: InputMaybe<Scalars['Bytes']['input']>;
  instance_contains?: InputMaybe<Scalars['Bytes']['input']>;
  instance_gt?: InputMaybe<Scalars['Bytes']['input']>;
  instance_gte?: InputMaybe<Scalars['Bytes']['input']>;
  instance_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  instance_lt?: InputMaybe<Scalars['Bytes']['input']>;
  instance_lte?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PythFactoryInstanceRegistered_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PythFactoryInstanceRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Instance = 'instance',
  TransactionHash = 'transactionHash'
}

export type PythFactoryOracleCreated = {
  PythFactory_id: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  oracle: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PythFactoryOracleCreated_Filter = {
  PythFactory_id?: InputMaybe<Scalars['Bytes']['input']>;
  PythFactory_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  PythFactory_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  PythFactory_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  PythFactory_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  PythFactory_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  PythFactory_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  PythFactory_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  PythFactory_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  PythFactory_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PythFactoryOracleCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PythFactoryOracleCreated_Filter>>>;
  oracle?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oracle_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PythFactoryOracleCreated_OrderBy {
  PythFactoryId = 'PythFactory_id',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Oracle = 'oracle',
  TransactionHash = 'transactionHash'
}

export type PythFactoryOwnerUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PythFactoryOwnerUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PythFactoryOwnerUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PythFactoryOwnerUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PythFactoryOwnerUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewOwner = 'newOwner',
  TransactionHash = 'transactionHash'
}

export type PythFactoryPaused = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PythFactoryPaused_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PythFactoryPaused_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PythFactoryPaused_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PythFactoryPaused_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type PythFactoryPauserUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newPauser: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PythFactoryPauserUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PythFactoryPauserUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPauser?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPauser_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PythFactoryPauserUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PythFactoryPauserUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewPauser = 'newPauser',
  TransactionHash = 'transactionHash'
}

export type PythFactoryPendingOwnerUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newPendingOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PythFactoryPendingOwnerUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PythFactoryPendingOwnerUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPendingOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPendingOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PythFactoryPendingOwnerUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PythFactoryPendingOwnerUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewPendingOwner = 'newPendingOwner',
  TransactionHash = 'transactionHash'
}

export type PythFactoryUnpaused = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PythFactoryUnpaused_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PythFactoryUnpaused_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PythFactoryUnpaused_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PythFactoryUnpaused_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type PythOracleInitialized = {
  address: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type PythOracleInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PythOracleInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PythOracleInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum PythOracleInitialized_OrderBy {
  Address = 'address',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type PythOracleKeeperCall = {
  address: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  buffer: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  keeperFee: Scalars['BigInt']['output'];
  multiplier: Scalars['BigInt']['output'];
  sender: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PythOracleKeeperCall_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PythOracleKeeperCall_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buffer?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_gt?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_gte?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buffer_lt?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_lte?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_not?: InputMaybe<Scalars['BigInt']['input']>;
  buffer_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  keeperFee?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  keeperFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  multiplier?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  multiplier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_not?: InputMaybe<Scalars['BigInt']['input']>;
  multiplier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PythOracleKeeperCall_Filter>>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PythOracleKeeperCall_OrderBy {
  Address = 'address',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Buffer = 'buffer',
  GasUsed = 'gasUsed',
  Id = 'id',
  KeeperFee = 'keeperFee',
  Multiplier = 'multiplier',
  Sender = 'sender',
  TransactionHash = 'transactionHash'
}

export type Query = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  accountPositionProcessed?: Maybe<AccountPositionProcessed>;
  accountPositionProcesseds: Array<AccountPositionProcessed>;
  beneficiaryUpdated?: Maybe<BeneficiaryUpdated>;
  beneficiaryUpdateds: Array<BeneficiaryUpdated>;
  bucketedVolume?: Maybe<BucketedVolume>;
  bucketedVolumes: Array<BucketedVolume>;
  callerAuthorized?: Maybe<CallerAuthorized>;
  callerAuthorizeds: Array<CallerAuthorized>;
  coordinatorUpdated?: Maybe<CoordinatorUpdated>;
  coordinatorUpdateds: Array<CoordinatorUpdated>;
  factoryRegistered?: Maybe<FactoryRegistered>;
  factoryRegistereds: Array<FactoryRegistered>;
  feeClaimed?: Maybe<FeeClaimed>;
  feeClaimeds: Array<FeeClaimed>;
  granularityUpdated?: Maybe<GranularityUpdated>;
  granularityUpdateds: Array<GranularityUpdated>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  instanceRegistered?: Maybe<InstanceRegistered>;
  instanceRegistereds: Array<InstanceRegistered>;
  marketAccountCheckpoint?: Maybe<MarketAccountCheckpoint>;
  marketAccountCheckpoints: Array<MarketAccountCheckpoint>;
  marketAccountPosition?: Maybe<MarketAccountPosition>;
  marketAccountPositions: Array<MarketAccountPosition>;
  marketAccumulator?: Maybe<MarketAccumulator>;
  marketAccumulators: Array<MarketAccumulator>;
  marketCreated?: Maybe<MarketCreated>;
  marketCreateds: Array<MarketCreated>;
  marketGlobalPosition?: Maybe<MarketGlobalPosition>;
  marketGlobalPositions: Array<MarketGlobalPosition>;
  marketInitialized?: Maybe<MarketInitialized>;
  marketInitializeds: Array<MarketInitialized>;
  marketParameterUpdated?: Maybe<MarketParameterUpdated>;
  marketParameterUpdateds: Array<MarketParameterUpdated>;
  maxClaimUpdated?: Maybe<MaxClaimUpdated>;
  maxClaimUpdateds: Array<MaxClaimUpdated>;
  multiInvokerFeeCharged?: Maybe<MultiInvokerFeeCharged>;
  multiInvokerFeeChargeds: Array<MultiInvokerFeeCharged>;
  multiInvokerInitialized?: Maybe<MultiInvokerInitialized>;
  multiInvokerInitializeds: Array<MultiInvokerInitialized>;
  multiInvokerKeeperCall?: Maybe<MultiInvokerKeeperCall>;
  multiInvokerKeeperCalls: Array<MultiInvokerKeeperCall>;
  multiInvokerKeeperFeeCharged?: Maybe<MultiInvokerKeeperFeeCharged>;
  multiInvokerKeeperFeeChargeds: Array<MultiInvokerKeeperFeeCharged>;
  multiInvokerOrderCancelled?: Maybe<MultiInvokerOrderCancelled>;
  multiInvokerOrderCancelleds: Array<MultiInvokerOrderCancelled>;
  multiInvokerOrderExecuted?: Maybe<MultiInvokerOrderExecuted>;
  multiInvokerOrderExecuteds: Array<MultiInvokerOrderExecuted>;
  multiInvokerOrderPlaced?: Maybe<MultiInvokerOrderPlaced>;
  multiInvokerOrderPlaceds: Array<MultiInvokerOrderPlaced>;
  operatorUpdated?: Maybe<OperatorUpdated>;
  operatorUpdateds: Array<OperatorUpdated>;
  oracleCreated?: Maybe<OracleCreated>;
  oracleCreateds: Array<OracleCreated>;
  oracleFactoryInitialized?: Maybe<OracleFactoryInitialized>;
  oracleFactoryInitializeds: Array<OracleFactoryInitialized>;
  oracleFactoryInstanceRegistered?: Maybe<OracleFactoryInstanceRegistered>;
  oracleFactoryInstanceRegistereds: Array<OracleFactoryInstanceRegistered>;
  oracleFactoryOwnerUpdated?: Maybe<OracleFactoryOwnerUpdated>;
  oracleFactoryOwnerUpdateds: Array<OracleFactoryOwnerUpdated>;
  oracleFactoryPaused?: Maybe<OracleFactoryPaused>;
  oracleFactoryPauseds: Array<OracleFactoryPaused>;
  oracleFactoryPauserUpdated?: Maybe<OracleFactoryPauserUpdated>;
  oracleFactoryPauserUpdateds: Array<OracleFactoryPauserUpdated>;
  oracleFactoryPendingOwnerUpdated?: Maybe<OracleFactoryPendingOwnerUpdated>;
  oracleFactoryPendingOwnerUpdateds: Array<OracleFactoryPendingOwnerUpdated>;
  oracleFactoryUnpaused?: Maybe<OracleFactoryUnpaused>;
  oracleFactoryUnpauseds: Array<OracleFactoryUnpaused>;
  oracleProviderVersionFulfilled?: Maybe<OracleProviderVersionFulfilled>;
  oracleProviderVersionFulfilleds: Array<OracleProviderVersionFulfilled>;
  oracleProviderVersionRequested?: Maybe<OracleProviderVersionRequested>;
  oracleProviderVersionRequesteds: Array<OracleProviderVersionRequested>;
  ownerUpdated?: Maybe<OwnerUpdated>;
  ownerUpdateds: Array<OwnerUpdated>;
  parameterUpdated?: Maybe<ParameterUpdated>;
  parameterUpdateds: Array<ParameterUpdated>;
  paused?: Maybe<Paused>;
  pauseds: Array<Paused>;
  pauserUpdated?: Maybe<PauserUpdated>;
  pauserUpdateds: Array<PauserUpdated>;
  pendingOwnerUpdated?: Maybe<PendingOwnerUpdated>;
  pendingOwnerUpdateds: Array<PendingOwnerUpdated>;
  positionProcessed?: Maybe<PositionProcessed>;
  positionProcesseds: Array<PositionProcessed>;
  pythFactoryInitialized?: Maybe<PythFactoryInitialized>;
  pythFactoryInitializeds: Array<PythFactoryInitialized>;
  pythFactoryInstanceRegistered?: Maybe<PythFactoryInstanceRegistered>;
  pythFactoryInstanceRegistereds: Array<PythFactoryInstanceRegistered>;
  pythFactoryOracleCreated?: Maybe<PythFactoryOracleCreated>;
  pythFactoryOracleCreateds: Array<PythFactoryOracleCreated>;
  pythFactoryOwnerUpdated?: Maybe<PythFactoryOwnerUpdated>;
  pythFactoryOwnerUpdateds: Array<PythFactoryOwnerUpdated>;
  pythFactoryPaused?: Maybe<PythFactoryPaused>;
  pythFactoryPauseds: Array<PythFactoryPaused>;
  pythFactoryPauserUpdated?: Maybe<PythFactoryPauserUpdated>;
  pythFactoryPauserUpdateds: Array<PythFactoryPauserUpdated>;
  pythFactoryPendingOwnerUpdated?: Maybe<PythFactoryPendingOwnerUpdated>;
  pythFactoryPendingOwnerUpdateds: Array<PythFactoryPendingOwnerUpdated>;
  pythFactoryUnpaused?: Maybe<PythFactoryUnpaused>;
  pythFactoryUnpauseds: Array<PythFactoryUnpaused>;
  pythOracleInitialized?: Maybe<PythOracleInitialized>;
  pythOracleInitializeds: Array<PythOracleInitialized>;
  pythOracleKeeperCall?: Maybe<PythOracleKeeperCall>;
  pythOracleKeeperCalls: Array<PythOracleKeeperCall>;
  rewardClaimed?: Maybe<RewardClaimed>;
  rewardClaimeds: Array<RewardClaimed>;
  rewardUpdated?: Maybe<RewardUpdated>;
  rewardUpdateds: Array<RewardUpdated>;
  riskParameterUpdated?: Maybe<RiskParameterUpdated>;
  riskParameterUpdateds: Array<RiskParameterUpdated>;
  unpaused?: Maybe<Unpaused>;
  unpauseds: Array<Unpaused>;
  updated?: Maybe<Updated>;
  updateds: Array<Updated>;
  vaultCreated?: Maybe<VaultCreated>;
  vaultCreateds: Array<VaultCreated>;
  vaultFactoryInitialized?: Maybe<VaultFactoryInitialized>;
  vaultFactoryInitializeds: Array<VaultFactoryInitialized>;
  vaultFactoryInstanceRegistered?: Maybe<VaultFactoryInstanceRegistered>;
  vaultFactoryInstanceRegistereds: Array<VaultFactoryInstanceRegistered>;
  vaultFactoryOperatorUpdated?: Maybe<VaultFactoryOperatorUpdated>;
  vaultFactoryOperatorUpdateds: Array<VaultFactoryOperatorUpdated>;
  vaultFactoryOwnerUpdated?: Maybe<VaultFactoryOwnerUpdated>;
  vaultFactoryOwnerUpdateds: Array<VaultFactoryOwnerUpdated>;
  vaultFactoryPaused?: Maybe<VaultFactoryPaused>;
  vaultFactoryPauseds: Array<VaultFactoryPaused>;
  vaultFactoryPauserUpdated?: Maybe<VaultFactoryPauserUpdated>;
  vaultFactoryPauserUpdateds: Array<VaultFactoryPauserUpdated>;
  vaultFactoryPendingOwnerUpdated?: Maybe<VaultFactoryPendingOwnerUpdated>;
  vaultFactoryPendingOwnerUpdateds: Array<VaultFactoryPendingOwnerUpdated>;
  vaultFactoryUnpaused?: Maybe<VaultFactoryUnpaused>;
  vaultFactoryUnpauseds: Array<VaultFactoryUnpaused>;
  vaultInitialized?: Maybe<VaultInitialized>;
  vaultInitializeds: Array<VaultInitialized>;
  vaultMarketRegistered?: Maybe<VaultMarketRegistered>;
  vaultMarketRegistereds: Array<VaultMarketRegistered>;
  vaultMarketUpdated?: Maybe<VaultMarketUpdated>;
  vaultMarketUpdateds: Array<VaultMarketUpdated>;
  vaultParameterUpdated?: Maybe<VaultParameterUpdated>;
  vaultParameterUpdateds: Array<VaultParameterUpdated>;
  vaultUpdated?: Maybe<VaultUpdated>;
  vaultUpdateds: Array<VaultUpdated>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountPositionProcessedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountPositionProcessedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountPositionProcessed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountPositionProcessed_Filter>;
};


export type QueryBeneficiaryUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBeneficiaryUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BeneficiaryUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeneficiaryUpdated_Filter>;
};


export type QueryBucketedVolumeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBucketedVolumesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BucketedVolume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BucketedVolume_Filter>;
};


export type QueryCallerAuthorizedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCallerAuthorizedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CallerAuthorized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CallerAuthorized_Filter>;
};


export type QueryCoordinatorUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCoordinatorUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CoordinatorUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CoordinatorUpdated_Filter>;
};


export type QueryFactoryRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFactoryRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FactoryRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FactoryRegistered_Filter>;
};


export type QueryFeeClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeeClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeClaimed_Filter>;
};


export type QueryGranularityUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGranularityUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GranularityUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GranularityUpdated_Filter>;
};


export type QueryInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Initialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Initialized_Filter>;
};


export type QueryInstanceRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInstanceRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InstanceRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InstanceRegistered_Filter>;
};


export type QueryMarketAccountCheckpointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketAccountCheckpointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketAccountCheckpoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketAccountCheckpoint_Filter>;
};


export type QueryMarketAccountPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketAccountPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketAccountPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketAccountPosition_Filter>;
};


export type QueryMarketAccumulatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketAccumulatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketAccumulator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketAccumulator_Filter>;
};


export type QueryMarketCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketCreated_Filter>;
};


export type QueryMarketGlobalPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketGlobalPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketGlobalPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketGlobalPosition_Filter>;
};


export type QueryMarketInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketInitialized_Filter>;
};


export type QueryMarketParameterUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketParameterUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketParameterUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketParameterUpdated_Filter>;
};


export type QueryMaxClaimUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMaxClaimUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MaxClaimUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MaxClaimUpdated_Filter>;
};


export type QueryMultiInvokerFeeChargedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMultiInvokerFeeChargedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerFeeCharged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerFeeCharged_Filter>;
};


export type QueryMultiInvokerInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMultiInvokerInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerInitialized_Filter>;
};


export type QueryMultiInvokerKeeperCallArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMultiInvokerKeeperCallsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerKeeperCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerKeeperCall_Filter>;
};


export type QueryMultiInvokerKeeperFeeChargedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMultiInvokerKeeperFeeChargedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerKeeperFeeCharged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerKeeperFeeCharged_Filter>;
};


export type QueryMultiInvokerOrderCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMultiInvokerOrderCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerOrderCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerOrderCancelled_Filter>;
};


export type QueryMultiInvokerOrderExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMultiInvokerOrderExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerOrderExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerOrderExecuted_Filter>;
};


export type QueryMultiInvokerOrderPlacedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMultiInvokerOrderPlacedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerOrderPlaced_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerOrderPlaced_Filter>;
};


export type QueryOperatorUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorUpdated_Filter>;
};


export type QueryOracleCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleCreated_Filter>;
};


export type QueryOracleFactoryInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleFactoryInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryInitialized_Filter>;
};


export type QueryOracleFactoryInstanceRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleFactoryInstanceRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryInstanceRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryInstanceRegistered_Filter>;
};


export type QueryOracleFactoryOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleFactoryOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryOwnerUpdated_Filter>;
};


export type QueryOracleFactoryPausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleFactoryPausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryPaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryPaused_Filter>;
};


export type QueryOracleFactoryPauserUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleFactoryPauserUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryPauserUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryPauserUpdated_Filter>;
};


export type QueryOracleFactoryPendingOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleFactoryPendingOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryPendingOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryPendingOwnerUpdated_Filter>;
};


export type QueryOracleFactoryUnpausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleFactoryUnpausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryUnpaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryUnpaused_Filter>;
};


export type QueryOracleProviderVersionFulfilledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleProviderVersionFulfilledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleProviderVersionFulfilled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleProviderVersionFulfilled_Filter>;
};


export type QueryOracleProviderVersionRequestedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleProviderVersionRequestedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleProviderVersionRequested_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleProviderVersionRequested_Filter>;
};


export type QueryOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnerUpdated_Filter>;
};


export type QueryParameterUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryParameterUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ParameterUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ParameterUpdated_Filter>;
};


export type QueryPausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Paused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Paused_Filter>;
};


export type QueryPauserUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPauserUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PauserUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PauserUpdated_Filter>;
};


export type QueryPendingOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPendingOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PendingOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PendingOwnerUpdated_Filter>;
};


export type QueryPositionProcessedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPositionProcessedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionProcessed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionProcessed_Filter>;
};


export type QueryPythFactoryInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPythFactoryInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryInitialized_Filter>;
};


export type QueryPythFactoryInstanceRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPythFactoryInstanceRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryInstanceRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryInstanceRegistered_Filter>;
};


export type QueryPythFactoryOracleCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPythFactoryOracleCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryOracleCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryOracleCreated_Filter>;
};


export type QueryPythFactoryOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPythFactoryOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryOwnerUpdated_Filter>;
};


export type QueryPythFactoryPausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPythFactoryPausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryPaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryPaused_Filter>;
};


export type QueryPythFactoryPauserUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPythFactoryPauserUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryPauserUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryPauserUpdated_Filter>;
};


export type QueryPythFactoryPendingOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPythFactoryPendingOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryPendingOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryPendingOwnerUpdated_Filter>;
};


export type QueryPythFactoryUnpausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPythFactoryUnpausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryUnpaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryUnpaused_Filter>;
};


export type QueryPythOracleInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPythOracleInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythOracleInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythOracleInitialized_Filter>;
};


export type QueryPythOracleKeeperCallArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPythOracleKeeperCallsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythOracleKeeperCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythOracleKeeperCall_Filter>;
};


export type QueryRewardClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardClaimed_Filter>;
};


export type QueryRewardUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardUpdated_Filter>;
};


export type QueryRiskParameterUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRiskParameterUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RiskParameterUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RiskParameterUpdated_Filter>;
};


export type QueryUnpausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUnpausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unpaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unpaused_Filter>;
};


export type QueryUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Updated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Updated_Filter>;
};


export type QueryVaultCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultCreated_Filter>;
};


export type QueryVaultFactoryInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultFactoryInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryInitialized_Filter>;
};


export type QueryVaultFactoryInstanceRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultFactoryInstanceRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryInstanceRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryInstanceRegistered_Filter>;
};


export type QueryVaultFactoryOperatorUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultFactoryOperatorUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryOperatorUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryOperatorUpdated_Filter>;
};


export type QueryVaultFactoryOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultFactoryOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryOwnerUpdated_Filter>;
};


export type QueryVaultFactoryPausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultFactoryPausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryPaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryPaused_Filter>;
};


export type QueryVaultFactoryPauserUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultFactoryPauserUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryPauserUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryPauserUpdated_Filter>;
};


export type QueryVaultFactoryPendingOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultFactoryPendingOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryPendingOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryPendingOwnerUpdated_Filter>;
};


export type QueryVaultFactoryUnpausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultFactoryUnpausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryUnpaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryUnpaused_Filter>;
};


export type QueryVaultInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultInitialized_Filter>;
};


export type QueryVaultMarketRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultMarketRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultMarketRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultMarketRegistered_Filter>;
};


export type QueryVaultMarketUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultMarketUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultMarketUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultMarketUpdated_Filter>;
};


export type QueryVaultParameterUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultParameterUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultParameterUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultParameterUpdated_Filter>;
};


export type QueryVaultUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultUpdated_Filter>;
};

export type RewardClaimed = {
  account: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RewardClaimed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RewardClaimed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RewardClaimed_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RewardClaimed_OrderBy {
  Account = 'account',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  TransactionHash = 'transactionHash'
}

export type RewardUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  newReward: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RewardUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newReward?: InputMaybe<Scalars['Bytes']['input']>;
  newReward_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newReward_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newReward_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newReward_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newReward_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newReward_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newReward_not?: InputMaybe<Scalars['Bytes']['input']>;
  newReward_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newReward_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RewardUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RewardUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  NewReward = 'newReward',
  TransactionHash = 'transactionHash'
}

export type RiskParameterUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  newRiskParameter_efficiencyLimit: Scalars['BigInt']['output'];
  newRiskParameter_liquidationFee: Scalars['BigInt']['output'];
  newRiskParameter_maintenance: Scalars['BigInt']['output'];
  newRiskParameter_makerFee: Scalars['BigInt']['output'];
  newRiskParameter_makerImpactFee: Scalars['BigInt']['output'];
  newRiskParameter_makerLimit: Scalars['BigInt']['output'];
  newRiskParameter_makerReceiveOnly: Scalars['Boolean']['output'];
  newRiskParameter_margin: Scalars['BigInt']['output'];
  newRiskParameter_maxLiquidationFee: Scalars['BigInt']['output'];
  newRiskParameter_minLiquidationFee: Scalars['BigInt']['output'];
  newRiskParameter_minMaintenance: Scalars['BigInt']['output'];
  newRiskParameter_minMargin: Scalars['BigInt']['output'];
  newRiskParameter_pController_k: Scalars['BigInt']['output'];
  newRiskParameter_pController_max: Scalars['BigInt']['output'];
  newRiskParameter_staleAfter: Scalars['BigInt']['output'];
  newRiskParameter_takerFee: Scalars['BigInt']['output'];
  newRiskParameter_takerImpactFee: Scalars['BigInt']['output'];
  newRiskParameter_takerSkewFee: Scalars['BigInt']['output'];
  newRiskParameter_utilizationCurve_maxRate: Scalars['BigInt']['output'];
  newRiskParameter_utilizationCurve_minRate: Scalars['BigInt']['output'];
  newRiskParameter_utilizationCurve_targetRate: Scalars['BigInt']['output'];
  newRiskParameter_utilizationCurve_targetUtilization: Scalars['BigInt']['output'];
  newRiskParameter_virtualTaker: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RiskParameterUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RiskParameterUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newRiskParameter_efficiencyLimit?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_efficiencyLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_efficiencyLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_efficiencyLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_efficiencyLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_efficiencyLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_efficiencyLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_efficiencyLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_liquidationFee?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_liquidationFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_liquidationFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_liquidationFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_liquidationFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_liquidationFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_liquidationFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_liquidationFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_maintenance?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maintenance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maintenance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maintenance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_maintenance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maintenance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maintenance_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maintenance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_makerFee?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_makerFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_makerImpactFee?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerImpactFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerImpactFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerImpactFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_makerImpactFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerImpactFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerImpactFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerImpactFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_makerLimit?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_makerLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_makerLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_makerReceiveOnly?: InputMaybe<Scalars['Boolean']['input']>;
  newRiskParameter_makerReceiveOnly_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newRiskParameter_makerReceiveOnly_not?: InputMaybe<Scalars['Boolean']['input']>;
  newRiskParameter_makerReceiveOnly_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newRiskParameter_margin?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_margin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_margin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_margin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_margin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_margin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_margin_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_margin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_maxLiquidationFee?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maxLiquidationFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maxLiquidationFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maxLiquidationFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_maxLiquidationFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maxLiquidationFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maxLiquidationFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_maxLiquidationFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_minLiquidationFee?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minLiquidationFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minLiquidationFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minLiquidationFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_minLiquidationFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minLiquidationFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minLiquidationFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minLiquidationFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_minMaintenance?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMaintenance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMaintenance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMaintenance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_minMaintenance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMaintenance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMaintenance_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMaintenance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_minMargin?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_minMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_minMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_pController_k?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_k_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_k_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_k_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_pController_k_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_k_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_k_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_k_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_pController_max?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_max_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_max_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_max_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_pController_max_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_max_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_max_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_pController_max_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_staleAfter?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_staleAfter_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_staleAfter_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_staleAfter_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_staleAfter_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_staleAfter_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_staleAfter_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_staleAfter_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_takerFee?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_takerFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_takerImpactFee?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerImpactFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerImpactFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerImpactFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_takerImpactFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerImpactFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerImpactFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerImpactFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_takerSkewFee?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerSkewFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerSkewFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerSkewFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_takerSkewFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerSkewFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerSkewFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_takerSkewFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_utilizationCurve_maxRate?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_maxRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_maxRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_maxRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_utilizationCurve_maxRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_maxRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_maxRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_maxRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_utilizationCurve_minRate?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_minRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_minRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_minRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_utilizationCurve_minRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_minRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_minRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_minRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_utilizationCurve_targetRate?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_utilizationCurve_targetRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_utilizationCurve_targetUtilization?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetUtilization_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetUtilization_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetUtilization_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_utilizationCurve_targetUtilization_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetUtilization_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetUtilization_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_utilizationCurve_targetUtilization_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_virtualTaker?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_virtualTaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_virtualTaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_virtualTaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newRiskParameter_virtualTaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_virtualTaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_virtualTaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  newRiskParameter_virtualTaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RiskParameterUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RiskParameterUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  NewRiskParameterEfficiencyLimit = 'newRiskParameter_efficiencyLimit',
  NewRiskParameterLiquidationFee = 'newRiskParameter_liquidationFee',
  NewRiskParameterMaintenance = 'newRiskParameter_maintenance',
  NewRiskParameterMakerFee = 'newRiskParameter_makerFee',
  NewRiskParameterMakerImpactFee = 'newRiskParameter_makerImpactFee',
  NewRiskParameterMakerLimit = 'newRiskParameter_makerLimit',
  NewRiskParameterMakerReceiveOnly = 'newRiskParameter_makerReceiveOnly',
  NewRiskParameterMargin = 'newRiskParameter_margin',
  NewRiskParameterMaxLiquidationFee = 'newRiskParameter_maxLiquidationFee',
  NewRiskParameterMinLiquidationFee = 'newRiskParameter_minLiquidationFee',
  NewRiskParameterMinMaintenance = 'newRiskParameter_minMaintenance',
  NewRiskParameterMinMargin = 'newRiskParameter_minMargin',
  NewRiskParameterPControllerK = 'newRiskParameter_pController_k',
  NewRiskParameterPControllerMax = 'newRiskParameter_pController_max',
  NewRiskParameterStaleAfter = 'newRiskParameter_staleAfter',
  NewRiskParameterTakerFee = 'newRiskParameter_takerFee',
  NewRiskParameterTakerImpactFee = 'newRiskParameter_takerImpactFee',
  NewRiskParameterTakerSkewFee = 'newRiskParameter_takerSkewFee',
  NewRiskParameterUtilizationCurveMaxRate = 'newRiskParameter_utilizationCurve_maxRate',
  NewRiskParameterUtilizationCurveMinRate = 'newRiskParameter_utilizationCurve_minRate',
  NewRiskParameterUtilizationCurveTargetRate = 'newRiskParameter_utilizationCurve_targetRate',
  NewRiskParameterUtilizationCurveTargetUtilization = 'newRiskParameter_utilizationCurve_targetUtilization',
  NewRiskParameterVirtualTaker = 'newRiskParameter_virtualTaker',
  TransactionHash = 'transactionHash'
}

export type Subscription = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  accountPositionProcessed?: Maybe<AccountPositionProcessed>;
  accountPositionProcesseds: Array<AccountPositionProcessed>;
  beneficiaryUpdated?: Maybe<BeneficiaryUpdated>;
  beneficiaryUpdateds: Array<BeneficiaryUpdated>;
  bucketedVolume?: Maybe<BucketedVolume>;
  bucketedVolumes: Array<BucketedVolume>;
  callerAuthorized?: Maybe<CallerAuthorized>;
  callerAuthorizeds: Array<CallerAuthorized>;
  coordinatorUpdated?: Maybe<CoordinatorUpdated>;
  coordinatorUpdateds: Array<CoordinatorUpdated>;
  factoryRegistered?: Maybe<FactoryRegistered>;
  factoryRegistereds: Array<FactoryRegistered>;
  feeClaimed?: Maybe<FeeClaimed>;
  feeClaimeds: Array<FeeClaimed>;
  granularityUpdated?: Maybe<GranularityUpdated>;
  granularityUpdateds: Array<GranularityUpdated>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  instanceRegistered?: Maybe<InstanceRegistered>;
  instanceRegistereds: Array<InstanceRegistered>;
  marketAccountCheckpoint?: Maybe<MarketAccountCheckpoint>;
  marketAccountCheckpoints: Array<MarketAccountCheckpoint>;
  marketAccountPosition?: Maybe<MarketAccountPosition>;
  marketAccountPositions: Array<MarketAccountPosition>;
  marketAccumulator?: Maybe<MarketAccumulator>;
  marketAccumulators: Array<MarketAccumulator>;
  marketCreated?: Maybe<MarketCreated>;
  marketCreateds: Array<MarketCreated>;
  marketGlobalPosition?: Maybe<MarketGlobalPosition>;
  marketGlobalPositions: Array<MarketGlobalPosition>;
  marketInitialized?: Maybe<MarketInitialized>;
  marketInitializeds: Array<MarketInitialized>;
  marketParameterUpdated?: Maybe<MarketParameterUpdated>;
  marketParameterUpdateds: Array<MarketParameterUpdated>;
  maxClaimUpdated?: Maybe<MaxClaimUpdated>;
  maxClaimUpdateds: Array<MaxClaimUpdated>;
  multiInvokerFeeCharged?: Maybe<MultiInvokerFeeCharged>;
  multiInvokerFeeChargeds: Array<MultiInvokerFeeCharged>;
  multiInvokerInitialized?: Maybe<MultiInvokerInitialized>;
  multiInvokerInitializeds: Array<MultiInvokerInitialized>;
  multiInvokerKeeperCall?: Maybe<MultiInvokerKeeperCall>;
  multiInvokerKeeperCalls: Array<MultiInvokerKeeperCall>;
  multiInvokerKeeperFeeCharged?: Maybe<MultiInvokerKeeperFeeCharged>;
  multiInvokerKeeperFeeChargeds: Array<MultiInvokerKeeperFeeCharged>;
  multiInvokerOrderCancelled?: Maybe<MultiInvokerOrderCancelled>;
  multiInvokerOrderCancelleds: Array<MultiInvokerOrderCancelled>;
  multiInvokerOrderExecuted?: Maybe<MultiInvokerOrderExecuted>;
  multiInvokerOrderExecuteds: Array<MultiInvokerOrderExecuted>;
  multiInvokerOrderPlaced?: Maybe<MultiInvokerOrderPlaced>;
  multiInvokerOrderPlaceds: Array<MultiInvokerOrderPlaced>;
  operatorUpdated?: Maybe<OperatorUpdated>;
  operatorUpdateds: Array<OperatorUpdated>;
  oracleCreated?: Maybe<OracleCreated>;
  oracleCreateds: Array<OracleCreated>;
  oracleFactoryInitialized?: Maybe<OracleFactoryInitialized>;
  oracleFactoryInitializeds: Array<OracleFactoryInitialized>;
  oracleFactoryInstanceRegistered?: Maybe<OracleFactoryInstanceRegistered>;
  oracleFactoryInstanceRegistereds: Array<OracleFactoryInstanceRegistered>;
  oracleFactoryOwnerUpdated?: Maybe<OracleFactoryOwnerUpdated>;
  oracleFactoryOwnerUpdateds: Array<OracleFactoryOwnerUpdated>;
  oracleFactoryPaused?: Maybe<OracleFactoryPaused>;
  oracleFactoryPauseds: Array<OracleFactoryPaused>;
  oracleFactoryPauserUpdated?: Maybe<OracleFactoryPauserUpdated>;
  oracleFactoryPauserUpdateds: Array<OracleFactoryPauserUpdated>;
  oracleFactoryPendingOwnerUpdated?: Maybe<OracleFactoryPendingOwnerUpdated>;
  oracleFactoryPendingOwnerUpdateds: Array<OracleFactoryPendingOwnerUpdated>;
  oracleFactoryUnpaused?: Maybe<OracleFactoryUnpaused>;
  oracleFactoryUnpauseds: Array<OracleFactoryUnpaused>;
  oracleProviderVersionFulfilled?: Maybe<OracleProviderVersionFulfilled>;
  oracleProviderVersionFulfilleds: Array<OracleProviderVersionFulfilled>;
  oracleProviderVersionRequested?: Maybe<OracleProviderVersionRequested>;
  oracleProviderVersionRequesteds: Array<OracleProviderVersionRequested>;
  ownerUpdated?: Maybe<OwnerUpdated>;
  ownerUpdateds: Array<OwnerUpdated>;
  parameterUpdated?: Maybe<ParameterUpdated>;
  parameterUpdateds: Array<ParameterUpdated>;
  paused?: Maybe<Paused>;
  pauseds: Array<Paused>;
  pauserUpdated?: Maybe<PauserUpdated>;
  pauserUpdateds: Array<PauserUpdated>;
  pendingOwnerUpdated?: Maybe<PendingOwnerUpdated>;
  pendingOwnerUpdateds: Array<PendingOwnerUpdated>;
  positionProcessed?: Maybe<PositionProcessed>;
  positionProcesseds: Array<PositionProcessed>;
  pythFactoryInitialized?: Maybe<PythFactoryInitialized>;
  pythFactoryInitializeds: Array<PythFactoryInitialized>;
  pythFactoryInstanceRegistered?: Maybe<PythFactoryInstanceRegistered>;
  pythFactoryInstanceRegistereds: Array<PythFactoryInstanceRegistered>;
  pythFactoryOracleCreated?: Maybe<PythFactoryOracleCreated>;
  pythFactoryOracleCreateds: Array<PythFactoryOracleCreated>;
  pythFactoryOwnerUpdated?: Maybe<PythFactoryOwnerUpdated>;
  pythFactoryOwnerUpdateds: Array<PythFactoryOwnerUpdated>;
  pythFactoryPaused?: Maybe<PythFactoryPaused>;
  pythFactoryPauseds: Array<PythFactoryPaused>;
  pythFactoryPauserUpdated?: Maybe<PythFactoryPauserUpdated>;
  pythFactoryPauserUpdateds: Array<PythFactoryPauserUpdated>;
  pythFactoryPendingOwnerUpdated?: Maybe<PythFactoryPendingOwnerUpdated>;
  pythFactoryPendingOwnerUpdateds: Array<PythFactoryPendingOwnerUpdated>;
  pythFactoryUnpaused?: Maybe<PythFactoryUnpaused>;
  pythFactoryUnpauseds: Array<PythFactoryUnpaused>;
  pythOracleInitialized?: Maybe<PythOracleInitialized>;
  pythOracleInitializeds: Array<PythOracleInitialized>;
  pythOracleKeeperCall?: Maybe<PythOracleKeeperCall>;
  pythOracleKeeperCalls: Array<PythOracleKeeperCall>;
  rewardClaimed?: Maybe<RewardClaimed>;
  rewardClaimeds: Array<RewardClaimed>;
  rewardUpdated?: Maybe<RewardUpdated>;
  rewardUpdateds: Array<RewardUpdated>;
  riskParameterUpdated?: Maybe<RiskParameterUpdated>;
  riskParameterUpdateds: Array<RiskParameterUpdated>;
  unpaused?: Maybe<Unpaused>;
  unpauseds: Array<Unpaused>;
  updated?: Maybe<Updated>;
  updateds: Array<Updated>;
  vaultCreated?: Maybe<VaultCreated>;
  vaultCreateds: Array<VaultCreated>;
  vaultFactoryInitialized?: Maybe<VaultFactoryInitialized>;
  vaultFactoryInitializeds: Array<VaultFactoryInitialized>;
  vaultFactoryInstanceRegistered?: Maybe<VaultFactoryInstanceRegistered>;
  vaultFactoryInstanceRegistereds: Array<VaultFactoryInstanceRegistered>;
  vaultFactoryOperatorUpdated?: Maybe<VaultFactoryOperatorUpdated>;
  vaultFactoryOperatorUpdateds: Array<VaultFactoryOperatorUpdated>;
  vaultFactoryOwnerUpdated?: Maybe<VaultFactoryOwnerUpdated>;
  vaultFactoryOwnerUpdateds: Array<VaultFactoryOwnerUpdated>;
  vaultFactoryPaused?: Maybe<VaultFactoryPaused>;
  vaultFactoryPauseds: Array<VaultFactoryPaused>;
  vaultFactoryPauserUpdated?: Maybe<VaultFactoryPauserUpdated>;
  vaultFactoryPauserUpdateds: Array<VaultFactoryPauserUpdated>;
  vaultFactoryPendingOwnerUpdated?: Maybe<VaultFactoryPendingOwnerUpdated>;
  vaultFactoryPendingOwnerUpdateds: Array<VaultFactoryPendingOwnerUpdated>;
  vaultFactoryUnpaused?: Maybe<VaultFactoryUnpaused>;
  vaultFactoryUnpauseds: Array<VaultFactoryUnpaused>;
  vaultInitialized?: Maybe<VaultInitialized>;
  vaultInitializeds: Array<VaultInitialized>;
  vaultMarketRegistered?: Maybe<VaultMarketRegistered>;
  vaultMarketRegistereds: Array<VaultMarketRegistered>;
  vaultMarketUpdated?: Maybe<VaultMarketUpdated>;
  vaultMarketUpdateds: Array<VaultMarketUpdated>;
  vaultParameterUpdated?: Maybe<VaultParameterUpdated>;
  vaultParameterUpdateds: Array<VaultParameterUpdated>;
  vaultUpdated?: Maybe<VaultUpdated>;
  vaultUpdateds: Array<VaultUpdated>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountPositionProcessedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountPositionProcessedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountPositionProcessed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountPositionProcessed_Filter>;
};


export type SubscriptionBeneficiaryUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBeneficiaryUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BeneficiaryUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeneficiaryUpdated_Filter>;
};


export type SubscriptionBucketedVolumeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBucketedVolumesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BucketedVolume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BucketedVolume_Filter>;
};


export type SubscriptionCallerAuthorizedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCallerAuthorizedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CallerAuthorized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CallerAuthorized_Filter>;
};


export type SubscriptionCoordinatorUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCoordinatorUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CoordinatorUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CoordinatorUpdated_Filter>;
};


export type SubscriptionFactoryRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFactoryRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FactoryRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FactoryRegistered_Filter>;
};


export type SubscriptionFeeClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFeeClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeClaimed_Filter>;
};


export type SubscriptionGranularityUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGranularityUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GranularityUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GranularityUpdated_Filter>;
};


export type SubscriptionInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Initialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Initialized_Filter>;
};


export type SubscriptionInstanceRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInstanceRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InstanceRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InstanceRegistered_Filter>;
};


export type SubscriptionMarketAccountCheckpointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketAccountCheckpointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketAccountCheckpoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketAccountCheckpoint_Filter>;
};


export type SubscriptionMarketAccountPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketAccountPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketAccountPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketAccountPosition_Filter>;
};


export type SubscriptionMarketAccumulatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketAccumulatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketAccumulator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketAccumulator_Filter>;
};


export type SubscriptionMarketCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketCreated_Filter>;
};


export type SubscriptionMarketGlobalPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketGlobalPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketGlobalPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketGlobalPosition_Filter>;
};


export type SubscriptionMarketInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketInitialized_Filter>;
};


export type SubscriptionMarketParameterUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketParameterUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketParameterUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketParameterUpdated_Filter>;
};


export type SubscriptionMaxClaimUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMaxClaimUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MaxClaimUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MaxClaimUpdated_Filter>;
};


export type SubscriptionMultiInvokerFeeChargedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMultiInvokerFeeChargedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerFeeCharged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerFeeCharged_Filter>;
};


export type SubscriptionMultiInvokerInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMultiInvokerInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerInitialized_Filter>;
};


export type SubscriptionMultiInvokerKeeperCallArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMultiInvokerKeeperCallsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerKeeperCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerKeeperCall_Filter>;
};


export type SubscriptionMultiInvokerKeeperFeeChargedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMultiInvokerKeeperFeeChargedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerKeeperFeeCharged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerKeeperFeeCharged_Filter>;
};


export type SubscriptionMultiInvokerOrderCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMultiInvokerOrderCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerOrderCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerOrderCancelled_Filter>;
};


export type SubscriptionMultiInvokerOrderExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMultiInvokerOrderExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerOrderExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerOrderExecuted_Filter>;
};


export type SubscriptionMultiInvokerOrderPlacedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMultiInvokerOrderPlacedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MultiInvokerOrderPlaced_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MultiInvokerOrderPlaced_Filter>;
};


export type SubscriptionOperatorUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOperatorUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorUpdated_Filter>;
};


export type SubscriptionOracleCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleCreated_Filter>;
};


export type SubscriptionOracleFactoryInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleFactoryInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryInitialized_Filter>;
};


export type SubscriptionOracleFactoryInstanceRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleFactoryInstanceRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryInstanceRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryInstanceRegistered_Filter>;
};


export type SubscriptionOracleFactoryOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleFactoryOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryOwnerUpdated_Filter>;
};


export type SubscriptionOracleFactoryPausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleFactoryPausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryPaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryPaused_Filter>;
};


export type SubscriptionOracleFactoryPauserUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleFactoryPauserUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryPauserUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryPauserUpdated_Filter>;
};


export type SubscriptionOracleFactoryPendingOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleFactoryPendingOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryPendingOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryPendingOwnerUpdated_Filter>;
};


export type SubscriptionOracleFactoryUnpausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleFactoryUnpausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleFactoryUnpaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleFactoryUnpaused_Filter>;
};


export type SubscriptionOracleProviderVersionFulfilledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleProviderVersionFulfilledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleProviderVersionFulfilled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleProviderVersionFulfilled_Filter>;
};


export type SubscriptionOracleProviderVersionRequestedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleProviderVersionRequestedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleProviderVersionRequested_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleProviderVersionRequested_Filter>;
};


export type SubscriptionOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnerUpdated_Filter>;
};


export type SubscriptionParameterUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionParameterUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ParameterUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ParameterUpdated_Filter>;
};


export type SubscriptionPausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Paused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Paused_Filter>;
};


export type SubscriptionPauserUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPauserUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PauserUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PauserUpdated_Filter>;
};


export type SubscriptionPendingOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPendingOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PendingOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PendingOwnerUpdated_Filter>;
};


export type SubscriptionPositionProcessedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPositionProcessedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionProcessed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionProcessed_Filter>;
};


export type SubscriptionPythFactoryInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPythFactoryInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryInitialized_Filter>;
};


export type SubscriptionPythFactoryInstanceRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPythFactoryInstanceRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryInstanceRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryInstanceRegistered_Filter>;
};


export type SubscriptionPythFactoryOracleCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPythFactoryOracleCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryOracleCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryOracleCreated_Filter>;
};


export type SubscriptionPythFactoryOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPythFactoryOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryOwnerUpdated_Filter>;
};


export type SubscriptionPythFactoryPausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPythFactoryPausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryPaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryPaused_Filter>;
};


export type SubscriptionPythFactoryPauserUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPythFactoryPauserUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryPauserUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryPauserUpdated_Filter>;
};


export type SubscriptionPythFactoryPendingOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPythFactoryPendingOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryPendingOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryPendingOwnerUpdated_Filter>;
};


export type SubscriptionPythFactoryUnpausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPythFactoryUnpausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythFactoryUnpaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythFactoryUnpaused_Filter>;
};


export type SubscriptionPythOracleInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPythOracleInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythOracleInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythOracleInitialized_Filter>;
};


export type SubscriptionPythOracleKeeperCallArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPythOracleKeeperCallsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PythOracleKeeperCall_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PythOracleKeeperCall_Filter>;
};


export type SubscriptionRewardClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardClaimed_Filter>;
};


export type SubscriptionRewardUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardUpdated_Filter>;
};


export type SubscriptionRiskParameterUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRiskParameterUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RiskParameterUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RiskParameterUpdated_Filter>;
};


export type SubscriptionUnpausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUnpausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unpaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unpaused_Filter>;
};


export type SubscriptionUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Updated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Updated_Filter>;
};


export type SubscriptionVaultCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultCreated_Filter>;
};


export type SubscriptionVaultFactoryInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultFactoryInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryInitialized_Filter>;
};


export type SubscriptionVaultFactoryInstanceRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultFactoryInstanceRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryInstanceRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryInstanceRegistered_Filter>;
};


export type SubscriptionVaultFactoryOperatorUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultFactoryOperatorUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryOperatorUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryOperatorUpdated_Filter>;
};


export type SubscriptionVaultFactoryOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultFactoryOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryOwnerUpdated_Filter>;
};


export type SubscriptionVaultFactoryPausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultFactoryPausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryPaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryPaused_Filter>;
};


export type SubscriptionVaultFactoryPauserUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultFactoryPauserUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryPauserUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryPauserUpdated_Filter>;
};


export type SubscriptionVaultFactoryPendingOwnerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultFactoryPendingOwnerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryPendingOwnerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryPendingOwnerUpdated_Filter>;
};


export type SubscriptionVaultFactoryUnpausedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultFactoryUnpausedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultFactoryUnpaused_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultFactoryUnpaused_Filter>;
};


export type SubscriptionVaultInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultInitialized_Filter>;
};


export type SubscriptionVaultMarketRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultMarketRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultMarketRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultMarketRegistered_Filter>;
};


export type SubscriptionVaultMarketUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultMarketUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultMarketUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultMarketUpdated_Filter>;
};


export type SubscriptionVaultParameterUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultParameterUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultParameterUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultParameterUpdated_Filter>;
};


export type SubscriptionVaultUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VaultUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultUpdated_Filter>;
};

export type Unpaused = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Unpaused_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Unpaused_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Unpaused_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Unpaused_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type Updated = {
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  collateral: Scalars['BigInt']['output'];
  globalPositionId: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  interfaceFee: Scalars['BigInt']['output'];
  localPositionId: Scalars['BigInt']['output'];
  market: Scalars['Bytes']['output'];
  newLong: Scalars['BigInt']['output'];
  newMaker: Scalars['BigInt']['output'];
  newShort: Scalars['BigInt']['output'];
  orderFee: Scalars['BigInt']['output'];
  positionFee: Scalars['BigInt']['output'];
  price: Scalars['BigInt']['output'];
  priceImpactFee: Scalars['BigInt']['output'];
  protect: Scalars['Boolean']['output'];
  sender: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  valid: Scalars['Boolean']['output'];
  version: Scalars['BigInt']['output'];
};

export type Updated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Updated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateral?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  globalPositionId?: InputMaybe<Scalars['BigInt']['input']>;
  globalPositionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  globalPositionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  globalPositionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  globalPositionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  globalPositionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  globalPositionId_not?: InputMaybe<Scalars['BigInt']['input']>;
  globalPositionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  interfaceFee?: InputMaybe<Scalars['BigInt']['input']>;
  interfaceFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interfaceFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interfaceFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interfaceFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interfaceFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interfaceFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  interfaceFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  localPositionId?: InputMaybe<Scalars['BigInt']['input']>;
  localPositionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  localPositionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  localPositionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  localPositionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  localPositionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  localPositionId_not?: InputMaybe<Scalars['BigInt']['input']>;
  localPositionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newLong?: InputMaybe<Scalars['BigInt']['input']>;
  newLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  newLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMaker?: InputMaybe<Scalars['BigInt']['input']>;
  newMaker_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMaker_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMaker_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMaker_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMaker_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMaker_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMaker_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newShort?: InputMaybe<Scalars['BigInt']['input']>;
  newShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newShort_not?: InputMaybe<Scalars['BigInt']['input']>;
  newShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Updated_Filter>>>;
  orderFee?: InputMaybe<Scalars['BigInt']['input']>;
  orderFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  orderFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  orderFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  orderFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  orderFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  orderFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  orderFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFee?: InputMaybe<Scalars['BigInt']['input']>;
  positionFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceImpactFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  priceImpactFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  protect?: InputMaybe<Scalars['Boolean']['input']>;
  protect_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  protect_not?: InputMaybe<Scalars['Boolean']['input']>;
  protect_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  valid?: InputMaybe<Scalars['Boolean']['input']>;
  valid_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  valid_not?: InputMaybe<Scalars['Boolean']['input']>;
  valid_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Updated_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Collateral = 'collateral',
  GlobalPositionId = 'globalPositionId',
  Id = 'id',
  InterfaceFee = 'interfaceFee',
  LocalPositionId = 'localPositionId',
  Market = 'market',
  NewLong = 'newLong',
  NewMaker = 'newMaker',
  NewShort = 'newShort',
  OrderFee = 'orderFee',
  PositionFee = 'positionFee',
  Price = 'price',
  PriceImpactFee = 'priceImpactFee',
  Protect = 'protect',
  Sender = 'sender',
  TransactionHash = 'transactionHash',
  Valid = 'valid',
  Version = 'version'
}

export type VaultCreated = {
  asset: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  initialMarket: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  vault: Scalars['Bytes']['output'];
};

export type VaultCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultCreated_Filter>>>;
  asset?: InputMaybe<Scalars['Bytes']['input']>;
  asset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  asset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  initialMarket?: InputMaybe<Scalars['Bytes']['input']>;
  initialMarket_contains?: InputMaybe<Scalars['Bytes']['input']>;
  initialMarket_gt?: InputMaybe<Scalars['Bytes']['input']>;
  initialMarket_gte?: InputMaybe<Scalars['Bytes']['input']>;
  initialMarket_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  initialMarket_lt?: InputMaybe<Scalars['Bytes']['input']>;
  initialMarket_lte?: InputMaybe<Scalars['Bytes']['input']>;
  initialMarket_not?: InputMaybe<Scalars['Bytes']['input']>;
  initialMarket_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  initialMarket_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultCreated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault?: InputMaybe<Scalars['Bytes']['input']>;
  vault_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VaultCreated_OrderBy {
  Asset = 'asset',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  InitialMarket = 'initialMarket',
  TransactionHash = 'transactionHash',
  Vault = 'vault'
}

export type VaultFactoryInitialized = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type VaultFactoryInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultFactoryInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultFactoryInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VaultFactoryInitialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type VaultFactoryInstanceRegistered = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  instance: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type VaultFactoryInstanceRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultFactoryInstanceRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  instance?: InputMaybe<Scalars['Bytes']['input']>;
  instance_contains?: InputMaybe<Scalars['Bytes']['input']>;
  instance_gt?: InputMaybe<Scalars['Bytes']['input']>;
  instance_gte?: InputMaybe<Scalars['Bytes']['input']>;
  instance_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  instance_lt?: InputMaybe<Scalars['Bytes']['input']>;
  instance_lte?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  instance_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultFactoryInstanceRegistered_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VaultFactoryInstanceRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Instance = 'instance',
  TransactionHash = 'transactionHash'
}

export type VaultFactoryOperatorUpdated = {
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newEnabled: Scalars['Boolean']['output'];
  operator: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type VaultFactoryOperatorUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<VaultFactoryOperatorUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  newEnabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newEnabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  newEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultFactoryOperatorUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VaultFactoryOperatorUpdated_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewEnabled = 'newEnabled',
  Operator = 'operator',
  TransactionHash = 'transactionHash'
}

export type VaultFactoryOwnerUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type VaultFactoryOwnerUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultFactoryOwnerUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultFactoryOwnerUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VaultFactoryOwnerUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewOwner = 'newOwner',
  TransactionHash = 'transactionHash'
}

export type VaultFactoryPaused = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type VaultFactoryPaused_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultFactoryPaused_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultFactoryPaused_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VaultFactoryPaused_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type VaultFactoryPauserUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newPauser: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type VaultFactoryPauserUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultFactoryPauserUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPauser?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPauser_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPauser_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultFactoryPauserUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VaultFactoryPauserUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewPauser = 'newPauser',
  TransactionHash = 'transactionHash'
}

export type VaultFactoryPendingOwnerUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newPendingOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type VaultFactoryPendingOwnerUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultFactoryPendingOwnerUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPendingOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPendingOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newPendingOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultFactoryPendingOwnerUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VaultFactoryPendingOwnerUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewPendingOwner = 'newPendingOwner',
  TransactionHash = 'transactionHash'
}

export type VaultFactoryUnpaused = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type VaultFactoryUnpaused_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultFactoryUnpaused_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultFactoryUnpaused_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VaultFactoryUnpaused_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type VaultInitialized = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  vault: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type VaultInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultInitialized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault?: InputMaybe<Scalars['Bytes']['input']>;
  vault_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VaultInitialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Vault = 'vault',
  Version = 'version'
}

export type VaultMarketRegistered = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  marketId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  vault: Scalars['Bytes']['output'];
};

export type VaultMarketRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultMarketRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultMarketRegistered_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault?: InputMaybe<Scalars['Bytes']['input']>;
  vault_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VaultMarketRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  MarketId = 'marketId',
  TransactionHash = 'transactionHash',
  Vault = 'vault'
}

export type VaultMarketUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  marketId: Scalars['BigInt']['output'];
  newLeverage: Scalars['BigInt']['output'];
  newWeight: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  vault: Scalars['Bytes']['output'];
};

export type VaultMarketUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultMarketUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  marketId?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not?: InputMaybe<Scalars['BigInt']['input']>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newLeverage?: InputMaybe<Scalars['BigInt']['input']>;
  newLeverage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newLeverage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newLeverage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newLeverage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newLeverage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newLeverage_not?: InputMaybe<Scalars['BigInt']['input']>;
  newLeverage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newWeight?: InputMaybe<Scalars['BigInt']['input']>;
  newWeight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newWeight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newWeight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newWeight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newWeight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newWeight_not?: InputMaybe<Scalars['BigInt']['input']>;
  newWeight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultMarketUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault?: InputMaybe<Scalars['Bytes']['input']>;
  vault_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VaultMarketUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MarketId = 'marketId',
  NewLeverage = 'newLeverage',
  NewWeight = 'newWeight',
  TransactionHash = 'transactionHash',
  Vault = 'vault'
}

export type VaultParameterUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newParameter_cap: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  vault: Scalars['Bytes']['output'];
};

export type VaultParameterUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultParameterUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newParameter_cap?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_cap_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_cap_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_cap_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newParameter_cap_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_cap_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_cap_not?: InputMaybe<Scalars['BigInt']['input']>;
  newParameter_cap_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultParameterUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault?: InputMaybe<Scalars['Bytes']['input']>;
  vault_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VaultParameterUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewParameterCap = 'newParameter_cap',
  TransactionHash = 'transactionHash',
  Vault = 'vault'
}

export type VaultUpdated = {
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  claimAssets: Scalars['BigInt']['output'];
  depositAssets: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  redeemShares: Scalars['BigInt']['output'];
  sender: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  vault: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type VaultUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<VaultUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimAssets?: InputMaybe<Scalars['BigInt']['input']>;
  claimAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  claimAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  claimAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  claimAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  claimAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  claimAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositAssets?: InputMaybe<Scalars['BigInt']['input']>;
  depositAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  depositAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  depositAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  depositAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  depositAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  depositAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VaultUpdated_Filter>>>;
  redeemShares?: InputMaybe<Scalars['BigInt']['input']>;
  redeemShares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemShares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemShares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redeemShares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemShares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemShares_not?: InputMaybe<Scalars['BigInt']['input']>;
  redeemShares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault?: InputMaybe<Scalars['Bytes']['input']>;
  vault_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vault_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VaultUpdated_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ClaimAssets = 'claimAssets',
  DepositAssets = 'depositAssets',
  Id = 'id',
  RedeemShares = 'redeemShares',
  Sender = 'sender',
  TransactionHash = 'transactionHash',
  Vault = 'vault',
  Version = 'version'
}

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type AccountCheckpointsQueryVariables = Exact<{
  account: Scalars['Bytes']['input'];
  market: Scalars['Bytes']['input'];
}>;


export type AccountCheckpointsQuery = { marketAccountCheckpoints: Array<{ market: string, account: string, type: CheckpointType, blockNumber: string, version: string }> };

export type MarketAccumulatorsQueryVariables = Exact<{
  market: Scalars['Bytes']['input'];
  account: Scalars['Bytes']['input'];
  accountLatestVersion: Scalars['BigInt']['input'];
}>;


export type MarketAccumulatorsQuery = { start: Array<{ market: string, version: string, makerValue: string, longValue: string, shortValue: string, pnlMaker: string, pnlLong: string, pnlShort: string, fundingMaker: string, fundingLong: string, fundingShort: string, interestMaker: string, interestLong: string, interestShort: string, positionFeeMaker: string }>, latest: Array<{ market: string, version: string, makerValue: string, longValue: string, shortValue: string, pnlMaker: string, pnlLong: string, pnlShort: string, fundingMaker: string, fundingLong: string, fundingShort: string, interestMaker: string, interestLong: string, interestShort: string, positionFeeMaker: string }>, firstUpdate: Array<{ interfaceFee: string, orderFee: string }> };

export type MarketAccountCheckpointDeltasQueryVariables = Exact<{
  account: Scalars['Bytes']['input'];
  market: Scalars['Bytes']['input'];
  startVersion: Scalars['BigInt']['input'];
  endVersion: Scalars['BigInt']['input'];
}>;


export type MarketAccountCheckpointDeltasQuery = { start: Array<{ market: string, accumulatedValue: string, accumulatedCollateral: string, openSize: string, openNotional: string, openPriceImpactFees: string, accumulatedPositionFees: string, accumulatedKeeperFees: string, accumulatedPnl: string, accumulatedFunding: string, accumulatedInterest: string, accumulatedMakerPositionFee: string, accumulatedPriceImpactFees: string, accumulatedInterfaceFees: string, accumulatedOrderFees: string, collateral: string, netDeposits: string, side: PositionSide, startMagnitude: string, blockTimestamp: string, transactionHash: string }>, end: Array<{ market: string, accumulatedValue: string, accumulatedCollateral: string, openSize: string, openNotional: string, openPriceImpactFees: string, accumulatedPositionFees: string, accumulatedKeeperFees: string, accumulatedPnl: string, accumulatedFunding: string, accumulatedInterest: string, accumulatedMakerPositionFee: string, accumulatedPriceImpactFees: string, accumulatedInterfaceFees: string, accumulatedOrderFees: string, collateral: string, netDeposits: string }>, currentPosition: Array<{ market: string, accumulatedValue: string, accumulatedCollateral: string, openSize: string, openNotional: string, openPriceImpactFees: string, accumulatedPositionFees: string, accumulatedKeeperFees: string, accumulatedPnl: string, accumulatedFunding: string, accumulatedInterest: string, accumulatedMakerPositionFee: string, accumulatedPriceImpactFees: string, accumulatedInterfaceFees: string, accumulatedOrderFees: string, collateral: string, netDeposits: string }>, startUpdate: Array<{ price: string, priceImpactFee: string, interfaceFee: string, orderFee: string }>, endUpdate: Array<{ protect: boolean, collateral: string, version: string }>, firstAccumulation: Array<{ accumulationResult_positionFee: string, accumulationResult_keeper: string, priceImpactFee: string }>, finalAccumulation: Array<{ accumulationResult_positionFee: string, accumulationResult_keeper: string, priceImpactFee: string }> };


export const AccountCheckpointsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccountCheckpoints"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"account"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"market"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketAccountCheckpoints"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"market"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"blockNumber"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"market"}},{"kind":"Field","name":{"kind":"Name","value":"account"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]} as unknown as DocumentNode<AccountCheckpointsQuery, AccountCheckpointsQueryVariables>;
export const MarketAccumulatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MarketAccumulators"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"market"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"account"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountLatestVersion"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"start"},"name":{"kind":"Name","value":"marketAccumulators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"market"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountLatestVersion"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"latest"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"market"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"makerValue"}},{"kind":"Field","name":{"kind":"Name","value":"longValue"}},{"kind":"Field","name":{"kind":"Name","value":"shortValue"}},{"kind":"Field","name":{"kind":"Name","value":"pnlMaker"}},{"kind":"Field","name":{"kind":"Name","value":"pnlLong"}},{"kind":"Field","name":{"kind":"Name","value":"pnlShort"}},{"kind":"Field","name":{"kind":"Name","value":"fundingMaker"}},{"kind":"Field","name":{"kind":"Name","value":"fundingLong"}},{"kind":"Field","name":{"kind":"Name","value":"fundingShort"}},{"kind":"Field","name":{"kind":"Name","value":"interestMaker"}},{"kind":"Field","name":{"kind":"Name","value":"interestLong"}},{"kind":"Field","name":{"kind":"Name","value":"interestShort"}},{"kind":"Field","name":{"kind":"Name","value":"positionFeeMaker"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"latest"},"name":{"kind":"Name","value":"marketAccumulators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"market"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"latest"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"market"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"makerValue"}},{"kind":"Field","name":{"kind":"Name","value":"longValue"}},{"kind":"Field","name":{"kind":"Name","value":"shortValue"}},{"kind":"Field","name":{"kind":"Name","value":"pnlMaker"}},{"kind":"Field","name":{"kind":"Name","value":"pnlLong"}},{"kind":"Field","name":{"kind":"Name","value":"pnlShort"}},{"kind":"Field","name":{"kind":"Name","value":"fundingMaker"}},{"kind":"Field","name":{"kind":"Name","value":"fundingLong"}},{"kind":"Field","name":{"kind":"Name","value":"fundingShort"}},{"kind":"Field","name":{"kind":"Name","value":"interestMaker"}},{"kind":"Field","name":{"kind":"Name","value":"interestLong"}},{"kind":"Field","name":{"kind":"Name","value":"interestShort"}},{"kind":"Field","name":{"kind":"Name","value":"positionFeeMaker"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"firstUpdate"},"name":{"kind":"Name","value":"updateds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"market"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountLatestVersion"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interfaceFee"}},{"kind":"Field","name":{"kind":"Name","value":"orderFee"}}]}}]}}]} as unknown as DocumentNode<MarketAccumulatorsQuery, MarketAccumulatorsQueryVariables>;
export const MarketAccountCheckpointDeltasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MarketAccountCheckpointDeltas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"account"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"market"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startVersion"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endVersion"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"start"},"name":{"kind":"Name","value":"marketAccountCheckpoints"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"market"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startVersion"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"market"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedValue"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedCollateral"}},{"kind":"Field","name":{"kind":"Name","value":"openSize"}},{"kind":"Field","name":{"kind":"Name","value":"openNotional"}},{"kind":"Field","name":{"kind":"Name","value":"openPriceImpactFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedPositionFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedKeeperFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedPnl"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedFunding"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedInterest"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedMakerPositionFee"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedPriceImpactFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedInterfaceFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedOrderFees"}},{"kind":"Field","name":{"kind":"Name","value":"collateral"}},{"kind":"Field","name":{"kind":"Name","value":"netDeposits"}},{"kind":"Field","name":{"kind":"Name","value":"side"}},{"kind":"Field","name":{"kind":"Name","value":"startMagnitude"}},{"kind":"Field","name":{"kind":"Name","value":"blockTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"end"},"name":{"kind":"Name","value":"marketAccountCheckpoints"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"market"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endVersion"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"market"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedValue"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedCollateral"}},{"kind":"Field","name":{"kind":"Name","value":"openSize"}},{"kind":"Field","name":{"kind":"Name","value":"openNotional"}},{"kind":"Field","name":{"kind":"Name","value":"openPriceImpactFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedPositionFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedKeeperFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedPnl"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedFunding"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedInterest"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedMakerPositionFee"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedPriceImpactFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedInterfaceFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedOrderFees"}},{"kind":"Field","name":{"kind":"Name","value":"collateral"}},{"kind":"Field","name":{"kind":"Name","value":"netDeposits"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"currentPosition"},"name":{"kind":"Name","value":"marketAccountPositions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"market"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"market"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedValue"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedCollateral"}},{"kind":"Field","name":{"kind":"Name","value":"openSize"}},{"kind":"Field","name":{"kind":"Name","value":"openNotional"}},{"kind":"Field","name":{"kind":"Name","value":"openPriceImpactFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedPositionFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedKeeperFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedPnl"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedFunding"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedInterest"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedMakerPositionFee"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedPriceImpactFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedInterfaceFees"}},{"kind":"Field","name":{"kind":"Name","value":"accumulatedOrderFees"}},{"kind":"Field","name":{"kind":"Name","value":"collateral"}},{"kind":"Field","name":{"kind":"Name","value":"netDeposits"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"startUpdate"},"name":{"kind":"Name","value":"updateds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"market"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startVersion"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceImpactFee"}},{"kind":"Field","name":{"kind":"Name","value":"interfaceFee"}},{"kind":"Field","name":{"kind":"Name","value":"orderFee"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"endUpdate"},"name":{"kind":"Name","value":"updateds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"market"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"version_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endVersion"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"version"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"protect"}},{"kind":"Field","name":{"kind":"Name","value":"collateral"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"firstAccumulation"},"name":{"kind":"Name","value":"accountPositionProcesseds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"market"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"toOracleVersion"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startVersion"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accumulationResult_positionFee"}},{"kind":"Field","name":{"kind":"Name","value":"accumulationResult_keeper"}},{"kind":"Field","name":{"kind":"Name","value":"priceImpactFee"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"finalAccumulation"},"name":{"kind":"Name","value":"accountPositionProcesseds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"market"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fromOracleVersion"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endVersion"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accumulationResult_positionFee"}},{"kind":"Field","name":{"kind":"Name","value":"accumulationResult_keeper"}},{"kind":"Field","name":{"kind":"Name","value":"priceImpactFee"}}]}}]}}]} as unknown as DocumentNode<MarketAccountCheckpointDeltasQuery, MarketAccountCheckpointDeltasQueryVariables>;