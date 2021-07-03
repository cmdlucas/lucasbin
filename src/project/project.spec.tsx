import React from "react";
import renderer from "react-test-renderer";
import { OneProject } from "./project.ui";
import { allProjects } from "./projects.data";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from '../shared/primitive-ui/theme';

describe("Project Component", () => {
  it("should match contain all the required elements in the tree", () => {
    const tree = renderer.create(
      <ThemeProvider theme={defaultTheme}>
        <OneProject {...allProjects[0]} />
      </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
