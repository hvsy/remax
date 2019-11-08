import createRemaxComponent from '../../../createRemaxComponent';

export interface CheckboxProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  onChange?: (e: any) => void;
}
const Checkbox = createRemaxComponent<CheckboxProps>('checkbox');

export default Checkbox;
