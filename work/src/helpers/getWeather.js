import axios from "axios";

const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=23&longitude=-102&hourly=temperature_2m&timezone=Pacific%2FAuckland"

export const getTemperatura = async () => {
  const respuesta = await axios.get(API_URL);
  const nuevaTemperatura = respuesta.data.hourly.temperature_2m[0]
  return nuevaTemperatura
};
