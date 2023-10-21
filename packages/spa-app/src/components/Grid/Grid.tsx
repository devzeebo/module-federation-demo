import React from 'react';
import type { PropsWithChildren } from 'react';

export type GridProps = PropsWithChildren<{
  direction?: 'column' | 'row'
}>;

const Grid = ({
  direction = 'column',
  children,
}: GridProps) => (
  <div style={{
    display: 'flex',
    flexDirection: direction,
  }}
  >
    {children}
  </div>
);
export default Grid;
