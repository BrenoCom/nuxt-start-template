/* eslint-disable */
//@ts-nocheck
export default function compareTypes<T, U>(obj1: T, obj2: U): boolean {
  const keys1 = Object.keys(obj1) as (keyof T)[];
  const keys2 = Object.keys(obj2) as (keyof U)[];

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (typeof obj1[key] !== typeof obj2[key] && key !== "data") {
      return false;
    }
  }

  return true;
}
