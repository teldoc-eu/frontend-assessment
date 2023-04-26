import { describe, it, expect, vi } from 'vitest';

import { mount } from '@vue/test-utils';
import InputEnterComponent from './InputEnterComponent.vue';

describe('InputEnterComponent', () => {
  const defaultProps = {
    handleEnter: vi.fn(),
    value: 'test',
  };

  it('renders properly', () => {
    const wrapper = mount(InputEnterComponent, {
      props: { ...defaultProps },
    });

    expect(wrapper.find('input').element.value).toBe('test');
  });

  it('calls handleEnter', async () => {
    const wrapper = mount(InputEnterComponent, {
      props: { ...defaultProps },
    });

    await wrapper.find('input').trigger('keydown.enter');

    expect(defaultProps.handleEnter).toHaveBeenCalledWith('test');
  });
});
