import type { NextPage } from 'next'
import styled from 'styled-components'
import useStore, { useAccent } from '../../store'
import { Accent, accentColors, Theme } from '../../ThemeConfig'
import { Breakpoint, Colors } from '../../variables'

interface ContainerProps {
    accent: string,
}

const Container = styled.div<ContainerProps>`
    background: linear-gradient(90deg, ${({ accent }) => accent} 0%, ${Colors.secondary} 100%);
    position: absolute;
    top: -3.5rem;
    left: -2rem;
    border-radius: 15px 15px 0 0;
    width: calc(100% + 4rem);
    height: 6rem;
    
    @media (min-width: ${Breakpoint.mobile}) {
        height: 6.75rem;
        width: calc(100% + 6rem);
        top: -3.5rem;
        left: -3rem;
    }
`

const HelpBackgroundSmall: NextPage = () => {
    const accent: keyof Accent = useAccent((s: any) => s.accent)
    const theme: keyof Theme = useStore((s: any) => s.theme)

    return (
        <Container accent={accentColors[accent][theme]}/>
    )
}

export default HelpBackgroundSmall