import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Hash routing keeps the site working on any static host without server rewrites.
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
    ),
  ],
};
