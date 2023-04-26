<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  background: map-get($gradients, 'darkToBlue') border-box;
  border: 1px solid map-get($palette, 'grey10');
  border-radius: map-get($radiuses, 'sm');
}
</style>
