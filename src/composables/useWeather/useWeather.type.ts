import type { WeatherDTO } from '@/types/weather.type';

export interface UseWeather {
  weatherData: WeatherDTO | undefined;
  isFetching: boolean;
  error: unknown;
}