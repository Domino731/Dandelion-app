import {MouseEventHandler} from "react";

export type ButtonProps = {
    text: string;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
    onClick: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
    title?: string;
    variant?: 'text' | 'outlined' | 'contained'
}