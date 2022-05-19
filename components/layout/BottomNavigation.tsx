import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoPowerOutline, IoSettingsOutline, IoChevronBackOutline } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Colors } from '../../variables'
import { useAccent } from '../../store'
import { accentColors } from '../../ThemeConfig'
import { useEffect, useState } from 'react'

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
    padding: ${(ContainerProps) => ContainerProps.isOpen ? "0 1rem" : "0 0.5rem"};
    transition: all 0.3s ease-in-out;
    position: relative;
`

interface NavigationContainerProps {
    isOpen: boolean
}

const NavigationContainer = styled.div<NavigationContainerProps>`
    a {
        display: flex;
        transition: all 0.3s ease-in-out;
        /* justify-content: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? "flex-start" : "center"}; */
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1.25rem;
        margin-left: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? 0 : "0.25rem"};
        position: relative;
        /* width: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? "100%" : "auto"}; */
        
        svg {
            transition: all 0.3s ease-in-out;

            path {
                stroke-width: 50px
            }
        }

        span {
            font-size: 1.125rem;
            font-weight: 400;
            transition: all 0.3s ease-in-out;
            opacity: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? 1 : 0};
            position: absolute;
            left: 2.25rem
        }

        &:first-of-type {
            svg {
                path{
                    stroke-width: 65px;
                }
            }
        }

        &:last-of-type {
            margin-bottom: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? "0" : "2.4rem"};
        }
    }
`

interface LinkTextProps {
    pathName: string,
    accent: any
}

const LinkText = styled.a<LinkTextProps>`
    color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }: any ) => accent.color : Colors.textGrey};
    
    &:hover {
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }: any ) => accent.color : Colors.textWhite};
    }
`

interface CollapseProps {
    isOpen: boolean
}

const Collapse = styled.button<CollapseProps>`
    margin-top: auto;
    transition: all 0.3s ease-in-out;
    display: flex;
    padding: 0.34375rem 0;
    border-radius: 5px;
    transform: ${(CollapseProps) => CollapseProps.isOpen ? "" : "rotate(-180deg)"};
    position: absolute;
    right: ${(CollapseProps) => CollapseProps.isOpen ? 0 : "0.45rem"};
    bottom: -4px;

    &:hover {
        background: ${Colors.blackSec};
    }
    
    svg {
        transition: all 0.3s ease-in-out;

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

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
        localStorage.setItem("open menu", open.toString())
    }

    useEffect(() => {
        onOpen(!open)
    }, [open, onOpen])

    return (
        <Container isOpen={isOpen}>
            <NavigationContainer isOpen={isOpen}>
                <Link href={"/login"} passHref>
                    <LinkText pathName={router.pathname} accent={accentColors[accent as keyof typeof accentColors]}>
                        <IoPowerOutline fontSize={18}/>

                        <span>Afmelden</span>
                    </LinkText>
                </Link>

                <Link href={"/configuration"} passHref>
                    <LinkText pathName={router.pathname} accent={accentColors[accent as keyof typeof accentColors]}>
                        <IoSettingsOutline fontSize={18}/>
                        
                        <span>Configuratie</span>
                    </LinkText>
                </Link>
            </NavigationContainer>

            <Collapse isOpen={isOpen} onClick={handleClick}>
                <IoChevronBackOutline fontSize={16} color={accentColors[accent as keyof typeof accentColors].color}/>
                <IoChevronBackOutline fontSize={16} color={accentColors[accent as keyof typeof accentColors].color}/>
            </Collapse>
        </Container>
    )
}

export default BottomNavigation;