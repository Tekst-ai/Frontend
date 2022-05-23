import type { NextPage } from 'next'
import styled from 'styled-components'
import ListingStep from './ListingStep'

interface StepListingProps {
    title: string,
}

const Container = styled.div`
    padding-left: 3rem;
    padding-right: 3rem;
    margin-bottom: 6rem;
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;

    h2 {
        font-size: 1.75rem;
        margin-bottom: 2.5rem;
    }
`

const StepListing: NextPage<StepListingProps> = ({ title }) => {
    return (
        <Container>
            <h2>{ title }</h2>

            <ul>
                <ListingStep step={1} title="Inloggen" text="Ga naar app.tekst.ai/login en login met het e-mailadres die je gekregen hebt van je werk."/>
                <ListingStep step={2} title="Inloggen" text="Ga naar app.tekst.ai/login en login met het e-mailadres die je gekregen hebt van je werk."/>
                <ListingStep step={3} title="Inloggen" text="Ga naar app.tekst.ai/login en login met het e-mailadres die je gekregen hebt van je werk."/>
                <ListingStep step={4} title="Inloggen" text="Ga naar app.tekst.ai/login en login met het e-mailadres die je gekregen hebt van je werk."/>
            </ul>
        </Container>
    )
}

export default StepListing