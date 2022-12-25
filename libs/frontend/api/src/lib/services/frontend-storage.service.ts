import {StorageMap} from '../interfaces/storage-map.interface'

export class FrontendStorageService<T extends StorageMap> {
  private _storage: Storage

  constructor(storage: Storage) {
    this._storage = storage
  }

  get<K extends keyof T>(key: K) {
    const data = this._storage.getItem(String(key))
    if (data) {
      try {
        return JSON.parse(data)
      } catch {
        return data
      }
    }
  }

  set<K extends keyof T>(key: K, value: T[K]) {
    if (value) {
      const data = typeof value !== 'string' ? JSON.stringify(value) : value

      this._storage.setItem(String(key), data)
    }
  }

  remove<K extends keyof T>(key: K) {
    this._storage.removeItem(String(key))
  }
}
