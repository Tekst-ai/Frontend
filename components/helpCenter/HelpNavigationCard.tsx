import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { ThemeStylingProps } from "../../interfaces/Styling";
import useStore, { useAccent } from "../../store";
import themes, { Accent, accentColors, Theme } from "../../ThemeConfig";
import { Breakpoint, Colors, Transition } from "../../variables";

interface HelpNavigationCardProps {
    link: string,
    icon: React.ReactNode,
    title: string,
    type: "link" | "button",
}

const Container = styled.li`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    z-index: 2;
    
    @media (min-width: ${Breakpoint.mobile}) {
        margin-right: 0.75rem;
        margin-left: 0.75rem;
    }
`

interface LinkContentProps {
    theme: keyof Theme,
    pathName: string,
    accent: string,
}

const LinkContent = styled.a<LinkContentProps>`
    background: ${(LinkContentProps) => LinkContentProps.pathName === LinkContentProps.href ? ({ accent }) => accent : ({ theme }) => theme.backgroundAlt};
    padding: 1.25rem 0.5rem 1rem 0.5rem;
    border-radius: 10px;
    box-shadow: 0px 3px 12px ${({ theme }) => theme.boxShadow};
    text-align: center;
    width: 9rem;
    transition: ${Transition.fast};
    transform: ${(LinkContentProps) => LinkContentProps.pathName === LinkContentProps.href ? "translateY(-5px)" : "" };
    color: ${(LinkContentProps) => LinkContentProps.pathName === LinkContentProps.href ? Colors.textWhite : ({ theme }) => theme.text};

    &:first-of-type {
        margin-bottom: 1rem;
    }

    svg {
        font-size: 1.5rem;
    }

    @media (min-width: ${Breakpoint.mobileSuperSmall}) {
        width: 10rem;
    }

    @media (min-width: ${Breakpoint.mobile}) {
        padding: 1.5rem 0.5rem 1.25rem 0.5rem;
        width: 12rem;

        svg {
            font-size: 2rem;
        }
    }

    @media (min-width: ${Breakpoint.tablet}) {
        padding: 2rem 0.5rem 1.5rem 0.5rem;
        width: 15rem;

        svg {
            font-size: 2.5rem;
        }
    }
    
    p {
        margin-top: 0.375rem;
        font-weight: 500;
        font-size: 1rem;
        
        @media (min-width: ${Breakpoint.mobileMedium}) {
            margin-top: 0.5rem;
        }

        @media (min-width: ${Breakpoint.mobile}) {
            margin-top: 0.625rem;
            font-size: 1.125rem;
        }

        @media (min-width: ${Breakpoint.tablet}) {
            margin-top: 0.75rem;
            font-size: 1.25rem;
        }
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 7px 20px ${({ theme }) => theme.boxShadow};
    }
`

const ButtonContent = styled.button<ThemeStylingProps>`
    background: ${({ theme }) => theme.backgroundAlt};
    padding: 1.25rem 0.5rem 1rem 0.5rem;
    border-radius: 10px;
    box-shadow: 0px 3px 12px ${({ theme }) => theme.boxShadow};
    text-align: center;
    width: 9rem;
    transition: ${Transition.fast};
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    
    svg {
        font-size: 1.5rem;
    }

    @media (min-width: ${Breakpoint.mobileSuperSmall}) {
        width: 10rem;
    }

    @media (min-width: ${Breakpoint.mobile}) {
        width: 12rem;
        padding: 1.5rem 0.5rem 1rem 0.5rem;

        svg {
            font-size: 2rem;
        }
    }

    @media (min-width: ${Breakpoint.tablet}) {
        width: 15rem;
        padding: 2rem 0.5rem 1.5rem 0.5rem;

        svg {
            font-size: 2.5rem;
        }
    }

    p {
        margin-top: 0.375rem;
        font-weight: 500;
        font-size: 1rem;
        
        @media (min-width: ${Breakpoint.mobileMedium}) {
            margin-top: 0.5rem;
        }

        @media (min-width: ${Breakpoint.mobile}) {
            margin-top: 0.625rem;
            font-size: 1.125rem;
        }

        @media (min-width: ${Breakpoint.tablet}) {
            margin-top: 0.75rem;
            font-size: 1.25rem;
        }
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 7px 20px ${({ theme }) => theme.boxShadow};
    }
`

const HelpNavigationCard: NextPage<HelpNavigationCardProps> = ({ link, icon, title, type }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const router = useRouter();
   
    const handleClick = () => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }

    return (
        <Container>
            {type === "link" ? 
            <Link href={ link } passHref>
                <LinkContent pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent][theme]}>
                    { icon }

                    <p>{ title }</p>
                </LinkContent>
            </Link>
            :
            <ButtonContent theme={themes[theme]} onClick={handleClick}>
                { icon }

                <p>{ title }</p>
            </ButtonContent>
            }
        </Container>
    )
}

export default HelpNavigationCard;