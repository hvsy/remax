import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

interface Node {
  name: string;
  attrs?: any;
  children?: Node[];
}

export interface RichText extends BaseProps {
  nodes?: Node | string;
}

const RichText = createRemaxComponent<RichText>('rich-text');

export default RichText;
