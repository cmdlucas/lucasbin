import React, { useEffect } from 'react';
import styled from 'styled-components';
import { HMFContainer } from '../../utils/components/primitive-ui/container';
import { Post, allPosts } from '../../utils/model/posts';
import { BlogPosts } from '../../utils/components/ui/blogposts';
import PageLead from '../../utils/components/ui/pagelead';
import { rowsFromDataNodes } from '../../utils/tool/helper';

const BlogHomeContainer = styled(HMFContainer)(props => ({
    padding: "0px 8px",
    "@media only screen and (max-width: 768px)": {
        padding: "0px 16px"
    }
}))

interface HomeProps {
    posts: Post[][]
}

export function Home(props: HomeProps) {
    useEffect(() => {document.title = "Caleb I. Lucas - Blog"});
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
            posts: rowsFromDataNodes<Post>(allPosts, 3)
        }
    }
}

export default React.memo(Home);
