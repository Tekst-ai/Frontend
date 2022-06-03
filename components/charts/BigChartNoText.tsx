import type { NextPage } from "next";
import { useCallback, useState } from "react";
import styled from "styled-components";

import useStore from "../../store";
import themes, { Theme } from "../../ThemeConfig";
import BigLineChart from "./BigLineChart";

interface BigChartProps {
    title: string,
    marginRight?: boolean,
    marginBottom?: boolean,
}

interface ContainerProps {
    theme: any;
    marginRight: boolean;
    marginBottom: boolean;
}

const Container = styled.div<ContainerProps>`
    background: ${({ theme }) => theme.background};
    padding: 1.25rem;
    width: 66.666%;
    height: 100%;
    border-radius: 10px;
    margin-right: ${({ marginRight }) => marginRight ? '1.25rem' : '0'};
    margin-bottom: ${({ marginBottom }) => marginBottom ? '1.25rem' : '0'};
    box-shadow: 0 ${({ theme }) => theme.name === "dark" ? "3px 12px" : "2px 4px"} ${({ theme }) => theme.boxShadow};
`

interface TitleContainerProps {
    theme: any;
}

const TitleContainer = styled.div<TitleContainerProps>`
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textSec};
    margin-bottom: 0.5rem;
`

interface ChartContainerProps {
    height: number
}

const ChartContainer = styled.div<ChartContainerProps>`
    width: 100%;
    height: calc(100% - 0.5rem - ${({ height }) => height}px);
`

const BigChartNoText: NextPage<BigChartProps> = ({ marginRight = false, title, marginBottom = false }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);

    const [height, setHeight] = useState(0)

    const refContainer = useCallback((node: any) => {
        if (node !== null) {
            setHeight(node.clientHeight);
        }
    }, [])

    return (
        <Container theme={themes[theme]} marginRight={marginRight} marginBottom={marginBottom}>
            <TitleContainer ref={refContainer} theme={themes[theme]}>
                <p>{ title }</p>
            </TitleContainer>

            <ChartContainer height={height}>
                <BigLineChart/>
            </ChartContainer>
        </Container>
    )
}

export default BigChartNoText;