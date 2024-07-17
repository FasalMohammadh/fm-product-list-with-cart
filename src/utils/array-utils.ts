function mergeBy<T, U, K extends Extract<keyof T, keyof U>>(
  array1: T[],
  array2: U[],
  key: K
) {
  const newArray: (T & U)[] = [];

  for (const item of array1) {
    const match = array2.find((i) => i[key] === (item[key] as any)); // any added to make typescript stop complaining
    if (typeof match !== "undefined") {
      newArray.push({ ...item, ...match });
    }
  }

  return newArray;
}

export { mergeBy };
