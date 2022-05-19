import type { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { FiCheckCircle } from 'react-icons/fi'

import { TitleContainer } from '../configuration'
import useStore from '../../store'
import themes, { Theme } from '../../ThemeConfig'

const Container = styled.div`
    display: flex;
`

interface LeftContainerProps {
    theme: any
}

const LeftContainer = styled.div<LeftContainerProps>`
    margin-right: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    div:first-of-type {
        border-radius: 8px;
        overflow: hidden;
        width: 12rem;
        height: 12rem;
        box-shadow: ${({ theme }) => theme.boxShadow};
    }

    div:last-of-type {
        margin-top: 1.25rem;

        p {
            display: flex;
            align-items: center;

            span {
                margin-left: 0.625rem;
                color: ${({ theme }) => theme.textSec};
            }
        }
    }
`

interface RightContainerProps {
    theme: any
}

const RightContainer = styled.ul<RightContainerProps>`
    li {
        margin-bottom: 1.25rem;

        &:not(:last-of-type):after {
            content: '';
            width: calc(100% + 0.5rem + 1.5rem);
            height: 2px;
            transform: translateX(-0.25rem);
            background: ${({ theme }) => theme.lineDark};
            display: block;
        }

        p {
            &:first-of-type {
                color: ${({ theme }) => theme.textSec};
                margin-bottom: 0.625rem;
            }
            
            &:last-of-type {
                font-weight: 700;
                font-size: 1.5rem;
                margin-bottom: 1.25rem;
            }
        }
    }
`

const Account: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <div>
            <TitleContainer>
                <h1>Profiel</h1>
            </TitleContainer>

            <Container>
                <LeftContainer theme={themes[theme]}>
                    <div>
                        <Image
                            src="/static/images/profile.jpg"
                            alt="Placeholder name"
                            layout='intrinsic'
                            width={192}
                            height={192}
                            objectFit={'cover'} />
                    </div>

                    <div>
                        <p>
                            <FiCheckCircle fontSize={16} color={"#43FF3B"}/>

                            <span>Synced</span>
                        </p>
                    </div>
                </LeftContainer>

                <RightContainer theme={themes[theme]}>
                    <li>
                        <p>Volledige naam</p>

                        <p>Janine Jacobs</p>
                    </li>

                    <li>
                        <p>Email</p>

                        <p>janine_jacobs@outlook.com</p>
                    </li>

                    <li>
                        <p>Bedrijf</p>

                        <p>Vals bedrijf</p>
                    </li>
                </RightContainer>
            </Container>
        </div>
    )
  }
  
  export default Account