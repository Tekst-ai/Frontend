import type { NextPage } from 'next'
import styled from 'styled-components'

import { HelpNavigation, SupportCard } from '../../components/helpCenter'
import { QuestionList } from '../../components/helpCenter/faq'
import HelpBackgroundSmall from '../../components/helpCenter/HelpBackgroundSmall'
import HelpTitle from '../../components/helpCenter/HelpTitle'
import { GET_FAQ_ITEMS } from '../../graphql/faqItems'
import client from '../../helpers/apollo-client'


const Container = styled.div`
    position: relative;
`

interface FaqProps {
    data: any,
    error: string
}

const Faq: NextPage<FaqProps> = ({ data, error }) => {
    return (
        <Container>
            <HelpBackgroundSmall/>

            <HelpNavigation/>

            <HelpTitle
                title="Veelgestelde vragen"
                text="Tekst placeholder tekst placeholder tekst placeholder tekst placeholder tekst placeholder"
            />

            <QuestionList data={data} error={error}/>

            <SupportCard/>
        </Container>
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
  
export default Faq