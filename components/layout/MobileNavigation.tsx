import type { NextPage } from "next";
import Link from "next/link";
import { FiHome, FiBarChart2, FiGrid, FiHelpCircle } from 'react-icons/fi'
import styled from "styled-components";
import { useRouter } from "next/router";

import { Routes } from "../../constants";
import themes, { accentColors, Theme } from "../../ThemeConfig";
import { Transition } from "../../variables";
import useStore, { useAccent } from "../../store";

interface LinkTextProps {
    theme: keyof Theme,
    accent: string,
    pathName: string
}

export const LinkText = styled.a<LinkTextProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${Transition.fast};
    padding: 1rem;
    border-radius: 7px;
    color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent : ({theme}) => theme.textSec};
    background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ theme }) => theme.backgroundSec : ({theme}) => theme.background};
    
    /* span {
        position: absolute;
        font-size: 0.625rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.text};
        display: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? "block" : "none"};
        bottom: 0;
    } */
    
    &:hover {
        background: ${({ theme }) => theme.backgroundSec};
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent : ({theme}) => theme.text};
    }
`

const LinkTextHelp = styled(LinkText)`
    color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href || LinkTextProps.pathName.includes(Routes.HELPCENTER) ? ({ accent }) => accent : ({theme}) => theme.textSec};
    background: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href || LinkTextProps.pathName.includes(Routes.HELPCENTER) ? ({ theme }) => theme.backgroundSec : ({theme}) => theme.background};
`

const MobileNavigation: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent = useAccent((s: any) => s.accent);
    const accentColor = accentColors[accent as keyof typeof accentColors][theme];
    const router = useRouter();
    
    return (
        <>
            <li>
                <Link href={Routes.DASHBOARD} passHref>
                    <LinkText theme={themes[theme]} accent={accentColor} pathName={router.pathname}>
                        <FiHome fontSize={18} strokeWidth={2.5}/>
                    </LinkText>
                </Link>
            </li>
            
            <li>
                <Link href={Routes.STATISTICS} passHref>
                    <LinkText theme={themes[theme]} accent={accentColor} pathName={router.pathname}>
                        <FiBarChart2 fontSize={18} strokeWidth={3}/>
                    </LinkText>
                </Link>
            </li>

            <li>
                <Link href={Routes.CATEGORIES} passHref>
                    <LinkText theme={themes[theme]} accent={accentColor} pathName={router.pathname}>
                        <FiGrid fontSize={18} strokeWidth={2.25}/>
                    </LinkText>
                </Link>
            </li>

            <li>
                <Link href={Routes.HELPCENTER} passHref>
                    <LinkTextHelp theme={themes[theme]} accent={accentColor} pathName={router.pathname}>
                        <FiHelpCircle fontSize={20} strokeWidth={2.25}/>
                    </LinkTextHelp>
                </Link>
            </li>
        </>
    )
}

export default MobileNavigation;