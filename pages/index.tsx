import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { HMFContainer } from "../src/shared/primitive-ui/container";
import Profile from "../src/profile/profile.ui";
import { allPosts, Post } from "../src/blogposts/data/posts.dao";
import { TextLink } from "../src/shared/primitive-ui/text";
import { SecondaryButton } from "../src/shared/primitive-ui/button";
import { rowsFromDataNodes } from "../src/shared/tool/helper";
import { GetStaticPropsResult } from "next";

const HomeContainer = styled(HMFContainer)(() => ({
  padding: "0px 8px",
  "@media only screen and (max-width: 768px)": {
    padding: "0px 16px",
  },
}));

const ComponentWrapper = styled.div(() => ({
  paddingBottom: "120px",
}));

const OutBlogButton = styled(SecondaryButton)((props) => ({
  width: "100%",
  background: "transparent",
  color: props.theme.type === "light" ? "#000000" : "#FFFFFF",
  border: `1px solid ${props.theme.type === "light" ? "#000000" : "#FFFFFF"}`,
  "@media only screen and (max-width: 768px)": {
    width: "100%",
  },
}));

interface HomeProps {
  postsSummary: Post[][];
}

export const Home: FunctionComponent<HomeProps> = () => {
  useEffect(() => {
    document.title = "Caleb I. Lucas - Home";
  });
  return (
    <HomeContainer>
      <ComponentWrapper>
        <Profile />
      </ComponentWrapper>
      <TextLink href="/blog">
        <OutBlogButton>GO TO BLOG</OutBlogButton>
      </TextLink>
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
