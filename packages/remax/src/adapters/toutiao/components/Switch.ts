import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface SwitchProps extends BaseProps {
  checked?: boolean;
  disabled?: boolean;
  type?: string;
  onChange?: (e: any) => void;
  color?: string;
}

const Switch = createRemaxComponent<SwitchProps>('switch');

export default Switch;
