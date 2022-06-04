import type { NextPage } from 'next'
import styled from 'styled-components'
import useStore, { useAccent } from '../../store'
import { accentColors, Theme } from '../../ThemeConfig'
import { Colors } from '../../variables'

interface ContainerProps {
    accent: string,
}

const Container = styled.div<ContainerProps>`
    background: linear-gradient(90deg, ${({ accent }) => accent} 0%, ${Colors.secondary} 100%);
    /* background: linear-gradient(90deg, ${Colors.secondary}CC 0%, ${({ accent }) => accent + "CC"} 100%); */
    position: absolute;
    top: -3rem;
    left: -3rem;
    border-radius: 10px 10px 0 0;
    width: calc(100% + 6rem);
    height: 6.75rem;
`

const HelpBackgroundSmall: NextPage = () => {
    const accent = useAccent((s: any) => s.accent)
    const theme: keyof Theme = useStore((s: any) => s.theme)

    return (
        <Container accent={accentColors[accent as keyof typeof accentColors][theme]}/>
    )
}

export default HelpBackgroundSmall