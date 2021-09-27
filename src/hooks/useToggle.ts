import { useState } from "react";

const useToggle = (defaultValue: boolean) => {
  const [state, setState] = useState(() => defaultValue);

  const toggle = (value?: boolean) => {
    setState(value || !state);
  };

  return { state, toggle };
};

export default useToggle;
