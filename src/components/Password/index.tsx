import { useEffect, useState } from 'react';

import './style.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const result = '4332';

const Password = () => {
  const [current, setCurrent] = useState<number[]>([]);

  useEffect(() => {
    if (current.length === result.length) {
      if (current.join('') === result) {
        console.log('correct');
      } else {
        setCurrent([]);
      }
    }
  }, [current.length]);

  return (
    <div className="container">
      <div className="box">{current}</div>
      {numbers.map((item) => (
        <button key={item} className={item === 0 ? 'zero' : ''} onClick={() => setCurrent((prev) => [...prev, item])}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Password;
