import { readPostsContent } from "./posts.reader";
import { getMarkdownData, Markdown } from "../../shared/tool/markdown";
import path from "path";
import imageToBase64 from "base64-img";
import slugify from "slugify";

export interface Post extends Markdown {
  summary: string;
  header_image: string;
  pid: string;
}

export interface PidToPostMap {
  [x: string]: number;
}

const seoUrl = (title: string) => {
  const strippedTitle = title
    .toLowerCase()
    .replace(/and/g, "")
    .replace(/ a /g, " ")
    .replace(/the/g, "")
    .trim();
  return slugify(strippedTitle, {
    lower: true,
    strict: true,
    replacement: "-",
  });
};

export const getMarkdown = (): Markdown[] => {
  return getMarkdownData(readPostsContent());
};

export const getPostSummary = (markdown: Markdown): string => {
  return `${markdown.content.split("{SUMMARY}")[1].trim().substring(0, 110)}...`;
};

export const getPostHeaderImage = (markdown: Markdown): string => {
  const headerImageFilePath = path.join(
    markdown.path_to_file,
    markdown.metadata.headerImage
  );
  return imageToBase64.base64Sync(headerImageFilePath) as string;
};

export const getPosts = (): Post[] => {
  return getMarkdown().map((markdown) => {
    const summary = getPostSummary(markdown);
    const header_image = getPostHeaderImage(markdown);
    return {
      ...markdown,
      content: markdown.content.split("{START}")[1].trim(),
      summary,
      header_image,
      pid: seoUrl(markdown.metadata.title),
    };
  });
};

export const mapPidToPostIndex = (posts: Post[]): PidToPostMap => {
  const map: PidToPostMap = {};
  posts.forEach((post, index) => {
    map[post.pid] = index;
  });
  return map;
};

export const allPosts: Post[] = (() => {
  const posts = getPosts();
  posts.sort((postA, postB) =>
    postB.metadata.datePublished.localeCompare(postA.metadata.datePublished)
  );
  return posts;
})();

export const pidToPostIndex: PidToPostMap = mapPidToPostIndex(allPosts);

export default { getMarkdown, getPosts, mapPidToPostIndex, getPostSummary };
