import * as React from "react";
import { IToolbarButtonProps } from "./toolbarButton.interface";
import { BUTTON_STATES } from "./buttons.enums";

export default class ToolbarButton extends React.Component<
  IToolbarButtonProps
> {
  render() {
    return (
      <button
        onClick={(e: React.SyntheticEvent) => {
          this.props.onClick(e);
        }}
        className={"toolbar-btn"}
        disabled={this.props.btnState === BUTTON_STATES.disabled}
      >
        {this.props.replace ? (
          <span>{this.props.icon}</span>
        ) : (
          <>
            <span>{this.props.icon}</span>
            <span>{this.props.title}</span>
          </>
        )}
      </button>
    );
  }
}
