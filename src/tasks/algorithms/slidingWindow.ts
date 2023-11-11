// Task 1
// Дано: массив цен акции в характерный день.
// Найти: максимальную выгоду которую можно получить с торгов.

// O(n)
// O(1)

export const findMaxProfit = (data: number[]): number => {
  let profit = 0;

  // let min = data[0];

  // for (let item of data) {
  //   min = Math.min(min, item);
  //   profit = Math.max(profit, item - min);
  // }
  // return profit;

  //

  let left = 0;
  let right = 1;

  while (right < data.length) {
    if (data[left] > data[right]) {
      left = right;
    } else {
      profit = Math.max(profit, data[right] - data[left]);
    }

    right++;
  }

  return profit;
};
