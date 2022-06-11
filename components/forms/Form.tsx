import type { NextPage } from 'next'
import styled from 'styled-components'

interface StyledFormProps {
    children: React.ReactNode,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    className?: string,
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`

const Form: NextPage<StyledFormProps> = ({ children, onSubmit, className }) => {
    return (
        <StyledForm onSubmit={onSubmit} className={className}>
            {children}
        </StyledForm>
    )
}

export default Form