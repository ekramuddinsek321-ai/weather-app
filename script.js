document.addEventListener("DOMContentLoaded", () => {
  const inputContent = document.querySelector("#input-content");
  const getWeatherBtn = document.querySelector("#check-weather-btn");
  const weatherInfo = document.querySelector("#weather-info");
  const cityName = document.querySelector("#city-name");
  const cityTemp = document.querySelector("#tempreture");
  const cityDesc = document.querySelector("#description");
  const erroeMessage = document.querySelector("#error-message");

  const API_KEY = window.WEATHER_API_KEY;

  getWeatherBtn.addEventListener("click", async () => {
    const city = inputContent.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      console.error(error);
      showError(error.message);
    }
  });

  async function fetchWeatherData(city) {
    if (!API_KEY) {
      throw new Error("Add your OpenWeatherMap API key to config.js.");
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);

    console.log("Response:", response);

    if (!response.ok) {
      throw new Error("Something went wrong,Please try again later.");
    }

    const data = await response.json();

    return data;
  }

  function displayWeatherData(data) {
    console.log(data);
    const { name, main, weather } = data;
    cityName.textContent = name;
    cityTemp.textContent = `Temperature: ${Math.round(main.temp)}°C`;
    cityDesc.textContent = `weather : ${weather[0].description}`;

    weatherInfo.classList.remove("hidden");
    erroeMessage.classList.add("hidden");
  }

  function showError(message) {
    erroeMessage.textContent = message;
    erroeMessage.classList.remove("hidden");
    weatherInfo.classList.add("hidden");
  }
});
