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
// Дано: Массив чисел обозначающих температуру в характерный день.
// Найти: Для каждого элемента массива, через какое минимальное количество дней будет теплее

export const findHotterDay = (data: number[]): number[] => {
  const result: number[] = [];

  // O(n ^ 2)
  // O(1)

  // for (let i = 0; i < data.length; i++) {
  //   result[i] = 0;

  //   for (let j = i + 1; j < data.length; j++) {
  //     if (data[j] > data[i]) {
  //       result[i] = j - i;
  //       break;
  //     }
  //   }
  // }

  // O(n)
  // O(n)

  const stack: Array<{ value: number; index: number }> = [];

  for (let i = data.length - 1; i >= 0; i--) {
    result[i] = 0;

    for (let j = stack.length - 1; j >= 0; j--) {
      if (data[i] < stack[j].value) {
        result[i] = stack[j].index - i;

        break;
      } else {
        stack.pop();
      }
    }

    stack.push({ value: data[i], index: i });
  }

  return result;
};

// Task 3
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

// Task 4
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

// Task 5
