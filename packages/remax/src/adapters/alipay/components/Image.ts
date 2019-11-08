import * as React from 'react';
import createRemaxComponent from '../../../createRemaxComponent';

export interface ImageProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  src?: string;
  mode?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix';
  style?: React.CSSProperties;
  lazyLoad?: boolean;
  onLoad?: (e: any) => void;
  onError?: (e: any) => void;
  onTap?: (e: any) => void;
  onClick?: (e: any) => void;
  catchTap?: (e: any) => void;
}
const Image = createRemaxComponent<ImageProps>('image');

export default Image;
