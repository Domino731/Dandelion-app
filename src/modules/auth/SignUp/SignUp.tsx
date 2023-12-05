import {Formik, FormikValues} from "formik";
import {FormikInput} from "../../../components/inputs/Input";
import {FormikInitialValues} from "./SignUp.const.ts";
import {Stack, Typography} from "@mui/material";
import {signUpStyles} from "./SignUp.styles.ts";
import {Button} from "../../../components/Button";
import {FormikValidationSchema} from "./SignUp.utils.ts";
import {useAppDispatch} from "../../../redux/store.ts";
import {useCallback} from "react";
import {authActions} from "../store/actions.ts";
import {useSelector} from "react-redux";
import {authSelectors} from "../store/selectors.ts";

export const SignUp = () => {
    const dispatch = useAppDispatch();

    const signUpIsLoading = useSelector(authSelectors.signUpIsLoading);

    const handleSignUp = useCallback(({passwordRepeat, ...results}: FormikValues) => {
        if (signUpIsLoading) return;
        dispatch(authActions.register(results));
    }, [dispatch, signUpIsLoading])

    return <Formik initialValues={FormikInitialValues}
                   validationSchema={FormikValidationSchema}
                   onSubmit={handleSignUp}
    >
        {({handleSubmit}) => <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing="16px"
            sx={signUpStyles.container}
        >
            <Typography variant="h3" gutterBottom>Create a new account</Typography>
            <FormikInput name="email" label="E-mail address"/>
            <FormikInput name="nick" label="Nick"/>
            <FormikInput name="password" label="Password" type="password"/>
            <FormikInput name="passwordRepeat" label="Repeat the password" type="password"/>
            <Button text="Sign up" type="submit" onClick={() => handleSubmit()} isDisabled={signUpIsLoading}
                    title={signUpIsLoading ? 'Waiting for the response from server' : undefined}/>
        </Stack>}
    </Formik>
}