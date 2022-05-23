import type { NextPage } from 'next'
import styled from 'styled-components'

import { HelpNavigation, SupportCard } from '../../components/helpCenter'
import { StepListing } from '../../components/helpCenter/gettingStarted'
import HelpBackgroundSmall from '../../components/helpCenter/HelpBackgroundSmall'
import HelpTitle from '../../components/helpCenter/HelpTitle'

const Container = styled.div`
    position: relative;
`

const GettingStarted: NextPage = () => {
    return (
        <Container>
            <HelpBackgroundSmall/>

            <HelpNavigation/>

            <HelpTitle
                title="Aan de slag"
                text="Tekst placeholder tekst placeholder tekst placeholder tekst placeholder tekst placeholder"
            />

            <StepListing title="Installatie"/>

            <StepListing title="Gebruik"/>

            <SupportCard/>
        </Container>
    )
  }
  
  export default GettingStarted