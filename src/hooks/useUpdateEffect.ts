import { useEffect, useRef } from "react";

const useUpdateEffect = (callback: () => void, dependecies: any[]) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    return callback();
  }, dependecies);
};

export default useUpdateEffect;
