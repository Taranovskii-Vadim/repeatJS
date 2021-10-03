import React, { useState } from "react";

import MemoCounter from "./components/MemoCounter";
import { sumOfThree } from "./pureJsTasks";

export const App = (): JSX.Element => {
  console.log(sumOfThree([1, 2, 3, 4, 5, 0], 5));
  return <MemoCounter />;
};
