import createRemaxComponent from '../../../createRemaxComponent';

export interface WebViewProps {
  readonly dataset?: DOMStringMap;
  src?: string;
  onMessage?: (e: any) => void;
}

const WebView = createRemaxComponent<WebViewProps>('web-view');

export default WebView;
