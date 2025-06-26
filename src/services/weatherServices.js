// src/services/weatherService.js
const API_KEY = "b4cce98585e9f7c213b150a8138bc10a"; // use sua chave real

export async function fetchWeatherDataByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      city: data.name,
      country: data.sys.country,
      datetime: new Date().toLocaleString("pt-BR"),
      temperature: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      condition: data.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      visibility: `${data.visibility / 1000} km`,
      wind: `${data.wind.speed} km/h`,
      forecast: {
        morning: Math.round(data.main.temp_min),
        afternoon: Math.round(data.main.temp),
        night: Math.round(data.main.temp_max)
      }
    };
  } catch (err) {
    console.error("Erro ao buscar clima por coordenadas:", err);
    return null;
  }
}
