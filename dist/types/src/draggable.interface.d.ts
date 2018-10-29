/// <reference types="react" />
/**
 * Type declaration for position cordinates
 */
export declare type positionCordinates = number | null;
/**
 * Props for the Draggable component
 */
export interface IDraggableProps {
    /**
     * width of the outer most container which will contain the draggable container
     */
    outerWidth: number;
    /**
     * height of the outer most container which will contain the draggable container
     */
    outerheight: number;
    /**
     * Any CSS styles
     */
    innerStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
}
/**
 * Internal State for draggable element
 */
export interface IDraggableState<T> {
    /**
     * X-Cordinate of mouse relative to its container
     */
    relX: T;
    /**
     * Y-Cordinate of mouse relative to its container
     */
    relY: T;
    /**
     * Amount of "left" required to cover the mousemove
     */
    posX: T;
    /**
     * Amount of "top" required to cover the mousemove
     */
    posY: T;
    /**
     * Is the image being dragged or not
     */
    dragging: boolean;
}
