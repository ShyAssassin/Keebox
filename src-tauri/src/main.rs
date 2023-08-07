#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn greet(name: &str) -> String {
    println!("Hello, {}!", name);
   format!("Hello, {}!", name)
}

fn main() {
    tauri::Builder::default()
        .on_window_event(|e| match e.event() {
            // https://github.com/tauri-apps/tauri/issues/6322
            tauri::WindowEvent::Resized(_) => {
                std::thread::sleep(std::time::Duration::from_nanos(1));
            }
            _ => {}
        })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running Keebox!");
}
