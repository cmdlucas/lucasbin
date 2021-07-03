import { mount, shallow } from "enzyme";
import React from "react";
import {
  Profile,
  TopDivision,
  MidDivision,
  BottomDivision,
} from "./profile.ui";
import { PrimaryButton } from "../shared/primitive-ui/button";
import { Paragraph } from "../shared/primitive-ui/text";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../shared/primitive-ui/theme';

describe("Profile Component", () => {
  const wrapper = mount(
    <ThemeProvider theme={defaultTheme}>
      <Profile />
    </ThemeProvider>
  );

  it("should render a TopDivision component", () => {
    expect(wrapper.find(TopDivision)).toHaveLength(1);
  });

  it("should render a MidDivision component", () => {
    expect(wrapper.find(MidDivision)).toHaveLength(1);
  });

  it("should render a BottomDivision component", () => {
    expect(wrapper.find(BottomDivision)).toHaveLength(1);
  });
});

describe("TopDivision Component", () => {
  const wrapper = shallow(<TopDivision />);
  it("should contain img as part of header", () => {
    expect(wrapper.find("img")).toBeTruthy();
  });
});

describe("MidDivision Component", () => {
  const wrapper = shallow(<MidDivision />);
  it("should render contain 3 Paragraphs as header", () => {
    expect(wrapper.find(Paragraph)).toHaveLength(3);
  });
});

describe("BottomDivision Component", () => {
  const wrapper = shallow(<BottomDivision />);
  it("should render a PrimaryButton component", () => {
    expect(wrapper.find(PrimaryButton)).toHaveLength(1);
  });
});
