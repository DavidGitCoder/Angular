import { InjectionToken } from '@angular/core';
//must obtain the value at runtime
export const localStorageToken = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory() {
    return localStorage;
  },
});
