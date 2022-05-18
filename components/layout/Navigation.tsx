import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import { FiHome, FiBarChart2, FiGrid } from 'react-icons/fi'
import { useRouter } from 'next/router';

import { Colors } from '../../variables';
import { useAccent } from '../../store';
import { accentColors } from '../../ThemeConfig';

interface NavigationProps {
    isOpen: boolean
}

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

interface NavigationListProps {
    isOpen: boolean,
}

const NavigationList = styled.ul<NavigationListProps>`
    li {
        margin-bottom: 0.375rem;
        display: flex;
        
        a {
            width: 100%;
            height: auto;
            padding: ${(NavigationListProps) => NavigationListProps.isOpen ? "0.5rem 1rem" : "0.75rem"};
            border-radius: 6px;
            display: flex;
            justify-content: ${(NavigationListProps) => NavigationListProps.isOpen ? "flex-start" : "center"};;
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
    accent: any
}

const LinkText = styled.a<LinkTextProps>`
    transition: all 0.2s ease-in-out;
    background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }: any ) => accent.color : 'transparent'};
    color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }: any ) => accent.text : "inherit"};

    &:hover {
        background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }: any ) => accent.color : Colors.blackSec};
    }
`

const Navigation: NextPage<NavigationProps> = ({ isOpen }) => {
    const router = useRouter();
    const accent = useAccent((s: any) => s.accent);

    return (
        <Container>
            <NavigationList isOpen={isOpen}>
                <li>
                    <Link href={"/"} passHref>
                        <LinkText pathName={router.pathname} accent={accentColors[accent as keyof typeof accentColors]}>
                            <FiHome fontSize={18} strokeWidth={2.5}/>
                            { isOpen ? <span>Dashboard</span> : ""}
                        </LinkText>
                    </Link>
                </li>

                <li>
                    <Link href={"/statistics"} passHref>
                        <LinkText pathName={router.pathname} accent={accentColors[accent as keyof typeof accentColors]}>
                            <FiBarChart2 fontSize={20} strokeWidth={3}/>
                            { isOpen ? <span>Statistieken</span> : ""}
                        </LinkText>
                    </Link>
                </li>

                <li>
                    <Link href={"/categories"} passHref>
                        <LinkText pathName={router.pathname} accent={accentColors[accent as keyof typeof accentColors]}>
                            <FiGrid fontSize={20} strokeWidth={2.25}/>
                            { isOpen ? <span>Categorieën</span> : ""}
                        </LinkText>
                    </Link>
                </li>
            </NavigationList>
        </Container>
    )
}

export default Navigation;