import type { NextPage } from 'next'
import styled from 'styled-components'
import { Error } from '../../alerts'

import QuestionBlock from './QuestionBlock'

interface QuestionListProps {
    data: any,
    error: string
}

const Container = styled.ul`
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
`

const QuestionList: NextPage<QuestionListProps> = ({ data, error }) => {
    return (
        <Container>
            { data !== undefined && data !== null? 
                data.map((item: any) => (
                    <QuestionBlock key={item.id} question={item.attributes.question} answer={item.attributes.answer}/>
                )):
                <Error message={error} padding={1.2}/>
            }
        </Container>
    )
}

export default QuestionList