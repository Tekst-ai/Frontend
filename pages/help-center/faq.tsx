import type { NextPage } from 'next'
import styled from 'styled-components'

import { HelpNavigation, SupportCard } from '../../components/helpCenter'
import { QuestionList } from '../../components/helpCenter/faq'
import HelpBackgroundSmall from '../../components/helpCenter/HelpBackgroundSmall'
import HelpTitle from '../../components/helpCenter/HelpTitle'

const Container = styled.div`
    position: relative;
`

const Faq: NextPage = () => {
    return (
        <Container>
            <HelpBackgroundSmall/>

            <HelpNavigation/>

            <HelpTitle
                title="Veelgestelde vragen"
                text="Tekst placeholder tekst placeholder tekst placeholder tekst placeholder tekst placeholder"
            />

            <QuestionList/>

            <SupportCard/>
        </Container>
    )
  }
  
  export default Faq