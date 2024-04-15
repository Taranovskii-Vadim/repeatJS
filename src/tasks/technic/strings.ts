// Task 1
// Цель: Реализовать функцию сокращения строки

export const reduceString = (value: string): string => {
  let result = '';

  let left = 0;
  let right = 1;

  while (right <= value.length) {
    if (value[left] !== value[right]) {
      const gap = right - left;

      result += value[left] + (gap === 1 ? '' : gap);
      left = right;
    }

    right++;
  }

  return result;
};
