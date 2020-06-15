import React from 'react';
import { shallow } from 'enzyme';
import { BlogPostsSummary, OutBlogButton, HeaderText } from './blogpostssummary';
import BlogPosts from './blogposts';
import { HeaderIntro } from './profile';
import { FlexRowNoWrap } from '../primitive-ui/flexbox';

describe("BlogPostsSummary Component", () => {
    let wrapper = shallow(<BlogPostsSummary type="home" />)
    it("should always render a HeaderIntro component", () => {
        expect(wrapper.find(HeaderText)).toHaveLength(1);
    })

    it("should aways render BlogPosts component", () => {
        expect(wrapper.find(BlogPosts)).toHaveLength(1);
    })

    it("should not render OutBlogButton component when type is not home", () => {
        wrapper = shallow(<BlogPostsSummary type="blog" />);
        expect(wrapper.find("#blog-button-holder").dive().find(OutBlogButton)).toHaveLength(0);     
    })
})