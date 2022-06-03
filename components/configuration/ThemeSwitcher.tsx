import type { NextPage } from 'next'
import styled from 'styled-components'

import useStore, { useAccent } from '../../store'
import { accentColors, Theme } from '../../ThemeConfig'
import { Transition } from '../../variables'
import ThemeItem from './ThemeItem'

interface ThemeSwitcherProps {
    id: keyof Theme,
    value: string
}

interface ThemeContainerProps {
    accent: string
}

const ThemeContainer = styled.label<ThemeContainerProps>`
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;
    cursor: pointer;
    
    input {
        appearance: none;

        &:checked + div {
            transition: ${Transition.fast};
            box-shadow: 0 3px 10px ${({ accent }: any ) => accent + "80"};
            border: 2px solid ${({ accent }: any ) => accent};
        }
    }

    span {
        text-transform: capitalize;
        text-align: center;
        margin-top: 1rem;
        font-size: 0.875rem;
        font-weight: 500;
    }
`

const ThemeSwitcher: NextPage<ThemeSwitcherProps> = ({ id, value }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const store = useStore((s: any) => s.setTheme);
    const accent = useAccent((s: any) => s.accent);

    const handleChange = (e: any) => {
        if (e.currentTarget.value) {
            store(e.currentTarget.value);
            localStorage.setItem('theme', e.currentTarget.value);
        }
    }

    return (
        <ThemeContainer htmlFor={id} accent={accentColors[accent as keyof typeof accentColors][theme]}>
            <input type="radio" id={id} value={id} name="modeSelector" checked={theme === id ? true : false} onChange={handleChange}/>

            <ThemeItem theme={id}/>

            <span>{ value }</span>
        </ThemeContainer>
    )
}

export default ThemeSwitcher