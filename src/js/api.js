const fetchWeatherData = async (city) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=e73919f85bfc432a96052852240607&q=${city}&days=3&aqi=yes&alerts=no`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      // Extract error message from response body
      const errorResponse = await response.json();
      const errorMessage = errorResponse.error.message;
      throw new Error(errorMessage || "Failed to fetch weather data");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw error;
  }
};

export { fetchWeatherData };
