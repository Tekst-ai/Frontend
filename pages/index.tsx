import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoMailOpen, IoGrid } from 'react-icons/io5'

import { BigChartNoText, MediumChartText, BigDonutChartContainer } from '../components/charts'
import { TitleContainer } from './configuration'
import { CategoryListSmall } from '../components/lists'
import { useCallback, useState } from 'react'

const Container = styled.div`
    height: 100%;
`

interface StatsContainerProps {
    height: number,
}

const StatsContainer = styled.div<StatsContainerProps>`
    height: calc(100% - 2rem - ${({ height }) => height}px);
`

const TopContainer = styled.div`
    display: flex;
    /* height: 37%; */
`

interface BottomContainerProps {
    height: number,
}

const BottomContainer = styled.div<BottomContainerProps>`
    width: 100%;
    height: calc(100% - 1.25rem - ${({ height }) => height}px);
    margin-top: 1.25rem;
    display: flex;
`

const Dashboard: NextPage = () => {
    const [height, setHeight] = useState(0)
    const [chartHeight, setChartHeight] = useState(0)

    const refContainer = useCallback((node: any) => {
        if (node !== null) {
            setHeight(node.clientHeight)
        }
    }, [])

    const chartContainer = useCallback((node: any) => {
        if (node !== null) {
            setChartHeight(node.clientHeight)
        }
    }, [])

    return (
        <Container>
            <TitleContainer ref={refContainer}>
                <h1>Goedemiddag, Janine!</h1>

                <p>Cijfers van de afgelopen 7 dagen</p>
            </TitleContainer>

            <StatsContainer height={height}>
                <TopContainer ref={chartContainer}>
                    <MediumChartText marginRight={true} icon={<IoMailOpen fontSize={26}/>} data={5462} oldData={4987} title={"E-mails"}/>
                    
                    <MediumChartText marginRight={true} icon={<IoGrid fontSize={26}/>} data={12} oldData={16} title={"Categorieën"}/>
                    
                    <CategoryListSmall/>
                </TopContainer>

                <BottomContainer height={chartHeight}>
                    <BigChartNoText marginRight={true} title="E-mail overzicht"/>

                    <BigDonutChartContainer title="Categorie verdeling"/>
                </BottomContainer>
            </StatsContainer>
        </Container>
  )
}

export default Dashboard
