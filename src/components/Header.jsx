export default function Header({data}) {
  const { city, country, datetime } = data;

  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-bold">{city}, {country}</h1>
        <p className="text-sm text-gray-200">{datetime}</p>
      </div>
    </div>
  );
}
