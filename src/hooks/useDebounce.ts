import { useCallback, useRef } from 'react';

type Callback<D> = (value: D) => void;

const useDebounce = <D>(callback: Callback<D>, delay: number): Callback<D> => {
  const timer = useRef<number>();

  const result = useCallback(
    (value: D) => {
      if (timer.current) {
        window.clearTimeout(timer.current);
      }

      window.setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay],
  );

  return result;
};

export default useDebounce;
