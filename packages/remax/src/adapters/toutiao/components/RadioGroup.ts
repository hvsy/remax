import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface RadioGroupProps extends BaseProps {
  onChange?: (e: any) => void;
}

const RadioGroup = createRemaxComponent<RadioGroupProps>('radio-group');

export default RadioGroup;
