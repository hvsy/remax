import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface ScrollViewProps extends BaseProps {
  scrollX?: boolean;
  scrollY?: boolean;
  upperThreshold?: number;
  lowerThreshold?: number;
  scrollTop?: number;
  scrollLeft?: number;
  scrollIntoView?: string;
  scrollWithAnimation?: boolean;
  onScrollToUpper?: (e: any) => void;
  onScrollToLower?: (e: any) => void;
  onScroll?: (e: any) => void;
}

const ScrollView = createRemaxComponent<ScrollViewProps>('scroll-view');

export default ScrollView;
