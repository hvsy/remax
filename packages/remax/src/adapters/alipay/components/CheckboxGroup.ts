import createRemaxComponent from '../../../createRemaxComponent';

export interface CheckboxGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}

const CheckboxGroup = createRemaxComponent<CheckboxGroupProps>(
  'checkbox-group'
);

export default CheckboxGroup;
