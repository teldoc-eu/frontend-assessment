import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import CurrentWeatherComponent from './CurrentWeatherComponent.vue';

describe('CurrentWeatherComponent', () => {
  const defaultProps = {
    city: 'Warsaw',
    weatherData: {
      temperature: 0,
      weatherName: 'Sunny',
      weatherImg: 'Sunny',
      humidity: 0,
      aqi: 'good',
    },
  };

  it('renders properly', () => {
    const wrapper = mount(CurrentWeatherComponent, {
      props: { ...defaultProps },
    });

    expect(wrapper.text().includes(defaultProps.city)).toBe(true);
    expect(wrapper.text().includes(defaultProps.weatherData.weatherName)).toBe(true);
  });
});
