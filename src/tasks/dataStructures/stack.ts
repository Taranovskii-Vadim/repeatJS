// Task 1
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
