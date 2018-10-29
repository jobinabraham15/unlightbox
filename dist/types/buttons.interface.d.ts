import { BUTTON_STATES } from "./index";
export declare type ViewerButtonStates = BUTTON_STATES.active | BUTTON_STATES.disabled | null;
/**
 * Buttons in the image viewer toolbar
 */
export interface IToolbarButtons {
    btnZoomIn: ViewerButtonStates;
    btnZoomOut: ViewerButtonStates;
}
