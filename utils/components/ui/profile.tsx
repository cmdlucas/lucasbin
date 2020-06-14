import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FlexRowNoWrap, Flex } from '../primitive-ui/flexbox';
import { AbsolutePosition, HrLine } from '../primitive-ui/global';
import { HeaderThree, Paragraph } from '../primitive-ui/text';
import { PrimaryButton } from '../primitive-ui/button';
import { generalSkin } from '../primitive-ui/skin';
import { Theme } from '../primitive-ui/theme';

export const ProfileSkin = styled.div(props => ({
    ...generalSkin(props.theme),
    background: props.theme.type === "light" ? "#FFFEEE" : "#333333"
}))

type DivisionType = "top" | "middle" | "bottom";

interface DivisionProps {
    type: DivisionType
}

const definePadding = (type: DivisionType) => {
    switch (type) {
        case "top":
            return { paddingBottom: "46px" }
        case "bottom":
            return { paddingTop: "20px" }
        default:
            return { padding: "20px 48px 0px 48px" }
    }
}

const defineBorder = (type: DivisionType, theme: Theme) => {
    const top = { borderRight: `2px solid ${theme.main.borderColor}` }
    const bottom = { borderLeft: `2px solid ${theme.main.borderColor}` }
    switch (type) {
        case "top":
            return top;
        case "bottom":
            return bottom;
        default:
            return { ...top, ...bottom }
    }
}

export const Division = styled.div<DivisionProps>(props => ({
    ...definePadding(props.type),
    ...defineBorder(props.type, props.theme)
}))

const OnBorderNoContent = styled.div(props => ({
    flexGrow: 1,
}))

const OnBorderContent = styled(Flex)(props => ({
    minWidth: "212px",
    position: "relative"
}))

const TopOnBorderContent = styled(OnBorderContent)(props => ({
    justifyContent: "start"
}))

const BottomOnBorderNoContent = styled(OnBorderNoContent)(props => ({
    alignSelf: "flex-end"
}))

const BottomOnBorderContent = styled(OnBorderContent)(props => ({
    justifyContent: "end",
    flexDirection: "row-reverse"
}))

const HeaderText = styled(AbsolutePosition)(props => ({
    top: "-12px",
}))

export const HeaderIntro = styled(HeaderThree)(props => ({
    fontFamily: "CooperHewitt"
}))

export const TopDivision = () => (
    <Division type="top">
        <FlexRowNoWrap>
            <TopOnBorderContent>
                <HeaderText>
                    <HeaderIntro>PROFILE</HeaderIntro>
                </HeaderText>
            </TopOnBorderContent>
            <OnBorderNoContent> <HrLine /> </OnBorderNoContent>
        </FlexRowNoWrap>
    </Division>
)

export const MidDivision = () => (
    <Division type="middle">
        <Paragraph><code>Hi. I'm a software engineer building apps and dApps for the web. My core skills are centered around the Javascript, PHP, Java and Ethereum ecosystem.  </code></Paragraph>
        <br />
        <Paragraph><code>You may also find me entrepreneuring, gisting about blockchain, reading about Space, singing horribly, watching soccer or simply surfing the internet and learning new stuff.</code></Paragraph>
    </Division>
)

export const BottomDivision = () => (
    <Division type="bottom">
        <FlexRowNoWrap>
            <BottomOnBorderNoContent> <HrLine /> </BottomOnBorderNoContent>
            <BottomOnBorderContent>
                <Link href="/projects">
                    <a><PrimaryButton> PROJECTS </PrimaryButton></a>
                </Link>
            </BottomOnBorderContent>
        </FlexRowNoWrap>
    </Division>
)

export function Profile() {
    return (
        <ProfileSkin>
            <TopDivision />
            <MidDivision />
            <BottomDivision />
        </ProfileSkin>
    )
}

export default React.memo(Profile);
