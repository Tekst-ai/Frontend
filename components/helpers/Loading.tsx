import type { NextPage } from 'next';
import styled from 'styled-components';

import useStore, { useAccent } from '../../store';
import { accentColors, Theme } from '../../ThemeConfig';
import { Colors } from '../../variables';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
`

const AnimationContainer = styled.div`
    width: 221px;
    height: 221px;
    display: inline-block;
    overflow: hidden;
    background: none;
`

interface SubContainerProps {
    accent: string
}

const AnimationSubContainer = styled.div<SubContainerProps>`
    @keyframes ldio-xjni4o04qv-o {
        0%    { opacity: 1; transform: translate(0 0) }
    49.99% { opacity: 1; transform: translate(3.5rem,0) }
    50%    { opacity: 0; transform: translate(3.5rem,0) }
    100%    { opacity: 0; transform: translate(0,0) }
    }
    @keyframes ldio-xjni4o04qv {
        0% { transform: translate(0,0) }
    50% { transform: translate(3.5rem,0) }
    100% { transform: translate(0,0) }
    }

    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;

    & div {
        box-sizing: content-box;
        position: absolute;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        top: 77.35px;
        left: 44.2px;

        &:first-of-type {
            background: ${({ accent }) => accent};
            animation: ldio-xjni4o04qv 1.1111111111111112s linear infinite;
            animation-delay: -0.5555555555555556s;
        }
        &:nth-of-type(2) {
            background: ${Colors.secondary};
            animation: ldio-xjni4o04qv 1.1111111111111112s linear infinite;
            animation-delay: 0s;
        }
        &:last-of-type {
            background: ${({ accent }) => accent};
            animation: ldio-xjni4o04qv-o 1.1111111111111112s linear infinite;
            animation-delay: -0.5555555555555556s;
        }
    }
`

const Loading: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent = useAccent((s: any) => s.accent);
    const color = accentColors[accent as keyof typeof accentColors][theme];

    return (
        <Container>
            <AnimationContainer>
                <AnimationSubContainer accent={color}>
                    <div></div>
                    <div></div>
                    <div></div>
                </AnimationSubContainer>
            </AnimationContainer>
        </Container>
    )
}

export default Loading;