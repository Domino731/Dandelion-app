import {Input} from "./Input.tsx";
import {FormikInputProps} from "./FormikInput.types.ts";
import {useField} from "formik";
import {useMemo} from "react";

export const FormikInput = ({name, label}: FormikInputProps) => {
    const [field, meta] = useField(name);

    const error = (meta.error && meta.touched) ? meta.error : undefined;

    return <Input {...field} label={label} error={error}/>
}