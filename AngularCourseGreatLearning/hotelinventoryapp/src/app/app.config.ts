import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, RouterModule, withComponentInputBinding } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { requestInterceptor } from './request-interceptor';
import { InitService } from './init.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([requestInterceptor])),
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    provideAppInitializer(() => {
      const initService = inject(InitService);
      return initService.init();
    }),
    importProvidersFrom(FormsModule),
  ],
};
