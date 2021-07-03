import React, { FunctionComponent } from "react";
import Link from "next/link";
import styled, { useTheme } from "styled-components";
import { FlexRowNoWrap, Flex } from "../shared/primitive-ui/flexbox";
import { AbsolutePosition } from "../shared/primitive-ui/global";
import { HeaderThree, IconText, Paragraph } from "../shared/primitive-ui/text";
import { PrimaryButton } from "../shared/primitive-ui/button";
import { generalSkin } from "../shared/primitive-ui/skin";
import { headShotGrey, headShot } from './profile.images';
import { Theme, ThemeType } from "../shared/primitive-ui/theme";

export const ProfileSkin = styled.div((props) => ({
  ...generalSkin(props.theme),
  background: props.theme.type === "light" ? "#A2DBFA" : "#333333",
  borderRadius: "12px 0px 12px 0px",
}));

type DivisionType = "top" | "middle" | "bottom";

interface DivisionProps {
  type?: DivisionType;
  themeType?: ThemeType
}

const definePadding = (type: DivisionType) => {
  switch (type) {
    case "top":
      return { paddingBottom: "46px" };
    case "bottom":
      return { paddingTop: "20px" };
    default:
      return { padding: "20px 48px 0px 48px" };
  }
};

export const Division = styled.div<DivisionProps>((props) => ({
  ...definePadding(props.type),
}));

const OnBorderNoContent = styled.div(() => ({
  flexGrow: 1,
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OnBorderContent = styled(Flex)((props) => ({
  minWidth: "212px",
  position: "relative",
}));

const TopOnBorderContent = styled(OnBorderContent)(() => ({
  justifyContent: "start",
}));

const BottomOnBorderNoContent = styled(OnBorderNoContent)(() => ({
  alignSelf: "flex-end",
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BottomOnBorderContent = styled(OnBorderContent)((props) => ({
  justifyContent: "end",
  flexDirection: "row-reverse",
  paddingTop: "38px",
}));

export const HeaderIntro = styled(HeaderThree)(() => ({
  fontFamily: "CooperHewitt",
}));

export const TopDivision: FunctionComponent<DivisionProps> = ({ themeType }) => (
  <Division type="top">
    <FlexRowNoWrap>
      <TopOnBorderContent>
        <AbsolutePosition style={{ top: "-50px", left: "16px" }}>
          <img style={{ height: "100px", borderRadius: "100%" }} 
            src={themeType === "light" ? headShot : headShotGrey} />
        </AbsolutePosition>
      </TopOnBorderContent>
    </FlexRowNoWrap>
  </Division>
);

export const MidDivision: FunctionComponent<DivisionProps> = () => (
  <Division type="middle">
    <Paragraph>
      <code>
        Software Engineer, Founder, Angel Investor.
      </code>
    </Paragraph>
    <br />
    <Paragraph>
      <code>
        Want my attention? Bring up a topic about tech start-ups, blockchain or entrepreneurship.
      </code>
    </Paragraph>
    <br />
    <Paragraph>
      <code>
        On the side, you may find me watching soccer or simply surfing the internet and learning new stuff.
      </code>
    </Paragraph>
  </Division>
);

export const BottomDivision: FunctionComponent<DivisionProps> = ({ themeType }) => (
  <Division type="bottom">
    <FlexRowNoWrap>
      <BottomOnBorderNoContent />
      <BottomOnBorderContent>
        <Link href="/connect">
          <a>
            <PrimaryButton
              style={{
                position: "absolute",
                top: "10px",
                right: "16px",
              }}
            >
              <IconText 
                color={themeType === "light" ? "#FFFFFF" : "#000000"} 
                icon={["far", "envelope"]} />
              <span>GET IN TOUCH</span>
            </PrimaryButton>
          </a>
        </Link>
      </BottomOnBorderContent>
    </FlexRowNoWrap>
  </Division> 
);

export const Profile: FunctionComponent = () => {
  const { type: themeType } = useTheme() as Theme;
  return (
    <ProfileSkin>
      <TopDivision themeType={themeType} />
      <MidDivision />
      <BottomDivision themeType={themeType} />
    </ProfileSkin>
  );
};

export default React.memo(Profile);
