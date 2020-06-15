import React from 'react';
import styled from 'styled-components';
import { HMFContainer } from '../utils/components/primitive-ui/container';
import Profile from '../utils/components/ui/profile';
import BlogPostsSummary from '../utils/components/ui/blogpostssummary';
import { allPosts, Post } from '../utils/model/posts';

const HomeContainer = styled(HMFContainer)(props => ({
    padding: "0px 8px",
    "@media only screen and (max-width: 768px)": {
        padding: "0px 16px"
    }
}))

const ComponentWrapper = styled.div(props => ({
    paddingBottom: "72px"
}))

interface HomeProps {
    postsSummary: Post[]
}

export function Home(props: HomeProps) {
    return (
        <HomeContainer>
            <ComponentWrapper><Profile /></ComponentWrapper>
            <BlogPostsSummary type="home" posts={props.postsSummary} />
        </HomeContainer>
    )
}

export async function getStaticProps() {
    return {
        props: {
            postsSummary: allPosts.slice(0, 3)
        }
    }
}

export default React.memo(Home);
