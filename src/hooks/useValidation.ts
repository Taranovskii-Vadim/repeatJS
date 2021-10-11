import { useCallback, useState } from "react";

type DefaultValue = () => string;

const useValidation = (
  defaultValue: string | DefaultValue,
  validate: (val: string) => boolean
) => {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(() => false);

  const onChange = useCallback(
    (nextState) => {
      const newValue =
        typeof nextState === "function" ? nextState(value) : nextState;
      setValue(newValue);
      setIsValid(validate(newValue));
    },
    [validate]
  );

  return { value, onChange, isValid };
};

export default useValidation;
