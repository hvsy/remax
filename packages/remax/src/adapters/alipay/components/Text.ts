import * as React from 'react';
import createRemaxComponent from '../../../createRemaxComponent';

export interface TextProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  selectable?: boolean;
  space?: string;
  decode?: boolean;
  numberOfLines?: number;
}
const Text = createRemaxComponent<TextProps>('text');

export default Text;
