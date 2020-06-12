import fs from 'fs';
import path from 'path';

export interface PostFile {
    directory: string
    name: string
}

/**
 * Get all the posts
 * 
 * @return {PostFile[]}
 */
export function getPosts(): PostFile[] {
    const thisDirContent = fs.readdirSync(__dirname, { withFileTypes: true });
    const postDirs = thisDirContent.filter(name => name.isDirectory());
    return postDirs.map(postDir => {
        const pathToPost = path.join(__dirname, postDir.name);
        return { directory: pathToPost, name: "post.md"}
    })
}

/**
 * Get all the posts as individual string content
 *
 * @return {string[]}
 */
export function getPostsContent(): string[] {
    return getPosts().map((postFile: PostFile) =>
        fs.readFileSync(path.join(postFile.directory, postFile.name), "utf8"))
}

