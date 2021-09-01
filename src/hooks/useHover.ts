import { MutableRefObject, useEffect, useState } from "react";

const useHover = (ref: MutableRefObject<any>): boolean => {
  const [isHovered, setIsHovered] = useState(() => false);

  const onEnter = () => setIsHovered(true);
  const onLeave = () => setIsHovered(false);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", onEnter);
    ref.current.addEventListener("mouseleave", onLeave);
    return () => {
      ref.current.removeEventListener("mouseenter", onEnter);
      ref.current.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return isHovered;
};

export default useHover;
