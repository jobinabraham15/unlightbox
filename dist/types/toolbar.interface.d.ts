/// <reference types="react" />
export interface IToolbarProps {
    onZoomIn: Function;
    onZoomOut: Function;
    onRotate: Function;
    zoominState?: any;
    zoomoutState?: any;
    rotateState?: any;
    style?: React.CSSProperties;
    className?: string;
}
