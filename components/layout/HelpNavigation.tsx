import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import { FiHelpCircle } from 'react-icons/fi'
import { IoChevronDownOutline } from 'react-icons/io5'

import { Colors } from '../../variables';
import { useRouter } from 'next/router';

interface HelpNavigationProps {
    isOpen: boolean
}

const Container = styled.div`
    padding: 0 1rem;
    margin-top: 1.25rem;
    
    a {
        display: flex;
        align-items: center;
        transition: all 0.2s ease-in-out;

        span {
            margin-left: 1rem;
            font-size: 1.125rem;
            font-weight: 500;
        }

        svg:last-of-type {
            margin-left: auto;

            path {
                stroke-width: 70px;
            }
        }

        &:hover {
            color: ${Colors.primary};
        }
    }
`

interface LinkTextProps {
    pathName: string;
}

const LinkText = styled.a<LinkTextProps>`
    color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? Colors.primary : Colors.textWhite};
`

const HelpNavigation: NextPage<HelpNavigationProps> = ({ isOpen }) => {
    const router = useRouter()

    return (
        <Container>
            <Link href={"/help-center"} passHref>
                <LinkText pathName={router.pathname}>
                    <FiHelpCircle fontSize={20} strokeWidth={2.25}/>

                    { isOpen ? 
                        <>
                            <span>Helpcentrum</span>
                            <IoChevronDownOutline fontSize={16}/>
                        </>:
                        ""
                    }

                </LinkText>
            </Link>
        </Container>
    )
}

export default HelpNavigation;