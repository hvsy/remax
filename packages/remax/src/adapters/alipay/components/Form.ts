import * as React from 'react';
import createRemaxComponent from '../../../createRemaxComponent';

export interface FormProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  reportSubmit: boolean;
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
}
const Form = createRemaxComponent<FormProps>('form');

export default Form;
