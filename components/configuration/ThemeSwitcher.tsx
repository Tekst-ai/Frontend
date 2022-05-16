import type { NextPage } from 'next'
import styled from 'styled-components'

import useStore from '../../store'
import ThemeItem from './ThemeItem'

interface ThemeSwitcherProps {
    id: string,
    value: string
}

export const ThemeContainer = styled.label`
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;
    cursor: pointer;
    
    input {
        appearance: none;
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

    const handleChange = (e: any) => {
        if (e.currentTarget.value) {
            store(e.currentTarget.value);
        }
    }

    return (
        <ThemeContainer htmlFor={id}>
            <input type="radio" id={id} value={id} name="modeSelector" checked={theme === id ? true : false} onChange={handleChange}/>

            <ThemeItem theme={id}/>

            <span>{ value }</span>
        </ThemeContainer>
    )
}

export default ThemeSwitcher