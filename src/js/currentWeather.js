const currentWeatherComponent = (weatherData) => {
  // Separate location and weather data
  const location = weatherData.location;
  const currentWeather = weatherData.current;

  // Div content
  const mainDiv = document.createElement("div");
  mainDiv.id = "current-weather-card";
  mainDiv.classList.add("card");

  mainDiv.innerHTML = `<div class="card-body">
  <div class="card-title">${location.name + ", " + location.country}
  </div>

    </div>

  `;

  return mainDiv;
};

export { currentWeatherComponent };
