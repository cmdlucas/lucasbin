import React from 'react';
import styled from 'styled-components';
import { HMFContainer } from '../../utils/components/primitive-ui/container';
import BlogPostsSummary from '../../utils/components/ui/blogposts-summary';
import { Post, allPosts } from '../../utils/model/posts';

const BlogHomeContainer = styled(HMFContainer)(props => ({
    padding: "0px 8px",
    "@media only screen and (max-width: 768px)": {
        padding: "0px 16px"
    }
}))

interface HomeProps {
    postsSummary: Post[]
}

export function Home(props: HomeProps) {
    return (
        <BlogHomeContainer>
            <BlogPostsSummary type="blog" posts={props.postsSummary} />
        </BlogHomeContainer>
    )
}

export async function getStaticProps() {
    return {
        props: {
            postsSummary: allPosts
        }
    }
}

export default React.memo(Home);
