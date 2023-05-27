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
