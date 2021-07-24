import React from "react";

import * as pureJs from "./pureJsTasks";

export const App = (): JSX.Element => {
  console.log(pureJs.isReplacementString("", ""));
  return <div>This app for learn new js stuff</div>;
};
