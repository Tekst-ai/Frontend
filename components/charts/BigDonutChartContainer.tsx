import type { NextPage } from "next";
import { useCallback, useState } from "react";
import styled from "styled-components";

import useStore from "../../store";
import themes, { Theme } from "../../ThemeConfig";
import { Breakpoint } from "../../variables";
import BigChartDonut from "./BigChartDonut";

interface BigChartProps {
    title: string,
    marginRight?: boolean,
    marginBottom?: boolean,
    data: any
}

interface ContainerProps {
    theme: any;
    marginRight: boolean;
    marginBottom: boolean;
}

const Container = styled.div<ContainerProps>`
    background: ${({ theme }) => theme.background};
    padding: 1rem;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-right: ${({ marginRight }) => marginRight ? '1rem' : '0'};
    margin-bottom: ${({ marginBottom }) => marginBottom ? '1rem' : '0'};
    box-shadow: 0 ${({ theme }) => theme.name === "dark" ? "3px 12px" : "2px 4px"} ${({ theme }) => theme.boxShadow};

    @media (min-width: 500px) {
        margin-right: ${({ marginRight }) => marginRight ? '1.25rem' : '0'};
        margin-bottom: ${({ marginBottom }) => marginBottom ? '1.25rem' : '0'};
    }

    @media (min-width: ${Breakpoint.mobile}) {
        width: 33.333%;
    }
    
    @media (min-width: ${Breakpoint.desktopSmall}) {
        padding: 1.25rem;
    }
`

interface TitleContainerProps {
    theme: any;
}

const TitleContainer = styled.div<TitleContainerProps>`
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
    width: 100%;
    height: 20rem;
    
    @media (min-width: 500px) {
        height: 16rem;
    }

    @media (min-width: ${Breakpoint.mobileMedium}) {
        height: 18rem;
    }
    
    @media (min-width: ${Breakpoint.mobile}) {
        height: calc(100% - 0.5rem - ${({ height }) => height}px);
    }
`

const BigDonutChartContainer: NextPage<BigChartProps> = ({ marginRight = false, title, marginBottom = false, data }) => {
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
                <BigChartDonut data={data}/>
            </ChartContainer>
        </Container>
    )
}

export default BigDonutChartContainer;