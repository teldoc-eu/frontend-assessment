<script setup lang="ts">
import CardWithDividerComponent from '../composed/cardWithDivider/CardWithDivider.vue';
import TypographyComponent from '../core/typography/TypographyComponent.vue';
import DynamicWeatherIcon from '../core/icons/DynamicWeatherIcon.vue';

interface Props {
  city: string;
  weatherData: {
    temperature: number | undefined;
    weatherName: string | undefined;
    weatherImg: string | undefined;
    humidity: number | undefined;
    aqi: string | undefined;
  };
}

defineProps<Props>();
</script>

<template>
  <CardWithDividerComponent>
    <template v-slot:upperComponent>
      <div class="upperContainer">
        <TypographyComponent size="lg"> {{ city }} </TypographyComponent>
        <div class="upperContainer__weatherAndTemp">
          <DynamicWeatherIcon v-if="weatherData.weatherImg" :iconName="weatherData.weatherImg" />
          <TypographyComponent size="xl" isBold
            >{{ weatherData.temperature ?? 'N/D' }}°C</TypographyComponent
          >
        </div>
        <TypographyComponent size="lg">{{ weatherData.weatherName || 'N/D' }}</TypographyComponent>
      </div>
    </template>
    <template v-slot:lowerComponent>
      <div class="lowerContainer">
        <div class="lowerContainer__row">
          <TypographyComponent size="lg">Hum</TypographyComponent>
          <TypographyComponent size="lg">{{ weatherData.humidity ?? 'N/D' }}%</TypographyComponent>
        </div>
        <div class="lowerContainer__row">
          <TypographyComponent size="lg">AQI</TypographyComponent>
          <span :class="['aqiCircle', `aqiCircle--${weatherData.aqi}`]" />
        </div>
      </div>
    </template>
  </CardWithDividerComponent>
</template>

<style scoped lang="scss">
$aqiCircleColors: (
  good: #38c321,
  moderate: #ddff00,
  unhealthyForSensitive: #fff700,
  unhealthy: #ffc400,
  veryUnhealthy: #ff5e00,
  hazardous: #c32121,
);
.upperContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.6rem;

  &__weatherAndTemp {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    svg {
      scale: 2;
    }
  }
}

.lowerContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;

  &__row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5.6rem;
  }
}

.aqiCircle {
  border-radius: 50%;
  border: 1px solid map-get($palette, 'grey10');
  width: 3.2rem;
  height: 3.2rem;

  @each $aqiName, $aqiColor in $aqiCircleColors {
    &--#{$aqiName} {
      background-color: $aqiColor;
    }
  }
}
</style>
