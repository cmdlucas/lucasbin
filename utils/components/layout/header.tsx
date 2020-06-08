import React, { ReactElement } from 'react'
import { HeaderSkin } from '../primitive-ui/skin';
import { HeaderContainer } from '../primitive-ui/container';
import { Flex, FlexRowNoWrap } from '../primitive-ui/flexbox';
import styled from 'styled-components';
import Logo from '../images/logo';
import FaviconLogo from '../images/faviconlogo';
import MenuBar from '../images/menubar';
import { RelativePosition, AbsolutePosition } from '../primitive-ui/global';

const LeftHeaderColumn = styled(Flex)(props => ({
    "@media only screen and (max-width: 768px)": {
        flexGrow: 1
    }
}))

const MidHeaderColumn = styled(Flex)(props => ({
    flexGrow: 1,
    justifyContent: "center",
    "@media only screen and (max-width: 768px)": {
        display: "none"
    }
}))

const RightHeaderColumn = styled(Flex)(props => ({
    justifyContent: "flex-end",
}))

export function Header() {
    return (
        <HeaderSkin>
            <HeaderContainer>
                <FlexRowNoWrap>
                    <LeftHeaderColumn> <Logo /> </LeftHeaderColumn>
                    <MidHeaderColumn> <FaviconLogo /> </MidHeaderColumn>
                    <RightHeaderColumn> <MenuBar /> </RightHeaderColumn>
                </FlexRowNoWrap>
            </HeaderContainer>
        </HeaderSkin>
    )
}

export default React.memo(Header);