import { InjectionToken } from '@angular/core';

export const sessionStorageToken = new InjectionToken<any>('Session Storage', {
  providedIn: 'root',
  factory() {
    return sessionStorage;
  },
});
