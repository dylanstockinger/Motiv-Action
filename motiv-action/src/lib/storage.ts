export const STORAGE_KEY = "thoughts-storage";

export const storageConfig = {
  auth: {
    storageKey: STORAGE_KEY,
    persistSession: true,
    autoRefreshToken: true,
    storage: window.localStorage,
  },
};

export function getStorageValue(key: string) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const parsedValue = JSON.parse(saved ?? "null");
  return parsedValue;
}
