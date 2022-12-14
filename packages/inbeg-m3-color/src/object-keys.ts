export const objectKeys = <T>(obj: T): (keyof T)[] =>
  Object.keys(obj) as (keyof T)[];
