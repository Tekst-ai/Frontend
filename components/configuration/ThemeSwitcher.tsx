import type { NextPage } from 'next'
import styled from 'styled-components'

import useStore, { useAccent } from '../../store'
import { accentColors } from '../../ThemeConfig'
import ThemeItem from './ThemeItem'

interface ThemeSwitcherProps {
    id: string,
    value: string
}

interface ThemeContainerProps {
    accent: any
}

const ThemeContainer = styled.label<ThemeContainerProps>`
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;
    cursor: pointer;
    
    input {
        appearance: none;

        &:checked + div {
            transition: all 0.2s ease-in-out;
            box-shadow: 0 3px 12px ${({ accent }: any ) => accent + "99"};
            border: 2px solid ${({ accent }: any ) => accent.color};
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
    const theme = useStore((s: any) => s.theme);
    const store = useStore((s: any) => s.setTheme);
    const accent = useAccent((s: any) => s.accent);

    const handleChange = (e: any) => {
        if (e.currentTarget.value) {
            store(e.currentTarget.value);
        }
    }

    return (
        <ThemeContainer htmlFor={id} accent={accentColors[accent as keyof typeof accentColors]}>
            <input type="radio" id={id} value={id} name="modeSelector" checked={theme === id ? true : false} onChange={handleChange}/>

            <ThemeItem theme={id}/>

            <span>{ value }</span>
        </ThemeContainer>
    )
}

export default ThemeSwitcher