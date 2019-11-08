import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface PickerViewProps extends BaseProps {
  value?: number[];
  indicatorStyle: string;
  maskStyle?: string;
  onChange?: (e: any) => void;
}

const PickerView = createRemaxComponent<PickerViewProps>('picker-view');

export default PickerView;
