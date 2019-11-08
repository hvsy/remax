import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface CheckboxGroupProps extends BaseProps {
  onChange?: (e: any) => void;
}

const CheckboxGroup = createRemaxComponent<CheckboxGroupProps>(
  'checkbox-group'
);

export default CheckboxGroup;
