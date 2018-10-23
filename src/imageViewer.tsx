import * as React from "react";
import { imageLoad } from "./imageLoad";
import { number } from "prop-types";

interface IImageViewerProps {
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
}

interface IImageInternalStates<T> {
  /**
   * React Ref for the container that holds the image
   */
  imageRef: React.RefObject<T>; // Find this out
  /**
   * React Ref for the container that is draggable
   */
  dragableContainerRef: React.RefObject<T>; // Find this out
  containerWidth?: any;
  containerHeight?: any;
  imageWidth?: any;
  imageHeight?: any;
  imageStyles?: any;
  containerStyle?: any;
  image: any;
  processedImage: boolean;
}

/**
 * Type of Image viewer component
 */
type imageViewerState = IImageInternalStates<any> & IButtons;

/**
 * Possible states of toolbar buttons of image viewer
 */
enum BUTTON_STATES {
  active = "active",
  disabled = "disabled"
}

type ViewerButtonStates = BUTTON_STATES.active | BUTTON_STATES.disabled | null;

/**
 * Buttons in the image viewer toolbar
 */
interface IButtons {
  btnZoomIn: ViewerButtonStates;
  btnZoomOut: ViewerButtonStates;
}

const imageStyle = {
  objectFit: "scale-down",
  display: "block",
  margin: "0 auto"
};

/**
 * Component that is responsible for displaying the image and the toolbar associated with it.
 */
export default class ImageViewer extends React.Component<
  IImageViewerProps,
  imageViewerState
> {
  originalImage: any;
  constructor(props: IImageViewerProps) {
    super(props);
    this.state = this.getInitialStates();
  }
  componentDidMount() {
    /**
     * Start loading the image once the component is mounted
     */
    this.loadImage();
  }
  /**
   * Get the initial state values for this components states
   */
  private getInitialStates = () => ({
    imageRef: React.createRef(),
    dragableContainerRef: React.createRef(),
    btnZoomIn: BUTTON_STATES.active,
    btnZoomOut: BUTTON_STATES.active,
    image: null,
    processedImage: false,
    containerWidth: this.props.containerWidth || 600,
    containerHeight: this.props.containerHeight || 600
  });

  /**
   * Logic for loading the images
   */
  protected loadImage = () => {
    let self = this;
    let loadedImage = imageLoad.call(self, this.props.url); // Get dummy image loaded over first
    // Add a onloadEvent
    loadedImage.onload = function() {
      self.originalImage = loadedImage;
      self.onImageLoad();
    };
  };

  /**
   * Zooming in functionality of the viewer
   */
  protected zoomIn = () => {};

  /**
   * Zooming out functionality of the viewer
   */
  protected zoomOut = () => {};

  /**
   * Rotate functionality of the viewer
   */
  protected rotate = () => {};

  /**
   * Process the image view once the image has been loaded on the client
   */
  onImageLoad = () => {
    const originalImage = this.originalImage;
    const originalImageHeight = originalImage.naturalHeight; // Natural height of the image
    const originalImageWidth = originalImage.naturalWidth; // Natural Width of the image
    const whRatio = originalImageWidth / originalImageHeight; // Get the ratio of width to height
    const containerWidth = this.state.containerWidth,
      containerHeight = this.state.containerHeight;
    let width, height;
    if (whRatio > 1) {
      // Image is more wider than it is taller
      //   height = width / whRatio;
      width = containerWidth + "px";
    } else {
      width = containerHeight * whRatio;
      width = width + "px";
    }

    if (containerHeight > originalImageHeight) {
      height = containerHeight;
    }

    this.setState(
      {
        imageWidth: width,
        imageHeight: height,
        image: originalImage
      },
      function() {
        console.log("Original Image should have been set");
      }
    );
  };

  /**
   * Rotate functionality of the viewer
   */
  render() {
    return (
      <div>
        <div className={"toolbar"}>
          <div style={{ display: "block", margin: "0 auto", width: "54%" }}>
            <button onClick={this.zoomIn} className={"toolbar-button"}>
              Zoom In
            </button>
            <button onClick={this.zoomOut} className={"toolbar-button"}>
              Zoom Out
            </button>
            <button onClick={this.rotate} className={"toolbar-button"}>
              Rotate
            </button>
          </div>
        </div>
        <div ref={this.state.dragableContainerRef}>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px"
            }}
          >
            {!this.state.image ? (
              <h1
                style={{
                  color: "#969696",
                  textAlign: "center",
                  marginTop: "30px"
                }}
              >
                <div>{"Loading your image"}</div>
              </h1>
            ) : (
              <img
                style={Object.assign(imageStyle, {
                  width: this.state.imageWidth,
                  height: this.state.imageWidth
                })}
                ref={this.state.imageRef}
                // onLoad={e => {
                //   this.onImageLoad();
                // }}
                src={this.state.image.src}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
