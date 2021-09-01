import { useEffect, useState } from "react";

interface RequestStateData {
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const useRequest = (request: Promise<Response>) => {
  const [state, setState] = useState<RequestStateData>(() => ({
    data: undefined,
    isLoading: false,
    isError: false,
  }));

  const onHandleChangeState = (obj: Partial<RequestStateData>) =>
    setState((prev) => ({ ...prev, ...obj }));

  useEffect(() => {
    onHandleChangeState({ isLoading: true });
    request
      .then((item) => item.json())
      .then((data) => onHandleChangeState({ data }))
      .catch((e) => onHandleChangeState({ isError: true }))
      .finally(() => onHandleChangeState({ isLoading: false }));
  }, []);

  return state;
};

export default useRequest;
