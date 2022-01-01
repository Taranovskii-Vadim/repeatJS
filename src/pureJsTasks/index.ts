import * as Types from "./types";

// Task 1

export const myGroupBy = (arr: any[], template: Types.TargetType) => {
  return arr.reduce((acc, item) => {
    const key = template === "length" ? item.length : template(item);

    acc[key] = acc[key] ? [...acc[key], item] : [item];

    return acc;
  }, {});
};

// Task 2

export const myChunk = <T extends any>(
  arr: Array<T>,
  length: number
): Array<T[]> => {
  const result: Array<T[]> = [];
  let temp: T[] = [];

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

type SumFunction = (a: number, b: number) => number;

const sum: SumFunction = (a, b) => a + b;

const myPartial = (callback: SumFunction, constant: number) => {
  return (val: number) => {
    return callback.call(null, constant, val);
  };
};

export const sumTwo = myPartial(sum, 2);

// Task 4

const logInfo = <S>(arr: S[]): string =>
  arr.reduce((acc, item) => {
    acc += item + " ";
    return acc;
  }, "");

const withDelay = <S>(
  callback: typeof logInfo,
  delay: number,
  ...rest: S[]
) => {
  return (...args: S[]) => {
    return new Promise((resolve, reject) => {
      const timer = window.setTimeout(() => {
        resolve(callback<S>(rest.concat(args)));
        window.clearTimeout(timer);
      }, delay);
    });
  };
};

export async function start() {
  try {
    const delaiedFunction = await withDelay<string>(logInfo, 2000, "Hello");
    const result = await delaiedFunction("world");
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}

// Task 5

// const tree = {
//   left: {
//     left: {},
//     right: {
//       value: 4,
//     },
//     value: 1,
//   },
//   right: {
//     left: {
//       left: {
//         left: {},
//         right: {
//           value: 5,
//         },
//         value: 2,
//       },
//       right: {},
//     },
//     right: {
//       value: 7,
//     },
//   },
//   value: 4,
// };

export const getSumValues = (obj: any): number => {
  let result = obj.value || 0;

  if (obj.left) {
    result += getSumValues(obj.left);
  }
  if (obj.right) {
    result += getSumValues(obj.right);
  }

  return result;
};

// Task 6

export const canDrink = (person: { age: number }) => {
  if (!person.age) {
    throw new Error("Age does not exist");
  }
  const getDrinkResponse = (age: number) => {
    if (age < 18) return "can not drink";
    if (age < 21) return "can not drink in USA";
    return "can drink";
  };

  return getDrinkResponse(person.age);
};

// Task 7
// const multiArr = [1, 2, [1, 2, 3, [4, 5], [6]], [8, 5, 6, [1, [2, 3, [6]]]]];

export const myFlat = (arr: any[]): any[] => {
  let result: any[] = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = [...result, ...myFlat(item)];
    } else {
      result = [...result, item];
    }
  }
  return result;
};

// Task 8

export const isReplacementString = (str1: string, str2: string): boolean => {
  if (str1.length === str2.length) {
    const symbols1 = str1.split("").sort();
    const symbols2 = str2.split("").sort();
    return symbols1.join("") === symbols2.join("");
  }
  return false;
};

//Task 9

export const sortOdd = (arr: number[]): number[] => {
  const odd: number[] = arr.filter((item) => item % 2).sort((a, b) => a - b);

  let counter = 0;

  return arr.map((item) => (item % 2 ? odd[counter++] : item));
};

// Task 10

const getAllOptions = (arr: string[]) => {
  const getMaxVal = (val: number): number =>
    val !== 1 ? val * getMaxVal(val - 1) : 1;

  const result: string[] = [];
  let variable = "";

  while (result.length !== getMaxVal(arr.length)) {
    while (variable.length !== arr.length) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const randItem = arr[randomIndex];
      if (!variable.includes(randItem)) {
        variable += randItem;
      }
    }
    if (!result.includes(variable)) {
      result.push(variable);
    }
    variable = "";
  }

  return result;
};

