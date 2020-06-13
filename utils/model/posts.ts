import { readPostsContent } from "../../posts/_reader"
import { getMarkdownData, Markdown } from "../tool/markdown";
import path from 'path';
import imageToBase64 from 'base64-img';

export interface Post extends Markdown {
    summary: string
    header_image: string
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
    return getMarkdown().map(markdown => {
        const summary = getPostSummary(markdown);
        const header_image = getPostHeaderImage(markdown);
        return { ...markdown, summary, header_image };
    })
}

export const allPosts: Markdown[] = getPosts();

export default { getMarkdown, getPosts, getPostSummary };