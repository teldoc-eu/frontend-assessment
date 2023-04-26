import type { UseWeather } from './useWeather.type';

import { getWeatherData } from '../../services/weather.service';
import type { WeatherDTO } from '@/types/weather.type';

export const useWeather = async (location: string): Promise<UseWeather> => {
  const { data, isFetching, error } = await getWeatherData(location);

  if (error.value || !data.value) {
    return {
      weatherData: undefined,
      isFetching: !!isFetching.value,
      error: error.value,
    };
  }

  return {
    weatherData: JSON.parse(data.value || '') as WeatherDTO,
    isFetching: !!isFetching.value,
    error: error.value,
  };
};
