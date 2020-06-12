import React, { FunctionComponent } from 'react';
import { FlexColumn } from '../primitive-ui/flexbox';

export interface BlogPost {
    title: string
    image: string
    lastUpdatedOn: string
    datePublished: string
    headerImage: string
}

interface BlogPostProps {
    blogPost?: BlogPost
}

export const BlogPost: FunctionComponent<BlogPostProps> = (props) => {
    return <FlexColumn></FlexColumn>
}

export default React.memo(BlogPost);