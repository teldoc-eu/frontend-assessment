import type { UseWeather } from './useWeather.type';

import { getWeatherData } from '../../services/weather.service';

export const useWeather = async (location: string): Promise<UseWeather> => {
  const { data, error } = await getWeatherData(location);

  return {
    weatherData: data.value,
    error: error.value,
  };
};
