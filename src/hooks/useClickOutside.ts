import { MutableRefObject } from "react";
import { useEventListener } from ".";

const useClickOutside = (
  ref: MutableRefObject<any>,
  callback: (e: any) => void
) => {
  useEventListener("click", (e) => {
    if (ref.current == null || ref.current.contains(e.target)) return;
    callback(e);
  });
};

export default useClickOutside;
