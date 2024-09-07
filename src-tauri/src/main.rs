// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

fn create_app_menu() -> Menu {
    return Menu::new().add_submenu(Submenu::new(
        "App",
        Menu::new().add_native_item(MenuItem::Quit),
    ));
}

fn main() {
    tauri::Builder::default()
        //.menu(create_app_menu())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
