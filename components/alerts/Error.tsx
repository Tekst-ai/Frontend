import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'
import { FiAlertTriangle, FiChevronDown } from 'react-icons/fi'

import themes, { Theme } from '../../ThemeConfig'
import { Breakpoint, Colors, Transition } from '../../variables'
import useStore from '../../store'

interface ErrorProps {
    message: string,
    padding: number,
}

interface ContainerProps {
    padding: number,
}

const Container = styled.div<ContainerProps>`
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
    
    @media (min-width: ${Breakpoint.mobileSmall}) {
        padding-left: ${({ padding }) => padding}rem;
        padding-right: ${({ padding }) => padding}rem;
    }
    
    @media (min-width: ${Breakpoint.mobile}) {
        padding-left: ${({ padding }) => padding * 2}rem;
        padding-right: ${({ padding }) => padding * 2}rem;
    }

    @media (min-width: ${Breakpoint.tablet}) {
        padding-left: ${({ padding }) => padding * 3}rem;
        padding-right: ${({ padding }) => padding * 3}rem;
    }
`

interface SubContainerProps {
    theme: keyof Theme,
    open: boolean,
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

        & > svg {
            font-size: 1.375rem;
            
            @media (min-width: ${Breakpoint.mobile}) {
                font-size: 1.75rem;
            }
        }
        
        p {
            font-size: 1rem;
            font-weight: 700;
            margin-left: 1.25rem;
            
            @media (min-width: ${Breakpoint.mobile}) {
                font-size: 1.125rem;
            }
        }
    }
    
    button {
        margin-top: 0.375rem;
        margin-left: 1.25rem;
        color: ${Colors.error};
        font-weight: 500;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        
        @media (min-width: ${Breakpoint.mobile}) {
            margin-top: 0.5rem;
        }

        svg {
            transition: ${Transition.fast};
            margin-left: 0.2rem;
            transform: ${({ open }) => !open ? "rotate(0)" : "rotate(180deg)"};
        }
    }
`

interface MessageProps {
    theme: keyof Theme,
    open: boolean,
}

const Message = styled.p<MessageProps>`
    margin-top: 0.5rem;
    margin-left: 3.5rem;
    color: ${({ theme }) => theme.textSec};
    font-size: 0.875rem;
    display: ${({ open }) => open ? 'block' : 'none'};
`

const Error: NextPage<ErrorProps> = ({ message, padding }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <Container padding={padding}>
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

export default Error;