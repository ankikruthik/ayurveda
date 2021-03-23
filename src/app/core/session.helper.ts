import { Injectable } from '@angular/core';

@Injectable()
export class SessionHelper {
    private _storage: Storage;

    constructor() {
        this._storage = sessionStorage;
    }

    set(key: string, value: any) {
        this._storage.setItem(key, JSON.stringify(value));
    }

    get<T>(key: string): T {
        let item = this._storage.getItem(key);
        if (!item || item === 'undefined' || item === null) return null;
        return <T>JSON.parse(item);
    }
    removeItem(key: string) {
    this._storage.removeItem(key);      
        
    }
}
