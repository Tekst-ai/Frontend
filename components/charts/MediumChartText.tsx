import type { NextPage } from 'next'
import styled from 'styled-components'

import themes, { accentColors, Theme } from '../../ThemeConfig'
import useStore, { useAccent } from '../../store'
import { PercentageCalculator } from '../../services/calculations'
import { PercentageEvolution } from '../helpers'
import { BigNumberFormat } from '../../services/format'
import MediumLineChart from './MediumLineChart'
import { useCallback, useState } from 'react'
import { Breakpoint, Colors } from '../../variables'

interface MediumChartTextProps {
    marginRight?: boolean,
    marginBottom?: boolean,
    icon?: React.ReactNode,
    data: any,
    title: string,
    oldData?: any,
    showIcon?: boolean,
    showProgress?: boolean,
    dataRight?: number,
    fullWidth?: boolean,
}

interface ContainerProps {
    theme: any,
    marginRight: boolean,
    marginBottom: boolean,
    fullWidth: boolean,
}

const Container = styled.div<ContainerProps>`
    background: ${({ theme }) => theme.background};
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 10px;
    padding: 1rem;
    /* padding-bottom: 0.5rem; */
    box-shadow: 0 ${({ theme }) => theme.name === "dark" ? "3px 12px" : "2px 4px"} ${({ theme }) => theme.boxShadow};
    
    @media (min-width: 500px) {
        margin-right: ${({ marginRight }) => marginRight ? '1.25rem' : '0'};
        margin-bottom: ${({ marginBottom }) => marginBottom ? '1.25rem' : '0'};
        width: ${({ marginRight, fullWidth }) => marginRight ? 'calc(52.5% - 1.25rem)' : fullWidth ? '100%' : '47.5%'};
    }

    @media (min-width: ${Breakpoint.mobile}) {
        width: 33.333%;
    }

    @media (min-width: ${Breakpoint.desktopSmall}) {
        padding: 1.25rem;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
    height: 100%;
    /* margin-bottom: 0.5rem; */
`

interface IconContainerProps {
    accent: string,
}

const IconContainer = styled.div<IconContainerProps>`
    background: ${({ accent }) => accent};
    color: ${Colors.textWhite};
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 6px;
    
    @media (min-width: ${Breakpoint.desktopSmall}) {
        width: 2.5rem;
        height: 2.5rem;
    }
    
    svg {
        font-size: 1.375rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        
        @media (min-width: ${Breakpoint.desktopSmall}) {
            font-size: 1.625rem;
        }
    }
`

interface NumberContainerProps {
    theme: any,
    showIcon: boolean,
    dataRight?: number,
    accent: string,
}

const NumberContainer = styled.div<NumberContainerProps>`
    margin-left: ${({ showIcon }) => showIcon ? "1rem" : 0};
    display: flex;
    flex-direction: column;
    width: ${({ dataRight }) => dataRight ? "100%" : "calc(100% - 2rem - 1rem)"};
    height: 100%;
    
    @media (min-width: ${Breakpoint.mobile}) {
        margin-left: ${({ showIcon }) => showIcon ? "1.25rem" : 0};
    }

    @media (min-width: ${Breakpoint.desktopSmall}) {
        width: ${({ dataRight }) => dataRight ? "100%" : "calc(100% - 2.5rem - 1rem)"};
    }

    div:first-of-type {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            display: block;

            &:first-of-type {
                font-size: 0.625rem;
                font-weight: 500;
                color: ${({ theme }) => theme.textSec};
                text-transform: uppercase;
                
                @media (min-width: ${Breakpoint.desktopSmall}) {
                    font-size: 0.75rem;
                }
            }
        }
    }

    div:last-of-type {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: ${({ dataRight }) => dataRight ? "0.5rem" : "0"};

        p:first-of-type {
            font-weight: 700;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding-right: 0.75rem;
            font-size: ${({ dataRight }) => dataRight ? "1.5rem" : "2rem"};
            
            @media (min-width: ${Breakpoint.mobile}) {
                font-size: ${({ dataRight }) => dataRight ? "1.25rem" : "2rem"};
            }

            @media (min-width: ${Breakpoint.desktopSmall}) {
                font-size: ${({ dataRight }) => dataRight ? "1.5rem" : "2.25rem"};
            }
        }

        p:nth-of-type(2) {
            color: ${({ accent }) => accent};
        }
    }

`

// interface ChartContainerProps {
//     height: number
// }

// const ChartContainer = styled.div<ChartContainerProps>`
//     width: 100%;
//     height: calc(100% - ${({ height }) => height}px);
// `

const MediumChartText: NextPage<MediumChartTextProps> = ({ fullWidth = false, dataRight, showProgress = true, showIcon = true, marginRight = false, marginBottom = false, icon, data, oldData = 0, title }) => {
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
            marginRight={marginRight}
            marginBottom={marginBottom}
            fullWidth={fullWidth}
        >
            <HeaderContainer ref={refContainer}>
                {
                    showIcon &&
                    <IconContainer accent={accentColors[accent as keyof typeof accentColors][theme]}>
                        { icon }
                    </IconContainer>
                }

                <NumberContainer theme={themes[theme]} showIcon={showIcon} dataRight={dataRight} accent={accentColors[accent as keyof typeof accentColors][theme]}>
                    <div>
                        <span>{ title }</span>

                        { showProgress && <PercentageEvolution percentage={PercentageCalculator(data, oldData)}/>}
                    </div>

                    <div>
                        <p title={dataRight ? data : ""}>{ typeof data === 'number' ? BigNumberFormat(data) : data }</p>

                        {
                            dataRight &&
                            <p>{ dataRight }</p>
                        }
                    </div>
                </NumberContainer>
            </HeaderContainer>

            {/* <ChartContainer height={height}>
                <MediumLineChart/>
            </ChartContainer> */}
        </Container>
    )
}

export default MediumChartText