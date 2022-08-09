import React, { FunctionComponent, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import styled, { useTheme } from 'styled-components';
import { HMFContainer } from '../../src/shared/primitive-ui/container';
import {
  Post,
  allPosts,
  pidToPostIndex,
} from '../../src/blogposts/data/posts.dao';
import {
  HeaderOne,
  FAIconText,
  TextLink,
  Paragraph,
} from '../../src/shared/primitive-ui/text';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  docco as lightCode,
  vs2015 as darkCode,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Theme } from '../../src/shared/primitive-ui/theme';
import { Flex, FlexRowNoWrap } from '../../src/shared/primitive-ui/flexbox';

interface SinglePostProps {
  prevPost: Post;
  currPost: Post;
  nextPost: Post;
}

const SinglePostHomeContainer = styled(HMFContainer)(() => ({
  padding: '0px 8px',
  '@media only screen and (max-width: 768px)': {
    padding: '0px 16px',
  },
}));

const HeaderContainer = styled.div(() => ({}));

const HeaderText = styled(HeaderOne)(() => ({
  fontFamily: 'CooperHewitt',
  paddingBottom: '48px',
}));

const HeaderImage = styled.div(() => ({
  padding: '0px 0px 24px 0px',
  '@media only screen and (max-width: 768px)': {
    width: 'calc(100% + 32px)',
    margin: '0px 0px 0px -16px',
  },
}));

const Artifacts = styled.div(() => ({
  paddingBottom: '24px',
}));

const Artifact = styled.div(() => ({
  display: 'inline-table',
}));

const DatePublished = styled(Artifact)(() => ({
  paddingRight: '48px',
}));

const Author = styled(Artifact)(() => ({}));

const Icon = styled(FAIconText)(() => ({
  color: '#707070',
  paddingRight: '12px',
}));

const IconText = styled.span(() => ({
  color: '#707070',
}));

const ContentContainer = styled.div`
  width: 768px;
  margin: 0px auto;
  padding-bottom: 52px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  strong,
  a {
    font-family: Poppins;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  strong,
  a {
    margin: 16px 0px;
  }

  img {
    margin: 24px 0px;
  }

  a {
    color: ${(props) => props.theme.main.linkColor};
  }

  pre {
    width: 100%;
    border-radius: 8px;
    padding: 24px 32px !important;
    margin: 24px 0px 0px -32px;

    @media only screen and (max-width: 768px) {
      border-radius: 0px;
      padding: 24px 16px !important;
      margin: 24px 0px 0px -16px;
    }
  }

  p code {
    background: ${(props) =>
      props.theme.type === 'light' ? '#EDEDED' : '#1E1E1E'};
    padding: 4px 8px;
    color: ${(props) => (props.theme.type === 'light' ? '#666666' : '#ACACAC')};
    border-radius: 4px;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PostLinksHolder = styled(Flex)((props) => ({
  flexDirection: 'row',
  '.item': {
    flexGrow: 1,
    width: '50%',
  },
  '@media only screen and (max-width: 767px)': {
    flexDirection: 'column',
    '.item': {
      width: '100%',
    },
  },
}));

const PostLinkFlex = styled(FlexRowNoWrap)`
  font-family: Poppins;
  .arrow-text {
    color: #707070;
  }
  .link-holder {
    flex-grow: 1;
    padding-left: 24px;
  }
`;

const NextPostLinkFlex = styled(PostLinkFlex)`
  flex-direction: row-reverse;
  text-align: right;
  .link-holder {
    padding: 0px 24px 0px 0px;
  }
`;

export const SinglePost: FunctionComponent<SinglePostProps> = ({
  prevPost,
  currPost,
  nextPost,
}) => {
  if (!currPost) {
    useEffect(() => {
      useRouter().replace('/');
    });
    return <></>;
  }
  const theme = useTheme() as Theme;
  useEffect(() => {
    document.title = currPost.metadata.title;
  });
  return (
    <SinglePostHomeContainer>
      <HeaderContainer>
        <HeaderText> {currPost.metadata.title} </HeaderText>
        <HeaderImage>
          <img width="100%" src={currPost.header_image} />{' '}
        </HeaderImage>
      </HeaderContainer>
      <ContentContainer>
        <Artifacts>
          <DatePublished>
            <Icon icon={['far', 'calendar-alt']} />
            <IconText style={{ color: '#707070' }}>
              {currPost.metadata.datePublished}
            </IconText>
          </DatePublished>
          <Author>
            <Icon icon={['far', 'user']} />
            <IconText style={{ color: '#707070' }}>
              {currPost.metadata.author}
            </IconText>
          </Author>
        </Artifacts>
        <div>
          <ReactMarkdown
            children={currPost.content}
            skipHtml={true}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={theme.type === 'light' ? lightCode : darkCode}
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      </ContentContainer>
      <PostLinksHolder>
        <div className="item">
          {prevPost && (
            <TextLink href="/blog/[pid]" name={`/blog/${prevPost.pid}`}>
              <PostLinkFlex>
                <div className="arrow-holder">
                  <span>←</span>
                </div>
                <div className="link-holder">
                  <Paragraph className="arrow-text">Previous</Paragraph>
                  <Paragraph>{prevPost.metadata.title}</Paragraph>
                </div>
              </PostLinkFlex>
            </TextLink>
          )}
        </div>
        <div className="item">
          {nextPost && (
            <TextLink href="/blog/[pid]" name={`/blog/${nextPost.pid}`}>
              <NextPostLinkFlex>
                <div className="arrow-holder">
                  <span>→</span>
                </div>
                <div className="link-holder">
                  <Paragraph className="arrow-text">Next</Paragraph>
                  <Paragraph>{nextPost.metadata.title}</Paragraph>
                </div>
              </NextPostLinkFlex>
            </TextLink>
          )}
        </div>
      </PostLinksHolder>
    </SinglePostHomeContainer>
  );
};

export const getStaticProps: GetStaticProps<
  SinglePostProps,
  { pid: string }
> = async (context) => {
  const currIndex = pidToPostIndex[context.params.pid] ?? -1;
  return {
    props: {
      prevPost: currIndex > 0 ? allPosts[currIndex - 1] : null,
      currPost: currIndex >= 0 ? allPosts[currIndex] : null,
      nextPost:
        currIndex < allPosts.length - 1 ? allPosts[currIndex + 1] : null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allPosts.map((post) => ({ params: { pid: post.pid } })),
  fallback: false,
});

export default React.memo(SinglePost);
