import React from "react";
import GradientButton from "./components/ui/Button";

export const App = (): JSX.Element => {
  return (
    <div>
      <GradientButton label="Hover me" onClick={() => console.log("hello")} />
    </div>
  );
};
