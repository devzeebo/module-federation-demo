import type { DOMAttributes } from 'react';
import React from 'react';

import { RepoChart } from '@devzeebo/mf-react-component/RepoChart';
// import { AngularWrapper } from '@bubblydoo/angular-react';
// import { MfExposedComponent } from '@devzeebo/mf-angular-component/mfexposed.component';
import { Grid } from '../Grid';

const App = () => (
  <Grid style={{
    minHeight: '100vh',
  }}
  >
    <span>
      SPA app!
    </span>
    <Grid
      direction="row"
      fill
    >
      <Grid fill style={{ padding: '1em', margin: '1em', border: '1px solid lightgray' }}>
        <span style={{ alignSelf: 'center' }}>React Component</span>
        <Grid fill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <RepoChart />
        </Grid>
      </Grid>
      <Grid fill style={{ padding: '1em', margin: '1em', border: '1px solid lightgray' }}>
        <span style={{ alignSelf: 'center' }}>Angular Component</span>
        <Grid fill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <mf-exposed-component />
        </Grid>
      </Grid>
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
