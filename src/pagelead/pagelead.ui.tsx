import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { HeaderThree, IconText } from "../shared/primitive-ui/text";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { FlexRowNoWrap } from "../shared/primitive-ui/flexbox";
import { AnyMap } from "@cmdlucas/markdown-metadata";

export const HeaderText = styled.div(() => ({
  flexGrow: 1,
  fontFamily: "CooperHewitt",
}));

export const HeaderIntro = styled(HeaderThree)(() => ({
  fontFamily: "CooperHewitt",
  display: "inline-table",
}));

interface PageLeadProps {
  icon?: [IconPrefix, IconName];
  text: string;
  rightComponent?: FunctionComponent<AnyMap>;
}

const PageLead: FunctionComponent<PageLeadProps> = (props) => {
  return (
    <FlexRowNoWrap style={{ paddingBottom: "32px" }}>
      <HeaderText>
        {props.icon && <IconText icon={props.icon} />}
        <HeaderIntro> {props.text} </HeaderIntro>
      </HeaderText>
      {props.rightComponent && <props.rightComponent />}
    </FlexRowNoWrap>
  );
};

export default React.memo(PageLead);
