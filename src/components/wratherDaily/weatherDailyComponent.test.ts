import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import WeatherDailyComponent from './WeatherDailyComponent.vue';

describe('WeatherDailyComponent', () => {
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
    const wrapper = mount(WeatherDailyComponent, {
      props: { ...defaultProps },
    });

    expect(wrapper.text().includes('Next 7 days')).toBe(true);

    expect(wrapper.text().includes('1°C')).toBe(true);
    expect(wrapper.text().includes('2°C')).toBe(true);
  });
});
