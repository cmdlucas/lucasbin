import { getPosts, getPostsContent, PostFile } from "./_reader"

describe("Posts Reader", () => {
    let postFiles: PostFile[];
    beforeAll(() => {
        postFiles = getPosts();
    })
    it("should fetch all posts with content", () => {
        const posts = getPostsContent();
        expect(posts.length).toEqual(postFiles.length);
    })
})