import type { NextPage } from 'next'
import styled from 'styled-components'

import { HelpNavigation, SupportCard } from '../../components/helpCenter'
import { StepListing } from '../../components/helpCenter/gettingStarted'
import HelpBackgroundSmall from '../../components/helpCenter/HelpBackgroundSmall'
import HelpTitle from '../../components/helpCenter/HelpTitle'
import { GET_STEP_ITEMS } from '../../graphql/stepItems'
import client from '../../helpers/apollo-client'

interface GettingStartedProps {
    data: any
}

const Container = styled.div`
    position: relative;
`

const GettingStarted: NextPage<GettingStartedProps> = ({ data }) => {
    return (
        <Container>
            <HelpBackgroundSmall/>

            <HelpNavigation/>

            <HelpTitle
                title="Aan de slag"
                text="Tekst placeholder tekst placeholder tekst placeholder tekst placeholder tekst placeholder"
            />

            {data.map((item: any) => (
                <StepListing key={item.id} title={item.attributes.title} steps={item.attributes.step}/>
            ))}

            {/* <StepListing title="Gebruik"/> */}

            <SupportCard/>
        </Container>
    )
}

    export async function getStaticProps() {
        const { data } = await client.query({query: GET_STEP_ITEMS});

        return {
            props: {
                data: data.steplists.data,
            },
        };
    }
  
  export default GettingStarted