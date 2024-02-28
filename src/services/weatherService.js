import axios from "axios";

const apiKey = process.env.VUE_APP_WEATHER_API_KEY;
const baseUrl = "https://api.weatherapi.com/v1";

export default {
  async fetchWeather(location) {
    try {
      const url = `${baseUrl}/current.json?key=${apiKey}&q=${location}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching weather data");
    }
  },
  async fetchForecast(location, days = 3) {
    // Allow choosing number of days
    try {
      const url = `${baseUrl}/forecast.json?key=${apiKey}&q=${location}&days=${days}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching forecast data");
    }
  },
};
