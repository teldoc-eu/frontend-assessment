import { describe, it, expect } from 'vitest';
import type { Current, Forecastday, Hour } from '@/types/weather.type';

import weatherMock from '../../mocks/weather.mock.json';

import {
  findAqi,
  findWeatherConditions,
  mapWeather,
  mapWeatherCurrent,
  mapWeatherDaily,
  mapWeatherHourly,
} from './weatherMapper.util';

describe('findWeatherConditions', () => {
  it('should return the weather conditions', () => {
    expect(findWeatherConditions(1000)).toEqual({ code: 1000, imgName: 'Sunny', name: 'Sunny' });
  });

  it('should return undefined if the code is not found', () => {
    expect(findWeatherConditions(1)).toEqual(undefined);
  });
});

describe('findAqi', () => {
  it('should return the aqi', () => {
    expect(findAqi(1)).toEqual({ index: 1, name: 'good' });
  });

  it('should return undefined if the code is not found', () => {
    expect(findAqi(100)).toEqual(undefined);
  });
});

describe('mapWeatherCurrent', () => {
  it('should return the mapped current weather', () => {
    expect(mapWeatherCurrent(weatherMock.current)).toStrictEqual({
      aqi: 'good',
      humidity: 81,
      temperature: 4,
      weatherImg: 'Sunny',
      weatherName: 'Sunny',
    });
  });

  it('should return object with undefined values when data is undefined', () => {
    expect(mapWeatherCurrent(undefined as unknown as Current)).toStrictEqual({
      aqi: undefined,
      humidity: undefined,
      temperature: undefined,
      weatherImg: undefined,
      weatherName: undefined,
    });
  });
});

describe('mapWeatherHourly', () => {
  it('should return mapped weather hourly', () => {
    expect(
      mapWeatherHourly(weatherMock?.forecast?.forecastday?.[0]?.hour as Hour[])
    ).toContainEqual({
      temperature: 8.8,
      weatherImg: 'Sunny',
      weatherName: 'Sunny',
    });
  });

  it('should return empty array when data is undefined', () => {
    expect(mapWeatherHourly(undefined as unknown as Hour[])).toStrictEqual([]);
  });
});

describe('mapWeatherDaily', () => {
  it('should return mapped weather daily', () => {
    expect(mapWeatherDaily(weatherMock?.forecast?.forecastday as Forecastday[])).toContainEqual({
      temperature: 13.1,
      weatherImg: 'PartlyCloudy',
      weatherName: 'Partly Cloudy',
    });
  });

  it('should return empty array when data is undefined', () => {
    expect(mapWeatherDaily(undefined as unknown as Forecastday[])).toStrictEqual([]);
  });
});

describe.todo('mapWeather');

describe('mapWeather', () => {
  it('should return empty array when data is null', () => {
    expect(mapWeather(null)).toStrictEqual({});
  });
});
