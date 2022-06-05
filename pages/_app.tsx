import '../styles/globals.css'
import type { ReactNode, ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { BaseLayout } from '../layouts'
import { NextPage } from 'next'
import Head from 'next/head'

import { TitleFormat } from '../services/title'
import { ProtectedRoute } from '../components/routing'

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}
  
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    if (Component.getLayout) {
        return Component.getLayout(<Component {...pageProps}/>)
    }

    return (
        <ProtectedRoute>
            <BaseLayout>
                <Head>
                    <title>
                        { TitleFormat(Component.name) }
                    </title>
                </Head>
                    
                    <Component {...pageProps} />
            </BaseLayout>
        </ProtectedRoute>
    )
}

export default MyApp
