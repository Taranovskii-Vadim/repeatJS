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
      if (data[j] < data[minIndex]) {
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

export const insertionSort = (): number[] => {
  for (let i = 1; i < data.length; i++) {
    let j = i;
    let temp = data[i];
    while (j > 0 && data[j - 1] > temp) {
      data[j] = data[j - 1];
      j--;
    }
    data[j] = temp;
  }

  return data;
};

// binary search O(log n)

export const binarySearch = (arr: number[], target: number): number | null => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const candidate = arr[middle];

    if (candidate === target) {
      return middle;
    }

    if (candidate > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return null;
};
