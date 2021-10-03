import { useEffect, useRef } from "react";

export default function useEventListener(
  type: keyof WindowEventMap,
  callback: (event: Event) => void,
  element: any = window
): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (event: Event) => callbackRef.current(event);

    element.addEventListener(type, handler);
    return () => {
      element.removeEventListener(type, handler);
    };
  }, [type, element]);
}
