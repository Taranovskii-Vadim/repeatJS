import CountryCapitalGame from './components/CountryCapitalGame';

const App = (): JSX.Element => (
  <CountryCapitalGame
    data={{
      germany: 'berlin',
      russia: 'moscow',
      italy: 'rome',
      usa: 'washington',
      portugal: 'lisbon',
      china: 'bejin',
      japan: 'tokyo',
      vietnam: 'hanoi',
    }}
  />
);

export default App;
