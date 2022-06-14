import type { NextPage } from 'next'
import styled from 'styled-components'
import Head from 'next/head'

import { HelpNavigation, SupportCard } from '../../components/helpCenter'
import { StepListing } from '../../components/helpCenter/gettingStarted'
import HelpBackgroundSmall from '../../components/helpCenter/HelpBackgroundSmall'
import HelpTitle from '../../components/helpCenter/HelpTitle'
import { GET_STEP_ITEMS } from '../../graphql/stepItems'
import client from '../../helpers/apollo-client'
import { Error } from '../../components/alerts'
import { TitleFormat } from '../../services/title'
import { StepItem } from '../../interfaces/Data'

interface GettingStartedProps {
    data: [StepItem],
    error: string,
}

const Container = styled.div`
    position: relative;
`

const GettingStarted: NextPage<GettingStartedProps> = ({ data, error }) => {
    return (
        <>
            <Head>
                <title>
                    { TitleFormat("Aan de slag") }
                </title>
            </Head>
            <Container>
                <HelpBackgroundSmall/>

                <HelpNavigation/>

                <HelpTitle
                    title="Aan de slag"
                    text="Tekst placeholder tekst placeholder tekst placeholder tekst placeholder tekst placeholder"
                />

                { data && data[0] !== undefined && data[0] !== null ?
                    data[0].attributes.stepContainer.map((item: any, index: number) => (
                        <StepListing key={index} title={item.Title} steps={item.Steps}/>
                    )):
                    <Error message={error} padding={1}/>
                }

                <SupportCard/>
            </Container>
        </>
    )
}

    export async function getStaticProps() {
        try {
            const { data } = await client.query({query: GET_STEP_ITEMS});
            return { props: { data: data.steplists.data } };
        } catch (error: any) {
            return ({ props: { data: null, error: error.message } });
        }
    }
  
  export default GettingStarted;