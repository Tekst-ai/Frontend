import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoPowerOutline, IoSettingsOutline } from 'react-icons/io5'
import styled from "styled-components";

import { Routes } from "../../constants";
import { ThemeStylingProps } from "../../interfaces/Styling";
import useStore, { useAccent, useAuth } from "../../store";
import themes, { Accent, accentColors, Theme } from "../../ThemeConfig";
import { Transition } from "../../variables";
import { LinkText } from "./MobileNavigation";

const LinkTextSub = styled(LinkText)`
    div {
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 50%;
        display: flex;
        overflow: hidden;
        border: 2px solid ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent : "transparent"};

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    li:first-of-type > & {
        padding: 0.8rem;
    }

    li:nth-of-type(2) > & {
        svg {
            path {
                stroke-width: 50px
            }
        }
    }
`

const LinkButton = styled.button<ThemeStylingProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.textSec};
    background: ${({ theme }) => theme.background};
    transition: ${Transition.fast};
    border-radius: 7px;
    padding: 1rem;

    li:nth-of-type(3) > & {
        svg {
            path{
                stroke-width: 60px;
            }
        }
    }

    &:hover {
        background: ${({ theme }) => theme.backgroundSec};
        color: ${({ theme }) => theme.text};
    }
`

/* eslint-disable @next/next/no-img-element */
const MobileSubNavigation: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const accentColor = accentColors[accent][theme];
    const router = useRouter();

    const setAuth = useAuth((s: any) => s.setAuth);
    const handleAuth = () => {
        setAuth(false);
        localStorage.setItem("auth", String(false));
        router.push(Routes.LOGIN);
    }

    return (
        <>
            <li>
                <Link href={Routes.PROFILE} passHref>
                    <LinkTextSub theme={themes[theme]} accent={accentColor} pathName={router.pathname}>
                        <div>
                            <img src="/static/images/profile.jpg" alt="Janine Jacobs"/>
                        </div>
                    </LinkTextSub>
                </Link>
            </li>

            <li>
                <Link href={Routes.CONFIGURATION} passHref>
                    <LinkTextSub theme={themes[theme]} accent={accentColor} pathName={router.pathname}>
                        <IoSettingsOutline fontSize={20}/>
                    </LinkTextSub>
                </Link>
            </li>

            <li>
                <LinkButton theme={themes[theme]} onClick={handleAuth}>
                    <IoPowerOutline fontSize={20}/>
                </LinkButton>
            </li>
        </>
    )
}

export default MobileSubNavigation;