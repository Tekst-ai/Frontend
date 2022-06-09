import type { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { FiCheckCircle } from 'react-icons/fi'

import useStore from '../../store'
import themes, { Theme } from '../../ThemeConfig'
import { Breakpoint, Colors } from '../../variables'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

interface TopContainerProps {
    theme: keyof Theme
}

const TopContainer = styled.div<TopContainerProps>`
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        border-radius: 50%;
        overflow: hidden;
        width: 10rem;
        height: 10rem;
        box-shadow: 0px 3px 12px ${({ theme }) => theme.boxShadow};
        
        @media (min-width: ${Breakpoint.mobileSmall}) {
            width: 12rem;
            height: 12rem;
        }
    }

    p:first-of-type {
        margin-top: 1.25rem;
        font-size: 2rem;
        font-weight: 700;
        
        @media (min-width: ${Breakpoint.mobileSmall}) {
            font-size: 3rem;
        }
    }
    
    p:last-of-type {
        margin-top: 0.5rem;
        color: ${({ theme }) => theme.textSec};
        font-size: 1;
        
        @media (min-width: ${Breakpoint.mobileSmall}) {
            margin-top: 1rem;
            font-size: 1.125rem;
        }
    }
`

const BottomContainer = styled.div<TopContainerProps>`
    margin-top: 3rem;
    
    @media (min-width: ${Breakpoint.mobileSmall}) {
        margin-top: 4rem;
    }

    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            margin-bottom: 1.5rem;
            
            @media (min-width: ${Breakpoint.mobile}) {
                margin-bottom: 0;
            }

            & > p {
                color: ${({ theme }) => theme.textSec};
                text-transform: uppercase;
                font-size: 0.75rem;
                /* margin-left: 0.375rem; */
            }

            div {
                margin-top: 0.5rem;
                /* background: ${({ theme }) => theme.background}; */
                padding: 0.75rem 1.5rem;
                border-radius: 8px;
                padding-left: 0.5rem;
                /* box-shadow: 0 ${({ theme }) => theme.name === "dark" ? "3px 12px" : "1px 4px"} ${({ theme }) => theme.boxShadow}; */

                p {
                    font-weight: 500;
                    font-size: 1.25rem;
                }
            }

            &:first-of-type {
                margin-right: 1.5rem;
            }

            &:last-of-type {
                div {
                    p {
                        display: flex;
                        align-items: center;

                        span {
                            margin-left: 0.625rem;
                        }
                    }
                }
            }
        }
    }
`

const Account: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <div>
            <Container>
                <TopContainer theme={themes[theme]}>
                    <div>
                        <Image
                            src="/static/images/profile.jpg"
                            alt="Placeholder name"
                            layout='intrinsic'
                            width={192}
                            height={192}
                            objectFit={'cover'} />
                    </div>

                    <p>Janine Jacobs</p>

                    <p>Vals bedijf</p>
                </TopContainer>

                <BottomContainer theme={themes[theme]}>
                    <ul>
                        <li>
                            <p>e-mailadres</p>

                            <div>
                                <p>janine_jacobs@outlook.com</p>
                            </div>
                        </li>

                        <li>
                            <p>status</p>

                            <div>
                                <p>
                                    <FiCheckCircle fontSize={16} color={Colors.accentGreen} strokeWidth={2.5}/>

                                    <span>Synced</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </BottomContainer>
            </Container>
        </div>
    )
  }
  
  export default Account