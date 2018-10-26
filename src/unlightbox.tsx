import * as React from "react";
import ImageViewer from "./imageViewer";
import { IUnlightBoxProps } from "./unlightbox.interface";
const defaultBoxStyles = {
};

const defaultViewerStyles = {
  border: "1px solid black",
  background: "repeating-linear-gradient(45deg,#ffffff,#dedede 1px,#f7f7f7 2px,#e4e4e6 1px)"
}

export default class Unlightbox extends React.Component<IUnlightBoxProps> {
  render() {
    const { url, width, height, zoomFactor, containerStyle, viewerStyle } = this.props;
    const boxStyle = Object.assign({}, defaultBoxStyles, containerStyle);
    const innerStyle = Object.assign({}, defaultViewerStyles, viewerStyle);
    return (
      <div className="unlightbox" style={boxStyle}>
        <ImageViewer
          url={url}
          containerWidth={width}
          containerHeight={height}
          scaleFactor={zoomFactor}
          containerStyle={innerStyle}
        />
      </div>
    );
  }
}
