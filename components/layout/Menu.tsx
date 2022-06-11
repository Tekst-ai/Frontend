import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import { Routes } from '../../constants'
import { useData } from '../../hooks/useData'
import { CheckEnv } from '../../services/checks'

import useStore, { useAccent, useMenu } from '../../store'
import themes, { accentColors, Theme } from '../../ThemeConfig'
import { Breakpoint, Transition } from '../../variables'
import { Tooltip } from '../helpers'
import BottomNavigation from './BottomNavigation'
import HelpNavigation from './HelpNavigation'
import Navigation from './Navigation'

interface ContainerProps {
    isOpen: boolean,
}

const Container = styled.div<ContainerProps>`
    padding: 2rem 1rem;
    padding-bottom: calc(2rem - 0.34375rem);
    width: ${(ContainerProps) => ContainerProps.isOpen ? "17.5rem" : "5rem"};
    flex-direction: column;
    transition: ${Transition.fast};
    height: 100vh;
    position: fixed;
    z-index: 2;
    display: none;

    @media (min-width: ${Breakpoint.mobile}) {
        display: flex;
    }
`

const TooltipContainer = styled.div`
    position: relative;
    z-index: 2;
`

interface ImageContainerProps {
    isOpen: boolean
}

const ImageContainer = styled.a<ImageContainerProps>`
    height: 2.5rem;
    padding: ${(ImageContainerProps) => ImageContainerProps.isOpen ? "0 1rem" : "0 0.5rem"};
    transition: ${Transition.fast};
`

interface ProfileContainerProps {
    pathName: string,
    isOpen: boolean,
    accent: string,
    theme: any
}

const ProfileContainer = styled.a<ProfileContainerProps>`
    padding: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? "0.5rem 1rem" : "0" };
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-start;
    margin-left: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? "0" : "0.25rem" };
    margin-right: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? "0" : "0.25rem" };
    margin-bottom: 1.625rem;
    transition: ${Transition.fast};
    border-radius: 6px;
    background: ${(ProfileContainerProps) => ProfileContainerProps.pathName === ProfileContainerProps.href && ProfileContainerProps.isOpen ? ({ theme }) => theme.backgroundSec : "transparent"};
    position: relative;
    z-index: 3;
    box-shadow: ${(ProfileContainerProps) => ProfileContainerProps.pathName === ProfileContainerProps.href ? "0 1px 4px " + ProfileContainerProps.theme.boxShadow : "0 1px 4px " + ProfileContainerProps.theme.background};
    
    /* &:hover {
        background: ${(ProfileContainerProps) => ProfileContainerProps.pathName === ProfileContainerProps.href && ProfileContainerProps.isOpen ? ({ accent }) => accent : ({ theme }) => theme.lineLight};
    } */

    div:first-of-type {
        width: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? "3.125rem" : "2.5rem" };
        height: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? "3.125rem" : "2.5rem" };
        border-radius: 8px;
        overflow: hidden;
        transition: ${Transition.fast};
    }

    div:last-of-type {
        transition: ${Transition.superFast};
        margin-left: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? "1.25rem" : "0" };
        position: absolute;
        left: 4.375rem;
        opacity: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? 1 : 0 };
        white-space: nowrap;
        
        p {
            transition: ${Transition.fast};
            
            &:first-of-type {
                font-size: 1.125rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
                color: ${({ accent }) => accent};
            }
        }
    }
`

const Menu: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent = useAccent((s: any) => s.accent);
    const router = useRouter();
    const menu = useMenu((s: any) => s.menu);
    
    const [isOpen, setIsOpen] = useState(menu)

    const handleOpen = (open: boolean) => {
        setIsOpen(open)
    }

    const { data, isLoading, isError } = useData(CheckEnv(process.env.NEXT_PUBLIC_PROFILE_ENDPOINT));

    return (
        <Container isOpen={isOpen}>
            <Link href={Routes.DASHBOARD} passHref>
                <ImageContainer isOpen={isOpen}>
                    <Image
                        src={theme === "dark" && isOpen ? "/static/images/logo-white.png" : theme === "light" && isOpen ? "/static/images/logo-black.png" : "/static/images/logo-no-text.png"} 
                        // src={"/static/images/logo-no-text.png"} 
                        width={isOpen ? 75 : 31}
                        // width={31}
                        height={41}
                        alt="Logo of Tekst.ai"/>
                </ImageContainer>
            </Link>

            <TooltipContainer>
                <Link href={Routes.PROFILE} passHref>
                    <ProfileContainer pathName={router.pathname} theme={themes[theme]} isOpen={isOpen} accent={accentColors[accent as keyof typeof accentColors][theme]}>
                        <div>
                            <Image src={ (!isLoading && !isError) ? data.img : '/static/images/profile.jpg' } alt={ (!isLoading && !isError) ? `${data.firstName} ${data.lastName}` : "Profile picture" } layout='intrinsic' width={50} height={50} objectFit={'cover'} />
                        </div>

                        <div>
                            <p>{ (!isLoading && !isError) && data.firstName }</p>

                            <p>{ (!isLoading && !isError) && data.company }</p>
                        </div>
                    </ProfileContainer>
                </Link>

                <Tooltip title="Profiel"/>
            </TooltipContainer>

            <Navigation isOpen={isOpen}/>

            <HelpNavigation isOpen={isOpen}/>

            <BottomNavigation isOpen={isOpen} onOpen={handleOpen}/>
        </Container>
    )
}

export default Menu