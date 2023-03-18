import { memo } from "react";

interface Props {
  onHandleAdd: () => void;
  onDeleteScroll: () => void;
}

const Buttons = memo(
  ({ onHandleAdd, onDeleteScroll }: Props): JSX.Element => (
    <>
      <button style={{ width: "100%" }} onClick={onHandleAdd}>
        Добавить еще
      </button>
      <button style={{ width: "100%" }} onClick={onDeleteScroll}>
        Удалить
      </button>
    </>
  )
);

export default Buttons;
