import React from "react";
import { BlogPost } from "./blogpost";
import { markdown01Data } from "../../e2e/__fixtures__/samplepost";
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../shared/primitive-ui/theme';

describe("BlogPost Component", () => {
  const renderComponent = () => render(<ThemeProvider theme={defaultTheme}><BlogPost data={markdown01Data} /></ThemeProvider>);

  it("should render post's image", () => {
    renderComponent();
    expect(screen.getByAltText(markdown01Data.metadata.headerImage)).toBeInTheDocument();
  });

  it("should render title", () => {
    renderComponent();
    expect(screen.getByText(markdown01Data.metadata.title)).toBeInTheDocument();
  });

  it("should render summary", ()=> {
    renderComponent();
    expect(screen.getByText(markdown01Data.summary)).toBeInTheDocument();
  });

  it("should render date published", () => {
    renderComponent();
    expect(screen.getByText(markdown01Data.metadata.datePublished)).toBeInTheDocument();
  });

  it("should render author's name", () => {
    renderComponent();
    expect(screen.getByText("Caleb")).toBeInTheDocument();
  });
});
