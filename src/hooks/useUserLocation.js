import { useEffect, useState } from "react";
import { getUserCoordinates, reverseGeocode } from "../services/locationServices.js";

export function useUserLocation() {
  const [coords, setCoords] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLocation() {
      try {
        setLoading(true);

        const current = await getUserCoordinates();
        const loc = await reverseGeocode(current.latitude, current.longitude);

        setCoords(current);
        setCity(loc.cidade || "Local desconhecido");
        setError(null);
      } catch (err) {
        console.error("Erro ao obter geolocalização:", err);
        setError("Não foi possível obter sua localização.");
      } finally {
        setLoading(false);
      }
    }

    fetchLocation();
  }, []);

  return { coords, city, loading, error };
}
