import { airQuality, weatherConditions } from '@/configs/weather.config';
import type {
  AirQualityMapped,
  ConditionMapped,
  CurrentWeatherMapped,
  WeatherDTO,
  WeatherMapped,
} from '@/types/weather.type';

export const findWeatherConditions = (weatherCode: number): ConditionMapped | undefined =>
  weatherConditions.find((condition) => condition.code === weatherCode);

export const findAqi = (aqiIndex: number): AirQualityMapped | undefined =>
  airQuality.find((aqi) => aqi.index === aqiIndex);

export const mapWeatherCurrent = (
  currentData: WeatherDTO['current'] | undefined
): CurrentWeatherMapped => {
  if (!currentData) {
    return {
      temperature: undefined,
      weatherName: undefined,
      weatherImg: undefined,
      aqi: undefined,
      humidity: undefined,
    };
  }

  const condition = findWeatherConditions(currentData.condition.code);
  const aqi = findAqi(currentData.air_quality?.['us-epa-index']);

  return {
    temperature: currentData.temp_c,
    weatherName: condition?.name,
    weatherImg: condition?.imgName,
    aqi: aqi?.name,
    humidity: currentData.humidity,
  };
};

export const mapWeatherHourly = (
  hourlyData: WeatherDTO['forecast']['forecastday'][0]['hour'] | undefined
) => {
  if (!hourlyData) {
    return [];
  }

  return hourlyData.map((hour) => {
    const condition = findWeatherConditions(hour.condition.code);
    return {
      temperature: hour?.temp_c ?? undefined,
      weatherName: condition?.name,
      weatherImg: condition?.imgName,
    };
  });
};

export const mapWeatherDaily = (dailyData: WeatherDTO['forecast']['forecastday'] | undefined) => {
  if (!dailyData) {
    return [];
  }

  return dailyData.map((day) => {
    const condition = findWeatherConditions(day.day.condition.code);
    return {
      temperature: day?.day?.avgtemp_c,
      weatherName: condition?.name,
      weatherImg: condition?.imgName,
    };
  });
};

export const mapWeather = (weatherAndLocationData: WeatherDTO | undefined): WeatherMapped => {
  if (!weatherAndLocationData) {
    return {};
  }

  const current = mapWeatherCurrent(weatherAndLocationData.current);
  const hourly = mapWeatherHourly(weatherAndLocationData?.forecast?.forecastday?.[0]?.hour) || [];
  const daily = mapWeatherDaily(weatherAndLocationData?.forecast?.forecastday) || [];

  return {
    city: weatherAndLocationData.location.name,
    current,
    hourly,
    daily,
  };
};
