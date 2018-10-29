import * as React from "react";
import { BUTTON_STATES } from "./buttons.enums";

interface IToolbarProps {
  onZoomIn: Function;
  onZoomOut: Function;
  onRotate: Function;
  zoominState?: any; // convert to Button state after export
  zoomoutState?: any;
  rotateState?: any;
  style?: React.CSSProperties;
  className?: string;
}

export default class Toolbar extends React.Component<IToolbarProps> {
  render() {
    const userDefinedClass = this.props.className
      ? " " + this.props.className
      : "";
    return (
      <div
        className={`unlightbox-toolbar${userDefinedClass}`}
        style={this.props.style}
      >
        <div className={"btn-group"}>
          <button
            onClick={e => {
              this.props.onZoomIn(e);
            }}
            className={"toolbar-btn"}
            disabled={this.props.zoominState === BUTTON_STATES.disabled}
          >
            Zoom In
          </button>
          <button
            onClick={e => {
              this.props.onZoomOut(e);
            }}
            className={"toolbar-btn"}
            disabled={this.props.zoomoutState === BUTTON_STATES.disabled}
          >
            Zoom Out
          </button>
          <button
            onClick={e => {
              this.props.onRotate(e);
            }}
            className={"toolbar-btn"}
          >
            Rotate
          </button>
        </div>
      </div>
    );
  }
}
