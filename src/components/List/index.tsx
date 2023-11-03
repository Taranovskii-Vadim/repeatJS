import { useCallback, useEffect, useRef, useState, memo } from 'react';

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

const List = (): JSX.Element => {
  const ulRef = useRef<HTMLUListElement>(null);
  const [numbers, setNumbers] = useState(() => [1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const onScroll = useCallback(() => console.log('Keeeeep scroooling....'), []);

  const handleAdd = useCallback(() => setNumbers((prev) => [...prev, prev.length + 1]), []);

  const handleDelete = useCallback(() => {
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
      <Buttons onAdd={handleAdd} onDelete={handleDelete} />
    </div>
  );
};

export default List;
