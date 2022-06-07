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
            <IconContainerCarousel vector={<Analysis/>}/>
                
            <TextContainerCarousel left="auto" right="10%" bottom="10%" title="Analysis" text="Tekst.ai voorziet slimme email routing. Elke vraag, email ontvangen gaat automatisch naar de juiste persoon / departement."/>
        </Container>
    )
}

export default Carousel2