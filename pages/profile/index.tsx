import type { NextPage } from 'next'
import styled from 'styled-components'

import useStore from '../../store'
import themes, { Theme } from '../../ThemeConfig'
import { Breakpoint } from '../../variables'
import { useData } from '../../hooks/useData'
import { CheckEnv } from '../../services/checks'
import { CheckStatus, Loading } from '../../components/helpers'
import { ThemeStylingProps } from '../../interfaces/Styling'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TopContainer = styled.div<ThemeStylingProps>`
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

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    p:first-of-type {
        margin-top: 1.25rem;
        font-size: 2rem;
        font-weight: 700;
        
        @media (min-width: ${Breakpoint.mobileSmall}) {
            font-size: 2.5rem;
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

const BottomContainer = styled.div<ThemeStylingProps>`
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
                            text-transform: capitalize;
                        }
                    }
                }
            }
        }
    }
`

/* eslint-disable @next/next/no-img-element */
const Account: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);

    const { data, isLoading, isError } = useData(CheckEnv(process.env.NEXT_PUBLIC_PROFILE_ENDPOINT));

    return (
        <div>
            {
                isLoading ? <Loading/> : (!isLoading && !isError) && 
                <Container>
                    <TopContainer theme={themes[theme]}>
                        <div>
                            <img
                                src={ (!isLoading && !isError) ? data.img : "/static/img/profile.jpg" }
                                alt={ (!isLoading && !isError) ? `${data.firstName} ${data.lastName}` : "Profile picture" }
                                width={192}
                                height={192}
                            />
                        </div>

                        <p>{ (!isLoading && !isError) && `${data.firstName} ${data.lastName}` }</p>

                        <p>{ (!isLoading && !isError) && data.company }</p>
                    </TopContainer>

                    <BottomContainer theme={themes[theme]}>
                        <ul>
                            <li>
                                <p>e-mailadres</p>

                                <div>
                                    <p>{ (!isLoading && !isError) && data.email }</p>
                                </div>
                            </li>

                            <li>
                                <p>status</p>

                                <div>
                                    <p>
                                        <CheckStatus status={(!isLoading && !isError) && data.status}/>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </BottomContainer>
                </Container>
            }
        </div>
    )
  }
  
  export default Account