import {Button as MuiBtn} from "@mui/material";
import {ButtonProps} from "./Button.types.ts";

export const Button = ({text, fullWidth = true, type, onClick}: ButtonProps) => {
    return <MuiBtn fullWidth={fullWidth} variant="outlined" type={type} onClick={onClick}>{text}</MuiBtn>
}