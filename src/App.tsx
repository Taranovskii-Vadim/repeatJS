import React, { useEffect, useState } from "react";
import { useUpdateEffect, useValidation } from "./hooks";

export const App = (): JSX.Element => {
  const [counter, setCounter] = useState(() => 0);

  useUpdateEffect(() => {
    alert("count is hello");
  }, [counter]);
  return (
    <div>
      counter {counter}
      <button onClick={() => setCounter((prev) => prev + 1)}>plus</button>
    </div>
  );
};
