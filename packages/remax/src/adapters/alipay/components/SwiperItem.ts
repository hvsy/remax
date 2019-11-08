import createRemaxComponent from '../../../createRemaxComponent';

export interface SwiperItemProps {
  readonly dataset?: DOMStringMap;
  key: string;
}

const SwiperItem = createRemaxComponent<SwiperItemProps>('swiper-item');

export default SwiperItem;
