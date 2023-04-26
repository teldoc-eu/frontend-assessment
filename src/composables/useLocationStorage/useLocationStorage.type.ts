import type { useStorage } from '@vueuse/core';
import type { LocationStorage } from '@/types/storage.type';

export interface UseLocationStorage {
  initializeLocationStorage: () => void;
  getClientLocation: () => void;
  getLocationStorage: () => ReturnType<typeof useStorage<LocationStorage>>;
  setLocationStorage: (locationStorage: LocationStorage) => void;
  setLocationStorageKey: (
    key: keyof LocationStorage,
    value: Exclude<LocationStorage[typeof key], undefined>
  ) => void;
}
