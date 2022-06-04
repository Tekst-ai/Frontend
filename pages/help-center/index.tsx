import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoRocket, IoChatbubbles, IoHelpBuoy } from "react-icons/io5"

import { HelpCard, SupportCard } from '../../components/helpCenter'
import { Colors } from '../../variables'
import { IconAbstract } from '../../components/helpers'
import { Routes } from '../../constants'

const Container = styled.div`
    /* background-image: url("/static/images/logo_abstract.svg"); */
    /* background-repeat: no-repeat;
    background-position: center -20rem; */
    /* background-size: 1087.33px 1754.78px; */
    /* background-size: 68rem; */
    /* background-size: cover; */
    width: calc(100% + 6rem);
    height: calc(100% + 4rem);
    transform: translate(-3rem, -2rem);
    border-radius: 15px;
    position: relative;
    overflow: hidden;
`

const Title = styled.div`
    padding-top: 6rem;
    padding-bottom: 5rem;
    text-align: center;
    color: ${Colors.textWhite};

    h1 {
        font-size: 4rem;
    }

    p {
        margin-top: 1rem;
        font-size: 1.25rem;
    }
`

const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const SupportCardContainer = styled.div`
    transform: translateY(2rem);
`

const HelpCenter: NextPage = () => {
    return (
        <>
            <Container>
                <Title>
                    <h1>Helpcentrum</h1>

                    <p>Hoe kunnen we u helpen?</p>
                </Title>

                <CardList>
                    <HelpCard icon={<IoRocket fontSize={50}/>} title={"Aan de slag"} link={Routes.GETTINGSTARTED} type="link"/>
                    <HelpCard icon={<IoChatbubbles fontSize={50}/>} title={"Veelgestelde vragen"} link={Routes.FAQ} type="link"/>
                    <HelpCard icon={<IoHelpBuoy fontSize={50}/>} title={"Support"} link={"#support"} type="button"/>
                </CardList>

                <SupportCardContainer>
                    <SupportCard small={true}/>
                </SupportCardContainer>

                <IconAbstract/>
            </Container>
        </>
    )
  }
  
  export default HelpCenter