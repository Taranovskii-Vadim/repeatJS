import React, { useRef } from "react";

import { useSize } from "./hooks";

export const App = (): JSX.Element => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const sizes = useSize(ref);

  return (
    <div>
      {JSON.stringify(sizes)}
      <textarea ref={ref}></textarea>
    </div>
  );
};
