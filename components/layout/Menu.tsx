import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'

import useStore from '../../store'
import { Colors } from '../../variables'
import BottomNavigation from './BottomNavigation'
import HelpNavigation from './HelpNavigation'

import Navigation from './Navigation'

interface ContainerProps {
    isOpen: boolean
}

const Container = styled.div<ContainerProps>`
    padding: 2rem 1rem;
    padding-bottom: calc(2rem - 0.34375rem);
    width: ${(ContainerProps) => ContainerProps.isOpen ? "25rem" : "5rem"};
    display: flex;
    flex-direction: column;
`

interface ImageContainerProps {
    isOpen: boolean
}

const ImageContainer = styled.a<ImageContainerProps>`
    padding: ${(ImageContainerProps) => ImageContainerProps.isOpen ? "0 1rem" : "0 0.5rem"};
`

interface ProfileContainerProps {
    pathName: string;
    isOpen: boolean
}

const ProfileContainer = styled.a<ProfileContainerProps>`
    padding: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? "0.5rem 1rem" : "0" };
    margin-top: 1.5rem;
    display: flex;
    justify-content: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? "flex-start" : "center" };;
    margin-bottom: 1.625rem;
    transition: all 0.2s ease-in-out;
    border-radius: 6px;
    background: ${(ProfileContainerProps) => ProfileContainerProps.pathName === ProfileContainerProps.href && ProfileContainerProps.isOpen ? Colors.primaryDark : 'transparent'};

    &:hover {
        background: ${(ProfileContainerProps) => ProfileContainerProps.pathName === ProfileContainerProps.href && ProfileContainerProps.isOpen ? Colors.primaryDark : ProfileContainerProps.isOpen ? Colors.blackSec : Colors.blackPri};
    }

    div:first-of-type {
        width: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? "3.125rem" : "2.5rem" };
        height: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? "3.125rem" : "2.5rem" };
        border-radius: 8px;
        overflow: hidden;
    }

    div:last-of-type {
        margin-left: ${(ProfileContainerProps) => ProfileContainerProps.isOpen ? "1.25rem" : "0" };
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p:first-of-type {
            font-size: 1.125rem;
            font-weight: 700;
        }
    }
`

const Menu: NextPage = () => {
    const theme = useStore((s: any) => s.theme);
    const router = useRouter();
    
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Container isOpen={isOpen}>
            <Link href={"/"} passHref>
                <ImageContainer isOpen={isOpen}>
                    <Image
                        src={theme === "dark" && isOpen ? "/static/images/logo-white.png" : theme === "light" && isOpen ? "/static/images/logo-black.png" : "/static/images/logo-no-text.png"} 
                        width={isOpen ? 75 : 31}
                        height={41}
                        alt="Logo of Tekst.ai"/>
                </ImageContainer>
            </Link>

            <Link href={"/account"} passHref>
                <ProfileContainer pathName={router.pathname} isOpen={isOpen}>
                    <div>
                        <Image src="/static/images/profile.jpg" alt="Placeholder name" layout='intrinsic' width={isOpen ? 50 : 40} height={isOpen ? 50 : 40} objectFit={'cover'} />
                    </div>

                    { isOpen ? 
                        <div>
                            <p>Janine jacobs</p>

                            <p>Vals Bedrijf</p>
                        </div>:
                        ""
                    }
                </ProfileContainer>
            </Link>

            <Navigation isOpen={isOpen}/>

            <HelpNavigation isOpen={isOpen}/>

            <BottomNavigation isOpen={isOpen}/>
        </Container>
    )
}

export default Menu