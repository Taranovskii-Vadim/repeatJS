import React from "react";

import * as pureJs from "./pureJsTasks";

export const App = (): JSX.Element => {
  console.log(pureJs.getSimpleNumbers(110));

  return <div>This app for learn new js stuff</div>;
};
