import _ from 'lodash'
import type { NextPage } from 'next'
import styled from 'styled-components'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import useStore, { useAccent } from '../../store'
import themes, { Accent, accentColors, Theme } from '../../ThemeConfig'
import { Breakpoint } from '../../variables'
import CategoryListItem from './CategoryListItem'

interface CategoryListProps {
    data: any,
}

interface ContainerProps {
    theme: any,
}

const Container = styled.div<ContainerProps>`
    width: 100%;
    background: ${({ theme }) => theme.background};
    border-radius: 10px;
    box-shadow: 0 ${({ theme }) => theme.name === "dark" ? "3px 12px" : "2px 4px"} ${({ theme }) => theme.boxShadow};
    padding: 1rem 1.25rem;
    padding-bottom: 0.25rem;
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
        font-size: 0.75rem;
        width: 30%;
        
        @media (min-width: ${Breakpoint.mobile}) {
            width: 25%;
            font-size: 0.875rem;
            padding-bottom: 0.75rem;
        }
        
        &:first-of-type {
            width: 80%;
            
            @media (min-width: ${Breakpoint.mobileSmall}) {
                width: 50%;
            }

            @media (min-width: ${Breakpoint.mobile}) {
                width: 65%;
            }
        }
        &:last-of-type {
            width: 20%;
            
            @media (min-width: ${Breakpoint.mobileSmall}) {
                width: 15%;
            }

            @media (min-width: ${Breakpoint.mobile}) {
                width: 10%;
            }
        }
    }
`

const CategoryList: NextPage<CategoryListProps> = ({ data }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme)
    const accent: keyof Accent = useAccent((s: any) => s.accent)

    const { width } = useWindowDimensions();

    const sortedData = _.orderBy(data, ['amount'], ['desc'])

    return (
        <Container theme={themes[theme]}>
            <Table accent={accentColors[accent][theme]}>
                <thead>
                    <tr>
                        <th scope="col">Naam</th>
                        {
                            width > 550 &&
                            <th scope="col">Activiteit</th>
                        }
                        <th scope="col">Aandeel</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        sortedData.map((category: any) => (
                            <CategoryListItem key={category.id} data={category}/>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default CategoryList