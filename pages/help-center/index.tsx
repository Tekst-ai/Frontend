import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoRocket, IoChatbubbles, IoHelpBuoy } from "react-icons/io5"

import { HelpCard, SupportCard } from '../../components/helpCenter'
import { Colors } from '../../variables'

const Container = styled.div`
    background-image: url("/static/images/logo_abstract.svg");
    background-repeat: no-repeat;
    background-position: center -20rem;
    /* background-size: 1087.33px 1754.78px; */
    background-size: 68rem;
    /* background-size: cover; */
    width: calc(100% + 6rem);
    height: calc(100% + 4rem);
    transform: translate(-3rem, -2rem);
    border-radius: 15px;
    position: relative;
`

const Title = styled.div`
    padding-top: 5rem;
    padding-bottom: 4rem;
    text-align: center;
    color: ${Colors.textWhite};

    h1 {
        font-size: 4rem;
    }

    p {
        margin-top: 1rem;
        font-size: 1.375rem;
    }
`

const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
                    <HelpCard icon={<IoRocket fontSize={50}/>} title={"Aan de slag"} link={"/help-center/getting-started"}/>
                    <HelpCard icon={<IoChatbubbles fontSize={50}/>} title={"Veelgestelde vragen"} link={"/help-center/faq"}/>
                    <HelpCard icon={<IoHelpBuoy fontSize={50}/>} title={"Support"} link={"/help-center#support"}/>
                </CardList>

                <SupportCard/>
            </Container>
        </>
    )
  }
  
  export default HelpCenter