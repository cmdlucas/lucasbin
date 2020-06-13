import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';
import { HMFContainer } from '../../utils/components/primitive-ui/container';
import { Post, allPosts, pidToPostIndex } from '../../utils/model/posts';
import { HeaderOne, FAIconText } from '../../utils/components/primitive-ui/text';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

interface SinglePostProps {
    prevPost: Post
    currPost: Post
    nextPost: Post
}

const SinglePostHomeContainer = styled(HMFContainer)(props => ({
    padding: "0px 8px",
    "@media only screen and (max-width: 768px)": {
        padding: "0px 16px"
    }
}))

const HeaderContainer = styled.div(props => ({}))

const HeaderText = styled(HeaderOne)(props => ({
    fontFamily: "CooperHewitt",
    paddingBottom: "48px"
}))

const HeaderImage = styled.img(props => ({
    width: "100%",
    paddingBottom: "24px"
}))

const Artifacts = styled.div(props => ({
    paddingBottom: "24px",
}))

const Artifact = styled.div(props => ({
    display: "inline-table"
}))

const DatePublished = styled(Artifact)(props => ({
    paddingRight: "48px"
}))

const Author = styled(Artifact)(props => ({}))

const Icon = styled(FAIconText)(props => ({
    color: "#707070",
    paddingRight: "12px",
    verticalAlign: "top"
}))
const IconText = styled.span(props => ({
    color: "#707070",
}))

const ContentContainer = styled.div`
width: 768px;
margin: 0px auto;
"@media only screen and (max-width: 768px)": {
    width: 100%;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 16px 0px;
}

p
`

export function SinglePost({ prevPost, currPost, nextPost }: SinglePostProps) {
    if (!currPost) {
        useRouter().replace("/");
        return <></>
    }
    useEffect(() => { document.title = currPost.metadata.title })
    return (
        <SinglePostHomeContainer>
            <HeaderContainer>
                <HeaderText> {currPost.metadata.title} </HeaderText>
                <HeaderImage src={currPost.header_image} />
            </HeaderContainer>
            <ContentContainer>
                <Artifacts>
                    <DatePublished>
                        <Icon icon={["far", "calendar-alt"]} />
                        <IconText style={{ color: '#707070' }}>{currPost.metadata.datePublished}</IconText>
                    </DatePublished>
                    <Author>
                        <Icon icon={["far", "user"]} />
                        <IconText style={{ color: '#707070' }}>{currPost.metadata.author}</IconText>
                    </Author>
                </Artifacts>
                <ReactMarkdown source={currPost.content} />
            </ContentContainer>
        </SinglePostHomeContainer>
    )
}

export const getStaticProps: GetStaticProps<SinglePostProps, { pid: string }> = async (context) => {
    const currIndex = pidToPostIndex[context.params.pid] ?? -1;
    return {
        props: {
            prevPost: currIndex > 0 ? allPosts[currIndex - 1] : null,
            currPost: currIndex >= 0 ? allPosts[currIndex] : null,
            nextPost: currIndex < allPosts.length - 1 ? allPosts[currIndex + 1] : null
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: allPosts.map(post => ({ params: { pid: post.pid } })),
    fallback: false
})

export default React.memo(SinglePost);
