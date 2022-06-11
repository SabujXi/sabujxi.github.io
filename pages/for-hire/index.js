import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// server side import
import { getMdxDocMetas } from '../../ssg-utils/mdx-docs-utils'

export default function ForHire({ postMetas }) {
    return (
        <div className="bg-white">
            <Head>
                <title>Expert For Hire - Md. Sabuj Sarker</title>
                <meta name="description" content="Md. Sabuj Sarker - doer as Software Architect, Project Manager, Business Consultant" />
            </Head>
                {postMetas.map((postMeta) => {
                    return <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start mb-2' key={postMeta.slug}>
                        {postMeta.frontmatter.thumbnail &&
                        <div className='mt-1 mr-2'>
                            <Image className='rounded-lg' src={postMeta.frontmatter.thumbnail} width="120px" height="120px" layout='fixed'/>
                        </div>
                        }
                        <div>
                            <div className='text-2xl'>
                                <Link href={postMeta.slug}>
                                    {postMeta.frontmatter.title}
                                </Link>
                            </div>
                            {postMeta.frontmatter.summary &&
                            <div>
                                {postMeta.frontmatter.summary}
                            </div> 
                            }
                        </div>
                    </div>
                })}
        </div>
    )
}

export async function getStaticProps() {
    const docMetas = await getMdxDocMetas("for-hire")
    return {
        props: {
            postMetas: docMetas
        }
    }
}
