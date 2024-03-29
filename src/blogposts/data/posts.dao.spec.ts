import posts, { getPostSummary, getPosts } from "./posts.dao";
import { markdown01Data } from "../../../e2e/__fixtures__/samplepost";

describe("Posts Model", () => {
  it("getPostSummary() should return the summary of a post with a fixed length of 113", () => {
    expect(getPostSummary(markdown01Data)).toHaveLength(113);
  });

  it("getPosts() should return a list of posts with the presence of its summary", () => {
    jest.spyOn(posts, "getMarkdown").mockImplementation(() => [markdown01Data]);
    expect(getPosts()[0].summary).toBeDefined();
  });
});
