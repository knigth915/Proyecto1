import { useWeatherStore } from "@/stores/weatherStore.js";
import { getTemperatura } from "@/helpers/getWeather.js";

export const useWeather = async () => {  // Se cambia el nombre para evitar conflicto
    const temperatura = await getTemperatura();  // Se elimina "wait () ="
    const weatherStore = useWeatherStore();  // Se usa correctamente la store de Pinia
    weatherStore.temperatura = temperatura;  // Se actualiza la temperatura en la store
};
