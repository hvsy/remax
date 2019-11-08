import createRemaxComponent from '../../../createRemaxComponent';

export interface LifestyleProps {
  readonly dataset?: DOMStringMap;
  publicId: string;
  onFollow?: (e: any) => void;
}

const Lifestyle = createRemaxComponent<LifestyleProps>('lifestyle');

export default Lifestyle;
