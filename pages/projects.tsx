import React, { FunctionComponent, useEffect } from 'react';
import { Project, allProjects } from '../src/project/projects.data';
import styled from 'styled-components';
import { HMFContainer } from '../src/shared/primitive-ui/container';
import { PrimaryButton } from '../src/shared/primitive-ui/button';
import { IconText, TextLink } from '../src/shared/primitive-ui/text';
import OneProject from '../src/project/project.ui';
import { FlexRowNoWrap, FlexRow } from '../src/shared/primitive-ui/flexbox';
import PageLead from '../src/pagelead/pagelead.ui';
import { GetStaticPropsResult } from 'next';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

interface ProjectProps {
  projects: Project[][];
}

const ProjectsContainer = styled(HMFContainer)(() => ({
  padding: '0px 8px',
  '@media only screen and (max-width: 768px)': {
    padding: '0px 16px',
  },
}));

const ComponentWrapper = styled.div(() => ({
  paddingBottom: '48px',
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectHolderRow = styled(FlexRow)((props) => ({
  alignItems: 'baseline',
  '.project-holder:nth-child(1) .inner-project-holder': {
    marginRight: '8px',
  },
  '.project-holder:nth-child(2) .inner-project-holder': {
    marginLeft: '8px',
  },
  '@media only screen and (max-width: 479px)': {
    flexDirection: 'column',
    '.project-holder:nth-child(1) .inner-project-holder': {
      marginRight: '0px',
    },
    '.project-holder:nth-child(2) .inner-project-holder': {
      marginLeft: '0px',
    },
  },
}));

const ProjectHolder = styled.div(() => ({
  width: '50%',
  marginBottom: '24px',
  '@media only screen and (max-width: 479px)': {
    width: '100%',
  },
}));

const ConnectButtonHolder = styled(FlexRowNoWrap)(() => ({
  justifyContent: 'center',
  a: {
    width: '318px',
    '@media only screen and (max-width: 768px)': {
      width: '100%',
    },
  },
}));

const ConnectButton = styled(PrimaryButton)(() => ({
  width: '100%',
  color: '#FFFFFF',
  background: '#366DDC',
}));

export const Projects: FunctionComponent<ProjectProps> = ({ projects }) => {
  useEffect(() => {
    document.title = 'Caleb I. Lucas - Work';
  });
  return (
    <ProjectsContainer>
      <PageLead icon={faSuitcase} text="WORK" />
      <ComponentWrapper>
        {projects.map((projectRow, i) => (
          <ProjectHolderRow key={i}>
            {projectRow.map((project, index) => (
              <ProjectHolder className="project-holder" key={index}>
                <div className="inner-project-holder">
                  <OneProject {...project} />
                </div>
              </ProjectHolder>
            ))}
          </ProjectHolderRow>
        ))}
      </ComponentWrapper>
      <ConnectButtonHolder>
        <TextLink href="/connect">
          <ConnectButton>
            <IconText color="#FFFFFF" icon={faEnvelope} />
            <span>GET IN TOUCH</span>
          </ConnectButton>
        </TextLink>
      </ConnectButtonHolder>
    </ProjectsContainer>
  );
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<ProjectProps>
> => {
  // Break into two items per row
  const projects = [[]];
  allProjects.forEach((project) => {
    const tail = projects[projects.length - 1];
    if (tail.length < 2) {
      projects[projects.length - 1].push(project);
    } else {
      projects.push([project]);
    }
  });
  return {
    props: {
      projects: projects,
    },
  };
};

export default React.memo(Projects);
