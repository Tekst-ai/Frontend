import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BaseLayout } from '../layouts'
import Head from 'next/head'

import { TitleFormat } from '../services/title'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BaseLayout>
            <Head>
                <title>
                    { TitleFormat(Component.name) }
                </title>
            </Head>


            <Component {...pageProps} />
        </BaseLayout>
    )
}

export default MyApp
