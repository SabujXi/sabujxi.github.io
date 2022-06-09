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
                <div className='
                    pt-4
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                '>
                    <MDXRemote {...mdxSource} />
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

export async function getStaticProps(props) {
    const slug = props.params.slug;
    const fileContent = fs.readFileSync(path.join(process.cwd(), "pages/services/" + slug + ".mdx"), { encoding: "utf-8" });
    const mdxSource = await serialize(fileContent, { parseFrontmatter: true })
    return {
        props: {
            mdxSource
        }
    }
}

export async function getStaticPaths() {
    const paths = fs.readdirSync(path.join(process.cwd(), "pages/services"))
        .filter(path => path.endsWith(".mdx"))
        .map(path => path.replace(/\.mdx$/ig, ""))
        .map(slug => ({ params: { slug } }))

    return {
        paths,
        fallback: true
    }
}
