import { getPostsContent } from "../../posts/_reader"
import { getMarkdownData } from "../tool/markdown";

/**
 * Get the markdown data for all posts
 */
export const getMarkdown = () => {
    const posts = getPostsContent();
    const markdownData = getMarkdownData(posts);
    return markdownData;
}

/**
 * Get the summary for all posts
 */
export const getPostsSummary = () => {
    return getMarkdown().map(markdown => {
        return markdown.content.split("{START}")[1].trim().substring(0, 125);
    });
}

export default { getMarkdown, getPostsSummary };