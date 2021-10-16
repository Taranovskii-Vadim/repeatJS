import React from "react";
import { useCopyToClipboard } from "./hooks";

export const App = (): JSX.Element => {
  const { copyToClipboard, success } = useCopyToClipboard();

  return (
    <div>
      <button onClick={() => copyToClipboard("that was copied")}>
        {success ? "Copied" : "Copy"}
      </button>
      <input type="text" />
    </div>
  );
};
