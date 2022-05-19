import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import styled, { createGlobalStyle } from 'styled-components';

import themes, { Theme } from '../ThemeConfig';
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
  }
`;

const Container = styled.div`
    display: flex;
`

interface MainProps {
    theme: any
}

const Main = styled.main<MainProps>`
    background: ${({ theme }) =>theme.background};
    padding: 1.25rem;
    padding-left: 0;
    width: 100%;
    transition: all 0.3s ease-in-out;
    z-index: 1;
`

interface SubContainerProps {
    theme: any
}

const SubContainer = styled.div<SubContainerProps>`
    background: ${({ theme }) => theme.backgroundSec};
    padding: 2rem 3rem;
    border-radius: 15px;
    width: 100%;
    height: calc(100vh - 2.5rem);
    transition: all 0.3s ease-in-out;
`

const Layout: NextPage<LayoutProps> = ({ children }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const setTheme = useStore((s: any) => s.setTheme);
    const setAccent = useAccent((s: any) => s.setAccent);
    const setMenu = useMenu((s: any) => s.setMenu);

    useEffect(() => {
        const rememberedTheme = localStorage.getItem('theme');
        const rememberedAccent = localStorage.getItem('accent');
        const rememberedMenu = localStorage.getItem('open menu');
        if (rememberedTheme && rememberedAccent && rememberedMenu) {
            setTheme(rememberedTheme);
            setAccent(rememberedAccent);
            setMenu(rememberedMenu)
        }

    }, [setTheme, setAccent, setMenu]);

    return (
        <>
            <GlobalStyle theme={themes[theme]}/>

            <Container>
                <Menu/>

                <Main theme={themes[theme]}>
                    <SubContainer theme={themes[theme]}>
                        {children}
                    </SubContainer>
                </Main>
            </Container>
        </>
    )
  }
  
  export default Layout