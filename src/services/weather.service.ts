import { useFetch } from '@vueuse/core';
import { WEATHER_API_URL } from '@/configs/services.config';
import type { WeatherDTO } from '@/types/weather.type';

export const getWeatherData = (location: string, days = 8) =>
  useFetch<WeatherDTO>(
    `${WEATHER_API_URL}/forecast.json?q=${encodeURIComponent(location)}&aqi=yes&days=${days}&key=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  )
    .get()
    .json<WeatherDTO>();
