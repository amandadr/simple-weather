<template>
  <div class="weather-data">
    <div>
      <h2>{{ location }}, {{ region }}<br />{{ formattedDateTime }}</h2>
      <img :src="conditionIconUrl" :alt="weatherCondition" />
      <h3>
        {{ weatherCondition }}
      </h3>
      <WeatherDetails
        :temperature="temperature"
        :feelsLike="feelsLike"
        :windSpeed="windSpeed"
        :windDirection="windDirection"
        :precipitation="precipitation"
        :clouds="clouds"
        :humidity="humidity"
        :uv="uv"
      />
    </div>
  </div>
</template>

<script>
import WeatherService from "../services/weatherService";
import WeatherDetails from "./WeatherDetails.vue";

export default {
  name: "WeatherData",
  components: {
    WeatherDetails,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      location: "",
      region: "",
      country: "",
      temperature: null,
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
        const data = await WeatherService.fetchWeather(location);

        this.location = data.location.name;
        this.region = data.location.region;
        this.country = data.location.country;
        this.temperature = data.current.temp_c;
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
  },
  computed: {
    formattedDateTime() {
      const now = new Date();
      const options = { dateStyle: "medium", timeStyle: "short" };
      return now.toLocaleString("en-US", options); // Adjust locale as needed
    },
  },
};
</script>
