import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import { FiHelpCircle } from 'react-icons/fi'
import { IoChevronDownOutline, IoRocket, IoChatbubbles } from 'react-icons/io5'

import { useRouter } from 'next/router';
import useStore, { useAccent } from '../../store';
import themes, { accentColors, Theme } from '../../ThemeConfig';
import { Tooltip } from '../helpers';
import { Transition } from '../../variables';

interface HelpNavigationProps {
    isOpen: boolean
}

interface HelpNavigationListProps {
    isOpen: boolean,
    theme: any
}

const Container = styled.div<HelpNavigationListProps>`
    padding: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? "0 1rem" : "0"};
    /* margin-top: 1.25rem; */
    margin-top: 1rem;
    transition: ${Transition.fast};

    div:first-child {
        position: relative;
        z-index: 2;

        a {
            display: flex;
            align-items: center;
            transition: ${Transition.fast};
            position: relative;
            margin-left: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? 0 : "0.85rem"};
            z-index: 2;
            
            span {
                /* font-size: 1.125rem; */
                font-size: 1rem;
                font-weight: 500;
                position: absolute;
                transition: ${Transition.fast};
                left: 2.25rem;
                /* left: 2rem; */
                opacity: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? "1" : "0"};
            }
            
            /* svg:last-of-type {
                position: absolute;
                transition: ${Transition.fast};
                right: 0;
                opacity: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? "1" : "0"};
    
                path {
                    stroke-width: 70px;
                }
            } */
        }
    }
    
`

interface LinkTextProps {
    pathName: string,
    accent: any,
    theme: any
    open: boolean
}

const LinkText = styled.a<LinkTextProps>`
    /* color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : ({ theme }) => theme.text}; */
    /* color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : ({ theme }) => theme.textSec}; */
    color: ${({ pathName, href }) => pathName === href ? ({ accent }) => accent.color : pathName.includes("/help-center") ? ({ theme }) => theme.text : ({ theme }) => theme.textSec};

    span {
        pointer-events: ${(LinkTextProps) => LinkTextProps.open ? "auto" : "none"};
    }

    &:hover {
        /* color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : ({ theme }) => theme.text}; */
        color: ${({ pathName, href }) => pathName === href ? ({ accent }) => accent.color : pathName.includes("/help-center") ? ({ accent }) => accent.color : ({ theme }) => theme.text};
    }
`

interface SubNavigationProps {
    isOpen: boolean,
    accent: any,
    theme: any
}

const SubNavigation = styled.ul<SubNavigationProps>`
    margin-top: 1.2rem;
    margin-left: ${({ isOpen }) => isOpen ? "2rem" : "0"};
    opacity: ${({ isOpen }) => isOpen ? "1" : "0"};
    transition: ${Transition.fast};
    position: absolute;
    width: 100%;
    
    li {
        a {
            span {
                /* font-size: 1rem; */
                font-size: 0.875rem;
                left: 1.75rem;
                /* left: 1.5rem; */
            }   
        }

        &:first-of-type {
            /* margin-bottom: 1.2rem; */
            margin-bottom: 1rem;
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
        <Container isOpen={isOpen} theme={themes[theme]}>
            <div>
                <Link href={"/help-center"} passHref>
                    <LinkText open={isOpen} pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
                        {/* <FiHelpCircle fontSize={22} strokeWidth={2.25}/> */}
                        <FiHelpCircle fontSize={20} strokeWidth={2.25}/>

                        <span>Helpcentrum</span>

                        {/* <IoChevronDownOutline fontSize={16}/> */}
                    </LinkText>
                </Link>
                
                <Tooltip title="Helpcentrum"/>
            </div>

            {
                router.pathname.includes("/help-center") &&
                <SubNavigation isOpen={isOpen} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
                    <li>
                        <Link href={"/help-center/getting-started"} passHref>
                            <LinkTextAlt open={isOpen} pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
                                {/* <IoRocket fontSize={16} strokeWidth={2.25}/> */}
                                <IoRocket fontSize={14} strokeWidth={2.25}/>

                                <span>Aan de slag</span>
                            </LinkTextAlt>
                        </Link>
                    </li>

                    <li>
                        <Link href={"/help-center/faq"} passHref>
                            <LinkTextAlt open={isOpen} pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
                                {/* <IoChatbubbles fontSize={16} strokeWidth={2.25}/> */}
                                <IoChatbubbles fontSize={14} strokeWidth={2.25}/>

                                <span>Veelgestelde vragen</span>
                            </LinkTextAlt>
                        </Link>
                    </li>
                </SubNavigation>
            }

        </Container>
    )
}

export default HelpNavigation;