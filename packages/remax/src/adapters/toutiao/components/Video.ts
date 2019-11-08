import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface VideoProps extends BaseProps {
  src?: string;
  autoplay?: boolean;
  poster?: string;
  onPlay?: (e: any) => void;
  onPause?: (e: any) => void;
  onEnded?: (e: any) => void;
  onError?: (e: any) => void;
  onTimeUpdate?: (e: any) => void;
  onFullscreenchange?: (e: any) => void;
}

const Video = createRemaxComponent<VideoProps>('video');

export default Video;
