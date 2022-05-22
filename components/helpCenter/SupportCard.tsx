import type { NextPage } from "next";
import styled from "styled-components";
import { IoCall, IoMail } from "react-icons/io5";

import themes, { Theme } from "../../ThemeConfig";
import useStore from "../../store";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8rem;
`

interface SubContainerProps {
    theme: any
}

const SubContainer = styled.div<SubContainerProps>`
    background: ${({ theme }) => theme.backgroundAlt};
    text-align: center;
    padding: 3rem;
    border-radius: 10px;
    width: 46rem;
    box-shadow: 0px 3px 12px ${({ theme }) => theme.boxShadow};

    h2 {
        font-size: 2rem;
        font-weight: 700;
    }

    p {
        color: ${({ theme }) => theme.textSec};
        margin-top: 1.25rem;
        padding: 0 2.5rem;
    }
`

interface SupportListProps {
    theme: any
}

const SupportList = styled.ul<SupportListProps>`
    display: flex;
    margin-top: 2.5rem;

    li {
        display: flex;
        width: 50%;
        border-radius: 10px;
        
        &:first-of-type {
            margin-right: 2rem;
        }
        
        a {
            border-radius: 10px;
            width: 100%;
            padding: 2.5rem 0 2rem 0;
            text-align: center;
            color: ${({ theme }) => theme.text};

            span {
                display: block;
                font-size: 1.375rem;
                font-weight: 500;
                margin-top: 1.5rem;
            }
        }
    }
`

const SupportCard: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme)

    return (
        <Container>
            <SubContainer theme={themes[theme]}>
                <h2>Niet gevonden wat je zocht?</h2>
                <p>Klanten komen bij ons op de eerste plaats. We helpen je graag verder, aarzel niet om ons te mailen of bellen! Groeten van team tekst.ai 💙</p>

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

export default SupportCard