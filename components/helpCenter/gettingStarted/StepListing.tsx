import type { NextPage } from 'next'
import styled from 'styled-components'
import ListingStep from './ListingStep'

interface StepListingProps {
    title: string,
    steps: any
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

const StepListing: NextPage<StepListingProps> = ({ title, steps }) => {
    return (
        <Container>
            <h2>{ title }</h2>

            <ul>
                {steps.map((step: any, index: number) => (
                    <ListingStep key={step.id} step={index + 1} title={step.title} text={step.content}/>
                ))}
            </ul>
        </Container>
    )
}

export default StepListing