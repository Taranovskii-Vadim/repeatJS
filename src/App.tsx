import { findBadDay } from './tasks/abstract';

const App = (): JSX.Element => {
  console.log(
    findBadDay([
      [true, true, true, false, false],
      [true, true, true, true, false],
      [true, true, true, true, true, false, false, false],
      [true, false, false, false, false, false, false, false, false, false, false, false, false],
      [true, true, true, false, false, true, true, true, true, true],
    ]),
  );

  return <div></div>;
};

export default App;
