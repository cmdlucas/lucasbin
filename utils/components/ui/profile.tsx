import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FlexRowNoWrap, Flex } from '../primitive-ui/flexbox';
import { AbsolutePosition, HrLine } from '../primitive-ui/global';
import { HeaderThree, Paragraph } from '../primitive-ui/text';
import { PrimaryButton } from '../primitive-ui/button';
import { generalSkin } from '../primitive-ui/skin';

const ProfileSkin = styled.div(props => ({
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
            return { paddingBottom: "46px" };
        case "bottom":
            return { paddingTop: "20px" }
        default:
            return { padding: "20px 48px 0px 48px" }
    }
}

const defineBorder = (type: DivisionType) => {
    const top = { borderRight: "2px solid #EDEDED" }
    const bottom = { borderLeft: "2px solid #EDEDED" }
    switch (type) {
        case "top":
            return top;
        case "bottom":
            return bottom;
        default:
            return { ...top, ...bottom }
    }
}

const Division = styled.div<DivisionProps>(props => ({
    ...definePadding(props.type),
    ...defineBorder(props.type)
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
    alignSelf: "end"
}))

const BottomOnBorderContent = styled(OnBorderContent)(props => ({
    justifyContent: "end",
}))

const HeaderText = styled(AbsolutePosition)(props => ({
    top: "-10px"
}))

const TopDivision = () => (
    <Division type="top">
        <FlexRowNoWrap>
            <TopOnBorderContent>
                <HeaderText>
                    <HeaderThree>PROFILE</HeaderThree>
                </HeaderText>
            </TopOnBorderContent>
            <OnBorderNoContent> <HrLine /> </OnBorderNoContent>
        </FlexRowNoWrap>
    </Division>
)

const MidDivision = () => (
    <Division type="middle">
        <Paragraph>Hi. I'm a software engineer building apps and dApps for the web. My core skills are centered around the Javascript, PHP, Java and Ethereum ecosystem.  </Paragraph>
        <br />
        <Paragraph>You may also find me entrepreneuring, gisting about blockchain, reading about Space, singing horribly, watching soccer or simply surfing the internet and learning new stuff.</Paragraph>
    </Division>
)

const BottomDivision = () => (
    <Division type="bottom">
        <FlexRowNoWrap>
            <BottomOnBorderNoContent> <HrLine /> </BottomOnBorderNoContent>
            <BottomOnBorderContent>
                <Link href="/projects">
                    <a><PrimaryButton> SEE PROJECTS </PrimaryButton></a>
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
