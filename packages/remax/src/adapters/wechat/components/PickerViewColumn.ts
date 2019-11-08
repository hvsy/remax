import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

const PickerViewColumn = createRemaxComponent<PickerViewColumnProps>(
  'picker-view-column'
);

export type PickerViewColumnProps = BaseProps;

export default PickerViewColumn;
