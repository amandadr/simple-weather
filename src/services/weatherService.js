import axios from "axios";

const apiKey = process.env.VUE_APP_WEATHER_API_KEY;
const baseUrl = "https://api.weatherapi.com/v1/current.json";

export default {
  async fetchWeather(location) {
    try {
      const url = `${baseUrl}?key=${apiKey}&q=${location}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching weather data"); // Better error handling
    }
  },
};
