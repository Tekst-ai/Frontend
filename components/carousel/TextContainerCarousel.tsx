import type { NextPage } from 'next';
import styled from 'styled-components';

import useStore from '../../store';
import themes, { Theme } from '../../ThemeConfig';

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
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    background: ${({ theme }) => theme.backgroundSec};
    padding: 1.375rem;
    border-radius: 8px;
    box-shadow: 0 ${({ theme }) => theme === "dark" ? "3px 12px " : "3px 8px "} ${({ theme }) => theme.boxShadow};
    max-width: 22rem;
    white-space: normal;

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