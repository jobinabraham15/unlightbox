/// <reference types="react" />
export interface IToolbarIconProps {
    zoomin?: React.Component | React.ReactElement<HTMLElement>;
    zoomout?: React.Component | React.ReactElement<HTMLElement>;
    rotate?: React.Component | React.ReactElement<HTMLElement>;
    download?: React.Component | React.ReactElement<HTMLElement>;
    replace?: boolean;
}
export interface IToolbarProps {
    onZoomin: (e: React.SyntheticEvent) => void;
    onZoomout: (e: React.SyntheticEvent) => void;
    onRotate: (e: React.SyntheticEvent) => void;
    onDownload?: (e: React.SyntheticEvent) => void;
    zoominState?: any;
    zoomoutState?: any;
    rotateState?: any;
    style?: React.CSSProperties;
    className?: string;
    icons?: IToolbarIconProps;
}
