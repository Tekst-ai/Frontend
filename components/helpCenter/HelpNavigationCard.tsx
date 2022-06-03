import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import useStore, { useAccent } from "../../store";
import themes, { accentColors, Theme } from "../../ThemeConfig";
import { Transition } from "../../variables";

interface HelpNavigationCardProps {
    link: string,
    icon: React.ReactNode,
    title: string,
    type: "link" | "button"
}

const Container = styled.li`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;
    z-index: 2;
    
    &:last-of-type {
        margin-right: 0;
    }
`

interface LinkContentProps {
    theme: any,
    pathName: string,
    accent: any
}

const LinkContent = styled.a<LinkContentProps>`
    background: ${(LinkContentProps) => LinkContentProps.pathName === LinkContentProps.href ? ({ accent }) => accent.color : ({ theme }) => theme.backgroundAlt};
    padding: 2rem 0 1.5rem 0;
    border-radius: 10px;
    box-shadow: 0px 3px 12px ${({ theme }) => theme.boxShadow};
    text-align: center;
    width: 15rem;
    transition: ${Transition.fast};
    transform: ${(LinkContentProps) => LinkContentProps.pathName === LinkContentProps.href ? "translateY(-5px)" : "" };
    color: ${(LinkContentProps) => LinkContentProps.pathName === LinkContentProps.href ? ({ accent }) => accent.text : ({ theme }) => theme.text};

    p {
        margin-top: 1.25rem;
        font-weight: 500;
        font-size: 1.25rem;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 7px 20px ${({ theme }) => theme.boxShadow};
    }
`

interface ButtonContentProps {
    theme: any,
}

const ButtonContent = styled.button<ButtonContentProps>`
    background: ${({ theme }) => theme.backgroundAlt};
    padding: 2rem 0 1.5rem 0;
    border-radius: 10px;
    box-shadow: 0px 3px 12px ${({ theme }) => theme.boxShadow};
    text-align: center;
    width: 15rem;
    transition: ${Transition.fast};
    color: ${({ theme }) => theme.text};

    p {
        margin-top: 1.25rem;
        font-weight: 500;
        font-size: 1.25rem;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 7px 20px ${({ theme }) => theme.boxShadow};
    }
`

const HelpNavigationCard: NextPage<HelpNavigationCardProps> = ({ link, icon, title, type }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme)
    const router = useRouter();
    const accent = useAccent((s: any) => s.accent)
   
    const handleClick = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

    return (
        <Container>
            {type === "link" ? 
            <Link href={ link } passHref>
                <LinkContent pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
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

export default HelpNavigationCard