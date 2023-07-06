<template>
  <div class="weather-widget">
    <h2 class="widget-title">Weather Widget</h2>
    <div class="location-input">
      <label for="location">Enter Location:</label><br>
      <input type="text" id="location" v-model="location" />
      <button class="btn-get-weather" @click="fetchWeatherData">Get Weather</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location">Location: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        Temperature: {{ weatherData.main.temp }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        Description: {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p v-else>Loading weather data...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
};
</script>

<style scoped>
.weather-widget {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #f2f2f2;
}

.widget-title {
  margin-top: 0;
  color: #333;
  font-size: 24px;
}

.location-input {
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
}

.btn-get-weather {
  padding: 5px 10px;
  margin-left: 5px;
  background-color: #ffb522e0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-get-weather:hover {
  background-color: #ffcb22d1;
}

.weather-data {
  margin-top: 10px;
}

.location {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.temperature {
  font-size: 24px;
  color: #ff5722;
}

.description {
  font-size: 16px;
}
</style>
