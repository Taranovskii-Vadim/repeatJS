import React from "react";

import * as pureJs from "./pureJsTasks";

export const App = (): JSX.Element => {
  console.log(pureJs.isPalindrom("А роза упала на лапу Азора"));

  return <div>This app for learn new js stuff</div>;
};
