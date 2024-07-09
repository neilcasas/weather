import { fetchWeatherData } from "./api";
import { currentWeatherComponent } from "./currentWeather";
import { weekForecastComponent, hourlyForecastComponent } from "./forecast";

function loadPage(city, isCelsius) {
  // Clear initial content
  clearWeatherContent();

  const currentWeatherContainer = document.querySelector(".current-weather");
  const forecastContainer = document.querySelector(".forecast");
  const hourlyForecastMainContainer = document.querySelector(
    ".hourly-forecast-main"
  );
  // TODO: Add loading animation
  fetchWeatherData(city)
    .then((weatherData) => {
      console.log(weatherData);
      // Append current weather component
      currentWeatherContainer.innerHTML = "";
      currentWeatherContainer.appendChild(
        currentWeatherComponent(weatherData, isCelsius)
      );

      // Append weekly forecast component
      forecastContainer.innerHTML = "";
      forecastContainer.appendChild(
        weekForecastComponent(weatherData, isCelsius)
      );

      // Append hourly forecast component
      hourlyForecastMainContainer.innerHTML = "";
      hourlyForecastMainContainer.appendChild(
        hourlyForecastComponent(weatherData, isCelsius)
      );
    })

    // TODO: Implement error handling
    .catch(() => console.log("error in request!"));

  // Prevent default form behavior
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

function clearWeatherContent() {
  const currentWeatherDiv = document.querySelector(".current-weather");
  currentWeatherDiv.innerHTML = "";
  const forecastDiv = document.querySelector(".forecast");
  forecastDiv.innerHTML = "";
  const hourlyForecastMainContainer = document.querySelector(
    ".hourly-forecast-main"
  );
  hourlyForecastMainContainer.innerHTML = "";
}

export { loadPage };
