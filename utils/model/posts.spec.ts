import posts, { getPostSummary, getPosts } from "./posts"
import { markdown01Data } from "../../__fixtures__/samplepost";

describe("Posts Model", () => {
    it("getPostSummary() should return the summary of a post with a fixed length of 120", () => {
        expect(getPostSummary(markdown01Data)).toHaveLength(120);
    })

    it("getPosts() should return a list of posts with the presence of its summary", () => {
        jest.spyOn(posts, "getMarkdown").mockImplementation(()=>[markdown01Data]);
        expect(getPosts()[0].summary).toBeDefined();
    })
})