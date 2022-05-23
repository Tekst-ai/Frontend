import type { NextPage } from 'next'

import { HelpNavigation, SupportCard } from '../../components/helpCenter'
import { StepListing } from '../../components/helpCenter/gettingStarted'
import HelpTitle from '../../components/helpCenter/HelpTitle'

const GettingStarted: NextPage = () => {
    return (
        <div>
            <div></div>

            <HelpNavigation/>

            <HelpTitle
                title="Aan de slag"
                text="Tekst placeholder tekst placeholder tekst placeholder tekst placeholder tekst placeholder"
            />

            <StepListing title="Installatie"/>

            <StepListing title="Gebruik"/>

            <SupportCard/>
        </div>
    )
  }
  
  export default GettingStarted