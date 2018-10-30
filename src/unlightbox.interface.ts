import { ViewerButtonStates } from "./buttons.interface";
import { ReactElement } from "react";
export { UnlightboxState, IUnlightboxProps };

interface IUnlightboxProps {
  /**
   * url for the image file to be uploaded
   */
  url: string;

  /**
   * Width of the container box that will contain the viewer
   */
  containerWidth?: number; // TODO: convert to nummber or string

  /**
   * Height of the container box that will contain the viewer
   */
  containerHeight?: number; // TODO: convert to nummber or string

  /**
   * Container of the image
   */
  containerStyle?: React.CSSProperties;

  /**
   * The scaling factor which will be used to scale the image for zoomin and zoom out
   */
  scaleFactor?: number;

  /**
   * imageStyles to be applied to the image
   */
  imageStyles?: any;

  /**
   * Styles to be applied to toolbar
   */
  toolbarStyle?: React.CSSProperties;

  /**
   * Tool bar class name if any
   */
  toolbarClass?: string;

  /**
   * Icon Components for the buttons
   */
  buttonIcons?: {
    zoomIn?: React.Component;
    zoomOut?: React.Component;
    rotate?: React.Component;
  };

  /**
   * Loader component to be displayed while image is loading
   */
  loader?: React.Component | React.ReactElement<HTMLElement>;
}

interface IImageInternalStates<T> {
  /**
   * React Ref for the container that holds the image
   */
  imageRef?: React.RefObject<T>; // Find this out

  /**
   * React Ref for the container that is draggable
   */
  dragableContainerRef?: React.RefObject<T>; // Find this out

  /**
   * The width of the container that hold the image
   */
  containerWidth?: any;

  /**
   * The height of the container that holds the image
   */
  containerHeight?: any;

  /**
   * Image width calculated as per containerWidth, after the image is loaded
   */
  imageWidth: string | null;

  /**
   * Image height calculated as per containerWidth, after the image is loaded
   */
  imageHeight: string | null;

  /**
   * Style properties for container holding the image
   */
  containerStyle?: React.CSSProperties;

  /**
   * The image DOM object
   */
  image: any;

  /**
   * The degree to which the image has to be rotated
   */
  imgRotation: number;

  /**
   * The css "object-fit" property of the image
   */
  imageFit: string;

  /**
   * The current scale of the image
   */
  scale: number;

  scaleFactor?: number;

  /**
   * State of the zoomin Buttons
   */
  zoomInState: ViewerButtonStates;

  /**
   * State of the zoomout button
   */
  zoomOutState: ViewerButtonStates;
}

/**
 * Type of Image viewer component
 */
type UnlightboxState = IImageInternalStates<any>;
