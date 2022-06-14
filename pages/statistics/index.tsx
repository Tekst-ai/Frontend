import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import IconContainerCarousel from '../../components/carousel/IconContainerCarousel'
import { Construction } from '../../components/dynamicIcons'

import { TitleFormat } from '../../services/title'
import { TitleContainer } from '../configuration'

const UnderConstruction = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 3rem - 4rem - 2rem - 1.25rem - 2rem);
    display: inline-block;
`

const Statistics: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    { TitleFormat("Statistieken") }
                </title>
            </Head>
            <div>
                <TitleContainer>
                    <h1>Statistieken</h1>
                </TitleContainer>

                <UnderConstruction>
                <IconContainerCarousel vector={<Construction/>} title="Online illustrations by Storyset"/>
                </UnderConstruction>
            </div>
        </>
    )
  }
  
  export default Statistics;