export default function WeatherDetails({data}) {
  const { humidity, pressure, visibility, wind } = data;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-gray-200 text-center">
      <p>Umidade: {humidity}%</p>
      <p>Pressão: {pressure} mb</p>
      <p>Visibilidade: {visibility}</p>
      <p>Vento: {wind}</p>
      <p>UV Index: --</p>
      <p>Ponto de orvalho: --</p>
    </div>
  );
}
