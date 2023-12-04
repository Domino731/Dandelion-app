import {object, string, ref} from 'yup';

export const FormikValidationSchema = object({
    nick: string().required('Required field').min(2, 'Nick name should be 2 characters at least').max(20, 'Nick should fit in 20 characters'),
    email: string().required('Required field').email(),
    password: string()
        .required('Required field')
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    passwordRepeat: string()
        .required('Required field')
        .oneOf([ref('password')], 'Passwords must match'),
});