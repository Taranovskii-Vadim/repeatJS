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
