import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import PageLead, { HeaderIntro, HeaderText } from "./pagelead.ui";
import { IconText, TextLink } from "../shared/primitive-ui/text";
import { defaultTheme } from "../shared/primitive-ui/theme";
import { ThemeProvider } from "styled-components";

describe("PageLead Component", () => {
  let wrapper = shallow(<PageLead text="BLOG" />);

  it("should always render HeaderIntro component", () => {
    expect(wrapper.find(HeaderText).dive().find(HeaderIntro)).toHaveLength(1);
  });

  it("should render TextLink when supplied", () => {
    const Component = () => <TextLink href="/blog" />;
    const mountedTree = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <PageLead text="BLOG" rightComponent={Component} />
        </ThemeProvider>
      )
      .toJSON();
    expect(mountedTree).toMatchSnapshot();
  });

  it("should render IconText when supplied", () => {
    wrapper = shallow(<PageLead text="BLOG" icon={["far", "newspaper"]} />);
    expect(wrapper.find(HeaderText).dive().find(IconText)).toHaveLength(1);
  });
});
