import {Formik, FormikValues} from "formik";
import {FormikInput} from "../../../components/inputs/Input";
import {Alert, Stack, Typography} from "@mui/material";
import {signInStyles} from './SignIn.styles.ts';
import {Button} from "../../../components/Button";
import {FormikValidationSchema} from "./SignIn.utils.ts";
import {useAppDispatch} from "../../../redux/store.ts";
import {useCallback, useEffect, useMemo} from "react";
import {authActions} from "../store/actions.ts";
import {useSelector} from "react-redux";
import {authSelectors} from "../store/selectors.ts";
import {ACTION_STATUS} from "../../../redux/constants.ts";
import {LoginDto} from "../store/services/api.types.ts";
import {authSliceActions} from "../store/slice.ts";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../App/App.const.ts";
import {FormikInitialValues} from "./SignIn.const.ts";


export const SignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loginStatus = useSelector(authSelectors.loginStatus);
    const loginError = useSelector(authSelectors.loginError);

    const isLoading = useMemo(() => loginStatus === ACTION_STATUS.PENDING, [loginStatus]);

    const handleSignUp = useCallback((values: FormikValues) => {
        if (isLoading) return;
        dispatch(authActions.login(values as LoginDto));
    }, [dispatch, isLoading])

    useEffect(() => {
        if (loginStatus === ACTION_STATUS.SUCCESS) {
            dispatch(authSliceActions.setRegisterError(null));
            dispatch(authSliceActions.setRegisterStatus(ACTION_STATUS.IDLE));
            navigate(ROUTES.dashboard);
        }
    }, [dispatch, navigate, loginStatus])

    return <Formik initialValues={FormikInitialValues}
                   validationSchema={FormikValidationSchema}
                   onSubmit={handleSignUp}
    >
        {({handleSubmit}) => <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing="16px"
            sx={signInStyles.container}
        >
            <Typography variant="h3" gutterBottom>Sign into app</Typography>
            <FormikInput name="email" label="E-mail address"/>
            <FormikInput name="password" label="Password" type="password"/>
            {loginError && <Alert sx={{width: '100%'}} severity="error">{loginError}</Alert>}
            <Button text="Sign in" type="submit" onClick={() => handleSubmit()} isDisabled={isLoading}
                    title={isLoading ? 'Waiting for the response from server' : undefined}/>
        </Stack>}
    </Formik>
}