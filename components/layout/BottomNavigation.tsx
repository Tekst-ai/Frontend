import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoPowerOutline, IoSettingsOutline, IoChevronBackOutline } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Transition } from '../../variables'
import useStore, { useAccent, useMenu } from '../../store'
import themes, { accentColors, Theme } from '../../ThemeConfig'
import { useEffect, useState } from 'react'
import { Tooltip } from '../helpers'

interface BottomNavigationProps {
    isOpen: boolean,
    onOpen: (isOpen: boolean) => void,
}

interface ContainerProps {
    isOpen: boolean
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
    isOpen: boolean
}

const NavigationContainer = styled.ul<NavigationContainerProps>`
    li {
        margin-bottom: 1.2rem;
        position: relative;
        z-index: 2;
        display: flex;

        a {
            display: flex;
            transition: ${Transition.fast};
            /* justify-content: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? "flex-start" : "center"}; */
            justify-content: flex-start;
            align-items: center;
            /* margin-bottom: 1.25rem; */
            margin-left: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? 0 : "0.95rem"};
            position: relative;
            /* width: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? "100%" : "auto"}; */
            z-index: 3;

            svg {
                transition: ${Transition.fast};
    
                path {
                    stroke-width: 50px
                }
            }
    
            span {
                /* font-size: 1.125rem; */
                font-size: 1rem;
                font-weight: 500;
                transition: ${Transition.fast};
                opacity: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? 1 : 0};
                position: absolute;
                left: 2.25rem
            }
    
            
        }

        &:first-of-type {
            a {
                svg {
                    path{
                        /* stroke-width: 65px; */
                        stroke-width: 60px;
                    }
                }
            }
        }

        &:last-of-type {
            /* margin-bottom: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? "0" : "2.4rem"}; */
            margin-bottom: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? "0" : "2.35rem"};
        }
    }
`

interface LinkTextProps {
    pathName: string,
    accent: string,
    theme: any,
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

interface CollapseProps {
    isOpen: boolean,
    theme: any
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

    &:hover {
        background: ${({ theme }) => theme.lineLight};
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
    const router = useRouter()
    const accent = useAccent((s: any) => s.accent)
    const theme: keyof Theme = useStore((s: any) => s.theme)
    const menu = useMenu((s: any) => s.menu)
    const setMenu = useMenu((s: any) => s.setMenu)

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
        localStorage.setItem("open menu", open.toString())
        setMenu(!menu)
    }

    useEffect(() => {
        onOpen(!open)
    }, [open, onOpen])

    return (
        <Container isOpen={isOpen}>
            <NavigationContainer isOpen={isOpen}>
                <li>
                    <Link href={"/login"} passHref>
                        <LinkText open={isOpen} pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors][theme]}>
                            {/* <IoPowerOutline fontSize={18}/> */}
                            <IoPowerOutline fontSize={16}/>

                            <span>Afmelden</span>
                        </LinkText>
                    </Link>

                    <Tooltip title="Afmelden"/>
                </li>

                <li>
                    <Link href={"/configuration"} passHref>
                        <LinkText open={isOpen} pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors][theme]}>
                            {/* <IoSettingsOutline fontSize={18}/> */}
                            <IoSettingsOutline fontSize={16}/>
                            
                            <span>Configuratie</span>
                        </LinkText>
                    </Link>

                    <Tooltip title="Configuratie"/>
                </li>
            </NavigationContainer>

            <Collapse isOpen={isOpen} onClick={handleClick} theme={themes[theme]}>
                <IoChevronBackOutline fontSize={16} color={accentColors[accent as keyof typeof accentColors][theme]}/>
                <IoChevronBackOutline fontSize={16} color={accentColors[accent as keyof typeof accentColors][theme]}/>
            </Collapse>
        </Container>
    )
}

export default BottomNavigation;