import React, { useCallback, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styled, { createGlobalStyle } from 'styled-components';

import themes, { Accent, accentColors, Theme } from '../ThemeConfig';
import useStore, { useAccent, useMenu } from '../store';
import { Menu, MobileMenu } from '../components/layout';
import { Breakpoint, Colors, Transition } from '../variables';
import { useRouter } from 'next/router';
import { Routes } from '../constants';
import { ThemeAccentStylingProps } from '../interfaces/Styling';

interface LayoutProps {
    children: React.ReactNode,
}

const GlobalStyle = createGlobalStyle<ThemeAccentStylingProps>`
    body {
        & ::selection {
            color: ${Colors.textWhite};
            background: ${({ accent }) => accent};
        }
    }
`;

const Container = styled.div<ThemeAccentStylingProps>`
    display: flex;
    position: relative;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: ${Transition.fast};
    flex-direction: column;
    overflow: hidden;

    a:focus, button:focus, input:focus {
        outline: none;
    }

    @media (min-width: ${Breakpoint.mobile}) {
        flex-direction: row;
    }
`

interface MainProps {
    theme: keyof Theme,
    menu: boolean,
    height: number,
}

const Main = styled.main<MainProps>`
    background: ${({ theme }) =>theme.background};
    padding: 0.75rem;
    padding-bottom: 0;
    width: 100%;
    transition: ${Transition.fast};
    z-index: 1;
    margin-bottom: calc(${({ height }) => height}px);
    
    @media (min-width: ${Breakpoint.mobile}) {
        padding: 1.25rem;
        padding-left: 0;
        margin-bottom: 0;
        margin-left: 5rem;
    }

    @media (min-width: ${Breakpoint.tablet}) {
        margin-left: ${(MainProps) => MainProps.menu ? "17.5rem" : "5rem"};
    }

`

interface SubContainerProps {
    theme: keyof Theme,
    height: number,
    pathName: string
}

const SubContainer = styled.div<SubContainerProps>`
    position: relative;
    background: ${({ theme }) => theme.backgroundSec};
    padding: ${({ pathName }) => pathName === Routes.HELPCENTER ? 0 : "2rem"};
    border-radius: 15px;
    min-height: calc(100vh - ${({ height }) => height}px - 0.75rem - 0.25rem);
    max-height: 100%;
    transition: background 0.2s ease-in-out;
    
    @media (min-width: ${Breakpoint.mobile}) {
        padding: ${({ pathName }) => pathName === Routes.HELPCENTER ? 0 : "2rem 3rem"};
        min-height: calc(100vh - 2.5rem);
        max-height: 100%;
    }
`

const Layout: NextPage<LayoutProps> = ({ children }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const setTheme = useStore((s: any) => s.setTheme);
    const setAccent = useAccent((s: any) => s.setAccent);
    const setMenu = useMenu((s: any) => s.setMenu);
    const menu = useMenu((s: any) => s.menu);
    const router = useRouter();

    useEffect(() => {
        const rememberedTheme = localStorage.getItem('theme');
        const rememberedAccent = localStorage.getItem('accent');
        if (rememberedTheme && rememberedAccent) {
            setTheme(rememberedTheme);
            setAccent(rememberedAccent);
        }

    }, [setTheme, setAccent, setMenu]);  

    const [height, setHeight] = useState(0)
    const mobileContainer = useCallback((node: any) => {
        if (node !== null) {
            setHeight(node.children[0].clientHeight);
        }
    }, [])

    return (
        <>
            <GlobalStyle theme={themes[theme]} accent={accentColors[accent][theme]}/>

            <Container theme={themes[theme]} accent={accentColors[accent][theme]}>
                <Menu/>

                <Main menu={menu} theme={themes[theme]} height={height}>
                    <SubContainer theme={themes[theme]} height={height} pathName={router.pathname}>
                        {children}
                    </SubContainer>
                </Main>

                <div ref={mobileContainer}>
                    <MobileMenu/>
                </div>
            </Container>
        </>
    )
  }

export default Layout