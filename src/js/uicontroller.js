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

  fetchWeatherData(city).then((weatherData) => {
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
    loadPage(city, isCelsius);
  });

  // Toggle celsius or fahrenheit
  const celsiusToggler = document.getElementById("c-toggle");
  const fahrenheitToggler = document.getElementById("f-toggle");

  celsiusToggler.addEventListener("click", () => {
    loadPage(city, true);
    fahrenheitToggler.classList.remove("active");
    celsiusToggler.classList.add("active");
  });

  fahrenheitToggler.addEventListener("click", () => {
    loadPage(city, false);
    celsiusToggler.classList.remove("active");
    fahrenheitToggler.classList.add("active");
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
