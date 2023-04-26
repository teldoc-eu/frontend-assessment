import { describe, it, expect, vi, beforeEach } from 'vitest';

import { mount } from '@vue/test-utils';
import InputComponent from './InputComponent.vue';

describe('InputComponent', () => {
  const handleChangeMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders properly', () => {
    const wrapper = mount(InputComponent, {
      props: { handleChange: handleChangeMock, value: 'test' },
    });

    expect(wrapper.find('input').element.value).toBe('test');
  });

  it('calls handleChange on input', async () => {
    const wrapper = mount(InputComponent, {
      props: { handleChange: handleChangeMock },
    });

    await wrapper.find('input').trigger('keyup');

    expect(handleChangeMock).toHaveBeenCalledWith('');
  });
});
