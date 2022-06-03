import type { NextPage } from 'next'
import styled from 'styled-components'
import useStore, { useAccent } from '../../../store'
import themes, { accentColors, Theme } from '../../../ThemeConfig'
import { Colors } from '../../../variables'

interface ListingStepProps {
    step: number,
    title: string,
    text: string
}

const Container = styled.li`
    display: flex;
    position: relative;
    margin-bottom: 3rem;

    &:last-of-type {
        margin-bottom: 0;

        div:first-of-type::after {
            width: 0;
            height: 0;
        }
    }
`

interface ContainerContentProps {
    theme: any
}

const ContainerContent = styled.div<ContainerContentProps>`
    margin-left: 4rem;
    width: calc(100% - 1.75rem);

    h3 {
        margin-top: 0;
        margin-bottom: 0.5rem;

    }

    p {
        color: ${({ theme }) => theme.textSec};
    }
`

interface StepProps {
    theme: any,
    accent: string,
}

const Step = styled.div<StepProps>`
    position: relative;

    div {
        background: ${({ accent }) => accent};
        color: ${Colors.textWhite};
        width: 1.75rem;
        height: 1.75rem;
        position: relative;
        border-radius: 50%;
        box-shadow: 0 3px 6px ${({ theme }) => theme.boxShadow};

        span {
            font-size: 1.125rem;
            color: ${Colors.textWhite};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    &::after {
        content: '';
        width: 4px;
        background: ${({ accent }) => accent + "66"};
        position: absolute;
        top: calc(1.75rem + 8px);
        bottom: calc((3rem * -1) + 8px);
        left: 50%;
        right: 0;
        transform: translateX(-50%);
        box-shadow: 0 3px 6px ${({ theme }) => theme.boxShadow};
    }
`

const ListingStep: NextPage<ListingStepProps> = ({ step, title, text }) => {
    const accent = useAccent((s: any) => s.accent)
    const theme: keyof Theme = useStore((s: any) => s.theme)

    return (
        <Container>
            <Step theme={themes[theme]} accent={accentColors[accent as  keyof typeof accentColors][theme]}>
                <div>
                    <span>{step}</span>
                </div>
            </Step>

            <ContainerContent theme={themes[theme]}>
                <h3>{ title }</h3>
                
                <p>
                    { text }
                </p>
            </ContainerContent>
        </Container>
    )
}

export default ListingStep