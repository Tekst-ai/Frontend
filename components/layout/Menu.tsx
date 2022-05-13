import type { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import useStore from '../../store'
import BottomNavigation from './BottomNavigation'
import HelpNavigation from './HelpNavigation'

import Navigation from './Navigation'

const Container = styled.div`
    padding: 2rem 1rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
`

const ImageContainer = styled.div`
    padding: 0 1rem;
`

const ProfileContainer = styled.div`
    padding: 0 1rem;
    margin-top: 2rem;
    display: flex;
    margin-bottom: 1.625rem;

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
    
    return (
        <Container>
            <ImageContainer>
                <Image
                    src={theme === "dark" ? "/static/images/logo-white.png" : "/static/images/logo-black.png"} 
                    width={75}
                    height={41}
                    alt="Logo of Tekst.ai"/>
            </ImageContainer>

            <ProfileContainer>
                <div>
                    <Image src="/static/images/profile.jpg" alt="Placeholder name" layout='intrinsic' width={50} height={50} objectFit={'cover'} />
                </div>

                <div>
                    <p>Janine jacobs</p>

                    <p>Vals Bedrijf</p>
                </div>
            </ProfileContainer>

            <Navigation/>

            <HelpNavigation/>

            <BottomNavigation/>
        </Container>
    )
}

export default Menu