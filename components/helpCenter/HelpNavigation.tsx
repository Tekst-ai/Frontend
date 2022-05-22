import type { NextPage } from "next";
import { IoRocket, IoChatbubbles, IoHelpBuoy } from "react-icons/io5"

import HelpNavigationCard from "./HelpNavigationCard";

const HelpNavigation: NextPage = () => {
    return (
        <ul>
            <HelpNavigationCard icon={ <IoRocket/> } link="/help-center/getting-started" title="Aan de slag"/>
        </ul>
    )
}

export default HelpNavigation