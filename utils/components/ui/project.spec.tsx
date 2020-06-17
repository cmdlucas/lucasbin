import React from 'react';
import renderer from 'react-test-renderer';
import { OneProject } from './project'
import { allProjects } from '../../model/projects';

describe("Project Component", () => {
    it("should match contain all the required elements in the tree", () => {
        const tree = renderer.create(<OneProject { ...allProjects[0] } />)
                        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})