import type { NextPage } from 'next'
import Head from 'next/head'

import { TitleFormat } from '../../services/title'

const Statistics: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    { TitleFormat("Statistieken") }
                </title>
            </Head>
            <div>
                Statistics
            </div>
        </>
    )
  }
  
  export default Statistics