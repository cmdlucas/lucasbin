import React from 'react';
import { shallow } from 'enzyme';
import { BlogPosts } from './blogposts';
import { BlogPost } from './blogpost';
import { markdown01Data } from '../../../__tests__/__fixtures__/samplepost';

describe("BlogPosts Component", () => {
    const posts = [markdown01Data];
    const wrapper = shallow(<BlogPosts posts={posts}  />)
    it("should render equal number of BlogPost components as the number of posts sent to it", () => {
        expect(wrapper.find(BlogPost)).toHaveLength(posts.length);
    })
})