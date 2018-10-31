import * as React from "react";
import { IToolbarProps } from "./toolbar.interface";
import { BUTTON_STATES } from "./buttons.enums";
import ToolbarButton from "./toolbarButton";

export default class Toolbar extends React.Component<IToolbarProps> {
  render() {
    const userDefinedClass = this.props.className
      ? " " + this.props.className
      : "";
    const iconShouldReplace =
      this.props.icons && this.props.icons.replace ? true : false;
    return (
      <div
        className={`unlightbox-toolbar${userDefinedClass}`}
        style={this.props.style}
      >
        <div className={"btn-group"}>
          <ToolbarButton
            title={"Zoom In"}
            onClick={this.props.onZoomin}
            btnState={this.props.zoominState}
            replace={iconShouldReplace}
            icon={this.props.icons && this.props.icons.zoomin}
          />
          <ToolbarButton
            title={"Zoom Out"}
            onClick={this.props.onZoomout}
            btnState={this.props.zoomoutState}
            replace={iconShouldReplace}
            icon={this.props.icons && this.props.icons.zoomout}
          />
          <ToolbarButton
            title={"Zoom In"}
            onClick={this.props.onRotate}
            replace={iconShouldReplace}
            icon={this.props.icons && this.props.icons.rotate}
          />
        </div>
      </div>
    );
  }
}
