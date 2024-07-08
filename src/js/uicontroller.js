import { fetchWeatherData } from "./api";
import { currentWeatherComponent } from "./currentWeather";

function loadPage(city) {
  // Clear initial content
  clearWeatherContent();

  const currentWeatherContainer = document.querySelector(".current-weather");
  fetchWeatherData(city).then((weatherData) => {
    // Append current weather component
    currentWeatherContainer.appendChild(currentWeatherComponent(weatherData));
    console.log(weatherData);
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
