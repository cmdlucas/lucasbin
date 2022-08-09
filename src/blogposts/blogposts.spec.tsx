import React from "react";
import { BlogPosts } from "./blogposts.ui";
import { markdown01Data } from "../../e2e/__fixtures__/samplepost";
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../shared/primitive-ui/theme';

describe("BlogPosts Component", () => {
  const posts = [[markdown01Data]];
  const renderComponent = () => render(<ThemeProvider theme={defaultTheme}><BlogPosts posts={posts} /></ThemeProvider>);
  it("should render equal number of BlogPost components as the number of posts sent to it", () => {
    renderComponent();
    expect(screen.getAllByText(markdown01Data.metadata.title)).toHaveLength(posts.length);
  });
});
