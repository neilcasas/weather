import { fetchWeatherData } from "./api";

function loadPage(city) {
    const weatherData = fetchWeatherData(city);
    console.log(weatherData);
}

export { loadPage }