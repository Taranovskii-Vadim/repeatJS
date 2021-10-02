import React from "react";

import MemoCounter from "./components/MemoCounter";
import { findSumOfTwo } from "./pureJsTasks";

export const App = (): JSX.Element => {
  console.log(findSumOfTwo([1, 2, 3], 6));
  return <MemoCounter />;
};
