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
import LoaderComponent from '../components/core/loader/LoaderComponent.vue';

const { initializeLocationStorage, getClientLocation, getLocationStorage, setLocationStorageKey } =
  useLocationStorage();

initializeLocationStorage();
getClientLocation();

const locationFromStorage = getLocationStorage();
const weatherRequestData = ref<UseWeather>();

watch(
  locationFromStorage,
  async () => {
    const { location } = locationFromStorage.value;

    if (location && weatherRequestData?.value?.weatherData?.location?.name !== location) {
      weatherRequestData.value = await useWeather(location);
    }
  },
  { immediate: true }
);

const weatherDataForPresentation = computed(
  () => weatherRequestData.value && mapWeather(weatherRequestData.value?.weatherData)
);
</script>

<template>
  <main>
    <LoaderComponent v-if="weatherRequestData?.isFetching" />
    <div v-else class="wrapper">
      <SearchComponent :location-setter="setLocationStorageKey" />
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
