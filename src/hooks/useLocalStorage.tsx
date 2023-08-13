import { useState, SetStateAction, Dispatch } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const storedValue = localStorage.getItem(key);
  const initialStoredValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(initialStoredValue);

  const updateValue = (newValue: SetStateAction<T>) => {
    const updatedValue = typeof newValue === 'function' ? (newValue as Function)(value) : newValue;
    localStorage.setItem(key, JSON.stringify(updatedValue));
    setValue(updatedValue);
  };

  return [value, updateValue];
}

export default useLocalStorage;
