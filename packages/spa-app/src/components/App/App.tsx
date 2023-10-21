import type { DOMAttributes } from 'react';
import React from 'react';

import { RepoChart } from '@devzeebo/mf-react-component/RepoChart';
// import { AngularWrapper } from '@bubblydoo/angular-react';
// import { MfExposedComponent } from '@devzeebo/mf-angular-component/mfexposed.component';
import { Grid } from '../Grid';

const App = () => (
  <Grid>
    <span>
      SPA app!
    </span>
    <Grid direction="row">
      <RepoChart />
      <mf-exposed-component />
    </Grid>
  </Grid>
);
export default App;

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['mf-exposed-component']: CustomElement<any>;
    }
  }
}
