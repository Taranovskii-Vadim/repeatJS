import React from "react";

import * as pureJs from "./pureJsTasks";

export const App = (): JSX.Element => {
  console.log(pureJs.myChunk([1, 2, 3, 4, 5, 6, 7, 8, 8, 9], 3));
  return <div>This app for learn new js stuff</div>;
};
