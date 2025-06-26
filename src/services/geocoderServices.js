// src/services/geocoderService.js

export async function forwardGeocode(cityName) {
  const baseUrl = "https://nominatim.openstreetmap.org/search";
  const query = `?format=json&q=${encodeURIComponent(cityName)}`;

  try {
    const response = await fetch(`${baseUrl}${query}`, {
      headers: {
        "User-Agent": "MeuAppTauriMeteorologico/1.0 (contato@seudominio.com)"
      }
    });

    const data = await response.json();

    if (data.length === 0) return null;

    const { lat, lon } = data[0];
    return {
      latitude: parseFloat(lat),
      longitude: parseFloat(lon)
    };
  } catch (err) {
    console.error("Erro no forward geocode:", err);
    return null;
  }
}
