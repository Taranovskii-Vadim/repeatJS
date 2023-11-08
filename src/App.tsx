import { deepEqual } from './tasks/technic';

const App = (): JSX.Element => {
  console.log(
    deepEqual(
      { name: 'vadim', age: 18, location: { street: 'lenina' } },
      { name: 'vadim', age: 18, location: { street: 'lenina' } },
    ),
  );
  return <div></div>;
};

export default App;
