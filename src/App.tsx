import React from "react";
import { maxDistToClosest } from "./pureJsTasks";

export const App = (): JSX.Element => {
  console.log(maxDistToClosest([0, 0, 1, 0, 1, 0, 0, 0, 0, 1]));
  return <div></div>;
};
