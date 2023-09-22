import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { htmlElements } from '../src/mdx-utils/HtmlDesignSystem'
import '../styles/globals.css'

const components = {
    ...htmlElements
}

function MyApp({ Component, pageProps }) {
    return <MDXProvider components={components}>
        <div className="bg-white">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <main className="m-4">
                <div className='mb-4'>
                    <Header />
                </div>
                <Component {...pageProps} />
                <div className='mt-4'>
                    <Footer />
                </div>
            </main>
        </div>
    </MDXProvider>
}

export default MyApp
