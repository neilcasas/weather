const currentWeatherComponent = (weatherData) => {
  // Separate location and weather data
  const location = weatherData.location;
  const currentWeather = weatherData.current;

  // Div content
  const mainDiv = document.createElement("div");
  mainDiv.id = "current-weather-card";
  mainDiv.classList.add("card");

  mainDiv.innerHTML = `<div class="card-body">
    <div class="card-title"><h2>${location.name + ", " + location.country}</h2>
    </div>
    <div class="card-text">
    <p>${currentWeather.condition.text}</p>
    <img src="${currentWeather.condition.icon}"/>
    <h1>${currentWeather.temp_c} C</h1>
    <p>Wind: ${currentWeather.wind_kph} kph</p>
    </div>
    </div>
  `;

  return mainDiv;
};

export { currentWeatherComponent };
