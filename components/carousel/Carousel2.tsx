import type { NextPage } from 'next';
import styled from 'styled-components';

import { Analysis } from '../dynamicIcons';
import IconContainerCarousel from './IconContainerCarousel';
import TextContainerCarousel from './TextContainerCarousel';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
`

const Carousel2: NextPage = () => {
    return (
        <Container>
            <IconContainerCarousel vector={<Analysis/>} title="Work illustrations by Storyset"/>
                
            <TextContainerCarousel left="auto" right="10%" bottom="8%" title="Extra inzichten" text="Krijg meer inzicht in hoe je uw mails behandelt. Leer meer over welke type emails je ontvangt en hoe snel je deze behandelt."/>
        </Container>
    )
}

export default Carousel2