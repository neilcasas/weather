const currentWeatherComponent = (weatherData, isCelsius) => {
  // Separate location and weather data
  const location = weatherData.location;
  const currentWeather = weatherData.current;

  // Div content
  const mainDiv = document.createElement("div");
  mainDiv.id = "current-weather-card";
  mainDiv.classList.add("text-center");
  mainDiv.classList.add("mt-4");

  // Add city as meta data
  mainDiv.setAttribute(
    "data-location",
    `${location.name}, ${location.country}`
  );

  mainDiv.innerHTML = `
    <h2>${location.name + ", " + location.country}</h2>
    <p>${currentWeather.condition.text}</p>
    <img src="${currentWeather.condition.icon}"/>
    <h1>${
      isCelsius ? currentWeather.temp_c + " °C" : currentWeather.temp_f + " °F"
    }</h1>
    <div class="row d-flex justify-content-center">
      <div class="col-auto">
        <b>Humidity</b>
      </div>
      <div class="col-auto">
        ${currentWeather.humidity}%
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-auto">
        <b>Wind Speed</b>
      </div>
      <div class="col-auto">
        ${currentWeather.wind_kph} kph
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-auto">
        <b>Heat Index</b>
      </div>
      <div class="col-auto">
        ${
          isCelsius
            ? currentWeather.heatindex_c + " °C"
            : currentWeather.heatindex_f + " °F"
        }
      </div>
    </div>
    `;

  return mainDiv;
};

export { currentWeatherComponent };
