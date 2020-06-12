import posts, { getPostsSummary } from "./posts"
import { markdown01Data } from "../../__tests__/__fixtures__/samplepost";

describe("Posts Model", () => {
    it("should return the posts summary of fixed length of 125", () => {
        jest.spyOn(posts, "getMarkdown").mockImplementation(()=>[markdown01Data]);
        const postsSummary = getPostsSummary();
        expect(postsSummary[0]).toHaveLength(125);
    })
})