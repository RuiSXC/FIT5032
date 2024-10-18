<template>
    <div class="container py-5">
        <div class="header text-center">
            <h1 class="mb-3">WEATHER APP</h1>
            <div class="search-bar mb-3">
                <input type="text" v-model="city" placeholder="Enter city name" class="search-input" />
                <button @click="searchByCity" class="search-button">Search</button>
            </div>
        </div>
        <main class="text-center">
            <div v-if="weatherData">
                <h2>
                    {{ weatherData.name }}, {{ weatherData.sys.country }}
                </h2>
                <div>
                    <img :src="iconUrl" alt="Weather Icon" />
                    <p>{{ temperature }} °C</p>
                </div>
                <span>{{ weatherData.weather[0].description }}</span>
            </div>
        </main>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";

const apikey = "be44c19be5c3a4e5f4ad3ae2bb72dcf7";
const city = ref("");
const weatherData = ref(null);

const temperature = computed(() => (
    weatherData.value ? Math.floor(weatherData.value.main.temp - 273) : null
));

const iconUrl = computed(() => (
    weatherData.value ? `http://api.openweathermap.org/img/w/${weatherData.value.weather[0].icon}.png` : null
));

const fetchCurrentLocationWeather = async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
            await fetchWeatherData(url);
        });
    }
}

const fetchWeatherData = async (url) => {
    try {
        const response = await axios.get(url);
        weatherData.value = response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

const searchByCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}`;
    await fetchWeatherData(url);
}

onMounted(() => {
    fetchCurrentLocationWeather();
});
</script>