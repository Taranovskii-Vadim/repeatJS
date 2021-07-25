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

const sum = (a: number, b: number): number => a + b;

const myPartial = <S>(callback: (...rest: S[]) => any, constant: S) => {
  return (val: S) => {
    return callback.call(null, constant, val);
  };
};

export const sumTwo = myPartial<number>(sum, 2);

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
