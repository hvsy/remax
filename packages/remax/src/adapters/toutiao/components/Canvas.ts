import createRemaxComponent from '../../../createRemaxComponent';
import { BaseProps } from './baseTyping';

export interface CanvasProps extends BaseProps {
  cavasId: string;
}

const Canvas = createRemaxComponent<CanvasProps>('canvas');

export default Canvas;
