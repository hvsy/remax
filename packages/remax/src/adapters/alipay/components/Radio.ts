import createRemaxComponent from '../../../createRemaxComponent';

export interface RadioProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

const Radio = createRemaxComponent<RadioProps>('radio');

export default Radio;
