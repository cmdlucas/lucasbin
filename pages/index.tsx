import React, { useEffect } from 'react';
import styled from 'styled-components';
import { HMFContainer } from '../utils/components/primitive-ui/container';
import Profile from '../utils/components/ui/profile';
import { allPosts, Post } from '../utils/model/posts';
import PageLead from '../utils/components/ui/pagelead';
import { TextLink } from '../utils/components/primitive-ui/text';
import { BlogPosts } from '../utils/components/ui/blogposts';
import { SecondaryButton } from '../utils/components/primitive-ui/button';
import { rowsFromDataNodes } from '../utils/tool/helper';

const HomeContainer = styled(HMFContainer)(props => ({
    padding: "0px 8px",
    "@media only screen and (max-width: 768px)": {
        padding: "0px 16px"
    }
}))

const ComponentWrapper = styled.div(props => ({
    paddingBottom: "72px"
}))

const OutBlogButton = styled(SecondaryButton)(props => ({
    width: "100%",
    background: "#36DCBA",
    color: "#FFFFFF",
    "@media only screen and (max-width: 768px)": {
        width: "100%",
    }
}))

interface HomeProps {
    postsSummary: Post[][]
}

export function Home(props: HomeProps) {
    useEffect(() => {document.title = "Caleb I. Lucas - Home"});
    return (
        <HomeContainer>
            <ComponentWrapper><Profile /></ComponentWrapper>
            <>
                <PageLead text="RECENT BLOG POSTS" icon={["far", "newspaper"]}
                    rightComponent={() => <TextLink href="/blog" font="CooperHewitt">Go to blog →</TextLink>} />
                    
                <BlogPosts posts={props.postsSummary} />

                <TextLink href="/blog">
                    <OutBlogButton>GO TO BLOG</OutBlogButton>
                </TextLink>
            </>
        </HomeContainer>
    )
}

export async function getStaticProps() {
    return {
        props: {
            postsSummary:  rowsFromDataNodes<Post>(allPosts.slice(0, 3), 3)
        }
    }
}

export default React.memo(Home);
