export default function WeatherMain({data}) {
  const { temperature, feels_like, condition, icon } = data;

  return (
    <div className="my-12 text-center">
      <img src={icon} alt={condition} className="mx-auto h-16 mb-4" />
      <h2 className="text-8xl font-extrabold">{temperature}°C</h2>
      <p className="mt-2 text-lg text-gray-300">{condition} — sensação de {feels_like}°C</p>
    </div>
  );
}
