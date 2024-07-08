import { fetchWeatherData } from "./api";
import { currentWeatherComponent } from "./currentWeather";

function loadPage(city) {
  const currentWeatherContainer = document.querySelector(".current-weather");
  const weatherData = fetchWeatherData(city).then((weatherData) => {
    // Append current weather component
    currentWeatherContainer.appendChild(currentWeatherComponent(weatherData));
    console.log(weatherData);
  });
}

export { loadPage };
