import {ChangeEvent, FocusEventHandler, InputHTMLAttributes} from "react";

export type InputProps = {
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: unknown;
    label: string;
    fullWidth?: boolean;
    error?: string;
    type?: InputHTMLAttributes<unknown>['type'];
}