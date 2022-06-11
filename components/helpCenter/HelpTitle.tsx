import type { NextPage } from 'next'
import styled from 'styled-components'

import { ThemeStylingProps } from '../../interfaces/Styling'
import useStore from '../../store'
import themes, { Theme } from '../../ThemeConfig'
import { Breakpoint } from '../../variables'

interface HelpTitleProps {
    title: string,
    text: string
}

const Container = styled.div<ThemeStylingProps>`
    margin-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
    
    @media (min-width: ${Breakpoint.mobileSmall}) {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    @media (min-width: ${Breakpoint.mobile}) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media (min-width: ${Breakpoint.tablet}) {
        padding-left: 3rem;
        padding-right: 3rem;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 0.625rem;
        
        @media (min-width: ${Breakpoint.mobile}) {
            font-size: 2.5rem;
        }
    }

    p {
        color: ${({ theme }) => theme.textSec};
        max-width: 30rem;
    }
`

const HelpTitle: NextPage<HelpTitleProps> = ({ title, text }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme)
    
    return (
        <Container theme={themes[theme]}>
            <h1>{ title }</h1>

            <p>{ text }</p>
        </Container>
    )
}

export default HelpTitle