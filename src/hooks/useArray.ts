import { useState } from "react";

const useArray = (defaultValue: any[]) => {
  const [state, setState] = useState(() => defaultValue);

  const push = (val: any) => setState((prev) => [...prev, val]);

  const filter = (callback: (item: any, index: number, arr: any[]) => void) =>
    setState((prev) => prev.filter(callback));

  const remove = (index: number) => {
    setState((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, prev.length - 1),
    ]);
  };

  return { data: state, push, remove, filter };
};

export default useArray;
