import type { NextPage } from 'next'
import styled from 'styled-components'

import useStore, { useAccent } from '../../store'
import themes, { accentColors, Theme } from '../../ThemeConfig'

interface ContainerProps {
    theme: any,
    accent: any
}

const Container = styled.div<ContainerProps>`
    width: 33.333%;
    padding: 1rem 1.25rem;
    background: ${({ theme }) => theme.background};
    border-radius: 10px;
    box-shadow: 0 3px ${({ theme }) => theme.name === "dark" ? "12px" : "6px"} ${({ theme }) => theme.boxShadow};
`

const Table = styled.table<ContainerProps>`
    width: 100%;
    text-align: left;
    border-collapse: collapse;

    th {
        color: ${({ theme }) => theme.textSec};
        font-weight: 400;
        text-transform: uppercase;
        font-size: 0.75rem;
        padding-bottom: 0.625rem;
    }

    td {
        padding: 0.375rem 0.125rem;
        /* font-size: 1.125rem; */
        border-bottom: 1px solid ${({ theme }) => theme.lineLight};

        &:first-of-type {
            font-weight: 500;
        }

        &:last-of-type {
            color: ${({ accent }) => accent.color};
            text-align: right;
        }
    }

    tr {
        &:first-of-type {
            td {
                padding-top: 0;
            }
        }

        &:last-of-type {
            td {
                border-bottom: none;
                padding-bottom: 0;
            }
        }
    }
`

const CategoryListSmall: NextPage = () => {
    const accent = useAccent((s: any)  => s.accent)
    const theme: keyof Theme = useStore((s: any) => s.theme)

    return (
        <Container theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
            <Table theme={themes[theme]} accent={accentColors[accent as keyof typeof accentColors]}>
                <thead>
                    <tr>
                        <th colSpan={2}>
                            Top 3 Categorieën
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Categorie 1</td>
                        <td>2951</td>
                    </tr>
                    <tr>
                        <td>Categorie 1</td>
                        <td>2951</td>
                    </tr>
                    <tr>
                        <td>Categorie 1</td>
                        <td>2951</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default CategoryListSmall