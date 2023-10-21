import { createRoot } from 'react-dom/client';
import React from 'react';
import { AngularModuleContext } from '@bubblydoo/angular-react';

(async () => {
  const { buildModule } = await import('@devzeebo/mf-angular-component/app.module.ref');
  const ngModule = await buildModule();

  const { App } = await import('./components/App');

  const root = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(root);

  createRoot(root).render((
    <AngularModuleContext.Provider value={ngModule}>
      <App />
    </AngularModuleContext.Provider>
  ));
})();
