import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import { FiHelpCircle } from 'react-icons/fi'
import { IoChevronDownOutline } from 'react-icons/io5'

import { Colors } from '../../variables';
import { useRouter } from 'next/router';
import useStore, { useAccent } from '../../store';
import themes, { accentColors, Theme } from '../../ThemeConfig';

interface HelpNavigationProps {
    isOpen: boolean
}

interface HelpNavigationListProps {
    isOpen: boolean,
}

const Container = styled.div<HelpNavigationListProps>`
    padding: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? "0 1rem" : "0 0.5rem"};
    margin-top: 1.25rem;
    transition: all 0.3s ease-in-out;
    
    a {
        display: flex;
        align-items: center;
        transition: all 0.3s ease-in-out;
        position: relative;
        margin-left: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? 0 : "0.35rem"};
        
        span {
            font-size: 1.125rem;
            font-weight: 500;
            position: absolute;
            transition: all 0.3s ease-in-out;
            left: 2.25rem;
            opacity: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? "1" : "0"};
        }
        
        svg:last-of-type {
            position: absolute;
            transition: all 0.3s ease-in-out;
            right: 0;
            opacity: ${(HelpNavigationListProps) => HelpNavigationListProps.isOpen ? "1" : "0"};

            path {
                stroke-width: 70px;
            }
        }
    }
`

interface LinkTextProps {
    pathName: string,
    accent: any,
    theme: any
}

const LinkText = styled.a<LinkTextProps>`
    color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : ({ theme }) => theme.text};

    &:hover {
        color: ${(LinkTextProps) => LinkTextProps.pathName === LinkTextProps.href ? ({ accent }) => accent.color : ({ accent }) => accent.color};
    }
`

const HelpNavigation: NextPage<HelpNavigationProps> = ({ isOpen }) => {
    const router = useRouter();
    const accent = useAccent((s: any) => s.accent);
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container isOpen={isOpen}>
            <Link href={"/help-center"} passHref>
                <LinkText pathName={router.pathname} theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
                    <FiHelpCircle fontSize={22} strokeWidth={2.25}/>

                    <span>Helpcentrum</span>

                    <IoChevronDownOutline fontSize={16}/>
                </LinkText>
            </Link>
        </Container>
    )
}

export default HelpNavigation;