// // import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { createCustomElement } from '@angular/elements';
// import { createApplication } from '@angular/platform-browser';
// // import { AppModule } from './app.module';
// import { MfExposedComponent } from './app/mf-exposed/mfexposed.component';

// export const buildModule = async (module = AppModule) => (
//   platformBrowserDynamic()
//     .bootstrapModule(module)
// );

export const buildWebComponents = (async () => {
  console.log('building wc');
  // const app = await createApplication({
  //   providers: [
  //     /* your global providers here */
  //   ],
  // });

  // const mfExposed = createCustomElement(MfExposedComponent, {
  //   injector: app.injector,
  // });

  // customElements.define('mf-exposed-component', mfExposed);
  console.log('done wc');
});
