import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { HMFContainer } from '../src/shared/primitive-ui/container';
import Profile from '../src/profile/profile.ui';
import { allPosts, Post } from '../src/blogposts/data/posts.dao';
import { rowsFromDataNodes } from '../src/shared/tool/helper';
import { GetStaticPropsResult } from 'next';

const HomeContainer = styled(HMFContainer)(() => ({
  padding: '0px 8px',
  '@media only screen and (max-width: 768px)': {
    padding: '0px 16px',
  },
}));

const ComponentWrapper = styled.div(() => ({
  paddingBottom: '120px',
}));

interface HomeProps {
  postsSummary: Post[][];
}

export const Home: FC<HomeProps> = () => {
  useEffect(() => {
    document.title = 'Caleb I. Lucas - Home';
  });
  return (
    <HomeContainer>
      <ComponentWrapper>
        <Profile />
      </ComponentWrapper>
    </HomeContainer>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<HomeProps>
> {
  return {
    props: {
      postsSummary: rowsFromDataNodes<Post>(allPosts.slice(0, 3), 3),
    },
  };
}

export default React.memo(Home);
