<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useLocationStorage } from '../composables/useLocationStorage/useLocationStorage';
import { useWeather } from '../composables/useWeather/useWeather';
import SearchComponent from '../components/search/SearchComponent.vue';
import type { UseWeather } from '@/composables/useWeather/useWeather.type';
import CurrentWeatherComponent from '../components/currentWeather/CurrentWeatherComponent.vue';
import { mapWeather } from '../utils/weatherMapper/weatherMapper.util';
import WeatherHourlyComponent from '../components/weatherHourly/WeatherHourlyComponent.vue';
import WeatherDailyComponent from '../components/wratherDaily/WeatherDailyComponent.vue';
import TypographyComponent from '../components/core/typography/TypographyComponent.vue';

const { initializeLocationStorage, getClientLocation, getLocationStorage, setLocationStorageKey } =
  useLocationStorage();

initializeLocationStorage();
getClientLocation();

const locationFromStorage = getLocationStorage();
const weatherRequestData = ref<UseWeather>();
const weatherDataForPresentation = computed(
  () => weatherRequestData.value && mapWeather(weatherRequestData.value?.weatherData)
);
const isDataForPresentation = computed(
  () =>
    !!(weatherDataForPresentation.value?.city &&
    weatherDataForPresentation.value?.current &&
    weatherDataForPresentation.value?.daily &&
    weatherDataForPresentation.value?.hourly)
);

watch(
  locationFromStorage,
  async () => {
    const { location } = locationFromStorage.value;
    const locationFromApi = weatherRequestData?.value?.weatherData?.location?.name;

    if (location && locationFromApi !== location) {
      weatherRequestData.value = await useWeather(location);
    }
  },
  { immediate: true }
);
</script>

<template>
  <main>
    <div class="wrapper">
      <SearchComponent :location-setter="setLocationStorageKey" />
      <template v-if="isDataForPresentation">
        <CurrentWeatherComponent
          v-if="weatherDataForPresentation?.city && weatherDataForPresentation?.current"
          :city="weatherDataForPresentation.city"
          :weather-data="weatherDataForPresentation.current"
        />
        <WeatherHourlyComponent
          v-if="weatherDataForPresentation?.hourly"
          :weather-data="weatherDataForPresentation?.hourly"
        />
        <WeatherDailyComponent
          v-if="weatherDataForPresentation?.daily"
          :weather-data="weatherDataForPresentation?.daily"
        />
      </template>
      <template v-else>
        <TypographyComponent size="md">No data for location: <i>{{ locationFromStorage.location }}</i></TypographyComponent>
      </template>
    </div>
  </main>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
</style>
