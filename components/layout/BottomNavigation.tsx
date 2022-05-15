import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoPowerOutline, IoSettingsOutline, IoChevronBackOutline } from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Colors } from '../../variables'

interface BottomNavigationProps {
    isOpen: boolean
}

interface ContainerProps {
    isOpen: boolean
}

const Container = styled.div<ContainerProps>`
    margin-top: auto;
    display: ${(ContainerProps) => ContainerProps.isOpen ? "flex" : "block"};
    justify-content: space-between;
    padding: ${(ContainerProps) => ContainerProps.isOpen ? "0 1rem" : "0 0.5rem"};
`

interface NavigationContainerProps {
    isOpen: boolean
}

const NavigationContainer = styled.div<NavigationContainerProps>`
    a {
        display: flex;
        transition: all 0.2s ease-in-out;
        justify-content: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? "flex-start" : "center"};
        align-items: center;
        margin-bottom: 1rem;
        
        svg {
            transition: all 0.2s ease-in-out;

            path {
                stroke-width: 50px
            }
        }

        span {
            margin-left: 1rem;
            font-size: 1.125rem;
            font-weight: 400;
        }

        &:hover {
            color: ${Colors.textWhite};

            svg {
                stroke: ${Colors.textWhite};
            }
        }

        &:first-of-type {
            svg {
                path{
                    stroke-width: 65px;
                }
            }
        }

        &:last-of-type {
            margin-bottom: ${(NavigationContainerProps) => NavigationContainerProps.isOpen ? "0" : "calc(1rem - 0.34375rem)"};
        }
    }
`

interface LinkTextProps {
    pathName: string;
}

const LinkText = styled.a<LinkTextProps>`
    color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? Colors.primary : Colors.textGrey};
`

interface CollapseProps {
    isOpen: boolean
}

const Collapse = styled.button<CollapseProps>`
    margin-top: auto;
    transition: all 0.2s ease-in-out;
    display: flex;
    padding: 0.34375rem 0;
    border-radius: 5px;
    transform: translateY(4px);
    transform: ${(CollapseProps) => CollapseProps.isOpen ? "" : "rotate(-180deg)"};

    &:hover {
        background: ${Colors.blackSec};
    }

    svg {
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

const BottomNavigation: NextPage<BottomNavigationProps> = ({ isOpen }) => {
    const router = useRouter()

    const handleClick = () => {
        console.log("Click")
    }

    return (
        <Container isOpen={isOpen}>
            <NavigationContainer isOpen={isOpen}>
                <Link href={"/login"} passHref>
                    <LinkText pathName={router.pathname}>
                        <IoPowerOutline fontSize={18}/>

                        { isOpen ? <span>Afmelden</span> : "" }
                    </LinkText>
                </Link>

                <Link href={"/configuration"} passHref>
                    <LinkText pathName={router.pathname}>
                        <IoSettingsOutline fontSize={18}/>
                        
                        { isOpen ? <span>Configuratie</span> : "" }
                    </LinkText>
                </Link>
            </NavigationContainer>

            <Collapse isOpen={isOpen} onClick={handleClick}>
                <IoChevronBackOutline fontSize={16} color={Colors.primary}/> <IoChevronBackOutline fontSize={16} color={Colors.primary}/>
            </Collapse>
        </Container>
    )
}

export default BottomNavigation;