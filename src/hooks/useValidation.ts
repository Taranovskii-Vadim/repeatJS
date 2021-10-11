import { useCallback, useState } from "react";

interface Output<V> {
  value: V;
  isValid: boolean;
  setValue: (value: V) => void;
}

type InitialDataFunction<R> = () => R;

type InitialData<R> = R | InitialDataFunction<R>;

type Validate<R> = (val: R) => boolean;

const useValidation = <T extends any>(
  initial: InitialData<T>,
  validate: Validate<T>
): Output<T> => {
  const [state, setState] = useState<T>(initial);
  const [isValid, setIsValid] = useState(() => false);

  const setValue = useCallback(
    (defineState) => {
      const newState =
        typeof defineState === "function" ? defineState(state) : defineState;
      setState(newState);
      setIsValid(validate(newState));
    },
    [validate]
  );

  return { value: state, setValue, isValid };
};

export default useValidation;
