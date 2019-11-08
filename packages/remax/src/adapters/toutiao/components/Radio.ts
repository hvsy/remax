import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface RadioProps extends BaseProps {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

const Radio = createRemaxComponent<RadioProps>('radio');

export default Radio;
