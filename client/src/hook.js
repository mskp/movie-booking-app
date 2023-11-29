import { useState } from "react";

// Custom hook for using local storage
export default function useLocalStorage(key, initialValue) {
  // Retrieve stored data from local storage
  const storedValue = localStorage.getItem(key);
  
  // Initialize state with the stored value or the provided initial value
  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

  // Function to update the local storage and state with a new value
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}