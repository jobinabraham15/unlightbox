import * as React from "react";
import { IUnlightboxProps, UnlightboxState } from "./unlightbox.interface";
/**
 * Component that is responsible for displaying the image and the toolbar associated with it.
 */
export default class Unlightbox extends React.Component<IUnlightboxProps, UnlightboxState> {
    originalImage: any;
    constructor(props: IUnlightboxProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IUnlightboxProps): void;
    /**
     * Get the initial state values for this components states
     */
    private getInitialStates;
    /**
     * Logic for loading the images
     */
    protected loadImage: () => void;
    private disableZoomIn;
    private enableZoomIn;
    private disableZoomOut;
    private enableZoomOut;
    /**
     * Zooming in functionality of the viewer
     */
    protected zoomIn: () => void;
    /**
     * Zooming out functionality of the viewer
     */
    protected zoomOut: () => void;
    /**
     * Rotate functionality of the viewer
     */
    protected rotate: () => void;
    /**
     *
     * File dowload functionality of the viewer
     */
    protected makeFile: (data: any, filename: any, type: any) => void;
    protected download: () => void;
    /**
     * Return the "object-fit" property value for the image
     */
    getImageFit: (width?: number, height?: number, limit?: number) => string;
    getImageProperties: (width: number, height: number, widthLimit: number, heightLimit: number) => {
        width: number;
        height: number | null;
    };
    /**
     * Process the image view once the image has been loaded on the client
     */
    onImageLoad: () => void;
    render(): JSX.Element;
}
