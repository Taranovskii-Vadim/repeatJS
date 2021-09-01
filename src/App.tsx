import React from "react";
import { useRequest } from "./hooks";

export const App = (): JSX.Element => {
  const { isLoading, isError, data } = useRequest(
    fetch("https://jsonplaceholder.typicode.com/todos")
  );
  console.log(isLoading, isError, data);
  return <div></div>;
};
