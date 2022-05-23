import type { NextPage } from 'next'
import styled from 'styled-components'

import useStore from '../../store'
import themes, { Theme } from '../../ThemeConfig'

interface HelpTitleProps {
    title: string,
    text: string
}

interface ContainerProps {
    theme: any
}

const Container = styled.div<ContainerProps>`
    padding-left: 4rem;
    padding-right: 4rem;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 0.625rem;
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