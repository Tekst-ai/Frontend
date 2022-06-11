import type { NextPage } from 'next'
import styled from 'styled-components'

import { ThemeStylingProps } from '../../interfaces/Styling'
import useStore from '../../store'
import themes, { Theme } from '../../ThemeConfig'

interface InfoProps {
    message: string
}

const Container = styled.div<ThemeStylingProps>`
    width: 100%;
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    color: ${({ theme }) => theme.textSec};
`

const Info: NextPage<InfoProps> = ({ message }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme)

    return (
        <Container theme={themes[theme]}>
            <p>{ message }</p>
        </Container>
    )
}

export default Info