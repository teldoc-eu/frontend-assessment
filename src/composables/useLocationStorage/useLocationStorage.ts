import { useStorage, useGeolocation } from '@vueuse/core';
import { watchEffect } from 'vue';
import { LOCATION_STORAGE_KEY } from '../../configs/storage.config';

import type { UseLocationStorage } from './useLocationStorage.type';
import type { LocationStorage } from '@/types/storage.type';

export const useLocationStorage = (): UseLocationStorage => {
  let locationStorage: ReturnType<typeof useStorage<LocationStorage>>;

  const initializeLocationStorage = () => {
    if (!locationStorage?.value) {
      locationStorage = useStorage<LocationStorage>(LOCATION_STORAGE_KEY, {});
    }
  };

  const getClientLocation = () => {
    if (!locationStorage?.value) {
      initializeLocationStorage();
    }
    const { coords, isSupported, error } = useGeolocation();

    if (locationStorage.value.location) {
      return;
    }

    const unwatch = watchEffect(() => {
      const { latitude, longitude } = coords.value;
      if (
        !locationStorage.value.location &&
        isSupported.value &&
        !error.value &&
        Number.isFinite(latitude) &&
        Number.isFinite(longitude)
      ) {
        locationStorage.value.location = `${latitude},${longitude}`;
        unwatch();
      }
    });
  };

  const getLocationStorage = () => {
    if (!locationStorage?.value) {
      initializeLocationStorage();
    }
    return locationStorage;
  };

  const setLocationStorage = (value: LocationStorage) => {
    if (!locationStorage?.value) {
      initializeLocationStorage();
    }

    locationStorage.value = value;
  };

  const setLocationStorageKey = (
    key: keyof LocationStorage,
    value: Exclude<LocationStorage[typeof key], undefined>
  ) => {
    if (!locationStorage?.value) {
      initializeLocationStorage();
    }
    if (locationStorage.value[key] !== value) {
      (locationStorage.value[key] as string | number) = value;
    }
  };

  return {
    initializeLocationStorage,
    getClientLocation,
    getLocationStorage,
    setLocationStorage,
    setLocationStorageKey,
  };
};
