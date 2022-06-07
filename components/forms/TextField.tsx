import type { NextPage } from 'next';
import { useField } from 'formik';

import ErrorText from './ErrorText';

interface TextFieldProps {
    value: string,
    name: string,
    placeholder: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
}

const TextField: NextPage<TextFieldProps> = ({ ...props }) => {
    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : '';

    return (
        <>
            <input
                {...field}
                {...props}
            />
            { errorText && 
                <ErrorText errorText={errorText} />
            } 
        </>
    )
}

export default TextField