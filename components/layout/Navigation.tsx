import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import { FiHome, FiBarChart2, FiGrid } from 'react-icons/fi'
import { useRouter } from 'next/router';

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
            display: flex;
            align-items: center;
            
            span {
                display: block;
                font-size: 1.125rem;
                font-weight: 500;
                margin-left: 1rem;
            }
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`

interface LinkTextProps {
    pathName: string;
}

const LinkText = styled.a<LinkTextProps>`
    background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? Colors.primaryDark : 'transparent'};

    &:hover {
        background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? Colors.primaryDark : Colors.blackSec};
    }
`

const Navigation: NextPage = () => {
    const router = useRouter();

    return (
        <Container>
            <NavigationList>
                <li>
                    <Link href={"/"} passHref>
                        <LinkText pathName={router.pathname}>
                            <FiHome fontSize={18} strokeWidth={2.5}/>
                            <span>Dashboard</span>
                        </LinkText>
                    </Link>
                </li>

                <li>
                    <Link href={"/statistics"} passHref>
                        <LinkText pathName={router.pathname}>
                            <FiBarChart2 fontSize={20} strokeWidth={3}/>
                            <span>Statistieken</span>
                        </LinkText>
                    </Link>
                </li>

                <li>
                    <Link href={"/categories"} passHref>
                        <LinkText pathName={router.pathname}>
                            <FiGrid fontSize={20} strokeWidth={2.25}/>
                            <span>Categorieën</span>
                        </LinkText>
                    </Link>
                </li>
            </NavigationList>
        </Container>
    )
}

export default Navigation;