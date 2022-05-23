import type { NextPage } from 'next'
import styled from 'styled-components'

import QuestionBlock from './QuestionBlock'

const Container = styled.div`
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
`

const QuestionList: NextPage = () => {
    return (
        <Container>
            <QuestionBlock question="Mijn synchronisatie status is gedeeltelijk?" answer="Als u zich pas een paar uur geleden voor het eerste aanmeldde is dit gebruikelijk. Wacht maximaal 24 uur voordat de applicatie gesynchroniseerd is met uw e-mails.
Als dit niet het geval is dan kan dit komen door een grote hoeveelheid e-mails die binnenkomen. Dit zou zichzelf na een paar uur moeten oplossen.
Als het dan nog steeds niet synchroniseert, naam dan contact met ons op."/>
            <QuestionBlock question="Welke betaalmethoden zijn er mogelijk?" answer="Short answer Short answer Short answer Short answer Short answer Short answer Short answer"/>
            <QuestionBlock question="Hoe werkt het?" answer="Short answer Short answer Short answer Short answer Short answer Short answer Short answer"/>
        </Container>
    )
}

export default QuestionList