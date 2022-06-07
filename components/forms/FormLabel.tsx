import type { NextPage } from 'next';
import styled from 'styled-components';

import themes, { accentColors, Theme } from '../../ThemeConfig';
import useStore, { useAccent } from '../../store';
import { Transition } from '../../variables';

interface FormLabelProps {
  children: React.ReactNode;
  label?: string;
}

interface StyledLabelProps {
    theme: keyof Theme,
    accent: string
}

const StyledLabel = styled.label<StyledLabelProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    margin-bottom: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textSec};
    
    input {
        color: ${({ theme }) => theme.textSec};
        outline: none;
        border: none;
        font-size: 1rem;
        margin-top: 0.5rem;
        padding-bottom: 0.1rem;
        background: ${({ theme }) => theme.backgroundAlt};
        padding: 0.5rem 1rem;
        border-radius: 6px;
        box-shadow: 0 2px 6px ${({ theme }) => theme.backgroundAlt};
        /* border: 1.5px solid ${({ theme }) => theme.textSec + "66"}; */
        border: 1.5px solid ${({ accent }) => accent + "66"};
        transition: ${Transition.fast};
        font-weight: 500;
        font-family: "Cake", sans-serif;

        &:focus {
            box-shadow: 0 2px 6px ${({ accent }) => accent + "33"};
            border-color: ${({ accent }) => accent + 99};
            color: ${({ theme }) => theme.text};
        }
    }
`

const FormLabel: NextPage<FormLabelProps> = ({ children, label }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent = useAccent((s: any) => s.accent);

    return (
        <StyledLabel theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors][theme]}>
            {label}

            {children}
        </StyledLabel>
    )
}

export default FormLabel