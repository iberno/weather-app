export async function getUserCoordinates() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocalização não suportada.");
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          resolve({ latitude, longitude });
        },
        (err) => reject("Não foi possível obter localização: " + err.message)
      );
    }
  });
}

export async function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "MeuAppMeteorologico/1.0 (contato@seudominio.com)"
      }
    });

    const data = await response.json();
    
    const cidade = data.address.city || data.address.town || data.address.village || "Desconhecida";
    const estado = data.address.state || "Estado não identificado";
    const pais = data.address.country || "País não identificado";

    return {
      cidade,
      estado,
      pais
    };
  } catch (err) {
    console.error("Erro ao buscar dados no Nominatim:", err);
    return {
      cidade: "Desconhecida",
      estado: "",
      pais: ""
    };
  }
}
