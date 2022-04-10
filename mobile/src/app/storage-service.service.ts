import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageServiceService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    this._storage = this.storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    return this._storage?.set(key, value);
  }

  public get(key) {
    return this._storage?.get(key);
  }
  public clear() {
    return this._storage?.clear();
  }
}
