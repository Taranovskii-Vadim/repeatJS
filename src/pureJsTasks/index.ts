// Task 1

type GroupByResult<D> = Record<number, D[]>;

export const groupBy = <D>(arr: D[], callback: (value: D) => number): GroupByResult<D> => {
  return arr.reduce((acc, item) => {
    const key = callback(item);
    acc[key] = acc[key] ? [...acc[key], item] : [item];
    return acc;
  }, {} as GroupByResult<D>);
};

// Task 2

type ChunkResult<D> = D[][];

export const chunk = <D>(arr: D[], target: number): ChunkResult<D> => {
  const result: ChunkResult<D> = [];
  let temp: D[] = [];

  for (let item of arr) {
    temp.push(item);

    if (temp.length === target) {
      result.push(temp);
      temp = [];
    }
  }

  result.push(temp);

  return result;
};

// Task 3

const sum = (a: number, b: number): number => a + b;

const partial = <D>(callback: (...rest: D[]) => D, closure: D) => {
  return (value: D) => callback(closure, value);
};

const sumTwo = partial(sum, 2);

// Task 4

const returnSomething = <D>(...arr: D[]) => arr;

const withDelay = <D>(callback: (...data: D[]) => D[], delay: number, ...rest: D[]) => {
  return (...args: D[]): Promise<D[]> => {
    return new Promise((resolve, reject) => {
      const timer = window.setTimeout(() => {
        resolve(callback(...rest.concat(args)));

        window.clearTimeout(timer);
      }, delay);
    });
  };
};

export const start = async () => {
  try {
    const delaiedReturnSomething = await withDelay(returnSomething, 2000, 'Hello');
    const result = await delaiedReturnSomething('world');

    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

// Task 5

type Tree = Partial<{
  left: Tree;
  right: Tree;
  value: number;
}>;

const testTree: Tree = {
  left: {
    left: {},
    right: {
      value: 4,
    },
    value: 1,
  },
  right: {
    left: {
      left: {
        left: {},
        right: {
          value: 5,
        },
        value: 2,
      },
      right: {},
    },
    right: {
      value: 7,
    },
  },
  value: 4,
};

const getSumOfTreeValues = (tree: Tree): number => {
  let result = tree.value || 0;

  if (tree.left) {
    result += getSumOfTreeValues(tree.left);
  }

  if (tree.right) {
    result += getSumOfTreeValues(tree.right);
  }

  return result;
};

export const sumOfTreeValuesResult = getSumOfTreeValues(testTree);

// Task 6

export const canDrink = (person: Record<'age', number>) => {
  if (!person.age) {
    throw new Error('Age does not exist');
  }

  const getDrinkResponse = (age: number) => {
    if (age < 18) return 'can not drink';
    if (age < 21) return 'can not drink in USA';
    return 'can drink';
  };

  return getDrinkResponse(person.age);
};

// Task 7

export const fizzBazz = (num: number): number | 'fizz' | 'bazz' | 'fizzbazz' => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbazz';
  }

  if (num % 5 === 0) {
    return 'fizz';
  }

  if (num % 3 === 0) {
    return 'bazz';
  }

  return num;
};

// Task 8

