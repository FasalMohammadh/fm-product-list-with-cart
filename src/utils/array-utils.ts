function mergeBy<T, U, K extends keyof T & keyof U>(
  array1: T[],
  array2: U[],
  key: K
): (T & U)[] {
  return array1
    .map((item) => {
      const match = array2.find((i) => i[key] === item[key]);
      if (match) {
        return { ...item, ...match } as T & U;
      }
      return null;
    })
    .filter((item) => Boolean(item)) as (T & U)[];
}

export { mergeBy };
