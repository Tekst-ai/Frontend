import type { NextPage } from 'next'
import styled from 'styled-components'

import useStore, { useAccent } from '../../store'
import themes, { accentColors, Theme } from '../../ThemeConfig'
import CategoryListItem from './CategoryListItem'

interface ContainerProps {
    theme: any,
}

const Container = styled.div<ContainerProps>`
    width: 100%;
    background: ${({ theme }) => theme.background};
    border-radius: 10px;
    box-shadow: 0 ${({ theme }) => theme.name === "dark" ? "3px 12px" : "2px 4px"} ${({ theme }) => theme.boxShadow};
    padding: 1rem 1.25rem;
`

interface TableProps {
    accent: string
}

const Table = styled.table<TableProps>`
    width: 100%;
    border-collapse: collapse;

    th {
        text-align: left;
        color: ${({ accent }) => accent};
        font-weight: 500;
        text-transform: uppercase;
        font-size: 0.875rem;
        width: 20%;
        padding-bottom: 0.75rem;

        &:first-of-type {
            width: 70%;
        }
        &:last-of-type {
            width: 10%;
        }
    }
`

const CategoryList: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme)
    const accent = useAccent((s: any) => s.accent)

    return (
        <Container theme={themes[theme]}>
            <Table accent={accentColors[accent as keyof typeof accentColors][theme]}>
                <thead>
                    <tr>
                        <th scope="col">Naam</th>
                        <th scope="col">Laatste e-mail</th>
                        <th scope="col">Aandeel</th>
                    </tr>
                </thead>

                <tbody>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                    <CategoryListItem/>
                </tbody>
            </Table>
        </Container>
    )
}

export default CategoryList