export const myPromiseAll = async <T>(data: Promise<T>[]): Promise<T[]> => {
  const result: T[] = [];

  return new Promise(async (resolve, reject) => {
    try {
      for await (let item of data) {
        result.push(item);
      }

      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

// Task 9

export const getSimpleNumbers = (limit: number): number[] => {
  const result: number[] = [];

  const defective: Record<number, true> = {};

  for (let i = 2; i <= limit; i++) {
    if (!defective[i]) {
      result.push(i);

      for (let j = i * i; j <= limit; j += i) {
        defective[j] = true;
      }
    }
  }

  return result;
};

// Task 10

const currencies = [
  ['usd', 'sell', 3000],
  ['usd', 'sell', 3000],
  ['usd', 'buy', 10000],
  ['rub', 'buy', 2500],
  ['eur', 'buy', 7000],
  ['eur', 'buy', 8000],
  ['eur', 'sell', 6500],
];

export const getTodayTotal = (): Record<string, number[]> => {
  return currencies.reduce((acc, [cur, type, value]) => {
    acc[cur] = acc[cur] || [0, 0];
    acc[cur][type === 'sell' ? 0 : 1] += value as number;

    return acc;
  }, {} as Record<string, number[]>);
};

// Task 11

export const myFlat = <D>(data: D[]): D[] => {
  let result: D[] = [];

  for (let item of data) {
    if (Array.isArray(item)) {
      result = [...result, ...myFlat(item)];
    } else {
      result = [...result, item];
    }
  }

  return result;
};

// Task 12

const counter = (function () {
  let count = 0;

  return () => count++;
})();

// Task 13

type Callback<D> = (...values: D[]) => void;
type Context<D> = Record<string | symbol, string | Callback<D>>;

export const myBind = <D>(ctx: Context<D>, callback: Callback<D>, ...rest: D[]) => {
  return (...args: D[]) => {
    const uniqId = Symbol('uniqId');
    ctx[uniqId] = callback;

    const result = ctx[uniqId](...rest.concat(args));

    delete ctx[uniqId];

    return result;
  };
};

// Task 14 deep clone

const template = {
  first: 'test',
  second: [1, 2, 3],
  third: {
    data: 45,
    info: {
      address: 'info',
    },
  },
  fourth: function (value: boolean) {
    return value;
  },
  fifth: new Date(),
  sixth: new Set([1, 2, 2, 3, 4, 5, 5, 6, 6, 6, 8]),
  seventh: new Map([
    [{ id: 'qwe' }, 3],
    [{ id: 'jgh' }, 5],
  ]),
};

export const deepClone = <D>(data: D): D => {
  let result = {} as D;

  for (let key in data) {
    const item = data[key];

    if (Array.isArray(item)) {
      result = { ...result, [key]: [...item] };
    } else if (item instanceof Date) {
      result = { ...result, [key]: new Date(item) };
    } else if (item instanceof Set) {
      result = { ...result, [key]: new Set(item) };
    } else if (item instanceof Map) {
      result = { ...result, [key]: new Map(item) };
    } else if (typeof item === 'function') {
      result = { ...result, [key]: new Function('return ' + item.toString()) };
    } else if (typeof item === 'object' && item !== null) {
      result = { ...result, [key]: deepClone(item) };
    } else {
      result = { ...result, [key]: item };
    }
  }

  return result;
};

// Task 16

type CallbackFn<D, R = D> = (item: D, index: number, arr: D[]) => R;

export const myMap = <D>(data: D[], callback: CallbackFn<D>): D[] => {
  return data.reduce((acc, item, ...rest) => {
    acc.push(callback(item, ...rest));

    return acc;
  }, [] as D[]);
};

export const myFilter = <D>(data: D[], callback: CallbackFn<D, boolean>): D[] => {
  return data.reduce((acc, item, ...other) => {
    if (callback(item, ...other)) {
      acc.push(item);
    }

    return acc;
  }, [] as D[]);
};

// Task 17

export const closureSum = (...init: number[]) => {
  const getSum = (arr: number[]) => arr.reduce((acc, item) => acc + item, 0);

  let result = getSum(init);

  return function getResult(...value: number[]) {
    if (value.length) {
      result += getSum(value);
      return getResult;
    }

    return result;
  };
};

// Task 18

export const recursiveSum = (data: number[]): number =>
  data.length !== 1 ? data.splice(data.length - 1)[0] + recursiveSum(data) : data[0];

// Task 19

const maxDepth = (tree: Tree): number => {
  let result = 0;

  function findDepth(node: Tree, depth: number) {
    if (!node) return;

    if (depth > result) {
      result = depth;
    }

    if (node.left) {
      findDepth(node.left, depth + 1);
    }

    if (node.right) {
      findDepth(node.right, depth + 1);
    }
  }

  findDepth(tree, 1);

  return result;
};

export const maxDepthResult = maxDepth(testTree);

// task 20

type ThenCallback<D> = (value: D) => D;
type PromiseCallback<D> = (resolve: (value: D) => void, reject: () => void) => void;

class MyPromise<D> {
  private callbacks: Array<(value: D) => void> = [];

  constructor(callback: PromiseCallback<D>) {
    callback(this.resolve.bind(this), this.reject.bind(this));
  }

  private resolve(value: D): void {
    this.callbacks.forEach((callback) => {
      callback(value);
    });
  }

  private reject() {}

  then(callback: ThenCallback<D>): MyPromise<D> {
    return new MyPromise((resolve, reject) => {
      this.callbacks.push((value) => {
        const result = callback(value);

        resolve(result);
      });
    });
  }

  catch() {}

  finally() {}
}

export const promise = new MyPromise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

// Task 21

class Dictionary {
  private data: Record<string, true>;

  constructor(initValue: string[]) {
    this.data = initValue.reduce((acc, item) => {
      acc[item] = true;

      for (let i = 0; i < item.length; i++) {
        const start = item.slice(0, i);
        const end = item.slice(i + 1);

        acc[`${start}*${end}`] = true;
      }

      return acc;
    }, {} as Record<string, true>);
  }

  isInDictionary(value: string): boolean {
    return !!this.data[value];
    //  if (!value.includes('*'))
    // const regex = new RegExp(value.replace('*', '.'));

    // return Object.keys(this.data).some((item) => regex.test(item));
  }
}

export const dict = new Dictionary(['cat', 'bat', 'pine', 'apple', 'fox']);

// Task 22

export const recursiveString = (value: string): string =>
  value.length ? value[value.length - 1] + recursiveString(value.slice(0, value.length - 1)) : '';

// Task 23

// 17 - 1 = 16; 1 => 0
// 17 - 7 = 10; 7 => 1
// 17 - 10 = 7; return [1, 2]

export const findElementsSum = (data: number[], target: number): number[] => {
  const checked = new Map();

  for (let i = 0; i < data.length; i++) {
    const diff = target - data[i];

    if (checked.has(diff)) {
      return [checked.get(diff), i];
    } else {
      checked.set(data[i], i);
    }
  }

  return [];
};

// Task 24

export const stonks = (data: number[]): number => {
  let profit = 0;
  let min = data[0];

  for (let i = 0; i < data.length; i++) {
    min = Math.min(min, data[i]);
    profit = Math.max(profit, data[i] - min);
  }

  return profit;
};

// Task 25

export const getPossibleReplacement = (value: number): number[] => {
  const result: number[] = [];
  const str = value.toString();
  const data = str.split('');

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;

      const candidate = +data.join('');

      if (!result.includes(candidate)) {
        result.push(candidate);
      }
    }
  }

  return result;
};

// Task 26

export const findArrItemsSum = (arr1: number[], arr2: number[]): number[] => {
  let temp = 0;

  if (arr1.length > arr2.length) arr2 = new Array(arr1.length - arr2.length).fill(0).concat(arr2);
  if (arr2.length > arr1.length) arr1 = new Array(arr2.length - arr1.length).fill(0).concat(arr1);

  const result = arr1.reduceRight((acc, item, index) => {
    const sum = item + arr2[index] + temp;

    const isMore = sum >= 10;
    temp = isMore ? 1 : 0;

    acc[index] = isMore ? sum - 10 : sum;

    return acc;
  }, [] as number[]);

  temp && result.unshift(temp);

  return result;
};

// Task 27

class jQuery {
  private node: HTMLElement | null = null;

  constructor(selector: string) {
    this.node = document.querySelector(selector);
  }

  addClass(classname: string) {
    if (this.node) {
      this.node.classList.add(classname);
    }

    return this;
  }

  removeClass(classname: string) {
    if (this.node) {
      this.node.classList.remove(classname);
    }

    return this;
  }

  html(markup: string) {
    if (this.node) {
      this.node.innerHTML = markup;
    }

    return this;
  }
}

export const $ = (selector: string) => new jQuery(selector);

/////////////////////////////////

// export const $ = (selector: string) => {
//   const node = document.querySelector(selector);

//   return {
//     addClass(classname: string) {
//       if (node) {
//         node.classList.add(classname);
//       }

//       return this;
//     },
//     removeClass(classname: string) {
//       if (node) {
//         node.classList.remove(classname);
//       }

//       return this;
//     },
//     html(markup: string) {
//       if (node) {
//         node.innerHTML = markup;
//       }

//       return this;
//     },
//   };
// };

// Task 28

export const sortPowedArray = (data: number[]): number[] => {
  for (let i = data.length - 1; i >= 0; i--) {
    if (Math.abs(data[i]) > Math.abs(data[0])) {
      data[i] = Math.pow(data[i], 2);
    } else {
      const temp = Math.pow(data[0], 2);
      data[0] = data[i];
      data[i] = temp;
    }
  }

  return data;
};

// Task 29

export const findDataInObject = (value: any, path: string): any => {
  // First
  // for (let item of path) {
  //   if (item === '.') continue;
  //   if (!value[item]) return null;
  //   value = value[item];
  // }
  // return value;

  // Second
  if (!path) return value;

  const candidate = value[path[0]];

  if (!candidate) return null;

  return findDataInObject(candidate, path.slice(2));
};

// Task 30

// 1
// 1 + 2
// 1 + 2 + 1
// 1 + 2 + 1 + 9 = 13

// 1 + 2 + 7 = 10

export const findMaxLeafSum = (tree: Tree): number => {
  let result = 0;

  function dfs(node: Tree, currentSum: number) {
    if (!node) return null;

    const currentValue = currentSum + node.value;

    if (currentValue > result) {
      result = currentValue;
    }

    dfs(node.left, currentValue);
    dfs(node.right, currentValue);
  }

  dfs(tree, result);

  return result;
};

// [0, 2, 0, -3, 0, 1] -> [2, -3, 1, 0, 0, 0]
// [2, 0, 0, 0, 2, 5] -> [2, 2, 5, 0, 0, 0]

// export const moveZerosToEnd = (data: number[]): number[] => {
//   return data;
// };
