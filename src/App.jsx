import { useState, useEffect } from "react";
// components
import CitySearch from "./components/CitySearch.jsx";
import Header from "./components/Header.jsx";
import WeatherMain from "./components/WeatherMain.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";
import ForecastFooter from "./components/ForecastFooter.jsx";
import LoadingSkeleton from "./components/LoadingSkeleton";
// end
// Hooks
import { useCurrentHour } from "./hooks/useCurrentHour.js";
import { usePersistedCity } from "./hooks/usePersistedCity.js";
import { useUserLocation } from "./hooks/useUserLocation.js";
import { useWeather } from "./hooks/useWeather.js";
import { useBackgroundImage } from "./hooks/useBackgroundImage.js";
import { forwardGeocode } from "./services/geocoderServices.js";
// end
import "./App.css"

  function App() {
    const hour = useCurrentHour();
    const { city, setCity } = usePersistedCity();
    const { coords: geoCoords, city: geoCity, loading: locating } = useUserLocation();

    const [coords, setCoords] = useState(null);

    // Atualiza as coordenadas com base na cidade salva ou localização automática
    useEffect(() => {
      async function resolveCoords() {
        if (city) {
          const result = await forwardGeocode(city);
          if (result) {
            if (
              !coords || // se coords ainda está vazio
              result.latitude !== coords.latitude ||
              result.longitude !== coords.longitude
            ) {
              setCoords(result);
            }
          }
        } else if (geoCoords) {
          if (!coords) {
            setCoords(geoCoords);
          }
          if (geoCity && geoCity !== city) {
            setCity(geoCity);
          }
        }
      }

      resolveCoords();
    }, [city, geoCoords, geoCity]);

    const { weather, loading: loadingWeather } = useWeather(coords);
    const bgImage = useBackgroundImage(weather?.city, weather?.condition, hour);

    const isLoading = locating || loadingWeather || !coords;

    async function handleCitySearch(cityName) {
      const result = await forwardGeocode(cityName);
      if (result) {
        setCity(cityName);
        setCoords(result);
      } else {
        alert("Cidade não encontrada.");
      }
  }
  if (isLoading || !weather) return <LoadingSkeleton />;
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/40 backdrop-brightness-90 p-10 overflow-hidden">
        <CitySearch onSearch={handleCitySearch} />
        <Header data={weather} />
        <WeatherMain data={weather} />
        <WeatherDetails data={weather} />
        <ForecastFooter data={weather} />
      </div>
    </div>
  );
}

export default App;