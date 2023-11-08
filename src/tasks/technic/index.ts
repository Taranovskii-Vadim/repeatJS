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
  if (first instanceof Set && second instanceof Set) {
    if (first.size !== second.size) return false;

    const firstValues = [...first.values()];
    const secondValues = [...second.values()];

    for (let i = 0; i < firstValues.length; i++) {
      if (firstValues[i] !== secondValues[i]) return false;
    }
  }

  if (typeof first === 'object' && typeof second === 'object') {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);

    if (firstKeys.length !== secondKeys.length) return false;

    for (let i = 0; i < firstKeys.length; i++) {
      if (firstKeys[i] !== secondKeys[i]) return false;
    }

    for (let key of firstKeys) {
      if (typeof first[key] === 'object' && typeof second[key] === 'object') {
        const result = deepEqual(first[key], second[key]);

        if (!result) return false;
      } else if (first[key] !== second[key]) {
        return false;
      }
    }

    return true;
  }

  return Object.is(first, second);
};
