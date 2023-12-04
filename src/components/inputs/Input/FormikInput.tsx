import {Input} from "./Input.tsx";
import {FormikInputProps} from "./FormikInput.types.ts";
import {useField} from "formik";

export const FormikInput = ({name, label, type}: FormikInputProps) => {
    const [field, meta] = useField(name);

    const error = (meta.error && meta.touched) ? meta.error : undefined;

    return <Input {...field} label={label} error={error} type={type}/>
}