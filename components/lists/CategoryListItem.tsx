import type { NextPage } from 'next'
import styled from 'styled-components'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import useStore from '../../store'
import themes, { Theme } from '../../ThemeConfig'
import { Breakpoint } from '../../variables'

interface ContainerProps {
    theme: any
}

const Container = styled.tr<ContainerProps>`
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

const CategoryListItem: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme)

    const { width } = useWindowDimensions();

    return (
        <Container theme={themes[theme]}>
            <td>Categorie 1</td>
            {
                width > 550 &&
                <td>2 minutes ago</td>
            }
            <td>45%</td>
        </Container>
    )
}

export default CategoryListItem