import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface SwiperItemProps extends BaseProps {
  itemId?: string;
}

const SwiperItem = createRemaxComponent<SwiperItemProps>('swiper-item');

export default SwiperItem;
