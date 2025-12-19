import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  http: HttpClient = inject(HttpClient);

  config: any;

  init() {
    return this.http.get('config.json').pipe(
      //config.json is in /public/
      tap({
        next: (config: any) => {
          this.config = config;
        },
      })
    );
  }
}
