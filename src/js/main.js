import "../scss/styles.scss";
import { fetchWeatherData } from "./api";

const weatherData = fetchWeatherData("Laoag");
console.log(weatherData);
