import * as React from 'react';
import createRemaxComponent from '../../../createRemaxComponent';

export interface MovableAreaProps {
  readonly dataset?: DOMStringMap;
  style?: React.CSSProperties;
  width: number;
  height: number;
}

const MovableArea = createRemaxComponent<MovableAreaProps>('movable-area');

export default MovableArea;
