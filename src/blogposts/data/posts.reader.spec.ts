import { readPosts, readPostsContent, PostFile } from "./posts.reader"

describe("Posts Reader", () => {
    let postFiles: PostFile[];
    beforeAll(() => {
        postFiles = readPosts();
    })
    it("should fetch all posts with content", () => {
        const posts = readPostsContent();
        expect(posts.length).toEqual(postFiles.length);
    })
})