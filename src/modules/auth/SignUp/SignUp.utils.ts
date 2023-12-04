import {object, string} from 'yup';

export const FormikValidationSchema = object({
    nick: string().required().min(2, 'Nick name should be 2 characters at least').max(20, 'Nick should fit in 20 characters'),
    email: string().email(),
});