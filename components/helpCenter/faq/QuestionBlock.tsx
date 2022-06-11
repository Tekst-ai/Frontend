import type { NextPage } from 'next'
import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import styled from 'styled-components'

import useStore, { useAccent } from '../../../store'
import themes, { Accent, accentColors, Theme } from '../../../ThemeConfig'
import { Breakpoint, Transition } from '../../../variables'

interface QuestionBlockProps {
    question: string,
    answer: string,
}

interface ContainerProps {
    theme: any
}

const Container = styled.li<ContainerProps>`
    div:last-child {
        div:last-of-type {
            padding-bottom: 0.5rem;
        }
    }
`

interface QuestionProps {
    theme: any,
    open: boolean
}

const Question = styled.button<QuestionProps>`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    transition: ${Transition.fast};
    margin-bottom: 0.25rem;
    background: ${({ open }) => open ? ({ theme }) => theme.background : ({ theme }) => theme.backgroundSec};

    &:hover {
        background: ${({ theme }) => theme.background};
    }
    
    div:first-of-type {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        p {
            font-size: 1rem;
            font-weight: 700;
            color: ${({ theme }) => theme.text};
            padding-right: 0.75rem;
            text-align: left;
            width: 90%;
            
            @media (min-width: ${Breakpoint.mobileSmall}) {
                font-size: 1.125rem;
            }

            @media (min-width: ${Breakpoint.mobile}) {
                font-size: 1.25rem;
            }
        }
    }
`

interface AnswerProps {
    theme: any,
    open: boolean
}

const Answer = styled.button<AnswerProps>`
    color: ${({ theme }) => theme.textSec};
    padding: 0.5rem 0.75rem;
    padding-bottom: 1rem;
    padding-right: 1.375rem;
    transition: ${Transition.fast};
    display: ${({ open }) => open ? 'block' : 'none'};
    text-align: left;
    font-size: 1rem;
    
    @media (min-width: ${Breakpoint.mobileSmall}) {
        padding: 0.5rem 1rem;
        padding-bottom: 1rem;
        padding-right: 1.755rem;
    }
    
    @media (min-width: ${Breakpoint.mobile}) {
        font-size: 1.125rem;
        padding: 0.5rem 1.5rem;
        padding-bottom: 1.25rem;
        padding-right: 2.155rem;
    }
    
    @media (min-width: ${Breakpoint.tablet}) {
        padding: 0.5rem 2rem;
        padding-bottom: 1.25rem;
        padding-right: 2.555rem;
    }
`

const QuestionBlock: NextPage<QuestionBlockProps> = ({ question, answer }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme)
    const accent: keyof Accent = useAccent((s: any) => s.accent)

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Container theme={themes[theme]}>
            <Question open={open} theme={themes[theme]} onClick={handleClick}>
                <div>
                    <p>{ question }</p>

                    { open ?
                        <FiMinus fontSize={22} strokeWidth={2.5} color={accentColors[accent][theme]}/>:
                        <FiPlus fontSize={22} strokeWidth={2.5} color={accentColors[accent][theme]}/>
                    }
                </div>

            </Question>

            <Answer theme={themes[theme]} open={open} onClick={handleClick}>
                <p>{ answer }</p>
            </Answer>

        </Container>
    )
}

export default QuestionBlock