export const getAllReplacement = (num: number): Array<number> | null => {
  const MAX_LENGTH = 3;
  const digits = num.toString().split("");
  if (digits.length <= MAX_LENGTH) {
    const allOptions = getAllOptions(digits);
    return allOptions.map((item) => +item).sort((a, b) => a - b);
  }
  return null;
};

// Task 11

export const isPalindrom = (phrase: string): boolean => {
  phrase = phrase.replace(/\s/g, "").toLowerCase();
  const halfLength = Math.floor(phrase.length / 2);

  for (let i = 0; i < halfLength; i++) {
    if (phrase[i] !== phrase[phrase.length - i - 1]) {
      return false;
    }
  }

  return true;
};

// Task 12

export const getRecursionSum = (...rest: number[]) => {
  const getSum = (arr: number[]) => arr.reduce((acc, item) => acc + item);
  let result = getSum(rest);
  return function func(...args: number[]) {
    if (args.length) {
      result += getSum([...args]);
      return func;
    }
    return result;
  };
};

// Task 13

export const IIFECounter = (function () {
  let counter = 0;
  return () => counter++;
})();

// Task 14

export const myBind = <C, R>(
  context: { [key: number]: any },
  callback: C,
  ...rest: R[]
) => {
  return (...args: R[]) => {
    const uniqId = Date.now();
    context[uniqId] = callback;
    const result = context[uniqId](...rest.concat(args));
    delete context[uniqId];
    return result;
  };
};

// Task 15

const fruits: any[] = [
  "BaNaNa",
  "orange",
  "pineapple",
  "baNana",
  "banAna",
  undefined,
  0,
  true,
  "pineapple",
];

export const getTopFruits = (): string[] => {
  const filteredArr: string[] = fruits
    .filter((item) => typeof item === "string")
    .map((item) => item.toLowerCase());

  const grouped = filteredArr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  return Object.entries(grouped)
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0]);
};

// Task 16

export const getVowelsCount = (
  str: string,
  mode: Types.LanguageMode
): number => {
  const getVowels = (): string[] => {
    const enVowels = ["A", "O", "E", "U", "I", "Y"];
    const ruVowels = ["А"];
    return mode === "en" ? enVowels : ruVowels;
  };
  const template = getVowels().map((item) => item.toLowerCase());
  const regex = new RegExp(`[${template.join("")}]`, "gi");
  const matched = str.match(regex);
  return matched ? matched.length : 0;
};

// Task 17

export const getFibNumber = (index: number): number => {
  let a = 0,
    b = 1;
  for (let i = 0; i < index - 2; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

// Task 18

export const fizzBazz = (num: number): Types.FizzBazz => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbazz";
  }

  if (num % 5 === 0) {
    return "fizz";
  }
  if (num % 3 === 0) {
    return "bazz";
  }
  return num;
};

// Task 19

const currencies: Types.CurrencyTuple = [
  ["usd", "sell", 3000],
  ["usd", "sell", 3000],
  ["usd", "buy", 10000],
  ["rub", "buy", 2500],
  ["eur", "buy", 7000],
  ["eur", "buy", 8000],
  ["eur", "sell", 6500],
];

export const getTodayTotal =
  (): // currencies: Array<[string, "sell" | "buy", number]>
  { [key: string]: number[] } => {
    return currencies.reduce((acc, item) => {
      const [cur, type, money] = item;
      acc[cur] = acc[cur] || [0, 0];
      acc[cur][type === "sell" ? 0 : 1] += money;
      return acc;
    }, {} as { [key: string]: number[] });
  };

// Task 20

export const getRandomHex = () => {
  const hexSymb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let result = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexSymb.length);
    result += hexSymb[randomIndex];
  }
  return result;
};

// Task 21

