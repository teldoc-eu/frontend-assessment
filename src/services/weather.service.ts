import { useFetch } from '@vueuse/core';
import { WEATHER_API_URL } from '@/configs/services.config';

export const getWeatherData = async (location: string, days = 8) =>
  useFetch<string>(
    `${WEATHER_API_URL}/forecast.json?q=${location}&aqi=yes&days=${days}&key=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );
