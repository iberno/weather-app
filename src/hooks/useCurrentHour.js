// src/hooks/useCurrentHour.js
import { useState, useEffect } from "react";

export function useCurrentHour() {
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      const newHour = new Date().getHours();
      setHour((prevHour) => (prevHour !== newHour ? newHour : prevHour));
    }, 60_000); // verifica a cada minuto

    return () => clearInterval(interval);
  }, []);

  return hour;
}
