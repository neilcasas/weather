import { fetchWeatherData } from "./api";
import { currentWeatherComponent } from "./currentWeather";
import { weekForecastComponent } from "./forecast";

function loadPage(city) {
  // Clear initial content
  clearWeatherContent();

  const currentWeatherContainer = document.querySelector(".current-weather");
  const forecastContainer = document.querySelector(".forecast");
  fetchWeatherData(city).then((weatherData) => {
    console.log(weatherData);
    // Append current weather component
    currentWeatherContainer.appendChild(currentWeatherComponent(weatherData));

    // Append weekly forecast component
    forecastContainer.appendChild(weekForecastComponent(weatherData));
  });

  // Prevent default form behavior
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // Fetch data for city on click of search button
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");
  searchBtn.addEventListener("click", () => {
    const city = searchInput.value;
    loadPage(city);
  });
}

function clearWeatherContent() {
  const currentWeatherDiv = document.querySelector(".current-weather");
  currentWeatherDiv.innerHTML = "";
  const forecastDiv = document.querySelector(".forecast");
  forecastDiv.innerHTML = "";
}
export { loadPage };
