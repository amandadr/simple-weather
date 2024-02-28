<template>
  <div v-if="forecastData">
    <h2 class="forecast-title">Forecast</h2>
    <div class="forecast-container">
      <div
        class="forecast-item"
        v-for="day in forecastData.forecast.forecastday"
        :key="day.date"
      >
        <h3>{{ formattedDateTime(day.date) }}</h3>
        <img :src="day.day.condition.icon" :alt="day.day.condition.text" />
        <h4>
          {{
            // Capitalize the first letter of each word
            day.day.condition.text
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          }}
        </h4>
        <p>Temperature: {{ day.day.avgtemp_c }} &#8451;</p>
        <p>High: {{ day.day.maxtemp_c }} &#8451;</p>
        <p>Low: {{ day.day.mintemp_c }} &#8451;</p>
        <p>Precipitation: {{ day.day.totalprecip_mm }} mm</p>
        <p>Wind: {{ day.day.maxwind_kph }} kph</p>
      </div>
    </div>
  </div>
  <div v-else-if="isError">Error fetching forecast.</div>
  <div v-else>Loading forecast...</div>
</template>

<script>
import weatherService from "../services/weatherService";
export default {
  name: "WeatherForecast",
  props: {
    location: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      forecastData: null,
      isLoading: false,
      isError: false,
    };
  },
  methods: {
    async fetchForecast() {
      this.isLoading = true;
      this.isError = false;
      try {
        // TODO: Implement your fetchForecast call from weatherService.js
        this.forecastData = await weatherService.fetchForecast(
          this.location,
          7
        );
      } catch (error) {
        this.isError = true;
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchForecast();
  },
  computed: {
    formattedDateTime() {
      return (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        });
      };
    },
  },
};
</script>
