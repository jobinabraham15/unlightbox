/// <reference types="react" />
import { ViewerButtonStates } from "./buttons.interface";
export interface IToolbarButtonProps {
    onClick: (e: React.SyntheticEvent) => void;
    replace?: boolean;
    btnState?: ViewerButtonStates;
    title: string | number;
    icon?: React.Component | React.ReactElement<HTMLElement>;
}
