const data = [2, 7, 1];

const swap = (a: number, b: number): void => {
  let temp = data[a];
  data[a] = data[b];
  data[b] = temp;
};

// bubble sort O(n^2) в худшем случае, O(n) в лучшем
export const bubbleSort = (): number[] => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j] > data[j + 1]) {
        swap(j, j + 1);
      }
    }
  }

  return data;
};

// selectionSort O(n^2)

export const selectionSort = (): number[] => {
  for (let i = 0; i < data.length; i++) {
    let minIndex = i;
    for (let j = i; j < data.length; j++) {
      if (data[minIndex] > data[j]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      swap(i, minIndex);
    }
  }

  return data;
};

// insertionSort O(n^2) в худшем случае, O(n) в лучшем

// export const insertionSort = (): number[] => {
//   return data;
// };
