import { useEffect, useState } from "react";

interface WindowSizes {
  width: number;
  height: number;
}

const useWindowSizes = (): WindowSizes => {
  const [sizes, setSizes] = useState<WindowSizes>(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  const onHandleChange = (): void => {
    setSizes({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", onHandleChange);
    return () => {
      window.removeEventListener("resize", onHandleChange);
    };
  }, []);

  return sizes;
};

export default useWindowSizes;
