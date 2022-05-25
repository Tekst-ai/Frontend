import type { NextPage } from 'next'
import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import styled from 'styled-components'

import useStore, { useAccent } from '../../../store'
import themes, { accentColors, Theme } from '../../../ThemeConfig'

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
    accent: any,
    open: boolean
}

const Question = styled.button<QuestionProps>`
    width: 100%;
    padding: 1rem 1.2rem;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    
    div:first-of-type {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        p {
            font-size: 1.25rem;
            font-weight: 700;
            color: ${({ theme }) => theme.text};
        }
    }
`

interface AnswerProps {
    theme: any,
    open: boolean
}

const Answer = styled.button<AnswerProps>`
    color: ${({ theme }) => theme.textSec};
    padding: 0.5rem 2rem;
    transition: all 0.3s ease-in-out;
    display: ${({ open }) => open ? 'block' : 'none'};
    text-align: left;
    font-size: 1.125rem;
    padding-bottom: 1.5rem;
`

const QuestionBlock: NextPage<QuestionBlockProps> = ({ question, answer }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme)
    const accent = useAccent((s: any) => s.accent)

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Container theme={themes[theme]}>
            <Question open={open} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]} onClick={handleClick}>
                <div>
                    <p>{ question }</p>

                    { open ?
                        <FiMinus fontSize={22} strokeWidth={2.5} color={accentColors[accent as keyof typeof accentColors].color}/>:
                        <FiPlus fontSize={22} strokeWidth={2.5} color={accentColors[accent as keyof typeof accentColors].color}/>
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