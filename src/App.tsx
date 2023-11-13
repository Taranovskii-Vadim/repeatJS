import { useEffect } from 'react';
import { mySplice } from './tasks/technic/arrays';

const first = new Promise((resolve) => {
  setTimeout(() => resolve(2), 2000);
});

const second = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
});

const third = new Promise((resolve) => {
  setTimeout(() => resolve(5), 5000);
});

const App = (): JSX.Element => {
  console.log(mySplice([1, 2, 3, 4, 5, 6], 2, 2));
  return <div></div>;
};

export default App;
