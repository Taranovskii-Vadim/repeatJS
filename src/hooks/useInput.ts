import { useState } from "react";

const useInput = (initialValue?: any) => {
  const [val, setInp] = useState(initialValue);

  const onChange = (val?: any) => {
    setInp(val);
    console.log(val);
  };
  return { val, onChange };
};

export default useInput;
