import type { NextPage } from 'next';
import styled from 'styled-components';

import useStore from '../../store';
import themes, { Theme } from '../../ThemeConfig';
import { Breakpoint } from '../../variables';

interface TextContainerCarouselProps {
    title: string,
    text: string
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
}

interface ContainerProps {
    theme: keyof Theme,
    top: string,
    bottom: string,
    left: string,
    right: string,
}

const Container = styled.div<ContainerProps>`
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.backgroundAlt};
    padding: 1rem 2.5rem;
    border-radius: 8px;
    white-space: normal;
    width: 100%;
    
    @media (min-width: ${Breakpoint.mobile}) {
        padding: 1rem 1.5rem;
        bottom: 6rem;
        background: ${({ theme }) => theme.backgroundSec};
    }
    
    @media (min-width: ${Breakpoint.tablet}) {
        transform: none;
        width: auto;
        box-shadow: 0 ${({ theme }) => theme === "dark" ? "3px 12px " : "3px 8px "} ${({ theme }) => theme.boxShadow};
        padding: 1.375rem;
        max-width: 22rem;
        top: ${({ top }) => top};
        bottom: ${({ bottom }) => bottom};
        left: ${({ left }) => left};
        right: ${({ right }) => right};
    }

    p {
        &:first-of-type {
            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 0.375rem;
        }
        
        &:last-of-type {
            color: ${({ theme }) => theme.textSec};
            font-size: 0.875rem;
        }
    }
`

const TextContainerCarousel: NextPage<TextContainerCarouselProps> = ({ title, text, top = "auto", bottom = "15%", left = "5%", right = "auto" }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container theme={themes[theme]} top={top} bottom={bottom} left={left} right={right}>
            <p>{ title }</p>

            <p>{ text }</p>
        </Container>
    )
}

export default TextContainerCarousel;