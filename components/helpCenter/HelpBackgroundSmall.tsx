import type { NextPage } from 'next'
import styled from 'styled-components'
import { useAccent } from '../../store'
import { accentColors } from '../../ThemeConfig'
import { Colors } from '../../variables'

interface ContainerProps {
    accent: any,
}

const Container = styled.div<ContainerProps>`
    background: linear-gradient(90deg, ${({ accent }) => accent.color} 0%, ${Colors.secondary} 100%);
    /* background: linear-gradient(90deg, ${Colors.secondary}CC 0%, ${({ accent }) => accent.color + "CC"} 100%); */
    position: absolute;
    top: -2rem;
    left: -3rem;
    border-radius: 10px 10px 0 0;
    width: calc(100% + 6rem);
    height: 6.75rem;
`

const HelpBackgroundSmall: NextPage = () => {
    const accent = useAccent((s: any) => s.accent)

    return (
        <Container accent={accentColors[accent as keyof typeof accentColors]}/>
    )
}

export default HelpBackgroundSmall