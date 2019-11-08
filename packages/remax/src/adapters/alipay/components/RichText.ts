import createRemaxComponent from '../../../createRemaxComponent';

export interface RichTextNode {
  readonly dataset?: DOMStringMap;
  type?: string;
  name: string;
  attrs?: any;
  children?: RichTextNode;
}

export interface RichTextProps {
  nodes?: RichTextNode[];
}
const RichText = createRemaxComponent<RichTextProps>('rich-text');

export default RichText;
