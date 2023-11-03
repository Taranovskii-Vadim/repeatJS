import { useCallback, useRef, useState, memo } from 'react';

const Buttons = memo(
  ({ onAdd, onDelete }: { onAdd: () => void; onDelete: () => void }): JSX.Element => (
    <>
      <button style={{ width: '100%' }} onClick={onAdd}>
        Добавить
      </button>
      <button style={{ width: '100%' }} onClick={onDelete}>
        Удалить
      </button>
    </>
  ),
);

const TimerList = (): JSX.Element => {
  const timer = useRef<number>();
  const lastLi = useRef<HTMLLIElement>(null);
  const [numbers, setNumbers] = useState(() => [1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleAdd = () => {
    setNumbers((prev) => [...prev, prev.length + 1]);

    if (lastLi.current) {
      lastLi.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStart = useCallback(() => {
    timer.current = window.setInterval(handleAdd, 1000);
  }, []);

  const handleStop = useCallback(() => {
    window.clearInterval(timer.current);
  }, []);

  return (
    <div style={{ width: 430, margin: 'auto' }}>
      <ul style={{ maxHeight: 100, overflowY: 'scroll' }}>
        {numbers.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <li ref={lastLi} />
      </ul>
      <Buttons onAdd={handleStart} onDelete={handleStop} />
    </div>
  );
};

export default TimerList;
