import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import { FiHelpCircle } from 'react-icons/fi'
import { IoChevronDownOutline } from 'react-icons/io5'

import { Colors } from '../../variables';
import { useRouter } from 'next/router';
import { useAccent } from '../../store';
import { accentColors } from '../../ThemeConfig';

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
    }
`

interface LinkTextProps {
    pathName: string,
    accent: any
}

const LinkText = styled.a<LinkTextProps>`
    color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }: any ) => accent.color : Colors.textWhite};

    &:hover {
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }: any ) => accent.color : ({ accent }: any ) => accent.color};
    }
`

const HelpNavigation: NextPage<HelpNavigationProps> = ({ isOpen }) => {
    const router = useRouter();
    const accent = useAccent((s: any) => s.accent);

    return (
        <Container>
            <Link href={"/help-center"} passHref>
                <LinkText pathName={router.pathname} accent={accentColors[accent as keyof typeof accentColors]}>
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