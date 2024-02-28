<template>
  <div id="app" :class="{ 'dark-theme': isDarkTheme }">
    <SearchForm @search="searchForWeather" />
    <button @click="toggleTheme">Toggle Theme</button>
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
      isDarkTheme: false,
    };
  },
  mounted() {
    // Fetch initial data on app load:
    const initialLocation = "Dartmouth"; // Set a default location
    this.searchForWeather(initialLocation);
    // Set theme based on user preference or stored value
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme = localStorage.getItem("theme");
    this.isDarkTheme =
      storedTheme === "dark" || (storedTheme === null && prefersDark);
    // Set initial styles immediately, before the next render
    this.setThemeStyles();
  },
  methods: {
    searchForWeather(location) {
      this.currentLocation = location;
      this.$nextTick(() => {
        this.$refs.weatherData.fetchWeatherData(location);
      });
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      localStorage.setItem("theme", this.isDarkTheme ? "dark" : "light");
      document.body.style.backgroundColor = this.isDarkTheme ? "#333" : "#fff";
      document.body.style.color = this.isDarkTheme ? "#eee" : "#000";
    },
    setThemeStyles() {
      document.body.style.backgroundColor = this.isDarkTheme ? "#333" : "#fff";
      document.body.style.color = this.isDarkTheme ? "#eee" : "#000";
    },
  },
};
</script>

<style>
@import "./app.css";
</style>
