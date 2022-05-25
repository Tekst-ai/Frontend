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
            <HelpNavigationCard icon={ <IoRocket fontSize={40}/> } link="/help-center/getting-started" title="Aan de slag" type="link"/>
            
            <HelpNavigationCard icon={ <IoChatbubbles fontSize={40}/> } link="/help-center/faq" title="Veelgestelde vragen" type="link"/>
           
            <HelpNavigationCard icon={ <IoHelpBuoy fontSize={40}/> } link="#support" title="Support" type="button"/>
        </Container>
    )
}

export default HelpNavigation