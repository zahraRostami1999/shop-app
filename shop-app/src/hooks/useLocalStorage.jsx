
import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    // Attempt to retrieve from localStorage by key
    const localValue = localStorage.getItem(key);
    if (localValue !== null) {
      // Parse the localValue if it exists
      return JSON.parse(localValue);
    } else {
      // If no stored value, use the initial value
      return initialValue;
    }
  });

  // Update localStorage whenever the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}