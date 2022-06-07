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

const Carousel4: NextPage = () => {
    return (
        <Container>
            <IconContainerCarousel vector={<Time/>} title="Work illustrations by Storyset"/>
                
            <TextContainerCarousel bottom="8%" left="5%" title="53% winst" text="Met Tekst.ai win je 83 minuten van die 153. Dat is 53% winst!"/>
        </Container>
    )
}

export default Carousel4