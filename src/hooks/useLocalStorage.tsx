import { useState, SetStateAction } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const storedValue = localStorage.getItem(key);
  const initialStoredValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(initialStoredValue);

  const updateValue = (newValue: SetStateAction<T>) => {
    const updatedValue = typeof newValue === 'function' ? (newValue as Function)(value) : newValue;
    localStorage.setItem(key, JSON.stringify(updatedValue));
    setValue(updatedValue);
  };

  return [value, updateValue] as const;
}

export default useLocalStorage;
