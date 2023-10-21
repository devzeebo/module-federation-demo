import { useCurry } from '@react-shanties/core';
import React, { useState } from 'react';

const RepoChart = () => {
  const [branch, setBranch] = useState('main');
  const gotoDev = useCurry(setBranch, 'dev');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        git chart for
        {' '}
        {branch}
      </div>
      <button onClick={gotoDev} type="button">
        Switch Branch
      </button>
    </div>
  );
};

export default RepoChart;
