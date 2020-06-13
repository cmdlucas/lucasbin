import React, { FunctionComponent } from 'react';
import { FlexColumn, FlexRowNoWrap } from '../primitive-ui/flexbox';
import { Post } from '../../model/posts';
import styled from 'styled-components';
import { RelativePosition } from '../primitive-ui/global';
import { HeaderThree, Paragraph, FAIconText } from '../primitive-ui/text';

const BlogPostSkin = styled(RelativePosition)(props => ({
    borderRadius: "8px",
    border: `1px solid ${props.theme.main.borderColor}`,
    overflow: "hidden"
}))

interface BlogPostProps {
    data?: Post
}

const PostHeaderImage = styled.img(props => ({
    width: "100%",
    minHeight: "250px"
}))

const ContentHolder = styled.div(props => ({
    padding: "20px"
}))

const Title = styled(HeaderThree)(props => ({
    fontFamily: "CooperHewitt",
    paddingBottom: "24px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
}))

const Summary = styled(Paragraph)(props => ({
    fontWeight: "bold",
    paddingBottom: "24px",
    wordWrap: "break-word"
}))

const ContentFooter = styled.div(props => ({
    color: "#707070",
    fontFamily: "Poppins"
}))

const DatePublished = styled.div(props => ({
    flexGrow: 1
}))

const Author = styled.div(props => ({}))

const IconText = styled(FAIconText)(props => ({
    color: "#707070",
    paddingRight: "12px",
    verticalAlign: "top"
}))

export const BlogPost: FunctionComponent<BlogPostProps> = ({ data }) => {
    return (
        <BlogPostSkin>
            <PostHeaderImage src={data.header_image} />
            <ContentHolder>
                <Title>{data.metadata.title}</Title>
                <Summary>{`${data.summary} ...`}</Summary>
                <ContentFooter>
                    <FlexRowNoWrap>
                        <DatePublished>
                            <IconText icon={["far", "calendar-alt"]} />
                            <span>{data.metadata.datePublished}</span>
                        </DatePublished>
                        <Author>
                            <IconText icon={["far", "user"]}  />
                            <span>{data.metadata.author.split(" ")[0]}</span>
                        </Author>
                    </FlexRowNoWrap>
                </ContentFooter>
            </ContentHolder>
        </BlogPostSkin>
    )
}

export default React.memo(BlogPost);