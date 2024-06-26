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
