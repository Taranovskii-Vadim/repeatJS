// Task 1
// Дано: Массив батареек ([-1, 1, -1, 1, ....]), где -1 батарея разряжена, 1 батарея заряжена.
// Найти: Необходимо найти минимальное количество попыток за которое человек может выбрать 2 заряженные батареи.

// O(n)
// O(1)

export const findTwoPositive = (data: number[]): number => {
  let count = 0;

  let left = 0;

  for (let i = 1; i < data.length; i++) {
    count++;

    if (data[left] === 1 && data[i] === 1) {
      break;
    }

    if (data[i] === 1) {
      left = i;
    }
  }

  return count;
};

// Task 2
// Дано: Отсортированный массив монет разных номиналов.
// Цель: Требуется найти минимальное количество монет для получения передаваемой суммы

export const findMinimumToGetTarget = (data: number[], target: number): number[] => {
  const result: number[] = [];

  let right = data.length - 1;

  while (right >= 0) {
    if (target === 0) return result;

    if (target < data[right]) {
      right--;
    }

    target = target - data[right];

    result.unshift(data[right]);
  }

  return [];
};

// Task 3
// Дано: Массив представляющий собой район, где каждый дом содержит в себе информацию о том, что находится на первом этаже дома.
// Найти: Оптимальный / наилучший вариант учитывая ближайшие соседние дома.

export const findHome = (data: Record<string, boolean>[], req: string[]): number => {
  let result = -1;

  for (let i = 0; i < data.length; i++) {
    let keys = new Set(req.filter((key) => data[i][key]));

    if (data[i - 1]) {
      req.filter((key) => data[i - 1][key]).forEach(keys.add, keys);
    }

    if (data[i + 1]) {
      req.filter((key) => data[i + 1][key]).forEach(keys.add, keys);
    }

    if (keys.size === req.length) return i;
  }

  return result;
};

// Task 4

// Дано: Матрица где row это характерный день, а cell это характерный час в этот день.
// Матрица содержит в себе boolean значения которые показывают была ли сборка проекта успешной или нет.
// Найти: День с наибольшим количеством провалов сборки.

export const findBadDay = (data: boolean[][]): number => {
  const percentages = data.map((row) =>
    row.reduce((acc, item) => {
      const currentPercent = !item ? Math.floor(100 / row.length) : 0;
      return acc + currentPercent;
    }, 0),
  );

  return percentages.indexOf(Math.max(...percentages));
};

// Task 5

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

// Task 6
// Дано: Массив десятичных чисел и 4 операции которые можно выполнять с этими числами.
// Математическая приоритетность не учитывается.
// Найти: максимально возможное число которое можно получить применив эти операции.

export const findMaxResult = (data: number[]) => {
  // O(4 ^ n), O(n)

  // let result = Number.NEGATIVE_INFINITY;

  // const operations = ['+', '-', '*', '/'] as const;

  // function dfs(current: number, nextIndex: number) {
  //   if (nextIndex === data.length) return current;

  //   const nextItem = data[nextIndex];

  //   let temp = 0;

  //   for (let operation of operations) {
  //     if (operation === '+') {
  //       temp = current + nextItem;
  //     }

  //     if (operation === '-') {
  //       temp = current - nextItem;
  //     }

  //     if (operation === '*') {
  //       temp = current * nextItem;
  //     }

  //     if (operation === '/' && nextItem !== 0) {
  //       temp = current / nextItem;
  //     }

  //     const tempResult = dfs(temp, nextIndex + 1);

  //     result = Math.max(result, tempResult);
  //   }

  //   return 0;
  // }

  // dfs(data[0], 1);

  // return result

  ////////////////////////////////

  // O(n), O(n)

  let maxPositive = data[0];
  let maxNegative = data[0];

  for (let i = 1; i < data.length; i++) {
    const values = [];

    values.push(maxPositive + data[i]);
    values.push(maxNegative + data[i]);

    values.push(maxNegative - data[i]);
    values.push(maxPositive - data[i]);

    values.push(maxNegative * data[i]);
    values.push(maxPositive * data[i]);

    if (data[i] !== 0) {
      values.push(maxNegative / data[i]);
      values.push(maxPositive / data[i]);
    }

    maxPositive = Math.max(...values);
    maxNegative = Math.min(...values);
  }

  return maxPositive;
};

