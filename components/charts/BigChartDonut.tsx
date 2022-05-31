import type { NextPage } from 'next'
import styled from 'styled-components'

import useStore from '../../store'
import themes, { Theme } from '../../ThemeConfig';

interface ContainerProps {
    theme: any;
}

const Container = styled.div`
    width: calc(33.333% - 0.625rem);
    height: 100%;
    border-radius: 10px;
    background: ${({ theme }) => theme.background};
`

const BigChartDonut: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Container theme={themes[theme]}>
            
        </Container>
    )
}

export default BigChartDonut