import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoPowerOutline, IoSettingsOutline, IoChevronBackOutline } from 'react-icons/io5'
import Link from 'next/link'
import { Colors } from '../../variables'
import { useRouter } from 'next/router'

const Container = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`

const NavigationContainer = styled.div`
    a {
        display: flex;
        transition: all 0.2s ease-in-out;
        align-items: center;
        
        svg {
            transition: all 0.2s ease-in-out;

            path {
                stroke-width: 50px
            }
        }

        span {
            margin-left: 1rem;
            font-size: 1.125rem;
            font-weight: 500;
        }

        &:hover {
            color: ${Colors.textWhite};

            svg {
                stroke: ${Colors.textWhite};
            }
        }

        &:first-of-type {
            margin-bottom: 1rem;

            svg {
                path{
                    stroke-width: 65px;
                }
            }
        }
    }
`

interface LinkTextProps {
    pathName: string;
}

const LinkText = styled.a<LinkTextProps>`
    color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? Colors.primary : Colors.textGreyBlack};
`

const Collapse = styled.button`
    margin-top: auto;
    transition: all 0.2s ease-in-out;
    display: flex;
    padding: 0.34375rem 0;
    border-radius: 5px;
    transform: translateY(4px);

    &:hover {
        background: ${Colors.blackSec};
    }

    svg {
        path {
            stroke-width: 70px;
        }

        &:first-of-type {
            transform: translateX(5.5px);
        }

        &:last-of-type {
            transform: translateX(-5.5px);
        }
    }
`

const BottomNavigation: NextPage = () => {
    const router = useRouter()

    return (
        <Container>
            <NavigationContainer>
                <Link href={"/login"} passHref>
                    <LinkText pathName={router.pathname}>
                        <IoPowerOutline fontSize={18}/>
                        
                        <span>Afmelden</span>
                    </LinkText>
                </Link>

                <Link href={"/configuration"} passHref>
                    <LinkText pathName={router.pathname}>
                        <IoSettingsOutline fontSize={18}/>
                        
                        <span>Configuratie</span>
                    </LinkText>
                </Link>
            </NavigationContainer>

            <Collapse>
                <IoChevronBackOutline fontSize={20} color={Colors.primary}/> <IoChevronBackOutline fontSize={20} color={Colors.primary}/>
            </Collapse>
        </Container>
    )
}

export default BottomNavigation;