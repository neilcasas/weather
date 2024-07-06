import "../scss/styles.scss";
import { fetchWeatherData } from "./api";

const weatherData = fetchWeatherData("Filly");
console.log(weatherData);
