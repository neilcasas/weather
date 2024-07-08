const weekForecastComponent = (weatherData) => {
  // Create main div
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("week-forecast");

  // Add header
  mainDiv.innerHTML = `<h2>Week Forecast</h2>
    <div class="row d-flex justify-content-center" id="week-forecast-container">
    </div>`;

  // Create forecast array
  const forecastDayArray = weatherData.forecast.forecastday;

  const weekForecastContainer = mainDiv.querySelector(
    "#week-forecast-container"
  );

  // Create element for each day
  for (let i = 1; i < forecastDayArray.length; i++) {
    const forecastDay = forecastDayArray[i];
    const forecastDiv = document.createElement("div");

    forecastDiv.classList.add("text-center");
    forecastDiv.classList.add("mt-4");
    forecastDiv.innerHTML = `
            <h2>${forecastDay.date}</h2>
            <p>${forecastDay.day.condition.text}</p>
            <img src="${forecastDay.day.condition.icon}"/>
            <h1>${forecastDay.day.avgtemp_c} C</h1>`;
    weekForecastContainer.appendChild(forecastDiv);
  }
  return mainDiv;
};

export { weekForecastComponent };
