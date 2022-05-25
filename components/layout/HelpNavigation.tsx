import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import { FiHelpCircle } from 'react-icons/fi'
import { IoChevronDownOutline, IoRocket, IoChatbubbles } from 'react-icons/io5'

import { useRouter } from 'next/router';
import useStore, { useAccent } from '../../store';
import themes, { accentColors, Theme } from '../../ThemeConfig';

interface HelpNavigationProps {
    isOpen: boolean
}

interface HelpNavigationListProps {
    isOpen: boolean,
}

const Container = styled.div<HelpNavigationListProps>`
    padding: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? "0 1rem" : "0 0.5rem"};
    margin-top: 1.25rem;
    transition: all 0.3s ease-in-out;
    
    a {
        display: flex;
        align-items: center;
        transition: all 0.3s ease-in-out;
        position: relative;
        margin-left: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? 0 : "0.35rem"};
        
        span {
            font-size: 1.125rem;
            font-weight: 500;
            position: absolute;
            transition: all 0.3s ease-in-out;
            left: 2.25rem;
            opacity: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? "1" : "0"};
        }
        
        /* svg:last-of-type {
            position: absolute;
            transition: all 0.3s ease-in-out;
            right: 0;
            opacity: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? "1" : "0"};

            path {
                stroke-width: 70px;
            }
        } */
    }
`

interface LinkTextProps {
    pathName: string,
    accent: any,
    theme: any
}

const LinkText = styled.a<LinkTextProps>`
    color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : ({ theme }) => theme.text};

    &:hover {
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : ({ accent }) => accent.color};
    }
`

interface SubNavigationProps {
    isOpen: boolean,
    accent: any,
    theme: any
}

const SubNavigation = styled.ul<SubNavigationProps>`
    margin-top: 1.2rem;
    margin-left: ${({ isOpen }) => isOpen ? "2.25rem" : "0"};
    opacity: ${({ isOpen }) => isOpen ? "1" : "0"};
    transition: all 0.2s ease-in-out;
    position: absolute;
    width: 100%;
    
    li {
        a {
            span {
                font-size: 1rem;
                left: 1.75rem;
            }   
        }

        &:first-of-type {
            margin-bottom: 1.2rem;
        }
    }
`

const LinkTextAlt = styled(LinkText)`
    color: ${({ pathName, href }) => pathName === href ? ({ accent }) => accent.color : pathName.includes("/help-center") ? ({ theme }) => theme.text : ({ theme }) => theme.textSec};
    
    &:hover {
        color: ${({ pathName, href }) => pathName === href ? ({ accent }) => accent.color : pathName.includes("/help-center") ? ({ accent }) => accent.color : ({ theme }) => theme.text};
    }
`

const HelpNavigation: NextPage<HelpNavigationProps> = ({ isOpen }) => {
    const router = useRouter();
    const accent = useAccent((s: any) => s.accent);
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container isOpen={isOpen}>
            <Link href={"/help-center"} passHref>
                <LinkText pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
                    <FiHelpCircle fontSize={22} strokeWidth={2.25}/>

                    <span>Helpcentrum</span>

                    {/* <IoChevronDownOutline fontSize={16}/> */}
                </LinkText>

            </Link>

            <SubNavigation isOpen={isOpen} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
                <li>
                    <Link href={"/help-center/getting-started"} passHref>
                        <LinkTextAlt pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
                            <IoRocket fontSize={16} strokeWidth={2.25}/>

                            <span>Aan de slag</span>
                        </LinkTextAlt>
                    </Link>
                </li>

                <li>
                    <Link href={"/help-center/faq"} passHref>
                        <LinkTextAlt pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
                            <IoChatbubbles fontSize={16} strokeWidth={2.25}/>

                            <span>Veelgestelde vragen</span>
                        </LinkTextAlt>
                    </Link>
                </li>
            </SubNavigation>
        </Container>
    )
}

export default HelpNavigation;