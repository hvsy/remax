import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface ViewProps extends BaseProps {
  slot?: string;
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
}

const View = createRemaxComponent<ViewProps>('view');

export default View;
