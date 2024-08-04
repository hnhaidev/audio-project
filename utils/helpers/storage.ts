import { MMPLAYER_CONFIG } from "@/configs";

const STORAGE = window.localStorage;

const storage = {
  get<T>(key: string, data: T) {
    if (STORAGE) {
      const item = STORAGE.getItem(key);
      if (item) {
        return Array.isArray(data) ? JSON.parse(item) : item;
      }
      return data;
    }
  },
  set(key: string, val: string): void {
    if (STORAGE) {
      STORAGE.setItem(key, val);
    }
  },
  clear(key: string): void {
    if (STORAGE) {
      STORAGE.removeItem(key);
    }
  },
};

// Volume configuration
const VOLUME_KEY = "__mmPlayer_volume__";
export function getVolume() {
  const volume = storage.get(VOLUME_KEY, MMPLAYER_CONFIG.VOLUME);
  return Number(volume);
}
export function setVolume(volume: number) {
  storage.set(VOLUME_KEY, String(volume));
  return volume;
}
