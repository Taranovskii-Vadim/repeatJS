import { findHIndex, findMaxResult, findSubArrays } from './tasks/abstract';

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
  // console.log(findMaxResult([1.0, 2.0, 3.0]));

  // console.log(findSubArrays([4, 2, 2, 1, 2, -3, 5, -8], 5));

  console.log(findHIndex([3, 0, 6, 1, 5]));

  return <div></div>;
};

export default App;
