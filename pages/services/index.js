import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../../src/Footer'
import Header from '../../src/Header'
import Link from 'next/link'

// server side import
import { getMdxDocMetas } from '../../ssg-utils/mdx-docs-utils'

export default function Services({ postMetas }) {
    return (
        <div className="bg-white">
            <Head>
                <title>Services Provided by Expert - Md. Sabuj Sarker</title>
                <meta name="description" content="Md. Sabuj Sarker - doer as Software Architect, Project Manager, Business Consultant" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <main className="m-4">
                <Header />
                <div className='
                    m-4

                '>
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
                <div className='mt-4'>
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const docMetas = await getMdxDocMetas("services")
    return {
        props: {
            postMetas: docMetas
        }
    }
}
