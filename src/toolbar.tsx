import * as React from "react";
import { BUTTON_STATES } from "./buttons.enums";

interface IToolbarProps {
  onZoomIn: Function;
  onZoomOut: Function;
  onRotate: Function;
  zoominState?: any; // convert to Button state after export
  zoomoutState?: any;
  rotateState?: any;
}

export default class Toolbar extends React.Component<IToolbarProps> {
  render() {
    return (
      <div className={"toolbar"}>
        <div style={{ display: "block", margin: "0 auto", width: "54%" }}>
          <button
            onClick={e => {
              this.props.onZoomIn(e);
            }}
            className={"toolbar-button"}
            disabled={this.props.zoominState === BUTTON_STATES.disabled}
          >
            Zoom In
          </button>
          <button
            onClick={e => {
              this.props.onZoomOut(e);
            }}
            className={"toolbar-button"}
            disabled={this.props.zoomoutState === BUTTON_STATES.disabled}
          >
            Zoom Out
          </button>
          <button
            onClick={e => {
              this.props.onRotate(e);
            }}
            className={"toolbar-button"}
          >
            Rotate
          </button>
        </div>
      </div>
    );
  }
}
