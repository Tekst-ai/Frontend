import type { NextPage } from 'next'
import styled from 'styled-components'
import { IoMailOpen, IoGrid } from 'react-icons/io5'

import { BigChartNoText, BigChartDonut, MediumChartText } from '../components/charts'
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
    height: 37%;
`

const BottomContainer = styled.div`
    width: 100%;
    height: calc(63% - 1.25rem);
    margin-top: 1.25rem;
    display: flex;
`

const Dashboard: NextPage = () => {
    const [height, setHeight] = useState(0)

    const refContainer = useCallback((node: any) => {
        if (node !== null) {
            setHeight(node.clientHeight)
        }
    }, [])

    return (
        <Container>
            <TitleContainer ref={refContainer}>
                <h1>Goedemiddag, Janine!</h1>

                <p>Cijfers van de afgelopen 7 dagen</p>
            </TitleContainer>

            <StatsContainer height={height}>
                <TopContainer>
                    <MediumChartText marginRight={true} icon={<IoMailOpen fontSize={26}/>} data={5462} oldData={4987} title={"E-mails"}/>
                    
                    <MediumChartText marginRight={true} icon={<IoGrid fontSize={26}/>} data={12} oldData={16} title={"Categorieën"}/>
                    
                    <CategoryListSmall/>
                </TopContainer>

                <BottomContainer>
                    <BigChartNoText marginRight={true} title="E-mail overzicht"/>

                    <BigChartDonut/>
                </BottomContainer>
            </StatsContainer>
        </Container>
  )
}

export default Dashboard
