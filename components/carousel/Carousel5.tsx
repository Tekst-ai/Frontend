import type { NextPage } from 'next';
import styled from 'styled-components';

import { Time } from '../dynamicIcons';
import IconContainerCarousel from './IconContainerCarousel';
import TextContainerCarousel from './TextContainerCarousel';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
`

const Carousel5: NextPage = () => {
    return (
        <Container>
            <IconContainerCarousel vector={<Time/>}/>
                
            <TextContainerCarousel top="" title="Amount of emails" text="Tekst.ai voorziet slimme email routing. Elke vraag, email ontvangen gaat automatisch naar de juiste persoon / departement."/>
        </Container>
    )
}

export default Carousel5