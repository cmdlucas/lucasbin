import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from './logo';
import { defaultTheme } from '../primitive-ui/theme';
import { TextLink } from '../primitive-ui/text';

console.log("Running test...");

describe("Images", () => {
    describe("Logo", () => {
        const wrapper = shallow(<Logo theme={defaultTheme} />);

        it("should render TextLink component", () => {
            expect(wrapper.find(TextLink)).toHaveLength(1);
        })
    })
})