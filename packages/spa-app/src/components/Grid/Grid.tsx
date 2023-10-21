import React from 'react';
import type { PropsWithChildren } from 'react';

export type GridProps = PropsWithChildren<{
  direction?: 'column' | 'row',
  fill?: boolean,
  style?: React.CSSProperties,
}>;

const Grid = ({
  direction = 'column',
  children,
  fill = false,
  style = {},
}: GridProps) => (
  <div style={{
    display: 'flex',
    flexDirection: direction,
    flex: fill ? '1 0 0%' : 'none',
    ...style,
  }}
  >
    {children}
  </div>
);
export default Grid;
