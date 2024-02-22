<template>
  <div class="weather-data">
    <div v-if="isLoading">Loading weather data...</div>
    <div v-else-if="error">Error fetching data: {{ error }}</div>

    <div v-else>
      <h2>{{ location }}</h2>
      <p>Temperature: {{ temperature }}</p>
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
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
