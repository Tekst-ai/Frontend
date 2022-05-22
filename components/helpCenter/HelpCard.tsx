import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

import useStore from '../../store'
import themes, { Theme } from '../../ThemeConfig'
import { Colors } from '../../variables'

interface HelpCardProps {
    icon: React.ReactNode,
    title: string,
    link: string
}

const Container = styled.li`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    justify-content: center;
    align-items: center;

    &:first-of-type {
        margin-right: 1.25rem;
    }

    &:last-of-type {
        width: 100%;
        margin-top: 1.25rem;
    }
`

interface LinkContentProps {
    theme: any
}

const LinkContent = styled.a<LinkContentProps>`
    background: ${({ theme }) => theme.backgroundAlt};
    width: 18rem;
    padding: 2rem 0 1.5rem 0;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 3px 12px ${({ theme }) => theme.boxShadow};
    transition: all 0.3s ease-in-out;
    
    p {
        font-weight: 500;
        font-size: 1.375rem;
        margin-top: 1rem;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 7px 20px ${({ theme }) => theme.boxShadow};
        /* color: ${Colors.primary}; */
    }
`

const HelpCard: NextPage<HelpCardProps> = ({ icon, title, link }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme)

    return (
        <Container>
            <Link href={link} passHref>
                <LinkContent theme={themes[theme]}>
                    { icon }

                    <p>{title}</p>
                </LinkContent>
            </Link>
        </Container>
    )
}

export default HelpCard