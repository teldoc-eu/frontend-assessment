<script setup lang="ts">
import { computed } from 'vue';
import type { SizeType } from '@/types/common.type';

interface Props {
  size: SizeType;
  isBold?: boolean;
  textAlign?: 'left' | 'center' | 'right';
}

const props = withDefaults(defineProps<Props>(), { isBold: false, textAlign: 'center' });

const boldClass = computed(() => (props.isBold ? 'bold' : ''));
</script>

<template>
  <span :class="[size, boldClass, textAlign]">
    <slot />
  </span>
</template>

<style scoped lang="scss">
@each $sizeName, $size in $font-sizes {
  .#{$sizeName} {
    font-size: $size;
    font-weight: 400;
    color: map-get($palette, 'light10');
  }
}

.bold {
  font-weight: 700;
}
.left {
  text-align: left;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
</style>
