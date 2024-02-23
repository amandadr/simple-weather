<template>
  <div class="details">
    <p>
      Temperature: {{ temperature }} &deg;C (Feels like {{ feelsLike }} &deg;C)
    </p>
    <p>Humidity: {{ humidity }}%</p>
    <p>Precipitation: {{ precipitation }} mm</p>
    <p>Wind: {{ windSpeed }} kph ({{ windDirection }})</p>
    <p>Clouds: {{ clouds }}%</p>
    <p>UV Index: {{ uv }}</p>
  </div>
</template>

<script>
export default {
  name: "WeatherDetails",
  props: [
    "temperature",
    "feelsLike",
    "windSpeed",
    "windDirection",
    "precipitation",
    "clouds",
    "humidity",
    "uv",
  ],
};
</script>
