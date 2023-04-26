<script setup lang="ts">
import TypographyComponent from '../core/typography/TypographyComponent.vue';
import DynamicWeatherIcon from '../core/icons/DynamicWeatherIcon.vue';
import CardComponent from '../core/card/CardComponent.vue';
import { useDate } from '../../composables/useDate/useDate';

interface Props {
  weatherData: {
    temperature: number | undefined;
    weatherName: string | undefined;
    weatherImg: string | undefined;
  }[];
}

const { datePlusDays} = useDate()

defineProps<Props>();
</script>

<template>
  <CardComponent class="container">
    <TypographyComponent size="lg"> Next 7 days </TypographyComponent>
    <div class="dailyContainer">
      <div v-for="(weatherDaily, i) in weatherData.slice(1)" :key="i" class="dailyContainer__item">
        <TypographyComponent size="lg"> {{ datePlusDays(i) }} </TypographyComponent>
        <DynamicWeatherIcon v-if="weatherDaily.weatherImg" :iconName="weatherDaily.weatherImg" />
        <TypographyComponent size="md">
          {{ weatherDaily.temperature ?? 'N/D' }}°C
        </TypographyComponent>
      </div>
    </div>
  </CardComponent>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3.2rem 2.4rem;
}

.dailyContainer {
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3.2rem;
  padding: 3.2rem 0 1.2rem 2.4rem;

  @media screen and (min-width: map-get($breakpoints, 'desktop')) {
    justify-content: center;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    text-align: center;
  }
  svg {
    scale: 2;
  }
  @include scrollStyle;
}
</style>
