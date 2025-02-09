<template>
 <h3>la temperatura es: {{ weatherStore.temperatura }} </h3>
</template>

<script setup>
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';
import { useWeather } from '@/composables/useWeather';

const weatherStore = useWeatherStore();

onMounted(async () => {
  await useWeather(); // Asegúrate de que esta función actualiza la store correctamente
});
</script>
