import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import { FiHome, FiBarChart2, FiGrid } from 'react-icons/fi'
import { useRouter } from 'next/router';

import { Transition } from '../../variables';
import useStore, { useAccent } from '../../store';
import themes, { Accent, accentColors, Theme } from '../../ThemeConfig';
import { Tooltip } from '../helpers';
import { Routes } from '../../constants';
import { ThemeStylingProps } from '../../interfaces/Styling';

interface NavigationProps {
    isOpen: boolean,
}

const Container = styled.nav<ThemeStylingProps>`
    display: flex;
    flex-direction: column;

    &:after {
        content: '';
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.lineLight};
        margin-top: 0.5rem;
        transition: ${Transition.fast};
    }
`

interface NavigationListProps {
    isOpen: boolean,
}

const NavigationList = styled.ul<NavigationListProps>`
    li {
        margin-bottom: 0.25rem;
        display: flex;
        position: relative;
        
        a {
            width: 100%;
            height: auto;
            padding: ${(NavigationListProps) => NavigationListProps.isOpen ? "0.875rem 1rem" : "0.75rem"};
            border-radius: 6px;
            display: flex;
            justify-content: center;
            position: relative;
            transition: ${Transition.fast};
            z-index: 2;
            
            svg {
                margin-right: auto;
                transition: ${Transition.fast};
                margin-left: 0.15rem;
            }

            span {
                transition: ${Transition.superFast};
                font-size: 1rem;
                font-weight: 500;
                margin-left: 1rem;
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
    accent: string,
    open: boolean,
    theme: keyof Theme,
}

const LinkText = styled.a<LinkTextProps>`
    background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ theme }) => theme.backgroundSec : "transparent"};
    box-shadow: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? "0 1px 4px " + LinkTextProps.theme.boxShadow : "0 1px 4px " + LinkTextProps.theme.background};

    & span {
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ theme }) => theme.text : ({theme}) => theme.textSec};
        opacity: ${(LinkTextProps) => LinkTextProps.open ? 1 : 0};
        position: absolute;
        pointer-events: ${(LinkTextProps) => LinkTextProps.open ? "auto" : "none"};
    }
    
    & svg {
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent : ({theme}) => theme.textSec};
    }

    &:hover {
        background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ theme }) => theme.backgroundSec : ({ theme }) => theme.lineLight};
        
        span {
            color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ theme }) => theme.text : ({ theme }) => theme.text};
        }
        
        svg {
            color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent : ({ theme }) => theme.text};
        }
    }
`

const Navigation: NextPage<NavigationProps> = ({ isOpen }) => {
    const router = useRouter();
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container theme={themes[theme]}>
            <NavigationList isOpen={isOpen}>
                <li>
                    <Link href={Routes.DASHBOARD} passHref>
                        <LinkText pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent][theme]} open={isOpen}>
                            <FiHome fontSize={18} strokeWidth={2.5}/>

                            <span>Dashboard</span>

                        </LinkText>
                    </Link>
                    
                    <Tooltip title="Dashboard"/>
                </li>

                <li>
                    <Link href={Routes.STATISTICS} passHref>
                        <LinkText pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent][theme]} open={isOpen}>
                            <FiBarChart2 fontSize={18} strokeWidth={3}/>

                            <span>Statistieken</span>
                        </LinkText>
                    </Link>
                    
                    <Tooltip title="Statistieken"/>
                </li>

                <li>
                    <Link href={Routes.CATEGORIES} passHref>
                        <LinkText pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent][theme]} open={isOpen}>
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