import { useEffect } from 'react';
import { findHIndex, findMaxResult, findSubArrays } from './tasks/abstract';
import { promiseAllSettled } from './tasks/technic/promises';

const first = new Promise<number>((resolve) => {
  setTimeout(() => resolve(2), 2000);
});

const second = new Promise<number>((resolve, reject) => {
  setTimeout(() => reject(1), 1000);
});

const third = new Promise<number>((resolve, reject) => {
  setTimeout(() => resolve(5), 5000);
});

const App = (): JSX.Element => {
  // console.log(findMaxResult([1.0, 2.0, 3.0]));

  // console.log(findSubArrays([4, 2, 2, 1, 2, -3, 5, -8], 5));

  // console.log(findHIndex([3, 0, 6, 1, 5]));

  useEffect(() => {
    const fetchData = async () => {
      const response = await promiseAllSettled([first, second, third]);

      console.log(response);
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default App;
