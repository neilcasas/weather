const fetchWeatherData = async (city) => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=e73919f85bfc432a96052852240607&q=${city}&days=3&aqi=yes&alerts=no`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const weatherData = await response.json();
      return weatherData;
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};

export { fetchWeatherData };
