import React, { useEffect, useRef, useState } from "react";
import { useClickOutside, useUpdateEffect, useValidation } from "./hooks";

export const App = (): JSX.Element => {
  const [open, setOpen] = useState(() => false);

  const modalRef = useRef(null);

  useClickOutside(modalRef, () => {
    if (open) {
      setOpen(false);
    }
  });

  return (
    <div>
      <button onClick={() => setOpen(true)}>open</button>
      {open ? <div ref={modalRef}>modal window</div> : null}
    </div>
  );
};
