import * as React from "react";
import { imageLoad } from "./imageLoad";
import Draggable from "./draggable";

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
  imgRotation: number;
  imageFit: string;
  imageX: number;
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
  margin: "0 auto",
  position: "relative"
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
    containerWidth: this.props.containerWidth || 300,
    containerHeight: this.props.containerHeight || 300,
    imgRotation: 0,
    imageFit: "scale-down",
    imageX: 0
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

  private disableZoomIn = () => {
    if (this.state.btnZoomIn !== BUTTON_STATES.disabled) {
      this.setState({
        btnZoomIn: BUTTON_STATES.disabled
      });
    } else {
      return;
    }
  };

  private enableZoomIn = () => {
    if (this.state.btnZoomIn !== BUTTON_STATES.active) {
      this.setState({
        btnZoomIn: BUTTON_STATES.active
      });
    } else {
      return;
    }
  };

  private disableZoomOut = () => {
    if (this.state.btnZoomOut !== BUTTON_STATES.disabled) {
      this.setState({
        btnZoomOut: BUTTON_STATES.disabled
      });
    } else {
      return;
    }
  };

  private enableZoomOut = () => {
    if (this.state.btnZoomOut !== BUTTON_STATES.active) {
      this.setState({
        btnZoomOut: BUTTON_STATES.active
      });
    } else {
      return;
    }
  };

  /**
   * Zooming in functionality of the viewer
   */
  protected zoomIn = () => {
    const currentWidth = Number(this.state.imageWidth.split(/(px|%)$/)[0]);
    const image = this.state.image;
    const originalImageWidth = image.naturalWidth;
    const originalImageHeight = image.naturalHeight;
    const imageRatio = originalImageWidth / originalImageHeight;
    let height, imageFit;
    // Keep the zoom from going beyond boundaries
    if (
      currentWidth >= originalImageWidth - 30 &&
      originalImageWidth > this.state.containerWidth
    ) {
      this.disableZoomIn();
    } else {
      const zoomedWidth = currentWidth + 50;

      // Disable zoomin if the future zoom might go out of bounds
      if (
        zoomedWidth > originalImageWidth &&
        originalImageWidth > this.state.containerWidth
      ) {
        this.disableZoomIn();
      }

      // Enable ZoomOut if it was previously disabled
      if (zoomedWidth >= originalImageWidth / 10) {
        this.enableZoomOut();
      }
    //   let imageX;
    //   imageX =
    //     this.state.containerWidth -
    //     zoomedWidth +
    //     (originalImageWidth - zoomedWidth) / 50;

    //   height =
    //     originalImageWidth >= originalImageHeight &&
    //     originalImageWidth < this.state.containerWidth
    //       ? zoomedWidth / imageRatio + "px"
    //       : height;

      // Zoom
      this.setState({
        imageWidth: zoomedWidth + "px",
        imageHeight: height || this.state.imageHeight,
        imageFit: imageFit || this.state.imageFit,
        // imageX: imageX < 0 ? imageX : this.state.imageX
      });
    }
  };

  /**
   * Zooming out functionality of the viewer
   */
  protected zoomOut = () => {
    const currentWidth = Number(this.state.imageWidth.split(/(px|%)$/)[0]);
    const containerWidth = this.state.containerWidth;
    // Disable
    if (containerWidth <= currentWidth / 10) {
      this.disableZoomOut();
      this.enableZoomIn();
    } else {
      const zoomedWidth = currentWidth - 50;
      if (currentWidth + 50 >= containerWidth) {
        this.enableZoomIn();
      }
      if (zoomedWidth <= containerWidth / 10) {
        this.disableZoomOut();
      }

      this.setState({
        imageWidth: zoomedWidth + "px"
      });
    }
  };

  /**
   * Rotate functionality of the viewer
   */
  protected rotate = () => {
    let imgRotation = this.state.imgRotation;
    imgRotation = imgRotation >= 270 ? 0 : imgRotation + 90;

    const originalImage = this.state.image;
    const clientHeight = originalImage.height;
    const clientWidth = originalImage.width;
    const whRatio = clientWidth / clientHeight; // Get the ratio of width to height

    const containerWidth = this.state.containerWidth,
      containerHeight = this.state.containerHeight;
    let height;
    if (whRatio > 1) {
      // Image viewport is more wider than it is taller
      height = containerWidth / whRatio;
      //   width = containerWidth + "px";
    } else {
      height = containerHeight;
      //   width = containerHeight * whRatio;
      //   width = width + "px";
    }

    const calculatedProperties = this.getImageProperties(
      clientHeight,
      clientWidth,
      containerWidth,
      containerHeight
    );

    this.setState({
      imgRotation,
      imageHeight: calculatedProperties.height + "px"
    });
  };

  /**
   * Return the "object-fit" property value for the image
   */
  getImageFit: (width?: number, height?: number, limit?: number) => string = (
    width,
    height,
    limit
  ) => {
    width = width || this.state.image.naturalWidth;
    height = height || this.state.image.naturalHeight;

    // The bounding rectangle for the image relative to which the image sie is compared
    limit = limit || this.state.containerWidth;
    return width >= height && width < limit ? "contain" : "scale-down";
  };

  getImageProperties: (
    width: number,
    height: number,
    widthLimit: number,
    heightLimit: number
  ) => {
    width: number;
    height: number | null;
  } = (width, height, widthLimit, heightLimit) => {
    const whRatio = width / height;
    let calculatedWidth, calculatedHeight;
    if (whRatio > 1) {
      calculatedHeight = widthLimit / whRatio;
      calculatedWidth = widthLimit;
    } else {
      calculatedWidth = heightLimit * whRatio;
      calculatedHeight = heightLimit;
      //   calculatedWidth = width;
    }

    if (calculatedHeight < heightLimit) {
      calculatedHeight = heightLimit;
    }

    return {
      width: calculatedWidth,
      height: calculatedHeight
    };
  };

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
    const calculatedProperties = this.getImageProperties(
      originalImageWidth,
      originalImageHeight,
      containerWidth,
      containerHeight
    );

    let width, height;
    if (whRatio > 1) {
      // Image is more wider than it is taller
      //   height = width / whRatio;
      width = containerWidth + "px";
    } else {
      width = containerHeight * whRatio;
      width = width + "px";
    }

    // To scale down the height of the image wrt to the width
    if (containerHeight > originalImageHeight) {
      height = containerHeight;
    }

    this.setState(
      {
        imageWidth: calculatedProperties.width + "px",
        imageHeight: containerHeight > originalImageHeight ? calculatedProperties.height + "px": this.state.imageHeight,
        image: originalImage,
        imageFit: this.getImageFit(
          originalImageWidth,
          originalImageHeight,
          containerWidth
        )
      },
      function() {
        console.log("Original Image should have been set");
      }
    );
  };

  render() {
    let styles = Object.assign({}, imageStyle, {
      width: this.state.imageWidth,
      height: this.state.imageHeight,
      transform: `rotate(${this.state.imgRotation}deg)`,
      objectFit: this.state.imageFit || undefined,
    //   left: this.state.imageX + "px" || undefined
    });
    return (
      <div>
        <div className={"toolbar"}>
          <div style={{ display: "block", margin: "0 auto", width: "54%" }}>
            <button
              onClick={this.zoomIn}
              className={"toolbar-button"}
              disabled={this.state.btnZoomIn === BUTTON_STATES.disabled}
            >
              Zoom In
            </button>
            <button
              onClick={this.zoomOut}
              className={"toolbar-button"}
              disabled={this.state.btnZoomOut === BUTTON_STATES.disabled}
            >
              Zoom Out
            </button>
            <button onClick={this.rotate} className={"toolbar-button"}>
              Rotate
            </button>
          </div>
        </div>
        <Draggable
          style={{
            width: this.state.containerWidth,
            height: this.state.containerHeight,
            overflow: "visible"
          }}
          width={this.state.containerWidth}
          height={this.state.containerHeight}
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
              style={styles}
              ref={this.state.imageRef}
              src={this.state.image.src}
            />
          )}
        </Draggable>
      </div>
    );
  }
}
