import { StyledComponentProps } from "styled-components";

export interface ButtonProps {
    background?: string;
    margin?: string;
    float?: 'left' | 'right';
}

export interface ActionButtonProps extends ButtonProps {
    type?: 'button' | 'submit' | 'reset'
    name: string;
}