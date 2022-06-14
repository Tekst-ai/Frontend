import type { NextPage } from 'next'
import styled from 'styled-components'
import { StepItem } from '../../../interfaces/Data'
import { Breakpoint } from '../../../variables'
import ListingStep from './ListingStep'

interface StepListingProps {
    title: string,
    steps: [StepItem],
}

const Container = styled.div`
    margin-bottom: 6rem;
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
    
    @media (min-width: ${Breakpoint.mobileSmall}) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    
    @media (min-width: ${Breakpoint.mobile}) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    
    @media (min-width: ${Breakpoint.tablet}) {
        padding-left: 3rem;
        padding-right: 3rem;
    }
    
    h2 {
        margin-bottom: 2.5rem;
        font-size: 1.75rem;
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

export default StepListing;