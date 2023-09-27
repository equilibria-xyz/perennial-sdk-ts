export type Position = {
  maker: bigint
  taker: bigint
}

export type PrePosition = {
  oracleVersion: bigint
  openPosition: Position
  closePosition: Position
}
