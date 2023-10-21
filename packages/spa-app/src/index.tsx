import { createRoot } from 'react-dom/client';
import React from 'react';

const logImport = (e: any) => {
  console.error(e);
  return Promise.reject(e);
};

(async () => {
  const { buildWebComponents } = await import('@devzeebo/mf-angular-component/bootstrapper');
  // await buildWebComponents();

  const { App } = await import('./components/App');
  // const { AngularModuleContext } = await import('@bubblydoo/angular-react');

  const root = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(root);

  createRoot(root).render((
    // <AngularModuleContext.Provider value={ngModule}>
    <App />
    // </AngularModuleContext.Provider>
  ));
})();
