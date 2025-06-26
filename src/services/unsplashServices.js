// src/services/unsplashService.js
const ACCESS_KEY = "lg-OOpXx-vlkEhv01Opmi7QMxFQfM5-VxrpZj3bodag";

export async function fetchBackgroundImage(query) {
  const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${ACCESS_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.urls?.full || null;
  } catch (error) {
    console.error("Erro ao buscar imagem:", error);
    return null;
  }
}
