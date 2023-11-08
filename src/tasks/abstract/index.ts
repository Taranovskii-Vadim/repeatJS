// Task 1
// Дано: Массив батареек ([-1, 1, -1, 1, ....]), где -1 батарея разряжена, 1 батарея заряжена.
// Найти: Необходимо найти минимальное количество попыток за которое человек может выбрать 2 заряженные батареи.
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
