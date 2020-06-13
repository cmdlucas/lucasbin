import React, { FunctionComponent } from 'react';
import { FlexRowWrap, FlexRowNoWrap } from '../primitive-ui/flexbox';
import { Post } from '../../model/posts';
import BlogPost from './blogpost';
import styled from 'styled-components';
import { HeaderThree, FAIconText, TextLink } from '../primitive-ui/text';
import { SecondaryButton } from '../primitive-ui/button';

export interface PostsSummaryProps {
    posts?: Post[]
    type?: "home" | "blog"
}

export interface BlogPostHolderProps {
    dataIndex: number
}

const BlogPostHolder = styled.article<BlogPostHolderProps>(props => ({
    maxWidth: "317.33px",
    paddingRight: props.dataIndex % 3 === 0 ? "0px" : "10px",
    paddingBottom: "28px",
    "@media only screen and (max-width: 767px)": {
        paddingRight: "0px",
        maxWidth: "100%"
    }
}))

const BlogPosts: FunctionComponent<PostsSummaryProps> = (props) => {
    return (
        <>{
            props.posts.map((post, index) => (
                <BlogPostHolder key={index + 1} dataIndex={index + 1}>
                    <TextLink href={`/blog/[pid]`} name={`/blog/${post.pid}`}>
                        <BlogPost data={post} />
                    </TextLink>
                </BlogPostHolder>
            ))
        }</>
    )
}

const HeaderText = styled.div(props => ({
    flexGrow: 1,
    fontFamily: "CooperHewitt"
}))

const IconText = styled(FAIconText)(props => ({
    paddingRight: "12px",
    verticalAlign: "text-top"
}))

const HeaderIntro = styled(HeaderThree)(props => ({
    fontFamily: "CooperHewitt",
    display: "inline-table"
}))

const OutBlogButton = styled(SecondaryButton)(props => ({
    width: "318px",
    background: "#36DCBA",
    color: "#FFFFFF",
    "@media only screen and (max-width: 768px)": {
        width: "100%",
    }
}))

export const BlogPostsSummary: FunctionComponent<PostsSummaryProps> = (props) => {
    return (
        <div>
            <FlexRowNoWrap style={{ paddingBottom: "32px" }}>
                <HeaderText>
                    <IconText icon={["far", "newspaper"]} />
                    <HeaderIntro>
                        {props.type !== "home" ? `SHOWING ALL POSTS`
                            : "BLOG POSTS"}
                    </HeaderIntro>
                </HeaderText>
                {
                    props.type === "home" && <TextLink href="/blog" font="CooperHewitt">Go to blog →</TextLink>
                }
            </FlexRowNoWrap>

            <FlexRowWrap>
                <BlogPosts posts={props.posts} />
            </FlexRowWrap>
            <FlexRowNoWrap style={{ paddingBottom: "32px", justifyContent: "center" }}>
                {
                    props.type === "home" && (
                        <TextLink href="/blog">
                            <OutBlogButton>GO TO BLOG</OutBlogButton>
                        </TextLink>
                    )
                }
            </FlexRowNoWrap>
        </div>
    )
}

export default React.memo(BlogPostsSummary);