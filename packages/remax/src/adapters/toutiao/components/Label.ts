import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface LabelProps extends BaseProps {
  for?: string;
}

const Label = createRemaxComponent<LabelProps>('label');

export default Label;
