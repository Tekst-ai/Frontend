import type { NextPage } from "next";
import { IoRocket, IoChatbubbles, IoHelpBuoy } from "react-icons/io5"
import styled from "styled-components";
import { Routes } from "../../constants";
import { Breakpoint } from "../../variables";

import HelpNavigationCard from "./HelpNavigationCard";

const Container = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    width: calc(100% + 2rem);
    transform: translateX(-1rem);
    
    @media (min-width: ${Breakpoint.tablet}) {
        width: 100%;
        transform: translateX(0);
        margin-bottom: 3rem;
    }
`

const HelpNavigation: NextPage = () => {
    return (
        <Container>
            <HelpNavigationCard icon={ <IoRocket fontSize={40}/> } link={Routes.GETTINGSTARTED} title="Aan de slag" type="link"/>
            
            <HelpNavigationCard icon={ <IoChatbubbles fontSize={40}/> } link={Routes.FAQ} title="FAQ" type="link"/>
           
            <HelpNavigationCard icon={ <IoHelpBuoy fontSize={40}/> } link="#support" title="Support" type="button"/>
        </Container>
    )
}

export default HelpNavigation