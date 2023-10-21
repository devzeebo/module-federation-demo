import React from 'react';

import { RepoChart } from '@devzeebo/mf-react-component/RepoChart';
import { AngularWrapper } from '@bubblydoo/angular-react';
import { MfExposedComponent } from '@devzeebo/mf-angular-component/mfexposed.component';
import { Grid } from '../Grid';

const App = () => (
  <Grid>
    <span>
      SPA app!
    </span>
    <Grid direction="row">
      <RepoChart />
      <AngularWrapper
        component={MfExposedComponent}
      />
    </Grid>
  </Grid>
);
export default App;
