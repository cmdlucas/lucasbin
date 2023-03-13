import React, { FC } from 'react';
import styled from 'styled-components';
import BlogPost from './blogpost';
import { TextLink } from '../shared/primitive-ui/text';
import { Post } from './data/posts.dao';
import { FlexRow } from '../shared/primitive-ui/flexbox';

export interface BlogPostHolderProps {
  dataIndex: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BlogPostsRow = styled(FlexRow)((props) => ({
  alignItems: 'baseline',
  '.blogpost-holder:nth-child(1) .inner-blogpost-holder': {
    marginRight: '12px',
  },
  '.blogpost-holder:nth-child(2) .inner-blogpost-holder': {
    marginLeft: '6px',
    marginRight: '6px',
  },
  '.blogpost-holder:nth-child(3) .inner-blogpost-holder': {
    marginLeft: '12px',
  },
  '@media only screen and (max-width: 479px)': {
    flexDirection: 'column',
    '.blogpost-holder:nth-child(1) .inner-blogpost-holder': {
      marginRight: '0px',
    },
    '.blogpost-holder:nth-child(2) .inner-blogpost-holder': {
      marginLeft: '0px',
      marginRight: '0px',
    },
    '.blogpost-holder:nth-child(3) .inner-blogpost-holder': {
      marginLeft: '0px',
    },
  },
}));

const BlogPostHolder = styled.article<BlogPostHolderProps>(() => ({
  paddingBottom: '28px',
  width: '33.333%',
  '@media only screen and (max-width: 479px)': {
    paddingRight: '0px',
    width: '100%',
  },
}));

interface BlogPostsProps {
  posts: Post[][];
}

export const BlogPosts: FC<BlogPostsProps> = ({ posts }) => {
  return (
    <>
      {posts.map((postRow, index) => (
        <BlogPostsRow key={index}>
          {postRow.map((post, index) => (
            <BlogPostHolder
              className="blogpost-holder"
              key={index + 1}
              dataIndex={index + 1}
            >
              <div className="inner-blogpost-holder">
                <TextLink href={`/blog/[pid]`} name={`/blog/${post.pid}`}>
                  <BlogPost data={post} />
                </TextLink>
              </div>
            </BlogPostHolder>
          ))}
        </BlogPostsRow>
      ))}
    </>
  );
};

export default React.memo(BlogPosts);
