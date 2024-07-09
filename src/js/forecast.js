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

const hourlyForecastComponent = (weatherData) => {
  // Create main div
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("hourly-forecast");
  mainDiv.classList.add("mt-4");

  // Add header
  mainDiv.innerHTML = `<h2 class="text-center">Hourly Forecast</h2>
    <div class="row d-flex justify-content-center mt-4" id="hourly-forecast-container">
    </div>`;

  // Get current hour
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  // Get lower and upper bounds for the range of hours to display
  const low = currentHour + 1;
  const high = low + 6;

  // Create forecast array
  const currentDay = weatherData.forecast.forecastday[0];
  const nextDay = weatherData.forecast.forecastday[1];

  // Append to hourly forecast container
  const hourlyForecastContainer = mainDiv.querySelector(
    "#hourly-forecast-container"
  );
  for (let i = low; i < high; i++) {
    if (i > 23) {
      hourlyForecastContainer.appendChild(hourComponent(nextDay, i - 24));
    } else {
      hourlyForecastContainer.appendChild(hourComponent(currentDay, i));
    }
  }
  return mainDiv;
};

// Create component for one hour forecast
const hourComponent = (day, hourIndex) => {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add(`hour-forecast-${hourIndex}`);
  mainDiv.classList.add("text-center");
  mainDiv.classList.add("col-auto");

  const displayHour = hourIndexToHour(hourIndex);
  mainDiv.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <p>${displayHour}</p>
                    <img src="${day.hour[hourIndex].condition.icon}"/>
                    <h6>${day.hour[hourIndex].temp_c} C</h6>
                </div>
            </div>`;

  return mainDiv;
};

function hourIndexToHour(hourIndex) {
  if (hourIndex === 0) {
    return "12 am";
  } else if (hourIndex === 12) {
    return "12 pm";
  } else if (hourIndex < 12) {
    return `${hourIndex} am`;
  } else {
    return `${hourIndex - 12} pm`;
  }
}

export { weekForecastComponent, hourlyForecastComponent };
