import { useEffect, useState } from 'react';
import { getLocalData, setLocalData } from '../utils/storage';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getLocalData(key, initialValue));

  useEffect(() => {
    setLocalData(key, value);
  }, [key, value]);

  return [value, setValue];
};
