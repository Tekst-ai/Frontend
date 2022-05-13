import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import useStore from '../../store'
import { Colors } from '../../variables'
import BottomNavigation from './BottomNavigation'
import HelpNavigation from './HelpNavigation'

import Navigation from './Navigation'

const Container = styled.div`
    padding: 2rem 1rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
`

const ImageContainer = styled.a`
    padding: 0 1rem;
`

interface ProfileContainerProps {
    pathName: string;
}

const ProfileContainer = styled.a<ProfileContainerProps>`
    padding: 0.5rem 1rem;
    margin-top: 1.5rem;
    display: flex;
    margin-bottom: 1.125rem;
    transition: all 0.2s ease-in-out;
    border-radius: 6px;
    background: ${(ProfileContainerProps) => ProfileContainerProps.pathName === ProfileContainerProps.href ? Colors.primaryDark : 'transparent'};

    &:hover {
        background: ${(ProfileContainerProps) => ProfileContainerProps.pathName === ProfileContainerProps.href ? Colors.primaryDark : Colors.blackSec};
    }

    div:first-of-type {
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 8px;
        overflow: hidden;
    }

    div:last-of-type {
        margin-left: 1.25rem;
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
    
    return (
        <Container>
            <Link href={"/"} passHref>
                <ImageContainer>
                    <Image
                        src={theme === "dark" ? "/static/images/logo-white.png" : "/static/images/logo-black.png"} 
                        width={75}
                        height={41}
                        alt="Logo of Tekst.ai"/>
                </ImageContainer>
            </Link>

            <Link href={"/account"} passHref>
                <ProfileContainer pathName={router.pathname}>
                    <div>
                        <Image src="/static/images/profile.jpg" alt="Placeholder name" layout='intrinsic' width={50} height={50} objectFit={'cover'} />
                    </div>

                    <div>
                        <p>Janine jacobs</p>

                        <p>Vals Bedrijf</p>
                    </div>
                </ProfileContainer>
            </Link>

            <Navigation/>

            <HelpNavigation/>

            <BottomNavigation/>
        </Container>
    )
}

export default Menu