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
      currentLocation: "", // Or a default location
    };
  },
  methods: {
    searchForWeather(location) {
      this.currentLocation = location;
      this.$refs.weatherData.fetchWeatherData(location); // Call the function
    },
  },
  mounted() {
    // Consider fetching the weather for the user's current location initially
  },
};
</script>
