import {Formik, FormikValues} from "formik";
import {FormikInput} from "../../../components/inputs/Input";
import {FormikInitialValues} from "./SignUp.const.ts";
import {Alert, Stack, Typography} from "@mui/material";
import {signUpStyles} from "./SignUp.styles.ts";
import {Button} from "../../../components/Button";
import {FormikValidationSchema} from "./SignUp.utils.ts";
import {useAppDispatch} from "../../../redux/store.ts";
import {useCallback, useEffect, useMemo} from "react";
import {authActions} from "../store/actions.ts";
import {useSelector} from "react-redux";
import {authSelectors} from "../store/selectors.ts";
import {ACTION_STATUS} from "../../../redux/constants.ts";
import {RegisterDto} from "../store/services/api.types.ts";
import {authSliceActions} from "../store/slice.ts";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../App/App.const.ts";


export const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const registerStatus = useSelector(authSelectors.registerStatus);
    const registerError = useSelector(authSelectors.registerError);

    // const isLoading = useMemo(() => registerStatus === ACTION_STATUS.PENDING, [registerStatus]);

    const isLoading = false;

    const handleSignUp = useCallback(({passwordRepeat, ...results}: FormikValues) => {
        if (isLoading) return;
        dispatch(authActions.register(results as RegisterDto));
    }, [dispatch, isLoading])

    useEffect(() => {
        if (registerStatus === ACTION_STATUS.SUCCESS) {
            dispatch(authSliceActions.setRegisterError(null));
            dispatch(authSliceActions.setRegisterStatus(ACTION_STATUS.IDLE));
            navigate(ROUTES.dashboard);
        }
    }, [dispatch, history, registerStatus])

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
            {registerError && <Alert sx={{width: '100%'}} severity="error">{registerError}</Alert>}
            <Button text="Sign up" type="submit" onClick={() => handleSubmit()} isDisabled={isLoading}
                    title={isLoading ? 'Waiting for the response from server' : undefined}/>
        </Stack>}
    </Formik>
}