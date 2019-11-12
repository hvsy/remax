import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface SliderProps extends BaseProps {
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  value?: number;
  activeColor?: string;
  backgroundColor?: string;
  blockSize?: number;
  blockColor?: string;
  showValue?: boolean;
  onChange?: (e: any) => void;
  onChanging?: (e: any) => void;
}

const Slider = createRemaxComponent<SliderProps>('slider');

export default Slider;
