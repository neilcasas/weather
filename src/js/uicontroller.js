import { fetchWeatherData } from "./api";
import { currentWeatherComponent } from "./currentWeather";
import { weekForecastComponent, hourlyForecastComponent } from "./forecast";
import { errorComponent } from "./error";

function loadPage(city, isCelsius) {
  // Clear initial content
  clearWeatherContent();

  // Show spinner div
  const spinnerDiv = document.querySelector("#spinner-div");
  spinnerDiv.classList.remove("d-none");

  const currentWeatherContainer = document.querySelector(".current-weather");
  const forecastContainer = document.querySelector(".forecast");
  const hourlyForecastMainContainer = document.querySelector(
    ".hourly-forecast-main"
  );
  const errorContainer = document.querySelector(".error-msg-container");

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

      // Hide spinner div
      spinnerDiv.classList.add("d-none");

      // Clear error msg container
      errorContainer.innerHTML = "";
    })

    // TODO: Implement error handling
    .catch((error) => {
      // Hide spinner div
      spinnerDiv.classList.add("d-none");

      // Create error div
      errorContainer.appendChild(errorComponent(error));
    });

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
