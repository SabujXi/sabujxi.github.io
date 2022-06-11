import Head from 'next/head'
import { Footer } from '../../src/Footer'
import Header from '../../src/Header'
import { MDXRemote } from 'next-mdx-remote'
import { H1, H1Title } from '../../src/mdx-utils/HtmlDesignSystem'

// server side import
import { getMdxDocSlugs, getMdxDocSourceMeta } from '../../ssg-utils/mdx-docs-utils'

export default function Services({ mdxSource }) {
    return (
        <div className="bg-white">
            <Head>
                <title>{mdxSource.frontmatter.title}</title>
                <meta name="description" content="Md. Sabuj Sarker - doer as Software Architect, Project Manager, Business Consultant" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <main className="m-4">
                <Header />

                {mdxSource.frontmatter.cover &&
                    <div>
                        <img className='rounded-xl mt-3' src={mdxSource.frontmatter.cover} width="100%" style={{ maxHeight: "300px"}} /> 
                    </div>
                }

                <H1Title className="mt-3 mb-2" style={{ fontFamily: "'Comfortaa', cursive"}}>{mdxSource.frontmatter.title}</H1Title>
                <div className='
                    m-4
                '>
                    <div className=''>
                        <MDXRemote {...mdxSource} />
                    </div>
                </div>

                <div className='
                   mt-4
                '>
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const mdxSourceMeta = await getMdxDocSourceMeta("services", slug)
    return {
        props: {
            mdxSource: mdxSourceMeta.mdxSource,
            frontmatter: mdxSourceMeta.frontmatter
        }
    }
}

export async function getStaticPaths() {
    const slugs = await getMdxDocSlugs("services");
    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false
    }
}
