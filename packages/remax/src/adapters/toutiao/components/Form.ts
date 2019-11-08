import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface FormProps extends BaseProps {
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
  reportSubmit?: boolean;
  catchsubmit?: (e: any) => void;
  catchreset?: (e: any) => void;
}

const Form = createRemaxComponent<FormProps>('form');

export default Form;
