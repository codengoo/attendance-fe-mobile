import { MMKV } from 'react-native-mmkv'
export const storage = new MMKV()

export enum EStorageKey {
    AppConfig = "app_config"
}

export function getStorage<T extends object>(key: EStorageKey): T | undefined {
    const value = storage.getString(key);
    if (value) return JSON.parse(value);
    return;
}

export function setStorage<T extends object>(key: EStorageKey, value: T): void {
    storage.set(key, JSON.stringify(value));
}