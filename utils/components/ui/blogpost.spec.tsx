import React from 'react';
import { shallow } from 'enzyme';
import { BlogPost, PostHeaderImage, Title, Summary, Icon, IconText } from './blogpost';
import { markdown01Data } from '../../../__tests__/__fixtures__/samplepost';

describe("BlogPost Component", () => {
    const wrapper = shallow(<BlogPost data={markdown01Data} />)

    it("should render a PostHeaderImage component", () => {
        expect(wrapper.find(PostHeaderImage)).toHaveLength(1);
    })
    
    it("should render a Title component", () => {
        expect(wrapper.find(Title)).toHaveLength(1);
    })
    
    it("should render a Summary component", () => {
        expect(wrapper.find(Summary)).toHaveLength(1);
    })
    
    it("should render 2 Icon components", () => {
        expect(wrapper.find(Icon)).toHaveLength(2);
    })
    
    it("should render 2 IconText components", () => {
        expect(wrapper.find(IconText)).toHaveLength(2);
    })
})