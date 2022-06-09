import { MDXProvider } from '@mdx-js/react'
import '../styles/globals.css'

const components = {}

function MyApp({ Component, pageProps }) {
    return <MDXProvider components={components}>
        <Component {...pageProps} />
    </MDXProvider>
}

export default MyApp
