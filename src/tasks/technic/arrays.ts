// Task 1
// Цель: Реализовать свой метод flat (рекурсивный)

export const myFlatten = <D>(data: D[]): D[] => {
  let result: D[] = [];

  for (let item of data) {
    if (Array.isArray(item)) {
      result = [...result, ...myFlatten(item)];
    } else {
      result = [...result, item];
    }
  }

  return result;
};

// Task 2
// Цель: Реализовать свой метод map

type Callback<D, R = D> = (item: D, index: number, arr: D[]) => R;

export const myMap = <D>(data: D[], callback: Callback<D>): D[] => {
  const result: D[] = [];

  for (let i = 0; i < data.length; i++) {
    result.push(callback(data[i], i, data));
  }

  return result;
};

// Task 3
// Цель: Реализовать свой метод filter

export const myFilter = <D>(data: D[], callback: Callback<D, boolean>): D[] => {
  const result: D[] = [];

  for (let i = 0; i < data.length; i++) {
    if (callback(data[i], i, data)) {
      result.push(data[i]);
    }
  }

  return result;
};

// Task 4
// Цель: Реализовать свой метод flat (c обработкой уровня вложенности)

export const myFlat = <D>(data: D[], level: number = 1): D[] => {
  let result: D[] = [];

  for (let item of data) {
    if (Array.isArray(item) && level > 0) {
      result = [...result, ...myFlat(item, level - 1)];
    } else {
      result = [...result, item];
    }
  }

  return result;
};

// Task 5
// Цель: реализовать свой метод splice

export const mySplice = <D>(data: D[], start: number, deleteCount: number = data.length) => {
  for (let i = 0; i < data.length; i++) {
    if (i >= start && deleteCount-- > 0) {
      delete data[i];
    }
  }

  return data.filter(Boolean);
};

// Task 6
// Цель: Реализовать функциую возведения чисел в квадрат с сохранением сортировки

export const powWithSaveSort = (data: number[]): number[] => {
  for (let i = data.length - 1; i >= 0; i--) {
    const powedRight = Math.pow(data[i], 2);
    const powedLeft = Math.pow(data[0], 2);

    if (powedRight > powedLeft) {
      data[i] = powedRight;
    } else {
      [data[0], data[i]] = [data[i], powedLeft];
    }
  }

  return data;
};
