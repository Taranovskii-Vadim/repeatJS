// Task 1
// Цель: Реализовать функцию которая рекурсивно высчитывает сумму пока есть параметры

export const recursiveSum = (...init: number[]) => {
  const getCurrentSum = (data: number[]) => data.reduce((acc, item) => acc + item, 0);

  let result = getCurrentSum(init);

  const next = (...rest: number[]) => {
    if (rest.length) {
      result += getCurrentSum(rest);

      return next;
    }

    return result;
  };

  return next;
};
