import React from "react";
import { useDebounce } from "./hooks";

// import * as pureJs from "./pureJsTasks";

export const App = (): JSX.Element => {
  const onChange = (val: string) => {
    fetch(val);
  };

  const debouncedChange = useDebounce(onChange, 1000);

  return <input onChange={(e) => debouncedChange(e.target.value)} />;
};
