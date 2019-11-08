import createRemaxComponent from '../../../createRemaxComponent';

export interface PickerProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  range?: string[] | any[];
  rangeKey?: string;
  value?: number;
  disabled?: boolean;
  onChange?: (e: any) => void;
}
const Picker = createRemaxComponent<PickerProps>('picker');

export default Picker;
