import type { NextPage } from 'next'
import styled from 'styled-components'

import QuestionBlock from './QuestionBlock'

interface QuestionListProps {
    data: any
}

const Container = styled.ul`
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
`

const QuestionList: NextPage<QuestionListProps> = ({ data }) => {
    return (
        <Container>
            {data.map((item: any) => (
                <QuestionBlock key={item.id} question={item.attributes.question} answer={item.attributes.answer}/>
            ))}
        </Container>
    )
}

export default QuestionList