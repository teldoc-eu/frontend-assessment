<script setup lang="ts">
import type { UseLocationStorage } from '@/composables/useLocationStorage/useLocationStorage.type';
import InputEnterComponent from '../composed/inputEnter/InputEnterComponent.vue';

interface Props {
  locationSetter: UseLocationStorage['setLocationStorageKey'];
}

const props = defineProps<Props>();

const handleSearch = (value: string) => {
  props.locationSetter('location', value);
};
</script>

<template>
  <div class="wrapper">
    <InputEnterComponent
      size="md"
      value=""
      :handle-enter="handleSearch"
      placeholder="Search city or Zip code"
    />
  </div>
</template>

<style scoped lang="scss"></style>
