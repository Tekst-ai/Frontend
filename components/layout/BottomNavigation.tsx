import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoPowerOutline, IoSettingsOutline, IoChevronBackOutline } from 'react-icons/io5'
import Link from 'next/link'
import { Colors } from '../../variables'

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
            color: ${Colors.primary};

            svg {
                stroke: ${Colors.primary};
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
    return (
        <Container>
            <NavigationContainer>
                <Link href={"/login"}>
                    <a>
                        <IoPowerOutline fontSize={18}/>
                        
                        <span>Afmelden</span>

                    </a>
                </Link>

                <Link href={"/configuration"}>
                    <a>
                        <IoSettingsOutline fontSize={18}/>
                        
                        <span>Configuratie</span>
                    </a>
                </Link>
            </NavigationContainer>

            <Collapse>
                <IoChevronBackOutline fontSize={20} color={Colors.primary}/> <IoChevronBackOutline fontSize={20} color={Colors.primary}/>
            </Collapse>
        </Container>
    )
}

export default BottomNavigation;