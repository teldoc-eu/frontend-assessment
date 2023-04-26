import { describe, it, expect, vi } from 'vitest';

import { mount } from '@vue/test-utils';
import SearchComponent from './SearchComponent.vue';

describe('SearchComponent', () => {
  const defaultProps = {
    locationSetter: vi.fn(),
  };

  it('renders properly', () => {
    const wrapper = mount(SearchComponent, {
      props: { ...defaultProps },
    });

    expect(wrapper.find('input').element.placeholder).toBe('Search city or Zip code');
  });

  it('calls handleEnter', async () => {
    const wrapper = mount(SearchComponent, {
      props: { ...defaultProps },
    });

    await wrapper.find('input').trigger('keydown.enter');

    expect(defaultProps.locationSetter).toHaveBeenCalledWith('location', '');
  });
});
