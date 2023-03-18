import { memo, useCallback, useEffect, useState } from "react";

const Buttons = memo(
  ({ onPlus, onMinus }: { [key: string]: () => void }): JSX.Element => (
    <>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </>
  )
);

const Counter = (): JSX.Element => {
  const [count, setCount] = useState(() => 0);

  const [random, setRandom] = useState(() => 0);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 10));
  }, [count]);

  const onMinus = useCallback(() => setCount((prev) => prev - 1), []);

  const onPlus = useCallback(
    () => setCount((prev) => prev + 1 + random),
    [random]
  );

  return (
    <div>
      <h2>{count}</h2>
      <Buttons onMinus={onMinus} onPlus={onPlus} />
    </div>
  );
};

export default Counter;
