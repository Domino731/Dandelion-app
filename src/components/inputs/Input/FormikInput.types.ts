import {InputHTMLAttributes} from "react";

export type FormikInputProps = {
    name: string;
    label: string;
    type?: InputHTMLAttributes<unknown>['type'];
}