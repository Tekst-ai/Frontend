import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import { FiHome, FiBarChart2, FiGrid } from 'react-icons/fi'
import { useRouter } from 'next/router';

import { Colors } from '../../variables';
import useStore, { useAccent } from '../../store';
import themes, { accentColors, Theme } from '../../ThemeConfig';
import { Tooltip } from '../helpers';

interface NavigationProps {
    isOpen: boolean,
}

interface ContainerProps {
    theme: any
}

const Container = styled.nav<ContainerProps>`
    display: flex;
    flex-direction: column;

    &:after {
        content: '';
        width: 100%;
        /* transform: translateX(8px); */
        height: 2px;
        background: ${({ theme }) => theme.lineLight};
        /* margin-top: 0.8125rem; */
        margin-top: 0.5rem;
        transition: all 0.2s ease-in-out;
    }
`

interface NavigationListProps {
    isOpen: boolean,
}

const NavigationList = styled.ul<NavigationListProps>`
    li {
        /* margin-bottom: 0.375rem; */
        margin-bottom: 0.25rem;
        display: flex;
        position: relative;
        
        a {
            width: 100%;
            height: auto;
            /* padding: ${(NavigationListProps) => NavigationListProps.isOpen ? "0.75rem 1rem" : "0.75rem"}; */
            padding: ${(NavigationListProps) => NavigationListProps.isOpen ? "0.875rem 1rem" : "0.75rem"};
            border-radius: 6px;
            display: flex;
            justify-content: center;
            /* align-items: center; */
            position: relative;
            transition: all 0.2s ease-in-out;
            z-index: 2;
            
            svg {
                margin-right: auto;
                transition: all 0.2s ease-in-out;
                margin-left: 0.15rem;
            }

            span {
                transition: all 0.2s ease-in-out;
                /* font-size: 1.25rem; */
                font-size: 1rem;
                font-weight: 500;
                margin-left: 1rem;
                /* margin-left: 0.75rem; */
                left: 2.25rem
            }
        }

        &:first-of-type {
            svg {
                margin-left: 0.26rem;
            }
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`

interface LinkTextProps {
    pathName: string,
    accent: any,
    open: boolean,
    theme: any
}

const LinkText = styled.a<LinkTextProps>`
    /* background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : "transparent"}; */
    background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ theme }) => theme.backgroundSec : ({ theme }) => theme.background};
    /* box-shadow: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? "0 1px 1px " + LinkTextProps.theme.boxShadow : "0 1px 1px " + LinkTextProps.theme.background}; */

    & span {
        /* color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : "inherit"}; */
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ theme }) => theme.text : ({theme}) => theme.textSec};
        opacity: ${(LinkTextProps) => LinkTextProps.open ? 1 : 0};
        position: absolute;
        pointer-events: ${(LinkTextProps) => LinkTextProps.open ? "auto" : "none"};
    }
    
    & svg {
        /* color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.text : "inherit"}; */
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : ({theme}) => theme.textSec};
    }

    &:hover {
        /* background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : ({ theme }) => theme.lineLight}; */
        background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ theme }) => theme.backgroundSec : ({ theme }) => theme.lineLight};
        
        span {
            color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ theme }) => theme.text : ({ theme }) => theme.text};
        }
        
        svg {
            color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : ({ theme }) => theme.text};
        }
    }
`

const Navigation: NextPage<NavigationProps> = ({ isOpen }) => {
    const router = useRouter();
    const accent = useAccent((s: any) => s.accent);
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container theme={themes[theme]}>
            <NavigationList isOpen={isOpen}>
                <li>
                    <Link href={"/"} passHref>
                        <LinkText pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]} open={isOpen}>
                            {/* <FiHome fontSize={18} strokeWidth={2.5}/> */}
                            <FiHome fontSize={18} strokeWidth={2.5}/>

                            <span>Dashboard</span>

                        </LinkText>
                    </Link>
                    
                    <Tooltip title="Dashboard"/>
                </li>

                <li>
                    <Link href={"/statistics"} passHref>
                        <LinkText pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]} open={isOpen}>
                            {/* <FiBarChart2 fontSize={20} strokeWidth={3}/> */}
                            <FiBarChart2 fontSize={18} strokeWidth={3}/>

                            <span>Statistieken</span>
                        </LinkText>
                    </Link>
                    
                    <Tooltip title="Statistieken"/>
                </li>

                <li>
                    <Link href={"/categories"} passHref>
                        <LinkText pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]} open={isOpen}>
                            {/* <FiGrid fontSize={20} strokeWidth={2.25}/> */}
                            <FiGrid fontSize={18} strokeWidth={2.25}/>

                            <span>Categorieën</span>
                        </LinkText>
                    </Link>
                    
                    <Tooltip title="Categorieën"/>
                </li>
            </NavigationList>
        </Container>
    )
}

export default Navigation;