import createRemaxComponent from '../../../createRemaxComponent';

export interface RadioGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}

const RadioGroup = createRemaxComponent<RadioGroupProps>('radio-group');

export default RadioGroup;
