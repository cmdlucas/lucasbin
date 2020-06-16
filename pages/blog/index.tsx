import React from 'react';
import styled from 'styled-components';
import { HMFContainer } from '../../utils/components/primitive-ui/container';
import { Post, allPosts } from '../../utils/model/posts';
import { BlogPosts } from '../../utils/components/ui/blogposts';
import PageLead from '../../utils/components/ui/pagelead';

const BlogHomeContainer = styled(HMFContainer)(props => ({
    padding: "0px 8px",
    "@media only screen and (max-width: 768px)": {
        padding: "0px 16px"
    }
}))

interface HomeProps {
    posts: Post[]
}

export function Home(props: HomeProps) {
    return (
        <BlogHomeContainer>
        <PageLead text="SHOWING ALL POSTS" icon={["far", "newspaper"]} />
            <BlogPosts posts={props.posts} />
        </BlogHomeContainer>
    )
}

export async function getStaticProps() {
    return {
        props: {
            posts: allPosts
        }
    }
}

export default React.memo(Home);
