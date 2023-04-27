<script setup lang="ts">
import { ref } from 'vue';
import IconArrow from '../../core/icons/IconArrow.vue';
import InputComponent from '../../core/input/InputComponent.vue';

interface Props {
  handleEnter: (value: string) => void;
  value?: string;
  placeholder?: string;
  size?: 'md'; // for future expansion use SizeType and implement styles for other sizes
}

const props = defineProps<Props>();

const inputValue = ref(props.value || '');

const handleChange = (value: string) => {
  inputValue.value = value;
};
</script>

<template>
  <InputComponent
    :placeholder="props.placeholder"
    :size="props.size"
    :value="inputValue"
    :handleChange="handleChange"
    @keydown.enter="() => handleEnter(inputValue)"
    :class="['input', size]"
  />
  <button :class="['adornment', size]" @click="() => handleEnter(inputValue)" aria-label="enter">
    <IconArrow />
  </button>
</template>

<style scoped lang="scss">
.input {
  &.md {
    margin-right: 3.2rem;

    @media screen and (min-width: map-get($breakpoints, 'desktop')) {
      margin-right: 6.4rem;
    }
  }
}
.adornment {
  position: absolute;
  right: 2.5rem;
  background: transparent;

  svg {
    fill: map-get($palette, 'light10');
  }

  &.md {
    top: 1.2rem;
    height: 1.6rem;
    width: 1.6rem;

    svg {
      height: 1.6rem;
      width: 1.6rem;
    }

    @media screen and (min-width: map-get($breakpoints, 'desktop')) {
      top: 1.6rem;
      height: 3.2rem;
      width: 3.2rem;

      svg {
        height: 3.2rem;
        width: 3.2rem;
      }

      input {
        padding-right: 3.2rem;
      }
    }
  }

  @include resetButtonStyle;
}
</style>