// Task 7
// Дано: Массив чисел и некоторое число k;
// Найти: Количество под массивов сумма элементов которых равна числу k;

export const findSubArrays = (data: number[], k: number): number => {
  let result = 0;

  // O (n ^ 2)
  // O (1)

  // for (let i = 0; i < data.length; i++) {
  //   let sum = data[i];

  //   if (sum === k) result++;

  //   for (let j = i + 1; j < data.length; j++) {
  //     sum += data[j];

  //     if (sum === k) {
  //       result++;
  //     }
  //   }
  // }

  ///////////////

  // O(n log n) < ??? < O(n ^ 2)
  // O(1)

  // let windowSize = data.length;

  // let left = 0;
  // let right = windowSize - 1;

  // const findArraySum = () => data.slice(left, right + 1).reduce((acc, item) => acc + item, 0);

  // while (windowSize > 0) {
  //   const sum = findArraySum();

  //   if (sum === k) {
  //     result++;
  //   }

  //   if (right === data.length - 1) {
  //     left = 0;
  //     right = --windowSize - 1;
  //   } else {
  //     left++;
  //     right++;
  //   }
  // }

  // ///////////////////

  // O(n)
  // O(n)

  const dict = new Map([[0, 1]]);

  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum += data[i];

    const diff = sum - k;

    if (dict.has(diff)) {
      result += dict.get(diff) as number;
    }

    dict.set(sum, (dict.get(sum) || 0) + 1);
  }

  return result;
};

// Task 8
// Дано: Массив чисел представляющий собой массив статей где длина массива равна количеству статей.
// Элемент массива представляет собой число >=0 которое показывает сколько раз на эту статью ссылались.
// Найти: max H-index, то есть k статей значения которых больше k.

export const findHIndex = (data: number[]): number => {
  let hIndex = 1;

  // O(n log n)
  // O(1)

  // data.sort();

  // for (let i = data.length - 1; i >= 0; i--) {
  //   if (data[i] < ++hIndex) {
  //     return hIndex - 1;
  //   }
  // }

  // /////////////////////
  // O(n) because we use count sort instead of ordinary sort
  // O(n)

  const count = new Array(data.length + 1).fill(0);

  for (let item of data) {
    if (item >= data.length) {
      count[data.length]++;
    } else {
      count[item]++;
    }
  }

  let position = 0;

  for (let i = 0; i <= data.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      data[position] = i;
      position++;
    }
  }

  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i] < hIndex) {
      return hIndex - 1;
    }
    hIndex++;
  }

  return hIndex;
};

// Task 9
// Дано: 2d матрица с размерностью row * cell. В координтах 0 * 0 находится человек который может двигаться вниз и вправо на 1 клетку.
// Также в матрице есть выход находящийся в координатах row - 1 * cell - 1.
// Найти: количество уникальных путей которые может пройти человек до выхода

export const findExit = (row: number, cell: number): number => {
  // O(2 ^ n + m)
  // O(n)
  // if (row < 1 || cell < 1) return 0;
  // if (row === 1 && cell === 1) return 1;
  // return findExit(row - 1, cell) + findExit(row, cell - 1);

  // O (n * m)
  // O (n)
  const helper = (row: number, cell: number, arr: number[][]): number => {
    if (row < 1 || cell < 1) return 0;
    if (row === 1 && cell === 1) return 1;

    if (arr[row][cell] !== 0) {
      return arr[row][cell];
    }

    arr[row][cell] = helper(row - 1, cell, arr) + helper(row, cell - 1, arr);

    return arr[row][cell];
  };

  return helper(row, cell, new Array(row + 1).fill(new Array(cell + 1).fill(0)));
};
