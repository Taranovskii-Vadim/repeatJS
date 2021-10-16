import { useCallback, useState } from "react";

type SetDefaultStateFunction<T> = () => T;

interface OutputData<T> {
  value: T;
  isValid: boolean;
  changeValue: (state: T) => void;
}

const useValidation = <T extends unknown>(
  defaultValue: SetDefaultStateFunction<T> | T,
  validate: (state: T) => boolean
): OutputData<T> => {
  const [state, setState] = useState(defaultValue);
  const [isValid, setIsValid] = useState(() => false);

  const changeValue = useCallback(
    (newState: T) => {
      setState(newState);
      setIsValid(validate(newState));
    },
    [validate]
  );

  return { value: state, isValid, changeValue };
};

export default useValidation;
