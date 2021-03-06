import * as React from "react";
import { imageLoad } from "./imageLoad";
import { IUnlightboxProps, UnlightboxState } from "./unlightbox.interface";
import { BUTTON_STATES } from "./buttons.enums";
import Toolbar from "./toolbar";
import Draggable from "./draggable";

const imageStyle = {
  objectFit: "scale-down",
  display: "block",
  margin: "0 auto",
  position: "relative",
  transition: "all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) 0s"
};

/**
 * Component that is responsible for displaying the image and the toolbar associated with it.
 */
export default class Unlightbox extends React.Component<
  IUnlightboxProps,
  UnlightboxState
> {
  originalImage: any;
  constructor(props: IUnlightboxProps) {
    super(props);
    this.state = this.getInitialStates();
  }

  componentDidMount() {
    /**
     * Start loading the image once the component is mounted
     */
    this.loadImage();
  }

  componentDidUpdate(prevProps: IUnlightboxProps) {
    if (prevProps.url !== this.props.url) {
      this.setState(this.getInitialStates(), () => {
        this.loadImage();
      });
    }
  }

  /**
   * Get the initial state values for this components states
   */
  private getInitialStates = () => ({
    imageRef: React.createRef(),
    dragableContainerRef: React.createRef(),
    zoomInState: BUTTON_STATES.active,
    zoomOutState: BUTTON_STATES.active,
    image: null,
    imageWidth: null,
    imageHeight: null,
    containerWidth: this.props.containerWidth || 300,
    containerHeight: this.props.containerHeight || 300,
    imgRotation: 0,
    imageFit: "scale-down",
    scale: 1,
    scaleFactor: this.props.scaleFactor || 0.25,
    downloadable: this.props.downloadable || false
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
    if (this.state.zoomInState !== BUTTON_STATES.disabled) {
      this.setState({
        zoomInState: BUTTON_STATES.disabled
      });
    } else {
      return;
    }
  };

  private enableZoomIn = () => {
    if (this.state.zoomInState !== BUTTON_STATES.active) {
      this.setState({
        zoomInState: BUTTON_STATES.active
      });
    } else {
      return;
    }
  };

  private disableZoomOut = () => {
    if (this.state.zoomOutState !== BUTTON_STATES.disabled) {
      this.setState({
        zoomOutState: BUTTON_STATES.disabled
      });
    } else {
      return;
    }
  };

  private enableZoomOut = () => {
    if (this.state.zoomOutState !== BUTTON_STATES.active) {
      this.setState({
        zoomOutState: BUTTON_STATES.active
      });
    } else {
      return;
    }
  };


  private decodeBlobeResponse = (customBlob, blobType, disposition?) => {
    let contentDisp, fileName;
    let remoteFileUrl = this.props.url;
    try {
      contentDisp = this.props.disposition && disposition ? disposition : null;
      fileName = contentDisp.split(";")[1].split("=")[1];
    } catch (e) {
      fileName = this.props.saveAs
        ? this.props.saveAs
        : remoteFileUrl.replace(/^.*[\\\/]/, "");
    }
    this.makeFile(customBlob, fileName, blobType);
  };

  private getFileExtension = fileName => {
    const nameMatchRegex = /(?:\.([^.]+))?$/;
    const matchFileNameToRegex: any = nameMatchRegex.exec(fileName);
    return matchFileNameToRegex.length > 0 ? matchFileNameToRegex[1] : fileName;
  };
  


  /**
   * Zooming in functionality of the viewer
   */
  protected zoomIn = () => {
    const scale = this.state.scale + this.state.scaleFactor;
    if (scale > this.state.scaleFactor) {
      this.enableZoomOut();
    }
    // Zoom
    this.setState({
      scale
    });
  };

  /**
   * Zooming out functionality of the viewer
   */
  protected zoomOut = () => {
    if (this.state.scale > this.state.scaleFactor) {
      this.setState(
        {
          scale: this.state.scale - this.state.scaleFactor
        },
        () => {
          console.log("this.state.scale");
        }
      );
    } else {
      this.disableZoomOut();
    }
  };

  /**
   * Rotate functionality of the viewer
   */
  protected rotate = () => {
    let imgRotation = this.state.imgRotation;
    imgRotation = imgRotation + 90;

    const originalImage = this.state.image;
    const clientHeight = originalImage.height;
    const clientWidth = originalImage.width;
    const whRatio = clientWidth / clientHeight; // Get the ratio of width to height
    const containerWidth = this.state.containerWidth,
      containerHeight = this.state.containerHeight;

    const calculatedProperties = this.getImageProperties(
      clientWidth,
      clientHeight,
      containerWidth,
      containerHeight
    );

    this.setState({
      imgRotation,
      imageHeight: calculatedProperties.height + "px"
    });
  };

  /**
   *
   * File dowload functionality of the viewer
   */

  protected makeFile = (data, filename, type) => {
    let file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob)
      // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    else {
      // Others
      let a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  };

  protected download = () => {
    let self = this;
    let remoteFileUrl = this.props.url;
    let fileType = this.getFileExtension(remoteFileUrl);
    if (typeof fetch === "function") {
      fetch(remoteFileUrl, { mode: "no-cors" })
        .then(response => {
          response.blob().then(blob => {
            this.decodeBlobeResponse(blob, `image/${fileType}`);
          });
        })
        .catch(e => {
          console.error(e);
        });
    } else {
      // Handle browsers older than 2 years :)
      let xhr = new XMLHttpRequest();
      xhr.open("GET", remoteFileUrl, true);
      xhr.setRequestHeader("Sec-Fetch-Mode", "no-cors");
      xhr.responseType = "blob";
      xhr.onload = function(e) {
        if (this.status == 200) {
          let blob = this.response;
          self.decodeBlobeResponse(
            blob,
            blob.type,
            this.getResponseHeader("content-disposition")
          );
        }
      };
      xhr.send();
    }
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

    this.setState({
      imageWidth: calculatedProperties.width + "px",
      imageHeight: calculatedProperties.height + "px",
      image: originalImage
    });
  };

  render() {
    let styles = Object.assign({}, this.props.imageStyles || {}, imageStyle, {
      width: this.state.imageWidth,
      height: this.state.imageHeight,
      transform: `rotate(${this.state.imgRotation}deg) scale(${this.state.scale})`,
      objectFit: this.state.imageFit || undefined
    });

    let draggableContainerStyles = Object.assign(
      {},
      this.props.containerStyle,
      { boxSizing: "border-box" }
    );

    let tbStyles = Object.assign({}, this.props.toolbarStyle, {
      width: this.props.containerWidth
    });

    return (
      <>
        <div>
          <Toolbar
            onZoomin={this.zoomIn}
            onZoomout={this.zoomOut}
            onRotate={this.rotate}
            onDownload={this.state.downloadable ? this.download : null}
            zoominState={this.state.zoomInState}
            zoomoutState={this.state.zoomOutState}
            style={tbStyles}
            icons={this.props.buttonIcons}
          />
        </div>
        <div>
          <div>
            <Draggable
              innerStyle={{
                width: this.state.containerWidth,
                height: this.state.containerHeight,
                overflow: "visible"
              }}
              containerStyle={draggableContainerStyles}
              outerWidth={this.state.containerWidth}
              outerheight={this.state.containerHeight}
            >
              {!this.state.image ? (
                !this.props.loader ? (
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
                  this.props.loader
                )
              ) : (
                <img
                  style={styles}
                  ref={this.state.imageRef}
                  src={this.state.image.src}
                />
              )}
            </Draggable>
          </div>
        </div>
      </>
    );
  }
}
