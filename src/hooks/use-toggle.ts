"use client";

import { useCallback, useState } from "react";

export const useToggle = (initialState: boolean) => {
  const [toggle, setToggle] = useState(initialState);
  const toggleHandler = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return [toggle, toggleHandler] as const;
};
