# Weather App

A small browser-based weather app. Enter a city name to retrieve its current
weather from the OpenWeatherMap API. The temperature is displayed in Celsius.

## Features

- Search for current weather by city
- Display the city name, temperature, and weather description
- Show an error when a request fails
- Responsive layout for smaller screens

## Requirements

- A modern web browser
- An OpenWeatherMap API key

## Setup

1. Clone or download this project.
2. In the project folder, create `config.js` by copying the example file:

   ```powershell
   Copy-Item config.example.js config.js
   ```

3. Open `config.js` and replace the placeholder with your OpenWeatherMap API key:

   ```js
   window.WEATHER_API_KEY = "YOUR_ACTUAL_API_KEY";
   ```

4. Open `index.html` in a browser. If your browser restricts requests when a page
   is opened directly from disk, run a local static web server and open the
   address it provides.

Do not commit `config.js`. It is listed in `.gitignore`; commit
`config.example.js` instead.

## Security note

This app calls OpenWeatherMap directly from browser JavaScript. The API key is
therefore visible to anyone who uses the app, even when `config.js` is ignored
by Git. The local config file only helps prevent accidentally committing the
key. For a publicly deployed app, make the API request through a backend or
serverless function and keep the key on the server. Restrict or rotate the key
in OpenWeatherMap if it has already been exposed.

## Project files

- `index.html` — page structure and script/style references
- `style.css` — layout and visual styles
- `script.js` — weather API request and display logic
- `config.example.js` — configuration template safe to commit
- `config.js` — local API key configuration; ignored by Git
- `.gitignore` — excludes local configuration and environment files
