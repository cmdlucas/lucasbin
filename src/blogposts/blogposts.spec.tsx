import React from "react";
import { shallow } from "enzyme";
import { BlogPosts } from "./blogposts.ui";
import { BlogPost } from "./blogpost";
import { markdown01Data } from "../../e2e/__fixtures__/samplepost";

describe("BlogPosts Component", () => {
  const posts = [[markdown01Data]];
  const wrapper = shallow(<BlogPosts posts={posts} />);
  it("should render equal number of BlogPost components as the number of posts sent to it", () => {
    expect(wrapper.find(BlogPost)).toHaveLength(posts.length);
  });
});
