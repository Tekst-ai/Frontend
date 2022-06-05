import React, { ReactElement, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'

import { NextPageWithLayout } from '../_app'
import themes, { accentColors, Theme } from '../../ThemeConfig'
import useStore, { useAccent, useAuth } from '../../store'
import { Colors, Transition } from '../../variables'
import { Routes } from '../../constants'
import { TitleContainer } from '../configuration'
import { PrimaryButton } from '../../components/buttons'
import { TitleFormat } from '../../services/title'

const GlobalStyle = createGlobalStyle`
    html, body {
        /* background: ${({ theme }: any ) => theme.background}; */
        /* color: ${({ theme }: any) => theme.text}; */
        /* transition: ${Transition.fast}; */
        
        & ::selection {
            color: ${Colors.textWhite};
            background: ${({ accent }) => accent};
        }
    }
`;

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    background: ${({ theme }: any) => theme.background};
    color: ${({ theme }: any) => theme.text};
    transition: ${Transition.fast};
`

const LeftContainer = styled.div`
    width: 45%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`

const ImageContainer = styled.div`
    position: absolute;
    top: 2rem;
    left: 2rem;
`

const ContentContainer = styled.div`
    margin: auto;
`

const RightContainer = styled.div`
    width: 55%;
    /* height: 100%; */
    /* background: red; */
`

const Login: NextPageWithLayout = () => {
    const router = useRouter()
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent = useAccent((s: any) => s.accent);
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
        setAuth("true");
        localStorage.setItem("auth", "true");
        router.push(Routes.DASHBOARD)
    }

    return (
        <>
            <GlobalStyle theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors][theme]}/>

            <Head>
                <title>
                    { TitleFormat("Login") }
                </title>
            </Head>

            <Container theme={themes[theme]}>
                <LeftContainer>
                    <ImageContainer>
                        <Image
                            src={theme === "dark" ? "/static/images/logo-white.png" : "/static/images/logo-black.png"} 
                            width={75}
                            height={41}
                            alt="Logo of Tekst.ai"
                        />
                    </ImageContainer>


                    <ContentContainer>
                        <TitleContainer theme={themes[theme]}>
                            <h1>Welkom bij Tekst.ai</h1>

                            <p>Meldt u aan en begin tijd te besparen!</p>
                        </TitleContainer>

                        <PrimaryButton type="button" onClick={handleClick}>
                            Aanmelden 
                        </PrimaryButton>
                    </ContentContainer>
                </LeftContainer>

                <RightContainer>
                </RightContainer>
            </Container>
        </>
    )
}

export default Login

Login.getLayout = function PageLayout(page: ReactElement) {
    return page
}