import type { NextPage } from 'next';
import styled from 'styled-components';
import { FiMoreHorizontal, FiCornerDownLeft } from 'react-icons/fi';
import { useEffect, useState } from 'react';

import useStore from '../../store';
import themes, { Theme } from '../../ThemeConfig';
import { Breakpoint, Colors, Transition } from '../../variables';
import MobileNavigation from './MobileNavigation';
import MobileSubNavigation from './MobileSubNavigation';
import { useRouter } from 'next/router';
import { Routes } from '../../constants';

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
    padding: 0.5rem 0.75rem;
    padding-top: 0.75rem;

    @media (min-width: ${Breakpoint.mobile}) {
        visibility: hidden;
    }
`

const NavigationList = styled.ul`
    display: flex;

    li {
        width: 100%;
        display: flex;
        margin-right: 0.375rem;
        
        &:last-of-type {
            margin-right: 0;
        }
    }
`

interface SubNavButtonProps {
    theme: keyof Theme,
}

const SubNavButton = styled.button<SubNavButtonProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.textSec};
    background: ${({ theme }) => theme.background};
    transition: ${Transition.fast};
    border-radius: 7px;
    padding: 1rem;

    &:hover {
        background: ${({ theme }) => theme.backgroundSec};
        color: ${({ theme }) => theme.text};
    }
`

const MobileMenu: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const router = useRouter();

    const [subNav, setSubNav] = useState(false);

    useEffect(() => {
        if (router.pathname === Routes.PROFILE || router.pathname === Routes.CONFIGURATION) {
            setSubNav(true);
        }
    }, [router.pathname])

    return (
        <Container theme={themes[theme]}>
            <NavigationList>
                {
                    subNav ? 
                    <MobileSubNavigation/>:
                    <MobileNavigation/>
                }

                <li>
                    <SubNavButton theme={themes[theme]} onClick={() => setSubNav(!subNav)}>
                        {
                            subNav ?
                            <FiCornerDownLeft fontSize={20} strokeWidth={2.5}/>:
                            <FiMoreHorizontal fontSize={22} strokeWidth={2}/>
                        }
                    </SubNavButton>
                </li>
            </NavigationList>
        </Container>
    )
}

export default MobileMenu