import * as React from 'react';
import createRemaxComponent from '../../../createRemaxComponent';

export interface CoverViewProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  onTap?: (e: any) => void;
}
const CoverView = createRemaxComponent<CoverViewProps>('cover-view');

export default CoverView;
