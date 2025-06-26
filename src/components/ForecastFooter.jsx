import { mockWeather } from "../mock/weatherData";

export default function ForecastFooter() {
  const { forecast } = mockWeather;

  return (
    <div className="mt-12 flex justify-between text-center text-sm text-gray-100 pb-3 mb-1">
      <div>
        <p className="font-semibold">Manhã</p>
        <p>{forecast.morning}°C</p>
      </div>
      <div>
        <p className="font-semibold">Tarde</p>
        <p>{forecast.afternoon}°C</p>
      </div>
      <div>
        <p className="font-semibold">Noite</p>
        <p>{forecast.night}°C</p>
      </div>
    </div>
  );
}
