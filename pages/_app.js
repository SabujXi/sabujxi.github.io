import { MDXProvider } from '@mdx-js/react'
import { htmlElements } from '../src/mdx-utils/HtmlDesignSystem'
import '../styles/globals.css'

const components = {
    ...htmlElements
}

function MyApp({ Component, pageProps }) {
    return <MDXProvider components={components}>
        <Component {...pageProps} />
    </MDXProvider>
}

export default MyApp
