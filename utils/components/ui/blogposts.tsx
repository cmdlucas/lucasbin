import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import BlogPost from './blogpost';
import { TextLink } from '../primitive-ui/text';
import { Post } from '../../model/posts';
import { FlexRowWrap } from '../primitive-ui/flexbox';

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

interface BlogPostsProps {
    posts: Post[]
}

export const BlogPosts: FunctionComponent<BlogPostsProps> = (props) => {
    return (
        <FlexRowWrap>{
            props.posts.map((post, index) => (
                <BlogPostHolder key={index + 1} dataIndex={index + 1}>
                    <TextLink href={`/blog/[pid]`} name={`/blog/${post.pid}`}>
                        <BlogPost data={post} />
                    </TextLink>
                </BlogPostHolder>
            ))
        }</FlexRowWrap>
    )
}

export default React.memo(BlogPosts);