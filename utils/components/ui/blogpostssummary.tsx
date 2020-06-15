import React, { FunctionComponent } from 'react';
import { FlexRowWrap, FlexRowNoWrap } from '../primitive-ui/flexbox';
import { Post } from '../../model/posts';
import styled from 'styled-components';
import { HeaderThree, FAIconText, TextLink } from '../primitive-ui/text';
import { SecondaryButton } from '../primitive-ui/button';
import BlogPosts from './blogposts';

export interface PostsSummaryProps {
    posts?: Post[]
    type?: "home" | "blog"
}

export const HeaderText = styled.div(props => ({
    flexGrow: 1,
    fontFamily: "CooperHewitt"
}))

const IconText = styled(FAIconText)(props => ({
    paddingRight: "12px",
    verticalAlign: "text-top"
}))

export const HeaderIntro = styled(HeaderThree)(props => ({
    fontFamily: "CooperHewitt",
    display: "inline-table"
}))

export const OutBlogButton = styled(SecondaryButton)(props => ({
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
            
            <FlexRowNoWrap id="blog-button-holder" style={{ paddingBottom: "32px", justifyContent: "center" }}>
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