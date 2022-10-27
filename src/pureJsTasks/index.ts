import * as Types from "./types";

// Task 1

export const myGroupBy = (arr: any[], template: Types.TargetType) => {
  return arr.reduce((acc, item) => {
    const key = typeof template === "string" ? item.length : template(item);
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

export const myFlat = (arr: any[]): number[] => {
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
  if (str1.length !== str2.length) return false;

  const splited1 = str1.split("").sort();
  const splited2 = str2.split("").sort();

  return splited1.join("") === splited2.join("");
};

//Task 9

export const sortOdd = (arr: number[]): number[] => {
  const odd = arr.filter((item) => item % 2).sort();
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
  phrase = phrase.replace(/\s/g, "").toLocaleLowerCase();
  const middle = Math.floor(phrase.length / 2);

  for (let i = 0; i < middle; i++) {
    if (phrase[i] !== phrase[phrase.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

// Task 12

export const getRecursionSum = (...rest: number[]): any => {
  const getSum = (arr: number[]) => arr.reduce((acc, item) => acc + item, 0);

  let result = getSum(rest);

  return function getResult(...args: number[]) {
    if (args.length) {
      result += getSum(args);
      return getResult;
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
  context: { [key: string]: any },
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

export const getTopFruits = (fruits: any[]): string[] => {
  const strings: string[] = fruits
    .filter((item) => typeof item === "string")
    .map((item) => item.toLowerCase());

  const counted = strings.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  return Object.entries(counted)
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

type BinaryResult = number | null;

const binaryTarget = 10;
const binaryArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const binarySearch = (): BinaryResult => {
  let left = 0;
  let right = binaryArray.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const candidat = binaryArray[middle];

    if (candidat === binaryTarget) {
      return middle;
    }

    if (candidat > binaryTarget) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return null;
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
      matrix[i].fill(0);

      for (let item of matrix) {
        item[zeroIndex] = 0;
      }

      return matrix;
    }
  }

  // if any of sub arrays got no zero
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

export const solveSudoku = (sudoku: string[][]) => {
  const size = sudoku.length;
  const boxSize = Math.sqrt(size);

  const findEmptyPosition = (): number[] => {
    for (let r = 0; r < sudoku.length; r++) {
      const row = sudoku[r];
      for (let c = 0; c < row.length; c++) {
        if (row[c] === ".") {
          return [r, c];
        }
      }
    }

    return [];
  };

  const isSudokuValid = ([r, c]: number[], candidat: string): boolean => {
    // check row
    for (let i = 0; i < sudoku.length; i++) {
      if (sudoku[r][i] === candidat && i !== c) {
        return false;
      }
    }

    // check col
    for (let i = 0; i < sudoku.length; i++) {
      if (sudoku[i][c] === candidat && i !== r) {
        return false;
      }
    }

    // check box

    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (sudoku[i][j] === candidat && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };

  const solve = () => {
    const currentPostion = findEmptyPosition();

    if (!currentPostion.length) {
      return true;
    }

    for (let i = 1; i <= size; i++) {
      const insertCandidat = i.toString();
      const isValid = isSudokuValid(currentPostion, insertCandidat);

      if (isValid) {
        const [r, c] = currentPostion;
        sudoku[r][c] = insertCandidat;

        if (solve()) {
          return true;
        }

        sudoku[r][c] = ".";
      }
    }

    return false;
  };

  solve();
  return sudoku;
};

// Task 32

export const isNumberPalindrom = (value: number): boolean => {
  if (value < 0) return false;
  if (value % 10 === 0) return false;
  if (value < 10) return true;

  let reverse = 0;

  while (reverse < value) {
    reverse *= 10;
    reverse += value % 10;
    value = Math.trunc(value / 10);
  }

  return reverse === value || value === Math.trunc(reverse / 10);
};

// Task 33

export const longestPalindrom = (value: string): string[] => {
  const palindroms: string[] = [];
  let maxValue = 0;
  let temp = "";

  for (let i = 0; i < value.length; i++) {
    for (let j = i; j < value.length; j++) {
      temp += value[j];

      if (isPalindrom(temp)) {
        palindroms.push(temp);
        maxValue = Math.max(maxValue, temp.length);
      }
    }
    temp = "";
  }

  return palindroms.filter((item) => item.length === maxValue);
};

// Task 34

export const findHappyNumber = (value: string): any => {
  const entries = value.split("").reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  return Object.keys(entries).filter((key) => +key === entries[key]);
};

// Task 35

// TODO got no idea how to solve it yet
export const parseUrlString = (value: string) => {};

// Task 36

type LabelArrayItem = {
  readonly id: number;
  label: string;
  des: string;
};

type LabelArrayKey = keyof LabelArrayItem;

const labelArray: LabelArrayItem[] = [
  { label: "label1", id: 1, des: "des here 1" },
  { label: "label2", id: 2, des: "des here 2" },
  { label: "label3", id: 3, des: "des here 3" },
];

const labelArrayKey: LabelArrayKey = "id";

export const getLabelArray = () =>
  labelArray.map((item) => ({ [labelArrayKey]: item[labelArrayKey] }));

// Task 37

export const recursiveSum = (arr: number[]): number =>
  arr.length !== 1 ? arr.splice(arr.length - 1)[0] + recursiveSum(arr) : arr[0];

// Task 38

export const getRectMaxSizes = (length: number, height: number): any => {
  if (!length || !height) {
    return length || height;
  }

  if (length > height) {
    return getRectMaxSizes(length % height, height);
  }

  if (length < height) {
    return getRectMaxSizes(length, height % length);
  }
};

// Task 39
