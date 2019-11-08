import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface NavigatorProps extends BaseProps {
  url: string;
  delta?: number;
  openType?: 'navigate' | 'redirect' | 'switchTab' | 'navigateBack';
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
}

const Navigator = createRemaxComponent<NavigatorProps>('navigator');

export default Navigator;
