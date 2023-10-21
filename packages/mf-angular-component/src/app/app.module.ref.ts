import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

export const buildModule = async () => (
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
);
