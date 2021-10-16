import { useCallback, useState } from "react";
import Cookies from "js-cookie";

const useCookie = (name: string, defaultValue: string) => {
  const [cookie, setCookie] = useState<string | null>(() => {
    const value = Cookies.get(name);
    if (value) return value;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  const update = useCallback(
    (newValue: string) => {
      Cookies.set(name, newValue);
      setCookie(newValue);
    },
    [name]
  );

  const remove = useCallback(() => {
    Cookies.remove(name);
    setCookie(null);
  }, [name]);

  return { cookie, update, remove };
};

export default useCookie;
