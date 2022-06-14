import type { NextPage } from "next";
import { useCallback, useState } from "react";
import styled from "styled-components";

import { ThemeStylingProps } from "../../interfaces/Styling";
import { DonutData } from "../../interfaces/Data";
import useStore from "../../store";
import themes, { Theme } from "../../ThemeConfig";
import { Breakpoint } from "../../variables";
import BigLineChart from "./BigLineChart";

interface BigChartProps {
    title: string,
    marginRight?: boolean,
    marginBottom?: boolean,
    data: [DonutData],
}

interface ContainerProps {
    theme: keyof Theme;
    marginRight: boolean;
    marginBottom: boolean;
}

const Container = styled.div<ContainerProps>`
    background: ${({ theme }) => theme.background};
    padding: 1rem;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-bottom: ${({ marginBottom }) => marginBottom ? '1rem' : '0'};
    box-shadow: 0 ${({ theme }) => theme.name === "dark" ? "3px 12px" : "2px 4px"} ${({ theme }) => theme.boxShadow};
    
    @media (min-width: 500px) {
        margin-right: ${({ marginRight }) => marginRight ? '1.25rem' : '0'};
        margin-bottom: ${({ marginBottom }) => marginBottom ? '1.25rem' : '0'};
    }

    @media (min-width: ${Breakpoint.mobile}) {
        width: calc(66.666% + 1.25rem);
    }
    
    @media (min-width: ${Breakpoint.desktopSmall}) {
        padding: 1.25rem;
    }
`

const TitleContainer = styled.div<ThemeStylingProps>`
    font-size: 0.625rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textSec};
    margin-bottom: 0.5rem;
    font-weight: 500;
    
    @media (min-width: ${Breakpoint.desktopSmall}) {
        font-size: 0.75rem;
    }
`

interface ChartContainerProps {
    height: number
}

const ChartContainer = styled.div<ChartContainerProps>`
    width: calc(100% + 1.5rem);
    transform: translateX(-0.75rem) translateY(0.5rem);
    height: 12rem;
    
    @media (min-width: 500px) {
        height: 15rem;
    }

    @media (min-width: ${Breakpoint.mobile}) {
        width: 100%;
        transform: none;
        height: calc(100% - 0.5rem - ${({ height }) => height}px + 0.5rem);
    }
`

const BigChartNoText: NextPage<BigChartProps> = ({ marginRight = false, title, marginBottom = false, data }) => {
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
                <BigLineChart data={data}/>
            </ChartContainer>
        </Container>
    )
}

export default BigChartNoText;