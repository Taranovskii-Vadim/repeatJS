// Task 1
// Цель: Реализовать свой promiseAll
export const promiseAll = async <T>(data: Promise<T>[]): Promise<T[]> => {
  const results: T[] = [];

  //   start first wait till it ends then start second etc...

  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       for await (let item of data) {
  //         results.push(item);
  //       }

  //       resolve(results);
  //     } catch (e) {
  //       reject(e);
  //     }
  //   });

  // start first, start second, etc

  let resolvedCounter = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < data.length; i++) {
      data[i]
        .then((response) => {
          results[i] = response;

          if (++resolvedCounter === data.length) {
            resolve(results);
          }
        })
        .catch(reject);
    }
  });
};

// Task 2
// Цель: Реализовать свой deepEqual

export const deepEqual = <T>(first: T, second: T): boolean => {
  if (typeof first !== typeof second) return false;

  if (typeof first !== 'object' && typeof second !== 'object') {
    return Object.is(first, second);
  }

  if ((Array.isArray(first) && !Array.isArray(second)) || (!Array.isArray(first) && Array.isArray(second)))
    return false;

  if (Array.isArray(first) && Array.isArray(second)) {
    if (first.length !== second.length) return false;

    for (let i = 0; i < first.length; i++) {
      if (!deepEqual(first[i], second[i])) return false;
    }

    return true;
  }

  if (first instanceof Date && second instanceof Date) {
    return first.toString() === second.toString();
  }

  if (first instanceof Set && second instanceof Set) {
    if (first.size !== second.size) return false;

    const firstValues = [...first.values()];
    const secondValues = [...second.values()];

    for (let i = 0; i < firstValues.length; i++) {
      if (firstValues[i] !== secondValues[i]) return false;
    }
  }

  if (typeof first === 'object' && typeof second === 'object') {
    const firstEntries = Object.entries(first);
    const secondEntries = Object.entries(second);

    if (firstEntries.length !== secondEntries.length) return false;

    if (!deepEqual(firstEntries, secondEntries)) return false;
  }

  return true;
};
