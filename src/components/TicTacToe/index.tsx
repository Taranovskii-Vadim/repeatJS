import { useRef, useState } from 'react';

const INIT = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

type Props = { value: string; onClick: () => void };

const Field = ({ value, onClick }: Props) => (
  <div
    style={{
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid black',
    }}
    onClick={onClick}
  >
    {value}
  </div>
);

const TicTacToe = () => {
  const nextValueRef = useRef('0');
  const [field, setField] = useState(INIT);

  const handleChangeField = (y: number, x: number) => {
    const candidate = field[y][x];

    if (!candidate) {
      const copy = [...field];

      copy[y][x] = nextValueRef.current;

      setField(copy);

      nextValueRef.current = nextValueRef.current === '1' ? '0' : '1';
    }
  };

  return (
    <div
      style={{
        gap: '10px',
        display: 'grid',
        gridAutoRows: 'minmax(100px, auto)',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      {field.map((row, y) => row.map((cell, x) => <Field value={cell} onClick={() => handleChangeField(y, x)} />))}
    </div>
  );
};

export default TicTacToe;
