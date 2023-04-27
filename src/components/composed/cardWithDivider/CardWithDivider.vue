<script setup lang="ts">
import CardComponent from '../../core/card/CardComponent.vue';
import DividerComponent from '../../core/divider/DividerComponent.vue';
</script>

<template>
  <CardComponent>
    <slot name="upperComponent" />
    <DividerComponent />
    <slot name="lowerComponent" />
  </CardComponent>
</template>
