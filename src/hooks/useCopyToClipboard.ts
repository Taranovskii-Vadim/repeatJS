import { useState } from "react";
import copy from "copy-to-clipboard";

const useCopyToClipboard = () => {
  const [success, setSuccess] = useState(() => false);

  const copyToClipboard = (text: string) => {
    setSuccess(copy(text));
  };

  return { copyToClipboard, success };
};

export default useCopyToClipboard;
