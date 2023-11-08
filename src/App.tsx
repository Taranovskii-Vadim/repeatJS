import { findHotterDay } from './tasks/abstract';

const App = (): JSX.Element => {
  console.log(findHotterDay([13, 12, 15, 11, 9, 12, 16]));

  return <div></div>;
};

export default App;
