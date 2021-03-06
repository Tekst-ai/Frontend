import type { NextPage } from 'next'
import styled from 'styled-components'

import useWindowDimensions from '../../hooks/useWindowDimensions'
import { Categories } from '../../interfaces/Data'
import { ThemeStylingProps } from '../../interfaces/Styling'
import { PercentageOfTotal } from '../../services/calculations'
import { FormatDate } from '../../services/date'
import useStore from '../../store'
import themes, { Theme } from '../../ThemeConfig'
import { Breakpoint } from '../../variables'

interface CategoryListItemProps {
    data: Categories,
}

const Container = styled.tr<ThemeStylingProps>`
    td {
        border-bottom: 1.5px solid ${({ theme }) => theme.lineLight};
        padding: 0.75rem 0.25rem;
        font-size: 1rem;
        font-weight: 500;
        
        @media (min-width: ${Breakpoint.mobile}) {
            font-size: 1.125rem;
        }
    }

    &:last-of-type {
        td {
            border-bottom: none;
        }
    }
`

const CategoryListItem: NextPage<CategoryListItemProps> = ({ data }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);

    const { width } = useWindowDimensions();

    return (
        <Container theme={themes[theme]}>
            <td>{ data.name }</td>
            {
                width > 550 &&
                <td>{ FormatDate(data.lastActivity) }</td>
            }
            <td>{ PercentageOfTotal(data.amount, data.total) }%</td>
        </Container>
    )
}

export default CategoryListItem;