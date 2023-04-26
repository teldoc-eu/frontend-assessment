<script setup lang="ts">
import { withDefaults } from 'vue';

interface Props {
  handleChange: (value: string) => void;
  value?: string;
  type?: 'text'; // for future expansions
  placeholder?: string | undefined;
  size?: 'md' | undefined; // for future expansion use SizeType and implement styles for other sizes
}

const props = withDefaults(defineProps<Props>(), { type: 'text', size: 'md', placeholder: '' });
</script>

<template>
  <div :class="['input', props.size]">
    <input
      :class="['inputField', props.size]"
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.value"
      @keyup="(e) => handleChange((e.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped lang="scss">
@mixin inputCommon {
  width: 100%;
  border-radius: map-get($radiuses, 'md');

  &.md {
    font-size: map-get($font-sizes, 'sm');

    @media screen and (min-width: map-get($breakpoints, 'desktop')) {
      font-size: map-get($font-sizes, 'md');
    }
  }
}

.input {
  position: relative;
  background: map-get($gradients, 'darkToBlue') border-box;
  border: 2px solid transparent;

  &.md {
    height: 4.4rem;
    font-size: map-get($font-sizes, 'sm');

    @media screen and (min-width: map-get($breakpoints, 'desktop')) {
      height: 6.8rem;
      font-size: map-get($font-sizes, 'md');
    }
  }

  @include inputCommon;
}

.inputField {
  background: map-get($palette, 'dark10');
  color: map-get($palette, 'light10');

  &[type='text'],
  &[type='number'] {
    padding-left: 1.6rem;
  }
  &.md {
    height: 4rem;

    @media screen and (min-width: map-get($breakpoints, 'desktop')) {
      height: 6.4rem;
    }
  }

  @include inputCommon;
  @include resetInputStyle;
}
</style>
