import { useEffect } from 'react';

import { myPromise } from './tasks/technic';

const App = (): JSX.Element => {
  useEffect(() => {
    const promise = new myPromise((resolve, reject) => {
      const random = Math.floor(Math.random() * 100);

      setTimeout(() => {
        if (random > 50) {
          resolve(random);
        } else {
          // reject(random.toString());
          resolve(random);
        }
      }, 2000);
    });

    promise
      .then((data) => {
        console.log(data);

        return data;
      })
      .catch((e) => console.error(e));
  }, []);

  return <div></div>;
};

export default App;
