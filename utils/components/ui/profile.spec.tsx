import { shallow } from 'enzyme';
import React from 'react';
import { Profile, TopDivision, MidDivision, BottomDivision } from './profile';
import { PrimaryButton } from '../primitive-ui/button';
import { HrLine } from '../primitive-ui/global';
import { Paragraph } from '../primitive-ui/text';

describe("Profile Component", () => {
    const wrapper = shallow(<Profile />);

    it("should render a TopDivision component", () => {
        expect(wrapper.find(TopDivision)).toHaveLength(1);
    })
    
    it("should render a MidDivision component", () => {
        expect(wrapper.find(MidDivision)).toHaveLength(1);
    })
    
    it("should render a BottomDivision component", () => {
        expect(wrapper.find(BottomDivision)).toHaveLength(1);
    })
})

describe("TopDivision Component", () => {
    const wrapper = shallow(<TopDivision />);
    it("should contain PROFILE as part of header", () => {
        expect(wrapper.contains("PROFILE")).toBeTruthy();
    })

    it("should render a HrLine component", () => {
        expect(wrapper.find(HrLine)).toHaveLength(1);
    })
})

describe("MidDivision Component", () => {
    const wrapper = shallow(<MidDivision />);
    it("should render contain 2 Paragraphs as header", () => {
        expect(wrapper.find(Paragraph)).toHaveLength(2);
    })

    it("should render no HrLine component", () => {
        expect(wrapper.find(HrLine)).toHaveLength(0);
    })
})

describe("BottomDivision Component", () => {
    const wrapper = shallow(<BottomDivision />);
    it("should render a PrimaryButton component", () => {
        expect(wrapper.find(PrimaryButton)).toHaveLength(1);
    })

    it("should render a HrLine component", () => {
        expect(wrapper.find(HrLine)).toHaveLength(1);
    })
})