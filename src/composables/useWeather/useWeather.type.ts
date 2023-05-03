import type { WeatherDTO } from '@/types/weather.type';

export interface UseWeather {
  weatherData: WeatherDTO | null;
  error: unknown;
}
