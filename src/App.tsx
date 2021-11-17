import React from "react";
import { findNotDouble } from "./pureJsTasks";

export const App = (): JSX.Element => {
  console.log(findNotDouble([1, 2, 2, 3, 3]));
  return <div></div>;
};
