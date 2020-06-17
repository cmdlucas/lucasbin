import React, { FunctionComponent } from 'react';
import { Project, allProjects } from '../utils/model/projects';
import styled from 'styled-components';
import { HMFContainer } from '../utils/components/primitive-ui/container';
import { PrimaryButton } from '../utils/components/primitive-ui/button';
import { IconText, TextLink } from '../utils/components/primitive-ui/text';
import OneProject from '../utils/components/ui/project';
import { FlexRowNoWrap, FlexRow } from '../utils/components/primitive-ui/flexbox';
import PageLead from '../utils/components/ui/pagelead';

interface ProjectProps {
    projects: Project[][]
}

const ProjectsContainer = styled(HMFContainer)(props => ({
    padding: "0px 8px",
    "@media only screen and (max-width: 768px)": {
        padding: "0px 16px"
    }
}))

const ComponentWrapper = styled.div(props => ({
    paddingBottom: "48px",
    ".project-row": {
        ".project-holder:nth-child(1) .inner-project-holder": {
            marginRight: "8px"
        },
        ".project-holder:nth-child(2) .inner-project-holder": {
            marginLeft: "8px"
        },
        marginBottom: "24px"
    },
    "@media only screen and (max-width: 475px)": {
        ".project-row": {
            ".project-holder:nth-child(1) .inner-project-holder": {
                marginRight: "0px",
                marginBottom: "24px"
            },
            ".project-holder:nth-child(2) .inner-project-holder": {
                marginLeft: "0px",
                marginBottom: "24px"
            },
            marginBottom: "0px"
        }
    }
}))

const ProjectHolderWrapper = styled(FlexRow)(props => ({
    alignItems: "baseline",
    "@media only screen and (max-width: 475px)": {
        flexDirection: "column"
    }
}))

const ProjectHolder = styled.div(props => ({
    width: "50%",
    "@media only screen and (max-width: 475px)": {
        width: "100%",
    }
}))

const ConnectButtonHolder = styled(FlexRowNoWrap)(props => ({
    justifyContent: "center",
    "a": {
        width: "318px",
        "@media only screen and (max-width: 768px)": {
            width: "100%",
        }
    }
}))

const ConnectButton = styled(PrimaryButton)(props => ({
    width: "100%",
    color: "#FFFFFF",
    background: "#366DDC"
}))

export const Projects: FunctionComponent<ProjectProps> = ({ projects }) => {
    return (
        <ProjectsContainer>
            <PageLead icon={["fas", "suitcase"]} text="FEATURED PROJECTS" />
            <ComponentWrapper>
                {
                    projects.map((projectRow, i) => (
                        <ProjectHolderWrapper key={i} className="project-row">
                            {
                                projectRow.map((project, index) => (
                                    <ProjectHolder className="project-holder" key={index}>
                                        <div className="inner-project-holder">
                                            <OneProject {...project} />
                                        </div>
                                    </ProjectHolder>
                                ))
                            }
                        </ProjectHolderWrapper>
                    ))
                }
            </ComponentWrapper>
            <ConnectButtonHolder>
                <TextLink href="/connect">
                    <ConnectButton>
                        <IconText color="#FFFFFF" icon={["far", "envelope"]} />
                        <span>GET IN TOUCH</span>
                    </ConnectButton>
                </TextLink>
            </ConnectButtonHolder>
        </ProjectsContainer>
    )
}

export const getStaticProps = async () => {
    // Break into two items per row
    const projects = [[]];
    allProjects.forEach(project => {
        const tail = projects[projects.length - 1];
        if (tail.length < 2) {
            projects[projects.length - 1].push(project);
        } else {
            projects.push([project]);
        }
    })
    return {
        props: {
            projects: projects
        }
    }
}

export default React.memo(Projects);