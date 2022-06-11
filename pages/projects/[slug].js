import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'
import { H1, H1Title } from '../../src/mdx-utils/HtmlDesignSystem'

// server side import
import { getMdxDocSlugs, getMdxDocSourceMeta } from '../../ssg-utils/mdx-docs-utils'

export default function Projects({ mdxSource }) {
    return (
        <div className="bg-white">
            <Head>
                <title>{mdxSource.frontmatter.title}</title>
                <meta name="description" content="Md. Sabuj Sarker - doer as Software Architect, Project Manager, Business Consultant" />
            </Head>
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
        </div>
    )
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const mdxSourceMeta = await getMdxDocSourceMeta("projects", slug)
    return {
        props: {
            mdxSource: mdxSourceMeta.mdxSource,
            frontmatter: mdxSourceMeta.frontmatter
        }
    }
}

export async function getStaticPaths() {
    const slugs = await getMdxDocSlugs("projects");
    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false
    }
}
