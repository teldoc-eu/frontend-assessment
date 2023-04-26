import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import WeatherHourlyComponent from './WeatherHourlyComponent.vue';

describe('WeatherHourlyComponent', () => {
  const defaultProps = {
    weatherData: [
      {
        temperature: 0,
        weatherName: 'Sunny',
        weatherImg: 'Sunny',
      },
      {
        temperature: 1,
        weatherName: 'Cloudy',
        weatherImg: 'Cloudy',
      },

      {
        temperature: 2,
        weatherName: 'Sunny',
        weatherImg: 'Sunny',
      },
    ],
  };

  it('renders properly', () => {
    const wrapper = mount(WeatherHourlyComponent, {
      props: { ...defaultProps },
    });

    expect(wrapper.text().includes('Hourly')).toBe(true);

    expect(wrapper.text().includes('0 am')).toBe(true);
    expect(wrapper.text().includes('1 am')).toBe(true);
    expect(wrapper.text().includes('2 am')).toBe(true);

    expect(wrapper.text().includes('0°C')).toBe(true);
    expect(wrapper.text().includes('1°C')).toBe(true);
    expect(wrapper.text().includes('2°C')).toBe(true);
  });
});
