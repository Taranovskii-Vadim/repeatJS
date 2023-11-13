import { useEffect } from 'react';

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
  return <div></div>;
};

export default App;
