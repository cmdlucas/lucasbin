import React, { FC } from 'react';
import { Project } from './projects.data';
import styled from 'styled-components';
import {
  AbsolutePosition,
  RelativePosition,
} from '../shared/primitive-ui/global';
import { HeaderThree, Paragraph, TextLink } from '../shared/primitive-ui/text';
import { FlexRowWrap } from '../shared/primitive-ui/flexbox';

const ImageHolder = styled(RelativePosition)`
  overflow: hidden;
  height: 300px;
  margin-top: 16px;
`;

const Shade = styled(AbsolutePosition)`
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
  background: rgba(145, 145, 145, 0.7);
`;

const Description = styled(Paragraph)`
  margin-top: 16px;
`;

const Article = styled.article`
  code {
    background: ${(props) =>
      props.theme.type === 'light' ? '#EDEDED' : '#1E1E1E'};
    padding: 4px 8px;
    color: ${(props) => (props.theme.type === 'light' ? '#666666' : '#ACACAC')};
    border-radius: 4px;
    margin-bottom: 12px;
  }
  p {
    margin: 16px 0px;
  }
  margin-bottom: 24px;
`;

export const OneProject: FC<Project> = (props) => {
  return (
    <Article>
      <HeaderThree> {props.title} </HeaderThree>
      <Description> {props.description} </Description>

      {props.linkToProject && (
        <Description>
          {' '}
          Website:
          <TextLink href={props.linkToProject}>{props.linkToProject}</TextLink>
        </Description>
      )}

      {props.roles && (
        <>
          <Paragraph>Role: </Paragraph>
          <FlexRowWrap>
            {props.roles.map((tech, index) => (
              <code
                style={{ marginLeft: index > 0 ? '12px' : '0px' }}
                key={index}
              >
                {tech}
              </code>
            ))}
          </FlexRowWrap>
        </>
      )}

      {props.desktopScreenshot && (
        <ImageHolder>
          <img height="300px" src={props.desktopScreenshot} />
          <Shade />
        </ImageHolder>
      )}

      {props.techStack && (
        <>
          <Paragraph>Tech stack: </Paragraph>
          <FlexRowWrap>
            {props.techStack.map((tech, index) => (
              <code
                style={{ marginLeft: index > 0 ? '12px' : '0px' }}
                key={index}
              >
                {tech}
              </code>
            ))}
          </FlexRowWrap>
        </>
      )}
    </Article>
  );
};

export default React.memo(OneProject);
