import type { NextPage } from 'next';
import styled from 'styled-components';

import { Busy } from '../dynamicIcons';
import IconContainerCarousel from './IconContainerCarousel';
import TextContainerCarousel from './TextContainerCarousel';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
`

const Carousel3: NextPage = () => {
    return (
        <Container>
            <IconContainerCarousel vector={<Busy/>}/>
                
            <TextContainerCarousel top="5%" left="3%" bottom="auto" title="Busy" text="Tekst.ai voorziet slimme email routing. Elke vraag, email ontvangen gaat automatisch naar de juiste persoon / departement."/>
        </Container>
    )
}

export default Carousel3