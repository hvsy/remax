import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface WebViewProps extends BaseProps {
  src?: string;
  onMessage?: (e: any) => void;
}

const WebView = createRemaxComponent<WebViewProps>('web-view');

export default WebView;
