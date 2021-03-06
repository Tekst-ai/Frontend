import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoPowerOutline, IoSettingsOutline, IoChevronBackOutline } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Breakpoint, Transition } from '../../variables'
import useStore, { useAccent, useAuth, useMenu } from '../../store'
import themes, { Accent, accentColors, Theme } from '../../ThemeConfig'
import { Tooltip } from '../helpers'
import { Routes } from '../../constants'
import useWindowDimensions from '../../hooks/useWindowDimensions'

interface BottomNavigationProps {
    isOpen: boolean,
    onOpen: (isOpen: boolean) => void,
}

interface ContainerProps {
    isOpen: boolean,
}

const Container = styled.div<ContainerProps>`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    padding: ${(ContainerProps) => ContainerProps.isOpen ? "0 1rem" : "0"};
    transition: ${Transition.fast};
    position: relative;
`

interface NavigationContainerProps {
    isOpen: boolean,
}

const NavigationContainer = styled.ul<NavigationContainerProps>`
    li {
        margin-bottom: 1.2rem;
        position: relative;
        z-index: 2;
        display: flex;
        transition: ${Transition.fast};

        a, button {
            display: flex;
            transition: ${Transition.fast};
            justify-content: flex-start;
            align-items: center;
            margin-left: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? 0 : "0.95rem"};
            position: relative;
            z-index: 3;

            svg {
                transition: ${Transition.fast};
    
                path {
                    stroke-width: 50px
                }
            }
    
            span {
                font-size: 1rem;
                font-weight: 500;
                transition: ${Transition.superFast};
                opacity: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? 1 : 0};
                position: absolute;
                left: 2.25rem;
            }
        }

        &:first-of-type {
            button {
                svg {
                    path{
                        stroke-width: 60px;
                    }
                }
            }
        }

        &:last-of-type {
            margin-bottom: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? "0" : "2.35rem"};
        }
    }
`

interface LinkTextProps {
    pathName: string,
    accent: string,
    theme: keyof Theme,
    open: boolean,
}

const LinkText = styled.a<LinkTextProps>`
    color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent : ({ theme }) => theme.textSec};
    
    span {
        pointer-events: ${(LinkTextProps) => LinkTextProps.open ? "auto" : "none"};
    }

    &:hover {
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent : ({ theme }) => theme.text};
    }
`

interface LinkButtonProps {
    accent: string,
    theme: keyof Theme,
    open: boolean,
}

const LinkButton = styled.button<LinkButtonProps>`
    color: ${({ theme }) => theme.textSec};

    span {
        pointer-events: ${(LinkTextProps) => LinkTextProps.open ? "auto" : "none"};
    }

    &:hover {
        color: ${({ theme }) => theme.text};
    }
`

interface CollapseProps {
    isOpen: boolean,
    theme: keyof Theme,
}

const Collapse = styled.button<CollapseProps>`
    margin-top: auto;
    transition: ${Transition.fast};
    display: flex;
    padding: 0.34375rem 0;
    border-radius: 5px;
    transform: ${(CollapseProps) => CollapseProps.isOpen ? "" : "rotate(-180deg)"};
    position: absolute;
    right: ${(CollapseProps) => CollapseProps.isOpen ? 0 : "0.45rem"};
    bottom: -4px;
    box-shadow: 0 1px 4px ${({ theme }) => theme.background};
    cursor: default;
    
    @media (min-width: ${Breakpoint.tablet}) {
        cursor: pointer;
    }

    &:hover {
        @media (min-width: ${Breakpoint.tablet}) {
            background: ${({ theme }) => theme.backgroundSec};
            box-shadow: 0 1px 4px ${({ theme }) => theme.boxShadow};
        }
    }
    
    svg {
        transition: ${Transition.fast};

        path {
            stroke-width: 70px;
        }

        &:first-of-type {
            transform: translateX(4.5px);
        }

        &:last-of-type {
            transform: translateX(-4.5px);
        }
    }
`

const BottomNavigation: NextPage<BottomNavigationProps> = ({ isOpen, onOpen }) => {
    const router = useRouter();
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const menu = useMenu((s: any) => s.menu);
    const setMenu = useMenu((s: any) => s.setMenu);
    const { width } = useWindowDimensions();

    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(!open);
        localStorage.setItem("menu", open.toString());
        setMenu(!menu);
    }
    
    useEffect(() => {
        if (width < 992) {
            onOpen(false)
        } else {
            onOpen(!open);
        }
    }, [open, onOpen, width])
    
    const setAuth = useAuth((s: any) => s.setAuth)
    const handleAuth = () => {
        setAuth(false);
        localStorage.setItem("auth", String(false));
        router.push(Routes.LOGIN);
        setMenu(true);
    }

    return (
        <Container isOpen={isOpen}>
            <NavigationContainer isOpen={isOpen}>
                <li>
                    <LinkButton onClick={handleAuth} open={isOpen} theme={themes[theme]} accent={accentColors[accent][theme]}>
                        <IoPowerOutline fontSize={16}/>
                        
                        <span>Afmelden</span>
                    </LinkButton>

                    <Tooltip title="Afmelden"/>
                </li>

                <li>
                    <Link href={Routes.CONFIGURATION} passHref>
                        <LinkText open={isOpen} pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent][theme]}>
                            <IoSettingsOutline fontSize={16}/>

                            <span>Configuratie</span>
                        </LinkText>
                    </Link>

                    <Tooltip title="Configuratie"/>
                </li>
            </NavigationContainer>

            <Collapse isOpen={isOpen} onClick={handleClick} theme={themes[theme]} disabled={width > 992 ? false : true}>
                <IoChevronBackOutline fontSize={16} color={width > 992 ? accentColors[accent][theme] : themes[theme].textSec + "4D"}/>
                <IoChevronBackOutline fontSize={16} color={width > 992 ? accentColors[accent][theme] : themes[theme].textSec + "4D"}/>
            </Collapse>
        </Container>
    )
}

export default BottomNavigation;