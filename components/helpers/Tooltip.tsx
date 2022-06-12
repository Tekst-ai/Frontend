import type { NextPage } from 'next';
import styled from 'styled-components';

import useStore, { useAccent, useMenu } from '../../store';
import themes, { Accent, accentColors, Theme } from '../../ThemeConfig';
import { Colors, Transition } from '../../variables';

interface TooltipProps {
    title: string,
}

interface ContainerProps {
    theme: keyof Theme,
    accent: string,
    isOpen: boolean,
}

const Container = styled.div<ContainerProps>`
    position: absolute;
    background: ${({ accent }) => accent};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    pointer-events: none;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    box-shadow: 0 2px 6px ${({ theme }) => theme.boxShadow};
    transition: ${Transition.fast};
    transition-delay: 0.1s;
    display: ${({ isOpen }) => isOpen ? 'none' : 'block'};

    p {
        color: ${Colors.textWhite};
        font-size: 16;
        font-weight: 700;
    }

    a:hover + &,
    button:hover + & {
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
        border-right-color: ${({ accent }) => accent};
    }
`

const Tooltip: NextPage<TooltipProps> = ({ title }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const menu = useMenu((s: any) => s.menu);

    return (
        <Container theme={themes[theme]} accent={accentColors[accent][theme]} isOpen={menu}>
            <p>{ title }</p>
        </Container>
    )
}

export default Tooltip;