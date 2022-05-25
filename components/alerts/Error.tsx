import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'
import { FiAlertTriangle, FiChevronDown } from 'react-icons/fi'
import themes, { Theme } from '../../ThemeConfig'
import { Colors } from '../../variables'
import useStore from '../../store'

interface ErrorProps {
    message: string
}

const Container = styled.div`
    padding-left: 3rem;
    padding-right: 3rem;
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
`

interface SubContainerProps {
    theme: any
    open: boolean
}

const SubContainer = styled.div<SubContainerProps>`
    padding: 1rem 1.25rem;
    background: ${({ theme }) => theme.backgroundAlt};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0px 3px 12px ${({ theme }) => theme.boxShadow};

    div:first-child {
        display: flex;
        align-items: center;
        width: 100%;

        p {
            font-size: 1.125rem;
            font-weight: 700;
            margin-left: 1.5rem;
        }

    }
    
    button {
        margin-top: 0.5rem;
        margin-left: 1.5rem;
        color: ${Colors.error};
        font-weight: 500;
        font-size: 0.75rem;
        display: flex;
        align-items: center;

        svg {
            transition: all 0.2s ease-in-out;
            margin-left: 0.2rem;
            transform: ${({ open }) => !open ? "rotate(0)" : "rotate(180deg)"};
        }
    }
`

interface MessageProps {
    theme: any,
    open: boolean
}

const Message = styled.p<MessageProps>`
    margin-top: 0.5rem;
    margin-left: 3.5rem;
    color: ${({ theme }) => theme.textSec};
    font-size: 0.875rem;
    display: ${({ open }) => open ? 'block' : 'none'};
`

const Error: NextPage<ErrorProps> = ({ message }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme)

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Container>
            <SubContainer open={open} theme={themes[theme]}>
                <div>
                    <FiAlertTriangle color={Colors.error} strokeWidth={2.5} fontSize={28}/>
                    
                    <div>
                        <p>Oeps, er liep iets mis :(</p>

                        <button onClick={handleClick}>
                            Meer info
                            
                            <FiChevronDown fontSize={14} strokeWidth={2.5}/>
                        </button>
                    </div>
                </div>

                    
                <Message open={open} theme={themes[theme]}>{message}</Message>
            </SubContainer>
        </Container>
    )
}

export default Error