const maze = [
  [1, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
];

export const checkPath = (start: Types.Coordinates, end: Types.Coordinates) => {
  maze[start.y][start.x] = 42;
  const getSiblings = ({ x, y }: Types.Coordinates) => {
    const result: Array<Types.CoordinatesWithVal> = [];

    if (maze[y - 1] !== undefined) {
      result.push({ x, y: y - 1, val: maze[y - 1][x] });
    }

    if (maze[y + 1] !== undefined) {
      result.push({ x, y: y + 1, val: maze[y + 1][x] });
    }

    if (maze[y][x - 1] !== undefined) {
      result.push({ x: x - 1, y, val: maze[y][x - 1] });
    }

    if (maze[y][x + 1] !== undefined) {
      result.push({ x: x + 1, y, val: maze[y][x + 1] });
    }

    return result.filter((item) => !item.val);
  };

  const siblings = getSiblings(start);
  if (siblings.length) {
    for (let { x, y } of siblings) {
      const isFinished = x === end.x && y === end.y;
      if (isFinished || checkPath({ x, y }, end)) {
        return true;
      }
    }
  }
  return false;
};

// Task 22

export const getSimpleNumbers = (limit: number) => {
  const result: number[] = [];
  const defective: { [key: number]: true } = {};
  for (let i = 2; i <= limit; i++) {
    if (!defective[i]) {
      result.push(i);
      for (let j = i * i; j < limit; j += i) {
        defective[j] = true;
      }
    }
  }

  return result;
};

// Task 23

export const findSumOfTwo = (
  arr: number[],
  target: number
): number[] | null => {
  // Bad way for perf
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
};

// Task 24

export const sumOfThree = (arr: number[], target: number = 0): number[][] => {
  const result: number[][] = [];

  if (arr.length < 3) {
    return result;
  }

  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      break;
    }
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];

      if (sum === target) {
        result.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
        continue;
      }

      if (sum > target) {
        k--;
        continue;
      }

      if (sum < target) {
        j++;
        continue;
      }
    }
  }
  return result;
};

// Task 25

export const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const candidat = arr[middle];

    if (candidat === target) {
      return middle;
    }

    if (candidat > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

// Task 26

// const obj = {
//   1000: 5,
//   500: 2,
//   100: 3,
//   50: 10,
//   30: 6,
// };

// const getMoney = (money) => {
//   const cur = [1000, 100, 50, 10];
//   const result = {};
//   for (let item of cur) {
//     if (money === 0) {
//       break;
//     }
//     while (money - item >= 0) {
//       money -= item;
//       result[item] = (result[item] || 0) + 1;
//     }
//   }
//   return result;
// };

// console.log(getMoney(450));

// Task 27

export const getProfit = (arr: number[]): number => {
  return arr.reduce((acc, item, index) => {
    const prev = arr[index - 1];

    if (!Number.isNaN(Number(prev)) && prev < item) {
      acc += item - prev;
    }
    return acc;
  }, 0);
};

// Task 28

export const fillMatrixZero = (matrix: number[][]): number[][] | null => {
  for (let i = 0; i < matrix.length; i++) {
    const zeroIndex = matrix[i].findIndex((item) => item === 0);

    if (zeroIndex >= 0) {
      matrix[i] = matrix[i].fill(0);

      for (let item of matrix) {
        item[zeroIndex] = 0;
      }

      return matrix;
    }
  }

  return null;
};

// Task 29

export const findNotDouble = (arr: number[]): number => {
  const uniq = [...new Set(arr)].reduce((acc, item) => acc + item, 0);
  const ordinary = arr.reduce((acc, item) => acc + item, 0);

  return uniq * 2 - ordinary;
};

// Task 30

export const maxDistToClosest = (arr: number[]): number => {
  const distants: number[] = [];
  let currentDist = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      distants.push(currentDist);
      currentDist = 0;
    } else {
      currentDist++;
    }
  }

  return Math.max(...distants);
};

// Task 31
