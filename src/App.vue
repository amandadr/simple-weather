<template>
  <div id="app">
    <SearchForm @search="searchForWeather" />
    <WeatherData ref="weatherData" :location="currentLocation" />
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm.vue";
import WeatherData from "./components/WeatherData.vue";

export default {
  name: "App",
  components: {
    SearchForm,
    WeatherData,
  },
  data() {
    return {
      currentLocation: "Dartmouth",
    };
  },
  methods: {
    searchForWeather(location) {
      this.currentLocation = location;
      this.$nextTick(() => {
        this.$refs.weatherData.fetchWeatherData(location);
      });
    },
  },
  mounted() {
    // Fetch initial data on app load:
    const initialLocation = "Dartmouth"; // Set a default
    this.searchForWeather(initialLocation);
  },
};
</script>

<style>
@import "./app.css";
</style>
