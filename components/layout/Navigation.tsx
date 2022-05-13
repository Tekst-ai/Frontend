import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import { Colors } from '../../variables';

const Container = styled.nav`
    display: flex;
    flex-direction: column;

    &::after {
        content: '';
        width: calc(100% - 20px);
        transform: translateX(10px);
        height: 2px;
        background: ${Colors.blackSec};
        margin-top: 0.8125rem;
    }
`

const NavigationList = styled.ul`
    li {
        margin-bottom: 0.375rem;
        display: flex;
        
        a {
            width: 100%;
            transition: all 0.2s ease-in-out;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            padding-right: 2rem;
            
            span {
                display: block;
                font-size: 1.125rem;
                font-weight: 500;
            }

            &:hover {
                background: ${Colors.primaryDark};
            }
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`

const Navigation: NextPage = () => {
    return (
        <Container>
            <NavigationList>
                <li>
                    <Link href={"/"}>
                        <a>
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href={"/statistics"}>
                        <a>
                            <span>Statistieken</span>
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href={"/categories"}>
                        <a>
                            <span>Categorieën</span>
                        </a>
                    </Link>
                </li>
            </NavigationList>
        </Container>
    )
}

export default Navigation;