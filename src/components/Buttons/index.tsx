import { memo } from 'react';

interface Props {
  onAdd: () => void;
  onDelete: () => void;
}

const Buttons = memo(
  ({ onAdd, onDelete }: Props): JSX.Element => (
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

export default Buttons;
