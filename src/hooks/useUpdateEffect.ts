import { DependencyList, EffectCallback, useEffect, useRef } from "react";

const useUpdateEffect = (
  callback: EffectCallback,
  dependecies: DependencyList
): void => {
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
