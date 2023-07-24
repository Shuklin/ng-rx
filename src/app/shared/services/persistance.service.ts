import {Injectable} from "@angular/core";

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to LocalStorage', e);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(window.localStorage.getItem(key))
    } catch (e) {
      console.error('Error reading LocalStorage', e);
      return null;
    }
  }

}
