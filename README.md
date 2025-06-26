# ☀️ WeatherApp - App de Previsão do Tempo com Estilo

Aplicativo desktop desenvolvido com **React + Tailwind + Tauri**, que exibe clima em tempo real, fundo dinâmico com imagens do Unsplash e interface responsiva com suporte a geolocalização 🌍🌤️

## 🚀 Funcionalidades

- Busca por cidade com sugestão inteligente
- Detecção automática de localização via navegador
- Imagem de fundo dinâmica com base no clima, cidade e hora do dia
- Interface moderna e responsiva (Mobile + Desktop)
- Suporte para build como aplicativo `.exe` com ícone personalizado via Tauri
- Código modular com hooks reutilizáveis

## 🧱 Tecnologias

- React + Vite
- Tailwind CSS
- Tauri
- Heroicons
- Unsplash API
- OpenWeather API
- Nominatim (Reverse Geocode)

## 💻 Como rodar localmente

```bash
# Instale as dependências
npm install

# Execute em modo dev (frontend + tauri)
npm run tauri dev

🔧 Build para produção
bash
# Gera executável com Tauri (.exe)
npm run tauri build
O executável será gerado em:

src-tauri/target/release/bundle/windows/
🎨 Personalização
Ícone personalizado em src-tauri/icons/icon.ico

Imagens dinâmicas obtidas via Unsplash

Hooks separados em /src/hooks para facilitar manutenção

Criado por Iberno Hoffmann