import React, { FunctionComponent } from "react";
import { FlexRowNoWrap } from "../shared/primitive-ui/flexbox";
import { Post } from "./data/posts.dao";
import styled from "styled-components";
import { RelativePosition } from "../shared/primitive-ui/global";
import {
  HeaderThree,
  Paragraph,
  FAIconText,
} from "../shared/primitive-ui/text";

const BlogPostSkin = styled(RelativePosition)((props) => ({
  borderRadius: "8px",
  border: `1px solid ${props.theme.main.borderColor}`,
  overflow: "hidden",
}));

interface BlogPostProps {
  data?: Post;
}

export const PostHeaderImage = styled.img(() => ({
  width: "100%",
  minHeight: "250px",
}));

const ContentHolder = styled.div(() => ({
  padding: "20px",
}));

export const Title = styled(HeaderThree)((props) => ({
  fontFamily: "CooperHewitt",
  paddingBottom: "24px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  color: props.theme.main.textColor,
}));

export const Summary = styled(Paragraph)((props) => ({
  paddingBottom: "24px",
  wordWrap: "break-word",
  color: props.theme.main.textColor,
}));

const ContentFooter = styled.div(() => ({
  color: "#707070",
  fontFamily: "Poppins",
}));

const DatePublished = styled.div(() => ({
  flexGrow: 1,
}));

const Author = styled.div(() => ({}));

export const Icon = styled(FAIconText)(() => ({
  color: "#707070",
  paddingRight: "12px",
}));

export const IconText = styled.span(() => ({
  color: "#707070",
}));

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
              <Icon icon={["far", "calendar-alt"]} />
              <IconText>{data.metadata.datePublished}</IconText>
            </DatePublished>
            <Author>
              <Icon icon={["far", "user"]} />
              <IconText>{data.metadata.author.split(" ")[0]}</IconText>
            </Author>
          </FlexRowNoWrap>
        </ContentFooter>
      </ContentHolder>
    </BlogPostSkin>
  );
};

export default React.memo(BlogPost);
