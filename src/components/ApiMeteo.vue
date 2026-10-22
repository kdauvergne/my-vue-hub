<template>
  <div class="card bg-base-200">
    <div class="card-body">
      <h3 class="card-title">Quel temps fait-il ?</h3>
      <p>
        Température max : <strong> {{ maxTemp }}°C </strong>
      </p>
      <p>
        Température min : <strong> {{ minTemp }}°C </strong>
      </p>
      <p>
        Température actuelle : <strong> {{ currentTemp }}°C </strong>
      </p>
      <p v-if="conditionMeteo">
        {{ conditionMeteo.icon }} Condition météo :
        <strong> {{ conditionMeteo.label }} </strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const maxTemp = ref(0);
const minTemp = ref(0);
const currentTemp = ref(0);
const conditionMeteo = ref(null);
const codesMeteo = {
  0: { label: "Ciel dégagé", icon: "☀️" },
  1: { label: "Plutôt dégagé", icon: "🌤️" },
  2: { label: "Partiellement nuageux", icon: "⛅" },
  3: { label: "Couvert", icon: "☁️" },
  45: { label: "Brouillard", icon: "🌫️" },
  48: { label: "Brouillard givrant", icon: "🌫️" },
  51: { label: "Bruine légère", icon: "🌦️" },
  53: { label: "Bruine modérée", icon: "🌦️" },
  55: { label: "Bruine dense", icon: "🌧️" },
  56: { label: "Bruine verglaçante légère", icon: "🧊" },
  57: { label: "Bruine verglaçante dense", icon: "🧊" },
  61: { label: "Pluie faible", icon: "🌦️" },
  63: { label: "Pluie modérée", icon: "🌧️" },
  65: { label: "Pluie forte", icon: "🌧️" },
  66: { label: "Pluie verglaçante faible", icon: "🧊" },
  67: { label: "Pluie verglaçante forte", icon: "🧊" },
  71: { label: "Neige faible", icon: "🌨️" },
  73: { label: "Neige modérée", icon: "🌨️" },
  75: { label: "Neige forte", icon: "❄️" },
  77: { label: "Grains de neige", icon: "🌨️" },
  80: { label: "Averses faibles", icon: "🌦️" },
  81: { label: "Averses modérées", icon: "🌧️" },
  82: { label: "Averses violentes", icon: "⛈️" },
  85: { label: "Averses de neige faibles", icon: "🌨️" },
  86: { label: "Averses de neige fortes", icon: "❄️" },
  95: { label: "Orage", icon: "⛈️" },
  96: { label: "Orage avec grêle faible", icon: "⛈️" },
  99: { label: "Orage avec grêle forte", icon: "⛈️" },
};

onMounted(async () => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=43.6043&longitude=1.4437&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m&models=meteofrance_seamless&current=temperature_2m,weather_code&forecast_days=4",
    );

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    maxTemp.value = data.daily.temperature_2m_max[0];
    minTemp.value = data.daily.temperature_2m_min[0];
    currentTemp.value = data.current.temperature_2m;

    const code = data.current.weather_code;
    conditionMeteo.value = codesMeteo[code];
  } catch (e) {
    console.error(e);
  }
});
</script>
