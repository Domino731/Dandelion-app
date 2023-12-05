import {Formik, FormikValues} from "formik";
import {FormikInput} from "../../../components/inputs/Input";
import {FormikInitialValues} from "./SignUp.const.ts";
import {Stack, Typography} from "@mui/material";
import {signUpStyles} from "./SignUp.styles.ts";
import {Button} from "../../../components/Button";
import {FormikValidationSchema} from "./SignUp.utils.ts";
import {useAppDispatch} from "../../../redux/store.ts";
import {useCallback, useMemo} from "react";
import {authActions} from "../store/actions.ts";
import {useSelector} from "react-redux";
import {authSelectors} from "../store/selectors.ts";
import {ACTION_STATUS} from "../../../redux/constants.ts";
import {RegisterDto} from "../store/services/api.types.ts";

export const SignUp = () => {
    const dispatch = useAppDispatch();

    const registerStatus = useSelector(authSelectors.registerStatus);

    const isLoading = useMemo(() => registerStatus === ACTION_STATUS.PENDING, [registerStatus]);

    const handleSignUp = useCallback(({passwordRepeat, ...results}: FormikValues) => {
        if (isLoading) return;
        dispatch(authActions.register(results as RegisterDto));
    }, [dispatch, isLoading])

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
            <Button text="Sign up" type="submit" onClick={() => handleSubmit()} isDisabled={isLoading}
                    title={isLoading ? 'Waiting for the response from server' : undefined}/>
        </Stack>}
    </Formik>
}