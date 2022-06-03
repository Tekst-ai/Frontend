import type { NextPage } from 'next';
import styled from 'styled-components';

import useStore, { useAccent, useMenu } from '../../store';
import themes, { accentColors, Theme } from '../../ThemeConfig';

interface TooltipProps {
    title: string,
}

interface ContainerProps {
    theme: any,
    accent: any,
    isOpen: boolean,
}

const Container = styled.div<ContainerProps>`
    position: absolute;
    background: ${({ accent }) => accent.color};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    pointer-events: none;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    box-shadow: 0 2px 6px ${({ theme }) => theme.boxShadow};
    transition: all 0.2s ease-in-out;
    transition-delay: 0.2s;
    display: ${({ isOpen }) => isOpen ? 'none' : 'block'};

    p {
        color: ${({ accent }) => accent.text};
        font-size: 16;
        font-weight: 700;
    }

    a:hover + & {
        left: calc(4rem + 7px);
        opacity: 1;
    }

    &::after {
        content: '';
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border: 7px solid transparent;
        border-right-color: ${({ accent }) => accent.color};
    }
`

const Tooltip: NextPage<TooltipProps> = ({ title }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent = useAccent((s: any) => s.accent);
    const menu = useMenu((s: any) => s.menu);

    return (
        <Container theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]} isOpen={menu}>
            <p>{ title }</p>
        </Container>
    )
}

export default Tooltip;