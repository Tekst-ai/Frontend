import type { NextPage} from 'next';
import styled from 'styled-components'

import { Colors } from '../../variables';

interface ErrorTextProps {
    errorText: string
}

const StyledError = styled.div`
    position: absolute;
    bottom: -1.5rem;
    left: 0.25rem;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${Colors.error};
`

const ErrorText: NextPage<ErrorTextProps> = ({ errorText }) => {
    return (
        <StyledError>
            <p>{errorText}</p>
        </StyledError>
    )
}

export default ErrorText