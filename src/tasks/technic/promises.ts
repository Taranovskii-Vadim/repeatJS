// Task 1
// Цель: Реализовать свой класс Promise

type Init<D> = (resolve: (value: D) => void) => void;

export class myPromise<D> {
  private data: Array<(value: D) => void> = [];

  constructor(init: Init<D>) {
    init(this.resolve.bind(this));
  }

  private resolve(value: D) {
    this.data.forEach((callback) => {
      callback(value);
    });
  }

  then(callback: (value: D) => D) {
    return new myPromise((resolve) => {
      this.data.push((value) => {
        const result = callback(value);

        resolve(result);
      });
    });
  }
}

// Task 2
// Цель: Реализовать свой Promise.race

export const promiseRace = <D>(data: Promise<D>[]): Promise<D> => {
  return new Promise((resolve, reject) => {
    data.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

// Task 3
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

// Task 4
// Цель: Реализовать свой promiseAllSettled

type ResolvedPromise<D> = { status: 'fulfilled'; data: D };
type RejectedPromise = { status: 'rejected'; reason: string };

type Response<D> = ResolvedPromise<D> | RejectedPromise;

export const promiseAllSettled = <D>(data: Promise<D>[]): Promise<Response<D>[]> => {
  const result: Response<D>[] = [];

  let count = 0;

  return new Promise((resolve) => {
    data.forEach((promise, index) => {
      promise
        .then((response) => {
          result[index] = { status: 'fulfilled', data: response };
        })
        .catch((e) => {
          result[index] = { status: 'rejected', reason: e as string };
        })
        .finally(() => {
          if (++count === data.length) {
            resolve(result);
          }
        });
    });
  });
};

// Task 5
// Цель: Реализовать свой promiseAny
