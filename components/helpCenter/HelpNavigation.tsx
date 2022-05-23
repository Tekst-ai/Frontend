import type { NextPage } from "next";
import { IoRocket, IoChatbubbles, IoHelpBuoy } from "react-icons/io5"
import styled from "styled-components";

import HelpNavigationCard from "./HelpNavigationCard";

const Container = styled.ul`
    display: flex;
    justify-content: center;
    margin-bottom: 6rem;
`

const HelpNavigation: NextPage = () => {
    return (
        <Container>
            <HelpNavigationCard icon={ <IoRocket fontSize={40}/> } link="/help-center/getting-started" title="Aan de slag"/>
            
            <HelpNavigationCard icon={ <IoChatbubbles fontSize={40}/> } link="/help-center/faq" title="Veelgestelde vragen"/>
           
            <HelpNavigationCard icon={ <IoHelpBuoy fontSize={40}/> } link="#support" title="Support"/>
        </Container>
    )
}

export default HelpNavigation