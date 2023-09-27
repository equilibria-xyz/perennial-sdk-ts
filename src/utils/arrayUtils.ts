export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}

export function sum(values: bigint[]) {
  return values.reduce((sum, value) => sum + value, BigInt(0));
}

export function unique<T>(values: T[]) {
  return Array.from(new Set(values));
}

export function equal<T>(a: T[], b: T[]) {
  const set1 = new Set(a);
  const set2 = new Set(b);
  return a.every((i) => set2.has(i)) && b.every((i) => set1.has(i));
}

export function range(start: bigint | number, end: bigint | number) {
  const length = Number(BigInt(end) - BigInt(start));
  return Array.from({ length }, (_, i) => BigInt(start) + BigInt(i));
}
