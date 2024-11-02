import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    let localCart = localStorage.getItem("");
    if (localCart != null) {
      return JSON.parse(localCart);
    } else {
      return initialValue;
    }

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  });
}
