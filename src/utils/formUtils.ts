const numbersOnlyRegex = /^\d*\.?\d*$/

export const isNumbersOnly = (value: string) => numbersOnlyRegex.test(value)
