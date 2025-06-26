// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::{Manager, LogicalSize};

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let window = app.get_webview_window("main").unwrap();

      // Exemplo: define uma proporção ideal 16:9 ou baseada em resolução detectada
      window.set_size(LogicalSize::new(1080.0, 720.0))?;
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("falha ao iniciar app");
}

