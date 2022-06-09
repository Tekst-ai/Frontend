import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoMailOpen, IoGrid } from 'react-icons/io5'

import { BigChartNoText, MediumChartText, BigDonutChartContainer } from '../components/charts'
import { TitleContainer } from './configuration'
import { CategoryListSmall } from '../components/lists'
import { useCallback, useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { useMenu } from '../store'

interface ContainerProps {
    height: number
}

const Container = styled.div<ContainerProps>`
    height: 100%;
    background: red;
`

interface StatsContainerProps {
    height: number,
}

const StatsContainer = styled.div<StatsContainerProps>`
    /* height: calc(${({ height }) => height}px - 3rem - 4rem - 2rem - 1.25rem); */

    /* Full height container - height title container */
    height: calc(${({ height }) => height}px - 40px - 64px  - 32px);
    background: yellow;
`

const TopContainer = styled.div`
    display: flex;
`

interface BottomContainerProps {
    height: number,
}

const BottomContainer = styled.div<BottomContainerProps>`
    width: 100%;
    /* height: calc(${({ height }) => height}px - 3rem - 4rem - 2rem - 1.25rem); */
    /* height: 493px; */
    height: calc(100% - 1.25rem - ${({ height }) => height}px);
    margin-top: 1.25rem;
    display: flex;
    background: blue;
`

const Dashboard: NextPage = () => {
    const [height, setHeight] = useState(0);
    const [chartHeight, setChartHeight] = useState(0);
    const menu = useMenu((s: any) => s.menu);

    const windowMeasures = useWindowDimensions();
    const [winWidth, setWinWidth] = useState(windowMeasures.width)
    
    const refContainer = useCallback((node: any) => {
        if (node !== null) {
           setHeight(node.clientHeight);
        }
    }, [])

    const chartContainer = useCallback((node: any) => {
        if (node !== null && winWidth !== windowMeasures.width) {
            setChartHeight(node.clientHeight);
            setWinWidth(node.clientWidth);
        }
    }, [winWidth, windowMeasures.width])

    return (
        <Container height={windowMeasures.height}>
            <TitleContainer ref={refContainer}>
                <h1>Goedemiddag, Janine!</h1>

                <p>Cijfers van de afgelopen 7 dagen</p>
            </TitleContainer>

            <StatsContainer height={windowMeasures.height - height}>
                <TopContainer ref={chartContainer}>
                    <MediumChartText marginRight={true} icon={<IoMailOpen fontSize={26}/>} data={5462} oldData={4987} title={"E-mails"}/>
                    
                    <MediumChartText marginRight={true} icon={<IoGrid fontSize={26}/>} data={12} oldData={16} title={"Categorieën"}/>
                    
                    <CategoryListSmall/>
                </TopContainer>

                <BottomContainer height={chartHeight}>
                    <BigChartNoText marginRight={true} title="E-mail overzicht"/>

                    <BigDonutChartContainer title="Top 5 categoriëen"/>
                </BottomContainer>
            </StatsContainer>
        </Container>
  )
}

export default Dashboard
