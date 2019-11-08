import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

const Label = createRemaxComponent<LabelProps>('label');

export interface LabelProps extends BaseProps {
  /** 绑定控件的 id 1.0.0 */
  for?: string;
}

export default Label;
