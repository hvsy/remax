import createRemaxComponent from '../../../createRemaxComponent';

export interface LabelProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  for?: string;
}
const Label = createRemaxComponent<LabelProps>('label');

export default Label;
