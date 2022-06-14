import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

import { ThemeAccentStylingProps } from '../../interfaces/Styling'
import useStore, { useAccent } from '../../store'
import themes, { Accent, accentColors, Theme } from '../../ThemeConfig'
import { Colors, Transition } from '../../variables'

interface PrimaryButtonProps {
    children: React.ReactNode,
    type: "button" | "submit" | "reset",
    disabled?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    className?: string,
}

const Button = styled.button<ThemeAccentStylingProps>`
    display: block;
    background: ${({ accent }) => accent};
    color: ${Colors.textWhite};
    border-radius: 6px;
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
    transition: ${Transition.fast};
    padding: 0.5rem 1.25rem;
    box-shadow: 0 3px 12px ${({ accent }) => accent + "4D"};
    border: 2px solid ${({ accent }) => accent};
    outline: none;

    &:hover {
        background: ${({ theme }) => theme.backgroundAlt};
        color: ${({ accent }) => accent};
    }
`

const PrimaryButton: NextPage<PrimaryButtonProps> = ({ children, type, disabled = false, onClick, className }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent: keyof Accent = useAccent((s: any) => s.accent);

    return (
        <Button accent={accentColors[accent][theme]} theme={themes[theme]} onClick={onClick} type={type} disabled={disabled} className={className}>
            { children }
        </Button>
    )
}

export default PrimaryButton;