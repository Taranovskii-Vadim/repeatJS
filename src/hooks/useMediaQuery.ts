import { useEffect, useState } from "react";
import { useEventListener } from ".";

const useMediaQuery = (query: string): boolean => {
  const [isMatch, setIsMatch] = useState(() => false);
  const [list, setList] = useState<MediaQueryList>();

  useEffect(() => {
    const queryList = window.matchMedia(query);
    setList(queryList);
    setIsMatch(queryList.matches);
  }, [query]);

  useEventListener("change", (e) => setIsMatch(e.matches), list);

  return isMatch;
};

export default useMediaQuery;
