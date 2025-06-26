import { useState, useEffect } from "react";

const STORAGE_KEY = "cidadeAtual";

export function usePersistedCity() {
  const [city, setCity] = useState(() => {
    // Executa apenas uma vez no load inicial
    return localStorage.getItem(STORAGE_KEY) || "";
  });

  useEffect(() => {
    if (city) {
      localStorage.setItem(STORAGE_KEY, city);
    }
  }, [city]);

  const clearCity = () => {
    localStorage.removeItem(STORAGE_KEY);
    setCity("");
  };

  return { city, setCity, clearCity };
}
