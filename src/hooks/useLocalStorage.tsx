import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const storedValue = localStorage.getItem(key);
  const initialStoredValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(initialStoredValue);

  const updateValue = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, updateValue];
}

export default useLocalStorage;
