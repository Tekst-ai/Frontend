import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import { FiHome, FiBarChart2, FiGrid } from 'react-icons/fi'
import { useRouter } from 'next/router';

import { Colors } from '../../variables';
import useStore, { useAccent } from '../../store';
import themes, { accentColors, Theme } from '../../ThemeConfig';

interface NavigationProps {
    isOpen: boolean,
}

interface ContainerProps {
    theme: any
}

const Container = styled.nav`
    display: flex;
    flex-direction: column;

    &:after {
        content: '';
        width: calc(100% - 20px);
        transform: translateX(10px);
        height: 2px;
        background: ${({ theme }) => theme.lineLight};
        margin-top: 0.8125rem;
        transition: all 0.3s ease-in-out;
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
            justify-content: center;
            align-items: center;
            position: relative;
            transition: all 0.3s ease-in-out;
            
            svg {
                margin-right: auto;
                transition: all 0.3s ease-in-out;
            }

            span {
                transition: all 0.3s ease-in-out;
                font-size: 1.125rem;
                font-weight: 500;
                margin-left: 1rem;
                left: 2.25rem
            }
        }

        &:first-of-type {
            svg {
                margin-left: 0.11rem;
            }
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`

interface LinkTextProps {
    pathName: string,
    accent: any,
    open: boolean,
    theme: any
}

const LinkText = styled.a<LinkTextProps>`
    background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : "transparent"};
    
    & span {
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.text : "inherit"};
        opacity: ${(LinkTextProps) => LinkTextProps.open ? 1 : 0};
        position: absolute;
    }
    
    & svg {
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.text : "inherit"};
    }

    &:hover {
        background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : ({ theme }) => theme.lineLight};
    }
`

const Navigation: NextPage<NavigationProps> = ({ isOpen }) => {
    const router = useRouter();
    const accent = useAccent((s: any) => s.accent);
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container theme={themes[theme]}>
            <NavigationList isOpen={isOpen}>
                <li>
                    <Link href={"/"} passHref>
                        <LinkText pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]} open={isOpen}>
                            <FiHome fontSize={18} strokeWidth={2.5}/>

                            <span>Dashboard</span>
                        </LinkText>
                    </Link>
                </li>

                <li>
                    <Link href={"/statistics"} passHref>
                        <LinkText pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]} open={isOpen}>
                            <FiBarChart2 fontSize={20} strokeWidth={3}/>

                            <span>Statistieken</span>
                        </LinkText>
                    </Link>
                </li>

                <li>
                    <Link href={"/categories"} passHref>
                        <LinkText pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]} open={isOpen}>
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