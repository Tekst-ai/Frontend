import type { NextPage } from 'next';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface IconContainerCarouselProps {
    vector: ReactNode
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;

    svg {
        width: 100%;
        height: 100%;
        position: absolute;
    }
`

const IconContainerCarousel: NextPage<IconContainerCarouselProps> = ({ vector }) => {
    return (
        <Container>
            { vector }    
        </Container>
    )
}

export default IconContainerCarousel;