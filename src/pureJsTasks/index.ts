import * as Types from "./types";

// Task 1

export const myGroupBy = (data: Array<any>, target: Types.TargetType) => {
  const result: Types.GroupByResult = data.reduce((acc, item) => {
    const key = target === "length" ? item.length : target(item);

    acc[key] = acc[key] ? [...acc[key], item] : [item];
    return acc;
  }, {});

  return result;
};

// Task 2

export const myChunk = (arr: Array<any>, length: number): Array<any[]> => {
  const result: Array<any[]> = [];
  let temp: any[] = [];

  for (let item of arr) {
    if (temp.length === length) {
      result.push(temp);
      temp = [];
    }
    temp.push(item);
  }

  result.push(temp);

  return result;
};

// Task 3
