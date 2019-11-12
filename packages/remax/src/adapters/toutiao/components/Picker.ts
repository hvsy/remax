import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

type Mode = 'selector' | 'multiSelector' | 'time' | 'date' | 'region';

interface PickerPropsMap extends BaseProps {
  selector: SelectorProps;
  multiSelector: MutiSelectorProps;
  time: TimeProps;
  date: DateProps;
  region: RegionProps;
}

interface SelectorProps {
  range?: string[] | any[];
  rangeKey?: string;
  value?: number;
  onChange?: (e: any) => void;
  disabled?: boolean;
  onCancel?: (e: any) => void;
}

type MutiSelectorProps = { onColumnchange?: (e: any) => void } & SelectorProps;

interface TimeProps {
  value?: string;
  start?: string;
  end?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  onCancel?: (e: any) => void;
}

type DateProps = TimeProps & { fields?: string };

interface RegionProps {
  value?: any[];
  customItem?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  onCancel?: (e: any) => void;
}

export type PickerProps<T> = T extends Mode
  ? {
      mode: T;
    } & PickerPropsMap[T]
  : never;

const Picker = createRemaxComponent<PickerProps<Mode>>('picker');

export default Picker;
