import fs from "fs";
import path from "path";

export interface PostFile {
  directory: string;
  name: string;
  content?: string;
}

/**
 * Get all the posts
 *
 * @return {PostFile[]}
 */
export function readPosts(): PostFile[] {
  /**
   * Using process.pwd() because the directory into which next compiles
   * the code will be different from our current dir resolved using __dirname.
   *
   * See @link https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
   */
  const postsRootDir = path.join(process.cwd(), "posts");
  const thisDirContent = fs.readdirSync(postsRootDir, { withFileTypes: true });
  const postDirs = thisDirContent.filter((name) => name.isDirectory());
  return postDirs.map((postDir) => {
    const pathToPost = path.join(postsRootDir, postDir.name);
    return { directory: pathToPost, name: "post.md" };
  });
}

/**
 * Get all the posts as individual string content
 *
 * @return {PostFile[]}
 */
export function readPostsContent(): PostFile[] {
  return readPosts().map((postFile: PostFile) => ({
    ...postFile,
    content: fs.readFileSync(
      path.join(postFile.directory, postFile.name),
      "utf8"
    ),
  }));
}
