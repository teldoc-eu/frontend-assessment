import { describe, it, expect } from 'vitest';

import { findAqi, findWeatherConditions } from './weatherMapper.util';

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

describe.todo('mapWeatherCurrent');
describe.todo('mapWeatherHourly');
describe.todo('mapWeatherDaily');
describe.todo('mapWeather');
