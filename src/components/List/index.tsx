import { useCallback, useEffect, useRef, useState } from 'react';

import Buttons from './components/Buttons';

const List = (): JSX.Element => {
  const [numbers, setNumbers] = useState(() => [1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const ulRef = useRef<HTMLUListElement>(null);

  const onHandleAdd = useCallback(() => setNumbers((prev) => [...prev, prev.length + 1]), []);

  const onScroll = useCallback(() => console.log('Keeeeep scroooling....'), []);

  const onDeleteScroll = useCallback(() => {
    if (ulRef.current) {
      ulRef.current.removeEventListener('scroll', onScroll);
    }
  }, []);

  useEffect(() => {
    if (ulRef.current) {
      ulRef.current.addEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <div style={{ width: 430, margin: 'auto' }}>
      <ul ref={ulRef} style={{ maxHeight: 100, overflowY: 'scroll' }}>
        {numbers.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Buttons onHandleAdd={onHandleAdd} onDeleteScroll={onDeleteScroll} />
    </div>
  );
};

export default List;
