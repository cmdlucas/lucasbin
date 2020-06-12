import React, { FunctionComponent } from 'react';
import { BlogPost } from './blogpost';
import { FlexRowNoWrap } from '../primitive-ui/flexbox';

interface BlogPostsSummaryProps {
    blogPostsSummary?: BlogPost[]
}

export const BlogPostsSummary: FunctionComponent<BlogPostsSummaryProps> = (props) => {
    return <FlexRowNoWrap></FlexRowNoWrap>
}

export default React.memo(BlogPostsSummary);