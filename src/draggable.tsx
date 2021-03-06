import * as React from "react";
import "./index.css";
import {
  IDraggableProps,
  IDraggableState,
  positionCordinates
} from "./draggable.interface";

export default class Draggable extends React.Component<
  IDraggableProps,
  IDraggableState<positionCordinates>
> {
  containerRef: any;
  constructor(props: IDraggableProps) {
    super(props);
    this.state = this.getInitialState();
    this.containerRef = React.createRef();
  }

  /**
   * Get InitialState of the draggable component
   */
  private getInitialState = () => ({
    relX: null,
    relY: null,
    dragging: false,
    posX: 0,
    posY: 0
  });

  /**
   * Event Handler for MouseDown event
   */
  onMouseDown = e => {
    // Get Cursor cordinates
    const { pageX, pageY, button } = e;

    // Check that its a left mouse click
    if (button !== 0) {
      return;
    }
    // Get the ref of the draggable container
    const container = this.containerRef.current;

    // Get offsets of the draggable container
    const offsetLeft = container.offsetLeft;
    const offsetTop = container.offsetTop;

    // Set dragging to true, indicates mouse being held down
    this.setState({
      dragging: true,
      relX: pageX - offsetLeft,
      relY: pageY - offsetTop
    });

    // Stop events from bubling up further
    e.stopPropagation();
    e.preventDefault(); // Todo: Should probably remove this
  };

  /**
   * Event Handler for MouseUp event
   */
  onMouseUp = e => {
    // If not being dragged, do nothing, else set dragging to false
    if (this.state.dragging) {
      this.setState({ dragging: false });
    }
  };

  /**
   * Event Handler for Mousemove Event
   */
  onMouseMove = e => {
    if (this.state.dragging) {
      // Get cursor coordinates
      const { pageX, pageY } = e;
      this.setState({
        posX: pageX - this.state.relX,
        posY: pageY - this.state.relY
      });
      // Stop events from bubling up further
      e.stopPropagation();
      e.preventDefault(); // Todo: Should probably remove this
    }
  };

  render() {
    // Create style object based on the positions calculated
    let style = Object.assign({}, this.props.innerStyle, {
      left: this.state.posX,
      top: this.state.posY,
      position: "absolute",
      right: 0,
      marginLeft: 0,
      marginRight: 0
    });

    let outerStyles = Object.assign({}, this.props.containerStyle, {
      position: "relative",
      width: this.props.outerWidth + "px",
      height: this.props.outerheight + "px",
      overflow: "auto"
    });

    return (
      <div style={outerStyles}>
        <div
          onMouseDown={this.onMouseDown}
          onMouseMove={this.onMouseMove}
          onMouseUp={this.onMouseUp}
          style={style}
          ref={this.containerRef}
          className={"draggable"}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
