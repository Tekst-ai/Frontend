import type { NextPage } from 'next'
import styled from 'styled-components'

import themes, { accentColors, Theme } from '../../ThemeConfig'
import useStore, { useAccent } from '../../store'
import { PercentageCalculator } from '../../services/calculations'
import { PercentageEvolution } from '../helpers'
import { BigNumberFormat } from '../../services/format'
import MediumLineChart from './MediumLineChart'
import { useCallback, useRef, useState } from 'react'

interface MediumChartTextProps {
    marginRight?: boolean,
    marginBottom?: boolean,
    icon: React.ReactNode,
    data: any,
    title: string,
    oldData: any,
}

interface ContainerProps {
    theme: any,
    accent: any,
    marginRight: boolean,
    marginBottom: boolean,
}

const Container = styled.div<ContainerProps>`
    background: ${({ theme }) => theme.background};
    width: 33.333%;
    margin-right: ${({ marginRight }) => marginRight ? '1.25rem' : '0'};
    margin-bottom: ${({ marginBottom }) => marginBottom ? '1.25rem' : '0'};
    border-radius: 10px;
    padding: 1.25rem;
    box-shadow: 0 3px ${({ theme }) => theme.name === "dark" ? "12px" : "6px"} ${({ theme }) => theme.boxShadow};
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
`

interface IconContainerProps {
    accent: any,
}

const IconContainer = styled.div<IconContainerProps>`
    background: ${({ accent }) => accent.color};
    color: ${({ accent }) => accent.text};
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 6px;

    svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

interface NumberContainerProps {
    theme: any,
}

const NumberContainer = styled.div<NumberContainerProps>`
    margin-left: 1.25rem;
    width: calc(100% - 2.5rem - 1.25rem);

    div:first-of-type {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            display: block;

            &:first-of-type {
                font-size: 0.75rem;
                color: ${({ theme }) => theme.textSec};
                text-transform: uppercase;
            }
        }
    }

    div:last-of-type {
        p {
            font-size: 2.5rem;
            font-weight: 700;
        }
    }

`

interface ChartContainerProps {
    height: number
}

const ChartContainer = styled.div<ChartContainerProps>`
    margin-top: 0.5rem;
    width: 100%;
    height: calc(100% - 0.5rem - ${({ height }) => height}px);
`

const MediumChartText: NextPage<MediumChartTextProps> = ({ marginRight = false, marginBottom = false, icon, data, oldData, title }) => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent = useAccent((s: any) => s.accent);

    const [height, setHeight] = useState(0)

    const refContainer = useCallback((node: any) => {
        if (node !== null) {
            setHeight(node.clientHeight);
        }
    }, [])

    return (
        <Container
            theme={themes[theme]}
            accent={accentColors[accent as keyof typeof accentColors]}
            marginRight={marginRight}
            marginBottom={marginBottom}
        >
            <HeaderContainer ref={refContainer}>
                <IconContainer accent={accentColors[accent as keyof typeof accentColors]}>
                    { icon }
                </IconContainer>

                <NumberContainer theme={themes[theme]}>
                    <div>
                        <span>{ title }</span>

                        <PercentageEvolution percentage={PercentageCalculator(data, oldData)}/>
                    </div>

                    <div>
                        <p>{ BigNumberFormat(data) }</p>
                    </div>
                </NumberContainer>
            </HeaderContainer>

            <ChartContainer height={height}>
                <MediumLineChart/>
            </ChartContainer>
        </Container>
    )
}

export default MediumChartText