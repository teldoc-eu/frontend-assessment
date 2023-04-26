<script setup lang="ts">
import TypographyComponent from '../core/typography/TypographyComponent.vue';
import DynamicWeatherIcon from '../core/icons/DynamicWeatherIcon.vue';
import CardComponent from '../core/card/CardComponent.vue';
import DividerComponent from '../core/divider/DividerComponent.vue';

interface Props {
  weatherData: {
    temperature: number | undefined;
    weatherName: string | undefined;
    weatherImg: string | undefined;
  }[];
}

defineProps<Props>();
</script>

<template>
  <CardComponent class="container">
    <TypographyComponent size="lg"> Hourly </TypographyComponent>
    <div class="hoursContainer">
      <div v-for="(weatherHourly, i) in weatherData" :key="i" class="hoursContainer__item">
        <TypographyComponent size="md">
          {{ i ?? 'N/D' }}<span class="hoursContainer__abbr">{{ i <= 12 ? ' am' : ' pm' }}</span>
        </TypographyComponent>
        <DynamicWeatherIcon v-if="weatherHourly.weatherImg" :iconName="weatherHourly.weatherImg" />
        <TypographyComponent size="md">
          {{ weatherHourly.temperature ?? 'N/D' }}°C
        </TypographyComponent>
        <DividerComponent />
      </div>
    </div>
  </CardComponent>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1.6rem 2.4rem 3.2rem 2.4rem;
}

.hoursContainer {
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.4rem;
  padding: 3.2rem 0 1.2rem 0;

  &__item {
    text-align: center;
  }
  &__abbr {
    font-size: map-get($font-sizes, 'sm');
  }

  @include scrollStyle;
}
</style>
