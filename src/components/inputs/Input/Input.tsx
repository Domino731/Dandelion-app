import {TextField, Typography} from "@mui/material";
import {InputProps} from "./Input.types.ts";

export const Input = ({name, onChange, onBlur, value, label, fullWidth = true, error, type}: InputProps) => {
    return <div style={{width: '100%'}}>
        <TextField fullWidth={fullWidth} name={name} onChange={onChange} onBlur={onBlur} value={value} type={type}
                   error={Boolean(error)}
                   label={label}/>
        {error && <Typography variant="body2" color="error" align="left">{error}</Typography>}
    </div>
}