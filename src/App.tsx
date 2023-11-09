import { deepEqual } from './tasks/technic';

const App = (): JSX.Element => {
  console.log(deepEqual({}, {}));
  return <div></div>;
};

export default App;
