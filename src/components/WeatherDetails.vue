<!-- <template>
  <div class="details">
    <p>
      Temperature: {{ temperature }} &deg;C (Feels like {{ feelsLike }} &deg;C)
    </p>
    <p>Wind: {{ windSpeed }} kph ({{ windDirection }})</p>
    <p>Precipitation: {{ precipitation }} mm</p>
    <p>Clouds: {{ clouds }}%</p>
    <p>Humidity: {{ humidity }}%</p>
    <p>UV Index: {{ uv }}</p>
  </div>
</template>

<script>
export default {
  name: "WeatherDetails",
  props: {
    temperature: {
      type: Number,
      required: true,
    },
    feelsLike: {
      type: Number,
      required: true,
    },
    windSpeed: {
      type: Number,
      required: true,
    },
    windDirection: {
      type: String,
      required: true,
    },
    precipitation: {
      type: Number,
      required: true,
    },
    clouds: {
      type: Number,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
    uv: {
      type: Number,
      required: true,
    },
  },
};
</script> -->
<template>
  <div class="details">
    <p>
      Temperature: {{ temperature }} &deg;C (Feels like {{ feelsLike }} &deg;C)
    </p>
    <p>Wind: {{ windSpeed }} kph ({{ windDirection }})</p>
    <p>Precipitation: {{ precipitation }} mm</p>
    <p>Clouds: {{ clouds }}%</p>
    <p>Humidity: {{ humidity }}%</p>
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
