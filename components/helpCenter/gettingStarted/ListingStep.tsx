import type { NextPage } from 'next'
import styled from 'styled-components'

import { ThemeAccentStylingProps, ThemeStylingProps } from '../../../interfaces/Styling'
import useStore, { useAccent } from '../../../store'
import themes, { Accent, accentColors, Theme } from '../../../ThemeConfig'
import { Breakpoint, Colors } from '../../../variables'

interface ListingStepProps {
    step: number,
    title: string,
    text: string,
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

const ContainerContent = styled.div<ThemeStylingProps>`
    margin-left: 2rem;
    width: calc(100% - 1.75rem);
    
    @media (min-width: ${Breakpoint.mobile}) {
        margin-left: 3rem;
    }

    h3 {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    p {
        color: ${({ theme }) => theme.textSec};
    }
`

const Step = styled.div<ThemeAccentStylingProps>`
    position: relative;

    div {
        background: ${({ accent }) => accent};
        color: ${Colors.textWhite};
        width: 1.5rem;
        height: 1.5rem;
        position: relative;
        border-radius: 50%;
        box-shadow: 0 3px 6px ${({ theme }) => theme.boxShadow};
        
        @media (min-width: ${Breakpoint.mobile}) {
            width: 1.75rem;
            height: 1.75rem;
        }
        
        span {
            font-size: 0.875rem;
            color: ${Colors.textWhite};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            
            @media (min-width: ${Breakpoint.mobile}) {
                font-size: 1.125rem;
            }
        }
    }

    &::after {
        content: '';
        width: 3px;
        background: ${({ accent }) => accent + "66"};
        position: absolute;
        top: calc(1.5rem + 8px);
        bottom: calc((3rem * -1) + 8px);
        left: 50%;
        right: 0;
        transform: translateX(-50%);
        box-shadow: 0 3px 6px ${({ theme }) => theme.boxShadow};
        
        @media (min-width: ${Breakpoint.mobile}) {
            top: calc(1.75rem + 8px);
        }
    }
`

const ListingStep: NextPage<ListingStepProps> = ({ step, title, text }) => {
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container>
            <Step theme={themes[theme]} accent={accentColors[accent][theme]}>
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

export default ListingStep;