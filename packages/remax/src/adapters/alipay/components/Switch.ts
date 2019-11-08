import createRemaxComponent from '../../../createRemaxComponent';

export interface SwitchProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  controlled?: boolean;
  onChange?: (e: any) => void;
}

const Switch = createRemaxComponent<SwitchProps>('switch');

export default Switch;
