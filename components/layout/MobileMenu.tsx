import type { NextPage } from 'next';
import styled from 'styled-components';

import useStore from '../../store';
import themes, { Theme } from '../../ThemeConfig';
import { Breakpoint, Transition } from '../../variables';

interface ContainerProps {
    theme: keyof Theme
}

const Container = styled.div<ContainerProps>`
    display: block;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 4;
    background: ${({ theme }) => theme.background};
    transition: ${Transition.fast};
    padding: 0 1.5rem;

    @media (min-width: ${Breakpoint.mobile}) {
        display: none;
    }
`

const MobileMenu: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container theme={themes[theme]}>
            <p>mobile</p>
        </Container>
    )
}

export default MobileMenu;