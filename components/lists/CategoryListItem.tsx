import type { NextPage } from 'next'
import styled from 'styled-components'

import useStore from '../../store'
import themes, { Theme } from '../../ThemeConfig'

interface ContainerProps {
    theme: any
}

const Container = styled.tr<ContainerProps>`
    td {
        border-bottom: 1.5px solid ${({ theme }) => theme.lineLight};
        padding: 0.75rem 0.25rem;
        font-size: 1.125rem;
        font-weight: 500;
    }

    &:last-of-type {
        td {
            border-bottom: none;
        }
    }
`

const CategoryListItem: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme)

    return (
        <Container theme={themes[theme]}>
            <td>Categorie 1</td>
            <td>2 minutes ago</td>
            <td>45%</td>
        </Container>
    )
}

export default CategoryListItem