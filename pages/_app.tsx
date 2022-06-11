import '../styles/globals.scss'
import type { ReactNode, ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import Head from 'next/head'

import { BaseLayout } from '../layouts'
import { TitleFormat } from '../services/title'
import { ProtectedRoute } from '../components/routing'
import { useData } from '../hooks/useData'
import { CheckEnv } from '../services/checks'
import { accentColors } from '../ThemeConfig'

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}
  
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const { data, isLoading, isError } = useData(CheckEnv(process.env.NEXT_PUBLIC_PROFILE_ENDPOINT));
    if (!isLoading && !isError) {
        const obj = {
            color: data.companyColor,
            text: data.companyColor,
            dark: data.companyColor,
            light: data.companyColor
        }
        accentColors["company"] = obj;
    }
    
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
