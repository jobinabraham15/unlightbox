import { Component } from "react";
import "./index.css";
import { IDraggableProps, IDraggableState, positionCordinates } from "./draggable.interface";
export default class Draggable extends Component<IDraggableProps, IDraggableState<positionCordinates>> {
    containerRef: any;
    constructor(props: IDraggableProps);
    /**
     * Get InitialState of the draggable component
     */
    private getInitialState;
    /**
     * Event Handler for MouseDown event
     */
    onMouseDown: (e: any) => void;
    /**
     * Event Handler for MouseUp event
     */
    onMouseUp: (e: any) => void;
    /**
     * Event Handler for Mousemove Event
     */
    onMouseMove: (e: any) => void;
    render(): JSX.Element;
}
