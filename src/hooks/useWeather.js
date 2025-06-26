import { useEffect, useState } from "react";
import { fetchWeatherDataByCoords } from "../services/weatherServices.js";

export function useWeather(coords) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadWeather() {
      if (!coords) return;

      setLoading(true);
      try {
        const data = await fetchWeatherDataByCoords(coords.latitude, coords.longitude);
        setWeather(data);

        if (data.city) {
          localStorage.setItem("cidadeAtual", data.city);
        }

        setError(null);
      } catch (err) {
        console.error("Erro ao carregar clima:", err);
        setError("Erro ao buscar clima.");
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, [coords]);

  return { weather, loading, error };
}
