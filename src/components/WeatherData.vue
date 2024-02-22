<template>
  <div class="weather-data">
    <div v-if="isLoading">Loading weather data...</div>
    <div v-else-if="error">Error fetching data: {{ error }}</div>

    <div v-else>
      <h2>{{ location }}, {{ currentDateTime() }}</h2>
      <p>
        <img :src="conditionIconUrl" :alt="weatherCondition" />
        {{ weatherCondition }}
      </p>
      <div class="details">
        <p>
          Temperature: {{ temperature }} &deg;C (Feels like
          {{ feelsLike }} &deg;C)
        </p>
        <p>Wind: {{ windSpeed }} kph ({{ windDirection }})</p>
        <p>Precipitation: {{ precipitation }} mm</p>
        <p>Clouds: {{ clouds }}%</p>
        <p>Humidity: {{ humidity }}%</p>
        <p>UV Index: {{ uv }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WeatherData",
  data() {
    return {
      isLoading: false,
      error: null,
      location: "",
      temperature: null,
      // Add other weather data properties you want to fetch
      weatherCondition: "",
      conditionIconUrl: "",
      windSpeed: null,
      windDirection: "",
      precipitation: null,
      clouds: null,
      humidity: null,
      feelsLike: null,
      uv: null,
    };
  },
  methods: {
    async fetchWeatherData(location) {
      this.isLoading = true;
      this.error = null;

      try {
        const apiKey = "5c92fd8788164c2d8af193836242202"; // Replace with your actual key
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

        const response = await axios.get(url);
        const data = response.data;

        this.location = data.location.name;
        this.temperature = data.current.temp_c;
        // Extract other relevant data from the response
        this.weatherCondition = data.current.condition.text;
        this.conditionIconUrl = `https:${data.current.condition.icon}`;
        this.windSpeed = data.current.wind_kph;
        this.windDirection = data.current.wind_dir;
        this.precipitation = data.current.precip_mm;
        this.clouds = data.current.cloud;
        this.humidity = data.current.humidity;
        this.feelsLike = data.current.feelslike_c;
        this.uv = data.current.uv;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },
    currentDateTime() {
      const now = new Date();
      const options = {
        dateStyle: "medium",
        timeStyle: "short",
      };
      return now.toLocaleString("en-US", options); // Adjust locale as needed
    },
  },
};
</script>
