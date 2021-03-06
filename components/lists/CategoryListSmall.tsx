import type { NextPage } from 'next'
import styled from 'styled-components'

import { ThemeAccentStylingProps, ThemeStylingProps } from '../../interfaces/Styling'
import useStore, { useAccent } from '../../store'
import themes, { Accent, accentColors, Theme } from '../../ThemeConfig'

const Container = styled.div<ThemeStylingProps>`
    width: 33.333%;
    padding: 1rem 1.25rem;
    background: ${({ theme }) => theme.background};
    border-radius: 10px;
    box-shadow: 0 ${({ theme }) => theme.name === "dark" ? "3px 12px" : "2px 4px"} ${({ theme }) => theme.boxShadow};
`

const Table = styled.table<ThemeAccentStylingProps>`
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
        border-bottom: 1px solid ${({ theme }) => theme.lineLight};

        &:first-of-type {
            font-weight: 700;
            font-size: 1.75rem;
        }

        &:last-of-type {
            color: ${({ accent }) => accent};
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
    const accent: keyof Accent = useAccent((s: any)  => s.accent);
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container theme={themes[theme]}>
            <Table theme={themes[theme]} accent={accentColors[accent][theme]}>
                <thead>
                    <tr>
                        <th colSpan={2}>
                            Top categorie
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Notificaties</td>
                        <td>2951</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default CategoryListSmall;