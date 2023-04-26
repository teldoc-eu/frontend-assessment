<script setup lang="ts">
import { computed, defineAsyncComponent, type Component, watch } from 'vue';

interface Props {
  iconName: string;
}

const props = defineProps<Props>();

let component: Component;

watch(
  props,
  () => {
    component = computed(() =>
      defineAsyncComponent<Component>(() => import(`./weather/${props.iconName}Icon.vue`))
    );
  },
  { immediate: true }
);
</script>

<template>
  <component :is="component"></component>
</template>
