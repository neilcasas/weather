import { format } from "date-fns";

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
  weekForecastContainer.setAttribute("class", "row d-flex align-items-center");

  // Create element for each day
  for (let i = 1; i < forecastDayArray.length; i++) {
    const forecastDay = forecastDayArray[i];
    const forecastDiv = document.createElement("div");
    forecastDiv.classList.add("col-lg-6");
    forecastDiv.classList.add("text-center");
    forecastDiv.classList.add("mt-4");

    // Format forecast date
    const date = new Date(forecastDay.date);
    const formattedDate = format(date, "EEEE, MMMM d");
    forecastDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <p>${formattedDate}</p>
                    <p>${forecastDay.day.condition.text}</p>
                    <img src="${forecastDay.day.condition.icon}"/>
                    <h2>${forecastDay.day.avgtemp_c} C</h2>
                    <div class="row d-flex justify-content-center">
                      <div class="col-auto">
                        <b>Chance of Rain</b>
                      </div>
                      <div class="col-auto">
                        ${forecastDay.day.daily_chance_of_rain}%
                      </div>
                    </div>
                </div>
            </div>`;

    weekForecastContainer.appendChild(forecastDiv);
  }
  return mainDiv;
};

export { weekForecastComponent };
