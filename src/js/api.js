const fetchWeatherData = async (city) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=e73919f85bfc432a96052852240607&q=${city}&days=3&aqi=yes&alerts=no`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};

export { fetchWeatherData };
