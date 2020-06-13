import { readPostsContent } from "../../posts/_reader"
import { getMarkdownData, Markdown } from "../tool/markdown";
import path from 'path';
import imageToBase64 from 'base64-img';
import slugify from "slugify";

export interface Post extends Markdown {
    summary: string
    header_image: string
    pid: string
}

export interface PidToPostMap {
    [x: string]: number
}

/**
 * Generate SEO friendly URL
 * @param title 
 */
const seoUrl = (title: string) => {
    const strippedTitle = title.toLowerCase().replace(/and/g, "").replace(/ a /g, " ").replace(/the/g, "").trim();
    return slugify(strippedTitle, { lower: true, strict: true,  replacement: '-' })
}

/**
 * Get the markdown data for all posts
 */
export const getMarkdown = () => {
    return getMarkdownData(readPostsContent());
}

/**
 * Get the summary for post
 */
export const getPostSummary = (markdown: Markdown) => {
    return markdown.content.split("{START}")[1].trim().substring(0, 120);
}

/**
 * Get the summary for post
 */
export const getPostHeaderImage = (markdown: Markdown) => {
    const headerImageFilePath = path.join(markdown.path_to_file, markdown.metadata.headerImage);
    return imageToBase64.base64Sync(headerImageFilePath);
}

/**
 * Get all the written posts
 */
export const getPosts = () => {
    return getMarkdown().map((markdown, index) => {
        const summary = getPostSummary(markdown);
        const header_image = getPostHeaderImage(markdown);
        return { 
            ...markdown, content: markdown.content.split("{START}")[1].trim(), 
            summary, header_image, pid: seoUrl(markdown.metadata.title) 
        };
    })
}

export const mapPidToPostIndex = (posts: Post[]) => {
    const map: PidToPostMap = {};
    posts.forEach((post, index) => { map[post.pid] = index })
    return map;
}

export const allPosts: Post[] = getPosts();
export const pidToPostIndex: PidToPostMap = mapPidToPostIndex(allPosts);

export default { getMarkdown, getPosts, mapPidToPostIndex, getPostSummary };