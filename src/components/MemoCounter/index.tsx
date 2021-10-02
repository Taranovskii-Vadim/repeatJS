import React, { useMemo, useState } from "react";

const IsFive = React.memo(
  ({ value }: { value: number }): JSX.Element => {
    // TODO can use useMemo hook
    const getResult = () => {
      let i = 0;
      while (i < 6_000_000_00) i++;

      if (value === 5) {
        return "this is five!!!!";
      }
      return "this is not five(((((";
    };

    return <div>{getResult()}</div>;
  },
  (prev, next) => {
    return prev.value !== 5 && next.value !== 5;
  }
);

const Count = React.memo(
  ({ id, value }: { [key: string]: number }): JSX.Element => {
    console.log(`Count${id}`);
    return <div>{value}</div>;
  }
);

const MemoCounter = () => {
  const [count1, setCount1] = useState(() => 0);
  const [count2, setCount2] = useState(() => 0);

  return (
    <div>
      <div>
        <button onClick={() => setCount1((prev) => prev + 1)}>+</button>
        <Count id={1} value={count1} />
      </div>
      <div>
        <button onClick={() => setCount2((prev) => prev + 1)}>+</button>
        <Count id={2} value={count2} />
        <IsFive value={count2} />
      </div>
    </div>
  );
};

export default MemoCounter;
