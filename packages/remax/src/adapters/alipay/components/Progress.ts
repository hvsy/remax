import createRemaxComponent from '../../../createRemaxComponent';

export interface ProgressProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  percent?: number;
  showInfo?: boolean;
  strokeWidth?: string;
  activeColor?: string;
  backgroundColor?: string;
  active?: boolean;
}
const Progress = createRemaxComponent<ProgressProps>('progress');

export default Progress;
