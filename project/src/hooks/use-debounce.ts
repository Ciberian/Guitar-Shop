import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 500;

export const useDebounce = <T>(value: T, delay = DEFAULT_DELAY): T => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};
