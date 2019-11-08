import createRemaxComponent from '../../../createRemaxComponent';

export interface SliderProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  value?: number;
  showValue?: boolean;
  activeColor?: string;
  backgroundColor?: string;
  trackSize?: number;
  handleSize?: number;
  handleColor?: string;
  onChange?: (e: any) => void;
  onChanging?: (e: any) => void;
}
const Slider = createRemaxComponent<SliderProps>('slider');

export default Slider;
