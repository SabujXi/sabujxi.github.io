import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ForHireCard } from '../src/ForHireCard'
import HeroImg from '../src/HeroImg'
import SkillCard from '../src/SkillCard'
import { getMdxDocMetas } from '../ssg-utils/mdx-docs-utils'

export default function Home(props) {
    return (
        <div className="bg-white">
            <Head>
                <title>Md. Sabuj Sarker - Expert For Hire</title>
                <meta name="description" content="Md. Sabuj Sarker - doer as Software Architect, Project Manager, Business Consultant" />
            </Head>
            <div className='
                flex
                flex-col
                md:flex-row
                justify-between
            '>
                <div className='flex-1'>
                    <SkillCard />
                </div>

                <div className='h-6 md:w-6'>

                </div>
                <div className='flex-1'>
                    <HeroImg />
                </div>
            </div>

            <div className='
                mt-4
                p-4
                rounded-2xl
                bg-siteGreen
                flex
                flex-wrap
                justify-center
            '>
                {props.forHireMdxDocMetas.map((forHireMdxDocMeta) => {
                    return <Link key={forHireMdxDocMeta.slug} href={forHireMdxDocMeta.slug}>
                        <a><ForHireCard text={forHireMdxDocMeta.frontmatter.title} /></a>
                    </Link>
                })}
                {/* <ForHireCard text="Open Source Contributor" />
                <ForHireCard text="Software Architect for Hire" />
                <ForHireCard text="Software Engineer for Hire" />
                <ForHireCard text="Programmer for Hire" />
                <ForHireCard text="React.js Expert for Hire" />
                <ForHireCard text="Next.js Expert for Hire" /> */}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const forHireMdxDocMetas = await getMdxDocMetas("for-hire")
    return {
        props: {
            forHireMdxDocMetas
        }
    }
}