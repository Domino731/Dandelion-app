import {Button as MuiBtn} from "@mui/material";
import {ButtonProps} from "./Button.types.ts";

// TODO: title prop doesn't work
export const Button = ({text, fullWidth = true, type, onClick, isDisabled, title}: ButtonProps) => {
    return <MuiBtn fullWidth={fullWidth} variant="outlined" type={type} onClick={onClick} title={title}
                   disabled={isDisabled}>{text}</MuiBtn>
}