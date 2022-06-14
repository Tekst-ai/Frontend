import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import { HelpNavigation, SupportCard } from '../../components/helpCenter'
import { QuestionList } from '../../components/helpCenter/faq'
import HelpBackgroundSmall from '../../components/helpCenter/HelpBackgroundSmall'
import HelpTitle from '../../components/helpCenter/HelpTitle'
import { GET_FAQ_ITEMS } from '../../graphql/faqItems'
import client from '../../helpers/apollo-client'
import { FaqItem } from '../../interfaces/Data'
import { TitleFormat } from '../../services/title'

const Container = styled.div`
    position: relative;
`

interface FaqProps {
    data: [FaqItem],
    error: string,
}

const Faq: NextPage<FaqProps> = ({ data, error }) => {
    return (
        <>
            <Head>
                <title>
                        { TitleFormat("FAQ") }
                </title>
            </Head>
            <Container>
                <HelpBackgroundSmall/>

                <HelpNavigation/>

                <HelpTitle
                    title="FAQ"
                    text="Tekst placeholder tekst placeholder tekst placeholder tekst placeholder tekst placeholder"
                />

                <QuestionList data={data} error={error}/>

                <SupportCard/>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    try {
        const { data } = await client.query({query: GET_FAQ_ITEMS});
        return { props: { data: data.faqs.data } };
    } catch (error: any) {
        return { props: { data: null, error: error.message } };
    }
}
  
export default Faq;