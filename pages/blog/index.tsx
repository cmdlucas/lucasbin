import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { HMFContainer } from '../../src/shared/primitive-ui/container';
import { Post, allPosts } from '../../src/blogposts/data/posts.dao';
import { BlogPosts } from '../../src/blogposts/blogposts.ui';
import PageLead from '../../src/pagelead/pagelead.ui';
import { rowsFromDataNodes } from '../../src/shared/tool/helper';
import { GetStaticPropsResult } from 'next';

const BlogHomeContainer = styled(HMFContainer)(() => ({
  padding: '0px 8px',
  '@media only screen and (max-width: 768px)': {
    padding: '0px 16px',
  },
}));

interface HomeProps {
  posts: Post[][];
}

export const Home: FC<HomeProps> = (props) => {
  useEffect(() => {
    document.title = 'Caleb I. Lucas - Blog';
  });
  return (
    <BlogHomeContainer>
      <PageLead text="SHOWING ALL POSTS" icon={['far', 'newspaper']} />
      <BlogPosts posts={props.posts} />
    </BlogHomeContainer>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<HomeProps>
> {
  return {
    props: {
      posts: rowsFromDataNodes<Post>(allPosts, 3),
    },
  };
}

export default React.memo(Home);
