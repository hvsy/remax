import * as React from 'react';
import createRemaxComponent from '../../../createRemaxComponent';

export interface CoverImageProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  src?: string;
  onTap?: (e: any) => void;
}
const CoverImage = createRemaxComponent<CoverImageProps>('cover-image');

export default CoverImage;
