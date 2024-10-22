import { useState, useEffect } from 'react';

type SetValue<T> = (value: T | ((val: T) => T)) => void;

const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      window.localStorage.setItem(key, JSON.stringify(value));
      return value;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem(key);
      if (storedValue) {
        setStoredValue(JSON.parse(storedValue));
      }
    }
  }, [key]);

  return [storedValue, setValue];
};

export default useLocalStorage;
