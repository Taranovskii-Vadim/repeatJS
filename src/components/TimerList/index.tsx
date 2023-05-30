import { useCallback, useRef, useState } from 'react';

import Buttons from '../Buttons';

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
