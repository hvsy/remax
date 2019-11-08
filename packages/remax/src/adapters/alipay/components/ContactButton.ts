import createRemaxComponent from '../../../createRemaxComponent';

export interface LifestyleProps {
  readonly dataset?: DOMStringMap;
  tntInstId: string;
  scene: string;
  size?: string | number;
  color?: string;
  icon?: string;
  alipayCardNo?: string;
}

const ContractButton = createRemaxComponent<LifestyleProps>('contact-button');

export default ContractButton;
