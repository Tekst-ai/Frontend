import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';

import { Routes } from '../../constants';
import { RequireMessage } from "../../services/validation";
import { useAuth } from '../../store';
import { PrimaryButton } from '../buttons';
import Form from './Form';
import FormLabel from './FormLabel';
import TextField from './TextField';

const LoginForm: NextPage = () => {
    const setAuth = useAuth((s: any) => s.setAuth);
    const router = useRouter();

    const labels = {
        email: 'E-mail',
    }

    const validate = Yup.object({
        email: Yup.string().label(labels.email).required(RequireMessage(labels.email)).email("Ongeldig e-mailadres"),
    });

    return (
        <Formik
            initialValues={{
                email: '',
            }}
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);

                setAuth("true");
                localStorage.setItem("auth", "true");
                router.push(Routes.DASHBOARD)

                setSubmitting(false);
            }}
            validationSchema={validate}
            >
            {({ isSubmitting, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <FormLabel label={labels.email}>
                        <Field id="email" name="email" placeholder="" as={TextField} type="text" autoFocus/>
                    </FormLabel>

                    <PrimaryButton disabled={isSubmitting} type="submit">
                        Aanmelden 
                    </PrimaryButton>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;