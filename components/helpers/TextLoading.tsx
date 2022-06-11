import type { NextPage } from 'next'
import styled from 'styled-components'

import useStore, { useAccent } from '../../store'
import themes, { accentColors, Theme } from '../../ThemeConfig'

interface TextLoadingProps {
    width: number,
    height: number,
}

interface ContainerProps {
    width: number,
    height: number,
    accent: string,
    theme: keyof Theme,
}

const Container = styled.span<ContainerProps>`
    width: ${({ width }) => width}%;
    height: ${({ height }) => height}rem;
    display: block;
    border-radius: 7px;
    box-shadow: 0 ${({ theme }) => theme.name === "dark" ? "3px 12px" : "2px 4px"} ${({ theme }) => theme.boxShadow};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: wave;
    animation-timing-function: linear;
    background: ${({ theme }) => theme.backgroundAlt};
    background-image: -webkit-gradient(linear,  left center,  right center,  from(${({ theme }) => theme.backgroundAlt}),  color-stop(.2,  ${({ accent }) => accent}),  color-stop(.4,  ${({ accent }) => accent}),  to(${({ theme }) => theme.backgroundAlt}));
    background-image: -webkit-linear-gradient(left,  ${({ theme }) => theme.backgroundAlt} 0%,  ${({ accent }) => accent + 66} 20%,  ${({ accent }) => accent + 66} 40%,  ${({ theme }) => theme.backgroundAlt} 100%);
    background-repeat: no-repeat;
    background-size: 200% ${({ height }) => height}rem;
    position: relative;
    @keyframes wave {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }   
`

const TextLoading: NextPage<TextLoadingProps> = ({ width, height }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent = useAccent((s: any) => s.accent);

    return (
        <Container width={width} height={height} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors][theme]}/>
    )
}

export default TextLoading