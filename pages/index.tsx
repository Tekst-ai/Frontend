import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoMailOpen, IoGrid } from 'react-icons/io5'

import { BigChartNoText, MediumChartText, BigDonutChartContainer } from '../components/charts'
import { TitleContainer } from './configuration'
import { useCallback, useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { useMenu } from '../store'
import { Info } from '../components/alerts'
import { Breakpoint } from '../variables'
import themes, { Theme } from '../ThemeConfig'
import useStore from '../store'

interface ContainerProps {
    height: number
}

const Container = styled.div<ContainerProps>`
    height: 100%;
`

interface StatsContainerProps {
    height: number,
}

const StatsContainer = styled.div<StatsContainerProps>`
    @media (min-width: ${Breakpoint.mobile}) {
        /* Full height container - height title container */
        height: calc(${({ height }) => height}px - 40px - 64px  - 32px);
    }
`

const TopContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (min-width: ${Breakpoint.mobile}) {
        flex-wrap: nowrap;
    }
`

interface BottomContainerProps {
    height: number,
}

const BottomContainer = styled.div<BottomContainerProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    @media (min-width: 500px) {
        margin-top: 1.25rem;
    }
    
    @media (min-height: 575px) {
        align-items: flex-start;
        justify-content: flex-start;
    }
    
    @media (min-width: ${Breakpoint.mobile}) {
        height: calc(100% - 1.25rem - ${({ height }) => height}px);
        flex-wrap: nowrap;
    }
`

const Dashboard: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const [height, setHeight] = useState(0);
    const [chartHeight, setChartHeight] = useState(0);
    const menu = useMenu((s: any) => s.menu);

    const windowMeasures = useWindowDimensions();
    const [winWidth, setWinWidth] = useState(windowMeasures.width)
    const [winHeight, setWinHeight] = useState(windowMeasures.height)
    
    const refContainer = useCallback((node: any) => {
        if (node !== null) {
           setHeight(node.clientHeight);
        }
    }, [])

    const chartContainer = useCallback((node: any) => {
        if ((node !== null) || (node !== null && winWidth !== windowMeasures.width) || (node !== null && winHeight !== windowMeasures.height)) {
            setChartHeight(node.clientHeight);
            setWinWidth(node.clientWidth);
            setWinHeight(node.clientHeight);
        }
    }, [winWidth, windowMeasures.width, winHeight, windowMeasures.height])

    return (
        <Container height={windowMeasures.height}>
            <TitleContainer ref={refContainer} theme={themes[theme]}>
                <h1>Goedemiddag, Janine!</h1>

                <p>Cijfers van de afgelopen 7 dagen</p>
            </TitleContainer>

            <StatsContainer height={windowMeasures.height - height}>
                <TopContainer ref={chartContainer}>
                    <MediumChartText marginRight={true} marginBottom={windowMeasures.width > 768 ? false : true} icon={<IoMailOpen fontSize={26}/>} data={54620} oldData={4987} title={"E-mails"}/>
                    
                    <MediumChartText marginRight={windowMeasures.width > 768 ? true : false} marginBottom={windowMeasures.width > 768 ? false : true} icon={<IoGrid fontSize={26}/>} data={12} oldData={16} title={"Categorieën"}/>
                    
                    <MediumChartText marginRight={false} fullWidth={true} showIcon={false} showProgress={false} data={"Inbox - Notifications"} dataRight={2951} title={"Top categorie"}/>
                </TopContainer>

                <BottomContainer height={chartHeight}>
                    {
                        windowMeasures.height > 575 ?
                        <>
                            <BigChartNoText marginRight={windowMeasures.width > 768 ? true : false} marginBottom={windowMeasures.width > 768 ? false : true} title="E-mail overzicht"/>

                            <BigDonutChartContainer title="Top 5 categoriëen"/>
                        </>
                        : (windowMeasures.height > 400 && windowMeasures.height < 575) && <Info message="Venster of scherm is niet hoog genoeg om grafieken op af te beelden!"/>
                    }
                </BottomContainer>
            </StatsContainer>
        </Container>
  )
}

export default Dashboard
