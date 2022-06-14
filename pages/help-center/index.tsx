import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoRocket, IoChatbubbles, IoHelpBuoy } from "react-icons/io5"
import Head from 'next/head'

import { SupportCard } from '../../components/helpCenter'
import { Breakpoint, Colors } from '../../variables'
import { IconAbstract } from '../../components/helpers'
import { Routes } from '../../constants'
import HelpNavigationCard from '../../components/helpCenter/HelpNavigationCard'
import { TitleFormat } from '../../services/title'

const Container = styled.div`
    border-radius: 15px;
    position: relative;
    overflow: hidden;
`

const Title = styled.div`
    padding-top: 6rem;
    padding-bottom: 5rem;
    text-align: center;
    color: ${Colors.textWhite};
    z-index: 1;
    position: relative;
    
    h1 {
        font-size: 2.5rem;
        
        @media (min-width: ${Breakpoint.mobileSmall}) {
            font-size: 3rem;
        }

        @media (min-width: ${Breakpoint.mobile}) {
            font-size: 4rem;
        }
    }
    
    p {
        margin-top: 0.5rem;
        font-size: 1rem;
        
        @media (min-width: ${Breakpoint.mobileSmall}) {
            font-size: 1.125rem;
        }

        @media (min-width: ${Breakpoint.mobile}) {
            margin-top: 0.75rem;
            font-size: 1.25rem;
        }
    }
`

const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 1rem;
`

const SupportCardContainer = styled.div`
    margin: 0 2rem;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
`

const HelpCenter: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    { TitleFormat("Helpcentrum") }
                </title>
            </Head>

            <Container>
                <Title>
                    <h1>Helpcentrum</h1>

                    <p>Hoe kunnen we u helpen?</p>
                </Title>

                <CardList>
                    <HelpNavigationCard icon={ <IoRocket fontSize={40}/> } link={Routes.GETTINGSTARTED} title="Aan de slag" type="link"/>
            
                    <HelpNavigationCard icon={ <IoChatbubbles fontSize={40}/> } link={Routes.FAQ} title="FAQ" type="link"/>
        
                    <HelpNavigationCard icon={ <IoHelpBuoy fontSize={40}/> } link="#support" title="Support" type="button"/>
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