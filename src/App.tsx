import { findMaxResult } from './tasks/abstract';

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
  console.log(findMaxResult([1.0, 2.0, 3.0]));

  return <div></div>;
};

export default App;
