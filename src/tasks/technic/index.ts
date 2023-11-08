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
