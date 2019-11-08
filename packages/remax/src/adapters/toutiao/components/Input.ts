import { CSSProperties } from 'react';
import { BaseProps } from './baseTyping';
import createRemaxComponent from '../../../createRemaxComponent';

export interface InputProps extends BaseProps {
  focus?: boolean;
  maxlength?: number;
  value: string;
  password?: boolean;
  type: 'text' | 'number' | 'digit';
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  adjustPosition?: boolean;
  placeholder?: string;
  placeholderStyle?: CSSProperties;
  placeholderClass?: string;
  disabled?: boolean;
  cursorSpacing?: number;
  onInput?: (e: any) => void | string;
  onClick?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onConfirm?: () => void;
}

export default createRemaxComponent<InputProps>('input');
