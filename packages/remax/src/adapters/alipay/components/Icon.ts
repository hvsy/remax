import createRemaxComponent from '../../../createRemaxComponent';
export interface IconProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className: string;
  type:
    | 'info'
    | 'warn'
    | 'waiting'
    | 'cancel'
    | 'download'
    | 'search'
    | 'clear'
    | 'success'
    | 'success_no_circle'
    | 'loading';
  size?: number;
  color?: string;
}
const Icon = createRemaxComponent<IconProps>('icon');

export default Icon;
