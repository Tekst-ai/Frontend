import type { NextPage } from "next";
import styled from "styled-components";
import { IoCall, IoMail } from "react-icons/io5";

import themes, { Theme } from "../../ThemeConfig";
import useStore from "../../store";
import { Breakpoint, Transition } from "../../variables";
import { ThemeStylingProps } from "../../interfaces/Styling";

interface SupportCardProps {
    small?: boolean,
}

interface ContainerProps {
    small: boolean,
}

const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    margin-top: ${({ small }) => small ? "4rem" : "6rem"};
    
    @media (min-width: ${Breakpoint.mobile}) {
        margin-top: ${({ small }) => small ? "6rem" : "8rem"};
    }
`

const SubContainer = styled.div<ThemeStylingProps>`
    background: ${({ theme }) => theme.backgroundAlt};
    text-align: center;
    padding: 1.5rem 1rem;
    padding-bottom: 1rem;
    border-radius: 10px;
    width: 100%;
    box-shadow: 0px 3px 12px ${({ theme }) => theme.boxShadow};

    @media (min-width: ${Breakpoint.mobileSmall}) {
        padding: 2rem 1.5rem;
        padding-bottom: 1.5rem;
    }

    @media (min-width: ${Breakpoint.mobile}) {
        width: 35rem;
        padding: 3rem 2rem;
        padding-bottom: 2rem;
    }

    @media (min-width: ${Breakpoint.tabletBig}) {
        width: 40rem;
    }
    
    h2 {
        font-size: 1.25rem;
        font-weight: 700;
        
        @media (min-width: ${Breakpoint.mobileSmall}) {
            font-size: 1.5rem;
        }
        
        @media (min-width: ${Breakpoint.mobile}) {
            font-size: 1.75rem;
        }

        @media (min-width: ${Breakpoint.tablet}) {
            font-size: 2rem;
        }
    }
    
    p {
        color: ${({ theme }) => theme.textSec};
        margin-top: 0.75rem;
        padding: 0 1rem;
        font-size: 0.875rem;
        
        @media (min-width: ${Breakpoint.mobileSmall}) {
            font-size: 1rem;
        }

        @media (min-width: ${Breakpoint.tablet}) {
            padding: 0 2.5rem;
            margin-top: 1.25rem;
        }
    }
`

const SupportList = styled.ul<ThemeStylingProps>`
    display: flex;
    margin-top: 1.5rem;
    
    @media (min-width: ${Breakpoint.mobileSmall}) {
        margin-top: 2rem;
    }

    @media (min-width: ${Breakpoint.mobile}) {
        margin-top: 2.5rem;
    }
    
    li {
        display: flex;
        width: 50%;
        border-radius: 10px;
        
        &:first-of-type {
            margin-right: 0.5rem;
            
            @media (min-width: ${Breakpoint.mobileSuperSmall}) {
                margin-right: 1rem;
            }

            @media (min-width: ${Breakpoint.mobile}) {
                margin-right: 1.5rem;
            }
        }

        svg {
            font-size: 1.25rem;

            @media (min-width: ${Breakpoint.mobileSuperSmall}) {
                font-size: 1.5rem;
            }

            @media (min-width: ${Breakpoint.mobileMedium}) {
                font-size: 1.875rem;
            }
        }
        
        a {
            border-radius: 10px;
            width: 100%;
            padding: 1rem 0.5rem;
            text-align: center;
            color: ${({ theme }) => theme.text};
            transition: ${Transition.fast};
            
            @media (min-width: ${Breakpoint.mobileSuperSmall}) {
                padding: 1.5rem 0.5rem 1rem 0.5rem;
            }
            
            @media (min-width: ${Breakpoint.mobile}) {
                padding: 2rem 0.5rem 1.5rem 0.5rem;
            }

            @media (min-width: ${Breakpoint.tablet}) {
                padding: 2.5rem 0.5rem 2rem 0.5rem;
            }
            
            span {
                display: block;
                font-size: 0.875rem;
                font-weight: 500;
                margin-top: 0.75rem;
                
                @media (min-width: ${Breakpoint.mobileSmall}) {
                    font-size: 1rem;
                }

                @media (min-width: ${Breakpoint.mobile}) {
                    margin-top: 1rem;
                    font-size: 1.25rem;
                }
                
                @media (min-width: ${Breakpoint.tablet}) {
                    margin-top: 1.25rem;
                    font-size: 1.375rem;
                }
            }

            &:hover {
                background: ${({ theme }) => theme.backgroundAltSec};
            }
        }
    }
`

const SupportCard: NextPage<SupportCardProps> = ({ small = false }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container small={small}>
            <SubContainer theme={themes[theme]}>
                <h2>Niet gevonden wat je zocht?</h2>
                <p>Klanten komen bij ons op de eerste plaats. We helpen je graag verder, aarzel niet om ons te mailen of te bellen! Groeten van team tekst.ai 💙</p>

                <SupportList theme={themes[theme]}>
                    <li>
                        <a href="tel:+32479403894">
                            <IoCall fontSize={30}/>
                            
                            <span>+32 479 40 38 94</span>
                        </a>
                    </li>

                    <li>
                        <a href="mailto:support@tekst.ai">
                            <IoMail fontSize={30}/>

                            <span>support@tekst.ai</span>
                        </a>
                    </li>
                </SupportList>
            </SubContainer>
        </Container>
    )
}

export default SupportCard;