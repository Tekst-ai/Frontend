import type { NextPage } from 'next';
import styled from 'styled-components';

import { Emails } from '../dynamicIcons';
import IconContainerCarousel from './IconContainerCarousel';
import TextContainerCarousel from './TextContainerCarousel';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
`

const Carousel1: NextPage = () => {
    return (
        <Container>
            <IconContainerCarousel vector={<Emails/>}/>
                
            <TextContainerCarousel title="Smart Email Routing" text="Tekst.ai voorziet slimme email routing. Elke vraag, email ontvangen gaat automatisch naar de juiste persoon / departement."/>
        </Container>
    )
}

export default Carousel1