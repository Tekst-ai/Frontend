import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import useStore, { useAccent } from '../store';
import themes, { Theme } from '../ThemeConfig';
import styled, { createGlobalStyle } from 'styled-components';
import { Menu } from '../components/layout';

interface LayoutProps {
    children: React.ReactNode
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: any ) => theme.background};
    color: ${({ theme }: any) => theme.text};
    transition: background-color 0.25s, color 0.25s;
  }
`;

const Container = styled.div`
    display: flex;
`

interface MainProps {
    theme: any
}

const Main = styled.main<MainProps>`
    background: ${(MainProps) => MainProps.theme === 'dark' ? themes.dark.background : themes.light.background };
    padding: 1.25rem;
    padding-left: 0;
    width: 100%;
    transition: all 0.2s ease-in-out;
`

interface SubContainerProps {
    theme: any
}

const SubContainer = styled.div<SubContainerProps>`
    background: ${(SubContainerProps) => SubContainerProps.theme === 'dark' ? themes.dark.backgroundSec : themes.light.backgroundSec };
    padding: 2rem 3rem;
    border-radius: 15px;
    width: 100%;
    height: calc(100vh - 2.5rem);
    transition: all 0.2s ease-in-out;
`

const Layout: NextPage<LayoutProps> = ({ children }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const setTheme = useStore((s: any) => s.setTheme);
    const setAccent = useAccent((s: any) => s.setAccent);

    useEffect(() => {
        const rememberedTheme = localStorage.getItem('theme');
        const rememberedAccent = localStorage.getItem('accent');
        if (rememberedTheme && rememberedAccent) {
            setTheme(rememberedTheme);
            setAccent(rememberedAccent);
        }

    }, [setTheme, setAccent]);

    return (
        <>
            <GlobalStyle theme={themes[theme]} />

            <Container>
                <Menu/>

                <Main theme={theme}>
                    <SubContainer theme={theme}>
                        {children}
                    </SubContainer>
                </Main>
            </Container>
        </>
    )
  }
  
  export default Layout