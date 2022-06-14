import React, { ReactElement, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import { FiChevronDown } from 'react-icons/fi'

import { NextPageWithLayout } from '../_app'
import themes, { Accent, accentColors, Theme } from '../../ThemeConfig'
import useStore, { useAccent, useAuth } from '../../store'
import { Breakpoint, Colors, Transition } from '../../variables'
import { TitleContainer } from '../configuration'
import { TitleFormat } from '../../services/title'
import LoginForm from '../../components/forms/LoginForm'
import { Carousel } from '../../components/carousel'
import { TernaryButton } from '../../components/buttons'
import { ButtonContainer } from '../categories'
import { ThemeAccentStylingProps } from '../../interfaces/Styling'

const GlobalStyle = createGlobalStyle<ThemeAccentStylingProps>`
    html, body {        
        & ::selection {
            color: ${Colors.textWhite};
            background: ${({ accent }) => accent};
        }
    }
`;

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    background: ${({ theme }: any) => theme.backgroundAlt};
    color: ${({ theme }: any) => theme.text};
    transition: ${Transition.fast};
    flex-direction: column;

    @media (min-width: ${Breakpoint.mobile}) {
        flex-direction: row;
    }
`

const LeftContainer = styled.div<ThemeAccentStylingProps>`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    
    @media (min-width: ${Breakpoint.mobile}) {
        width: 55%;
    }

    @media (min-width: ${Breakpoint.tablet}) {
        width: 45%;
    }

    div:nth-of-type(3) {
        position: absolute;
        bottom: 1.5rem;
        left: 50%;
        transform: translateX(-50%);

        @media (min-width: ${Breakpoint.mobile}) {
            display: none;
        }

        button {
            flex-direction: column;
            align-items: center;
            background: ${({ theme }) => theme.backgroundAlt};

            svg {
                margin-left: 0;
                margin-top: 0.5rem;
                transition: ${Transition.fast};
            }

            &:hover {
                color: ${({ accent }) => accent};
                background: ${({ theme }) => theme.backgroundAlt};

                svg {
                    transform: translateY(5px);
                }
            }
        }
    }
`

const ImageContainer = styled.div`
    position: absolute;
    top: 2rem;
    left: 2rem;
`

const ContentContainer = styled.div`
    margin: auto;
    width: 24rem;
    padding: 0 1.5rem;

    button {
        margin-left: auto;
    }
`

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    
    @media (min-width: ${Breakpoint.mobile}) {
        width: 45%;
    }

    @media (min-width: ${Breakpoint.tablet}) {
        width: 55%;
    }
`

/* eslint-disable @next/next/no-img-element */
const Login: NextPageWithLayout = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const setTheme = useStore((s: any) => s.setTheme);
    const setAccent = useAccent((s: any) => s.setAccent);
    const setAuth = useAuth((s: any) => s.setAuth);

    useEffect(() => {
        const rememberedTheme = localStorage.getItem("theme");
        const rememberedAccent = localStorage.getItem("accent");
        const rememberedAuth = localStorage.getItem("auth");
        if (rememberedTheme && rememberedAccent && rememberedAuth) {
            setTheme(rememberedTheme);
            setAccent(rememberedAccent);
            setAuth(rememberedAuth);
        }

    }, [setTheme, setAccent, setAuth]);

    const handleClick = () => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }

    return (
        <>
            <GlobalStyle theme={themes[theme]} accent={accentColors[accent][theme]}/>

            <Head>
                <title>
                    { TitleFormat("Login") }
                </title>
            </Head>

            <Container theme={themes[theme]}>
                <LeftContainer theme={themes[theme]} accent={accentColors[accent][theme]}>
                    <ImageContainer>
                        <img
                            alt="Logo of Tekst.ai"
                            src={theme === "dark" ? "/static/images/logo-white.png" : "/static/images/logo-black.png"} 
                            width={75}
                            height={41}
                        />
                    </ImageContainer>

                    <ContentContainer>
                        <TitleContainer theme={themes[theme]}>
                            <h1>Welkom bij Tekst.ai</h1>

                            <p>Meldt u aan en begin tijd te besparen!</p>
                        </TitleContainer>

                        <div>
                            <LoginForm/>
                        </div>
                    </ContentContainer>

                    <ButtonContainer theme={themes[theme]} accent={accentColors[accent][theme]}>
                        <TernaryButton type="button" onClick={handleClick}>
                            Ontdek hoe Tekst.ai u kan helpen

                            <FiChevronDown fontSize={18} strokeWidth={2.75}/>
                        </TernaryButton>
                    </ButtonContainer>
                </LeftContainer>

                <RightContainer>
                    <Carousel/>
                </RightContainer>
            </Container>
        </>
    )
}

export default Login;

Login.getLayout = function PageLayout(page: ReactElement) {
    return page
}