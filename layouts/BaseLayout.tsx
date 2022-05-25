import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import styled, { createGlobalStyle } from 'styled-components';

import themes, { accentColors, Theme } from '../ThemeConfig';
import useStore, { useAccent, useMenu } from '../store';
import { Menu } from '../components/layout';

interface LayoutProps {
    children: React.ReactNode
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: any ) => theme.background};
    color: ${({ theme }: any) => theme.text};
    transition: all 0.3s ease-in-out;

    & ::selection {
        color: ${({ accent }) => accent.text};
        background: ${({ accent }) => accent.color};
    }
  }
`;

const Container = styled.div`
    display: flex;
    position: relative;
`

interface MainProps {
    theme: any,
    menu: boolean
}

const Main = styled.main<MainProps>`
    background: ${({ theme }) =>theme.background};
    padding: 1.25rem;
    padding-left: 0;
    width: 100%;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    margin-left: ${(MainProps) => MainProps.menu ? "20rem" : "5rem"};
    /* position: fixed; */
`

interface SubContainerProps {
    theme: any
}

const SubContainer = styled.div<SubContainerProps>`
    background: ${({ theme }) => theme.backgroundSec};
    padding: 2rem 3rem;
    border-radius: 15px;
    min-height: calc(100vh - 2.5rem);
    height: 100%;
    transition: all 0.3s ease-in-out;
    /* overflow-y: auto; */
`

const Layout: NextPage<LayoutProps> = ({ children }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent = useAccent((s: any) => s.accent);
    const setTheme = useStore((s: any) => s.setTheme);
    const setAccent = useAccent((s: any) => s.setAccent);
    const setMenu = useMenu((s: any) => s.setMenu);
    const menu = useMenu((s: any) => s.menu);

    useEffect(() => {
        const rememberedTheme = localStorage.getItem('theme');
        const rememberedAccent = localStorage.getItem('accent');
        // const rememberedMenu = localStorage.getItem('open menu');
        if (rememberedTheme && rememberedAccent) {
            setTheme(rememberedTheme);
            setAccent(rememberedAccent);
            // setMenu(rememberedMenu)
        }

    }, [setTheme, setAccent, setMenu]);

    return (
        <>
            <GlobalStyle theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}/>

            <Container>
                <Menu/>

                <Main menu={menu} theme={themes[theme]}>
                    <SubContainer theme={themes[theme]}>
                        {children}
                    </SubContainer>
                </Main>
            </Container>
        </>
    )
  }
  
  export default Layout