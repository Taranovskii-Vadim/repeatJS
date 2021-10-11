import React, { useEffect, useState } from "react";

const useSize = (ref: React.RefObject<any>) => {
  const [sizes, setSizes] = useState<DOMRectReadOnly>();

  useEffect(() => {
    if (ref.current === null) return;

    const observer = new ResizeObserver(([entry]) =>
      setSizes(entry.contentRect)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return sizes;
};

export default useSize;
