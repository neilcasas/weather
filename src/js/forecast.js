const weekForecastComponent = (weatherData) => {
  // Create main div
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("week-forecast");
  mainDiv.classList.add("mt-4");
  mainDiv.classList.add("w-100");

  // Add header
  mainDiv.innerHTML = `<h2 class="text-center">Week Forecast</h2>
    <div class="row d-flex justify-content-center" id="week-forecast-container">
    </div>`;

  // Create forecast array
  const forecastDayArray = weatherData.forecast.forecastday;

  const weekForecastContainer = mainDiv.querySelector(
    "#week-forecast-container"
  );
  weekForecastContainer.setAttribute("class", "d-flex align-items-center");

  // Create element for each day
  for (let i = 1; i < forecastDayArray.length; i++) {
    const forecastDay = forecastDayArray[i];
    const forecastDiv = document.createElement("div");
    forecastDiv.classList.add("col");

    forecastDiv.classList.add("text-center");
    forecastDiv.classList.add("mt-4");
    forecastDiv.innerHTML = `
            <div class="card">
                <div class="card-title">
                    <p>${forecastDay.date}</p>
                </div>
                <div class="card-body">
                    <img src="${forecastDay.day.condition.icon}"/>
                    <h2>${forecastDay.day.avgtemp_c} C</h2>
                    <p>${forecastDay.day.condition.text}</p>
                </div>
            </div>`;

    weekForecastContainer.appendChild(forecastDiv);
  }
  return mainDiv;
};

export { weekForecastComponent };
