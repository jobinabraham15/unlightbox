export interface IToolbarProps {
    onZoomIn: Function;
    onZoomOut: Function;
    onRotate: Function;
    zoominState?: any; // convert to Button state after export
    zoomoutState?: any;
    rotateState?: any;
    style?: React.CSSProperties;
    className?: string;
  }