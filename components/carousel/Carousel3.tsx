import type { NextPage } from 'next';
import styled from 'styled-components';

import { Busy } from '../dynamicIcons';
import IconContainerCarousel from './IconContainerCarousel';
import TextContainerCarousel from './TextContainerCarousel';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const Carousel3: NextPage = () => {
    return (
        <Container>
            <IconContainerCarousel vector={<Busy/>} title="Work illustrations by Storyset"/>
                
            <TextContainerCarousel top="8%" left="3%" bottom="auto" title="153 minuten" text="Ofwel 32%, dat is hoeveel tijd je dagelijks spendeert aan e-mails."/>
        </Container>
    )
}

export default Carousel3