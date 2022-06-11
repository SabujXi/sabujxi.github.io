import fs from "fs";
import path from 'path';
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

export const MDX_DIR = path.join(process.cwd(), "mdx-docs");

function getDirToDirSlug(mdxDocsDir) {
    let dirSlug = mdxDocsDir.replace(/[\\\/]+/ig, "/")
    if (!dirSlug.endsWith("/")) {
        dirSlug = dirSlug + "/";
    }
    return dirSlug;
}

/**
 * Get mdx document metas 
 * Usable for: getStaticProps for index.js files inside pages.
 * @param {string} mdxDocsDir directory inside MDX_DIR
 * @returns {Promise<{slug: string, frontmatter: object, content: object}[]>}
 */
export async function getMdxDocMetas(mdxDocsDir) {
    // construct slug from dir
    /**
     * dir slug with "/" in the beginning and in the end
     */
    const dirSlug = getDirToDirSlug(mdxDocsDir)

    const docMetas = [];
    const mdxFileNames = fs.readdirSync(path.join(MDX_DIR, mdxDocsDir))
        .filter(path => path.endsWith(".mdx"))
    for (const fn of mdxFileNames) {
        const fileContetn = fs.readFileSync(path.join(MDX_DIR, mdxDocsDir, fn), { encoding: "utf-8"})
        const matterRes = matter(fileContetn)
        const fnSlug = fn.replace(/\.mdx$/ig, "")
        docMetas.push({
            slug: dirSlug + fnSlug,
            frontmatter: matterRes.data,
            content: matterRes.content
        })
    }
    return docMetas;
}

/**
 * Get mdx document slugs
 * Usable for getStaticPaths inside [slug].js inside pages.
 * @param {string} mdxDocsDir directory inside MDX_DIR
 * @returns {Promise<string[]>}
 */
export async function getMdxDocSlugs(mdxDocsDir) {
    const slugs = fs.readdirSync(path.join(MDX_DIR, mdxDocsDir))
        .filter(path => path.endsWith(".mdx"))
        .map(path => path.replace(/\.mdx$/ig, ""))
        .map(fnSlug => fnSlug)
    return slugs;
}

/**
 * Get mdx document source object
 * Usable for getStaticProps [slug].js files inside pages.
 * @param {string} mdxDocsDir directory inside MDX_DIR
 * @param {string} mdxDocFnSlug slug generated in getMdxDocSlugs
 * @returns {Promise<{ mdxSource: object, frontmatter: object}>}
 */
export async function getMdxDocSourceMeta(mdxDocsDir, mdxDocFnSlug) {
    const dirSlug = getDirToDirSlug(mdxDocsDir)
    const mdxFn = mdxDocFnSlug.replace(/^\//, "").replace(/\/$/, "") + ".mdx";
    const fileContent = fs.readFileSync(path.join(MDX_DIR, dirSlug, mdxFn), { encoding: "utf-8" });
    const mdxSource = await serialize(fileContent, { parseFrontmatter: true })

    return {
        mdxSource,
        frontmatter: mdxSource.frontmatter
    }
}
