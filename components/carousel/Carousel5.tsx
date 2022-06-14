import type { NextPage } from 'next';
import styled from 'styled-components';

import { useData } from '../../hooks/useData';
import { CheckEnv } from '../../services/checks';
import { BigNumberFormatLong } from '../../services/format';
import { Growth } from '../dynamicIcons';
import IconContainerCarousel from './IconContainerCarousel';
import TextContainerCarousel from './TextContainerCarousel';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
`

const Carousel5: NextPage = () => {
    const { data, isLoading, isError } = useData(CheckEnv(process.env.NEXT_PUBLIC_TOTAL_EMAILS_ENDPOINT))

    return (
        <Container>
            <IconContainerCarousel vector={<Growth/>} title="Rocket illustrations by Storyset"/>
                
            <TextContainerCarousel bottom="7%" left="auto" right="8%" title={ (!isLoading && !isError) ? BigNumberFormatLong(data.message) : "A lot" } text="Zoveel e-mails heeft de software van Tekst.ai al verwerkt. En dit is nog maar het begin!"/>
        </Container>
    )
}

export default Carousel5;