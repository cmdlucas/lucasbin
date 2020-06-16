import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import styled, { useTheme } from 'styled-components';
import { HMFContainer } from '../../utils/components/primitive-ui/container';
import { Post, allPosts, pidToPostIndex } from '../../utils/model/posts';
import { HeaderOne, FAIconText, TextLink, Paragraph } from '../../utils/components/primitive-ui/text';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco as lightCode, vs2015 as darkCode } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Theme } from '../../utils/components/primitive-ui/theme';
import { RelativePosition } from '../../utils/components/primitive-ui/global';
import { Flex, FlexRowNoWrap } from '../../utils/components/primitive-ui/flexbox';

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

const HeaderImage = styled.div(props => ({
    padding: "0px 0px 24px 0px",
    "@media only screen and (max-width: 768px)": {
        width: "calc(100% + 32px)",
        margin: "0px 0px 0px -16px",
    }
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
}))

const IconText = styled.span(props => ({
    color: "#707070",
}))

const ContentContainer = styled.div`
    width: 768px;
    margin: 0px auto;
    padding-bottom: 52px;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    h1, h2, h3, h4, h5, h6, p, strong, a {
        font-family: Poppins;
        margin: 16px 0px;
    }

    pre {
        width: 100%;
        border-radius: 8px;
        padding: 24px 32px !important;
        margin: 24px 0px 0px -32px;

        @media only screen and (max-width: 768px) {
            border-radius: 0px;
            padding: 24px 16px !important;
            margin: 24px 0px 0px -16px;
        }
    }

    p code {
        background: ${props => props.theme.type === "light" ? "#EDEDED" : "#1E1E1E"};
        padding: 4px 8px;
        color: ${props => props.theme.type === "light" ? "#666666" : "#ACACAC"};
        border-radius: 4px;
    }

`

const PostLinksHolder = styled(Flex)(props => ({
    flexDirection: "row",
    ".item": {
        flexGrow: 1,
        width: "50%"
    },
    "@media only screen and (max-width: 767px)": {
        flexDirection: "column",
        ".item": {
            width: "100%"
        }
    }
}))

const PostLinkFlex = styled(FlexRowNoWrap)`
    font-family: Poppins;
    .arrow-text {
        color: #707070;
    }
    .link-holder {
        flex-grow: 1;
        padding-left: 24px;
    }
`

const NextPostLinkFlex = styled(PostLinkFlex)`
    flex-direction: row-reverse;
    text-align: right;
    .link-holder {
        padding: 0px 24px 0px 0px;
    }
`

export function SinglePost({ prevPost, currPost, nextPost }: SinglePostProps) {
    if (!currPost) {
        useRouter().replace("/");
        return <></>
    }
    const theme: Theme = useTheme();
    useEffect(() => { document.title = currPost.metadata.title })
    return (
        <SinglePostHomeContainer>
            <HeaderContainer>
                <HeaderText> {currPost.metadata.title} </HeaderText>
                <HeaderImage><img width="100%" src={currPost.header_image} /> </HeaderImage>
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
                <div>
                    <ReactMarkdown
                        source={currPost.content}
                        renderers={{
                            code: ({ language, value }) => (
                                <SyntaxHighlighter language={language}
                                    style={theme.type === "light" ? lightCode : darkCode}>
                                    {value}
                                </SyntaxHighlighter>
                            )
                        }} />
                </div>
            </ContentContainer>
            <PostLinksHolder>
                <div className="item">
                    {prevPost && <TextLink href="/blog/[pid]" name={`/blog/${prevPost.pid}`}>
                        <PostLinkFlex>
                            <div className="arrow-holder">
                                <span>←</span>
                            </div>
                            <div className="link-holder">
                                <Paragraph className="arrow-text">Previous</Paragraph>
                                <Paragraph>{prevPost.metadata.title}</Paragraph>
                            </div>
                        </PostLinkFlex>
                    </TextLink>}
                </div>
                <div className="item">
                    {nextPost && <TextLink href="/blog/[pid]" name={`/blog/${nextPost.pid}`}>
                        <NextPostLinkFlex>
                            <div className="arrow-holder">
                                <span>→</span>
                            </div>
                            <div className="link-holder">
                                <Paragraph className="arrow-text">Next</Paragraph>
                                <Paragraph>{nextPost.metadata.title}</Paragraph>
                            </div>
                        </NextPostLinkFlex>
                    </TextLink>}
                </div>
            </PostLinksHolder>
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
