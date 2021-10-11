import React from "react";

import { useValidation } from "./hooks";

export const App = (): JSX.Element => {
  const { value, setValue, isValid } = useValidation(
    () => "",
    (val) => val.length > 5
  );
  return (
    <div>
      <div>isValid {isValid.toString()}</div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
