import { useEffect, useState } from 'react';

type THEME = 'dark' | 'light';

export default function useLocalStorage(key: string) {
  const [item, setItem] = useState<THEME>(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      return item as THEME;
    }
    window.localStorage.setItem(key, 'dark');
    return 'dark';
  });

  useEffect(() => {
    window.localStorage.setItem(key, item);
  }, [item, key]);

  return {
    item,
    setItem,
  };
}
