import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface ButtonProps extends BaseProps {
  size?: 'default' | 'mini';
  type?: 'primary' | 'default';
  disabled?: boolean;
  loading?: boolean;
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
  formType?: 'submit' | 'reset';
  openType?: 'share' | 'getPhoneNumber';
  onClick?: (e: any) => void;
  onGetphonenumber?: (e: any) => void;
}

const Button = createRemaxComponent<ButtonProps>('button');

export default Button;
