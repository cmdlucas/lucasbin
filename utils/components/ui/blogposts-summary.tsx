import React, { FunctionComponent } from 'react';
import { FlexRowWrap, FlexRowNoWrap } from '../primitive-ui/flexbox';
import { Post } from '../../model/posts';
import BlogPost from './blogpost';
import styled from 'styled-components';
import { HeaderThree, FAIconText, TextLink } from '../primitive-ui/text';
import Link from 'next/link';

export interface PostsSummaryProps {
    posts?: Post[]
}

export interface BlogPostHolderProps {
    dataIndex: number
}

const BlogPostHolder = styled.article<BlogPostHolderProps>(props => ({
    maxWidth: "317.33px",
    paddingRight: props.dataIndex % 3 === 0 ? "0px" : "10px",
    paddingBottom: "28px",
    "@media only screen and (max-width: 992px)": {
        maxWidth: "317.33px",
        paddingRight: props.dataIndex % 3 === 0 ? "0px" : "10px",
    },
    "@media only screen and (max-width: 767px)": {
        paddingRight: "0px",
        maxWidth: "100%"
    }
}))

const LinkOut = styled.div(props => ({}))

const BlogPosts: FunctionComponent<PostsSummaryProps> = (props) => {
    return (
        <>{
            props.posts.map((post, index) => (
                <BlogPostHolder key={index + 1} dataIndex={index + 1}>
                    <BlogPost data={post} />
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

export const BlogPostsSummary: FunctionComponent<PostsSummaryProps> = (props) => {
    return (
        <div>
            <FlexRowNoWrap style={{paddingBottom: "32px"}}>
                <HeaderText>
                    <IconText icon={["far", "newspaper"]} />
                    <HeaderIntro>BLOG POSTS</HeaderIntro>
                </HeaderText>
                <TextLink href="/blog" font="CooperHewitt">Go to blog →</TextLink>
            </FlexRowNoWrap>

            <FlexRowWrap>
                <BlogPosts posts={props.posts} />
            </FlexRowWrap>
        </div>
    )
}

export default React.memo(BlogPostsSummary);