import { deepEqual } from './tasks/technic';

const App = (): JSX.Element => {
  console.log(deepEqual({ a: undefined, b: 2 }, { b: 2, c: 3 }));
  return <div></div>;
};

export default App;
