import {Formik} from "formik";
import {FormikInput} from "../../../components/inputs/Input";
import {FormikInitialValues} from "./SignUp.const.ts";
import {Stack, Typography} from "@mui/material";
import {signUpStyles} from "./SignUp.styles.ts";
import {Button} from "../../../components/Button";
import {FormikValidationSchema} from "./SignUp.utils.ts";

export const SignUp = () => {
    return <>
        <Formik initialValues={FormikInitialValues}
                validationSchema={FormikValidationSchema}
                onSubmit={() => console.log(1)}
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
                <Button text="Sign up" type="submit" onClick={() => handleSubmit()}/>
            </Stack>}
        </Formik>
    </>
}