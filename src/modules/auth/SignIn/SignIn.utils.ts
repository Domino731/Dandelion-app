import {object, string} from 'yup';

export const FormikValidationSchema = object({
    email: string().required('Required field').email(),
    password: string()
        .required('Required field')
        .min(8, 'Enter a valid password'),
});