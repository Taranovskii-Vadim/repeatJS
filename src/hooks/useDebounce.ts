import { useCallback, useRef } from "react";

const useDebounce = (callback: (val: string) => void, delay: number) => {
  const timer = useRef<number>();

  const debounced = useCallback<(val: string) => void>(
    (val) => {
      if (timer.current) {
        window.clearTimeout(timer.current);
      }
      timer.current = window.setTimeout(() => callback(val), delay);
    },
    [callback, delay]
  );

  return debounced;
};

export default useDebounce;
