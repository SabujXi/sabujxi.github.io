import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../../src/Footer'
import { ForHireCard } from '../../src/ForHireCard'
import Header from '../../src/Header'
import HeroImg from '../../src/HeroImg'
import SkillCard from '../../src/SkillCard'

import fs from "fs";
import path from 'path'
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from 'next-mdx-remote'
import matter from "gray-matter";
import Link from 'next/link'

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
                    pt-4
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                '>
                    {postMetas.map((postMeta) => {
                        return <div>
                            <Link href={postMeta.slug}>
                                <a>{postMeta.frontmatter.title}</a>
                            </Link> 
                        </div>
                    })}
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

export async function getStaticProps() {
    const postMetas = [];
    const mdxFileNames = fs.readdirSync(path.join(process.cwd(), "pages/services"))
        .filter(path => path.endsWith(".mdx"))
    for (const fn of mdxFileNames) {
        const fileContetn = fs.readFileSync(path.join(process.cwd(), "pages/services/" + fn), { encoding: "utf-8"})
        const matterRes = matter(fileContetn)
        postMetas.push({
            slug: "/services/" + fn.replace(/\.mdx$/ig, ""),
            frontmatter: matterRes.data,
            content: matterRes.content
        })
    }

    return {
        props: {
            postMetas
        }
    }
}
