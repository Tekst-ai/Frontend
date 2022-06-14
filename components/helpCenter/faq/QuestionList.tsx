import type { NextPage } from 'next'
import styled from 'styled-components'

import { FaqItem } from '../../../interfaces/Data'
import { Breakpoint } from '../../../variables'
import { Error } from '../../alerts'
import QuestionBlock from './QuestionBlock'

interface QuestionListProps {
    data: [FaqItem],
    error: string,
}

const Container = styled.ul`
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;

    @media (min-width: ${Breakpoint.mobileSmall}) {
        padding-left: 0.6rem;
        padding-right: 0.6rem;
    }

    @media (min-width: ${Breakpoint.mobile}) {
        padding-left: 1.2rem;
        padding-right: 1.2rem;
    }

    @media (min-width: ${Breakpoint.tablet}) {
        padding-left: 1.8rem;
        padding-right: 1.8rem;
    }
`

const QuestionList: NextPage<QuestionListProps> = ({ data, error }) => {
    return (
        <Container>
            { data !== undefined && data !== null? 
                data.map((item: FaqItem) => (
                    <QuestionBlock key={item.id} question={item.attributes.question} answer={item.attributes.Answer}/>
                )):
                <Error message={error} padding={0.4}/>
            }
        </Container>
    )
}

export default QuestionList;