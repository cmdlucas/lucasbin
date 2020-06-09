import React, { useState } from 'react'
import { generalSkin } from '../primitive-ui/skin';
import { HMFContainer } from '../primitive-ui/container';
import { Flex } from '../primitive-ui/flexbox';
import styled from 'styled-components';
import Logo from '../images/logo';
import MenuBar from '../images/menubar';
import NavMenu from './navmenu';

const HeaderHolder = styled.header(props => ({
    top: 0,
    left: 0,
    width: "100%",
    position: "fixed",
}))

const HeaderSkin = styled.div(props => ({
    ...generalSkin(props.theme),
    height: "76px",
    borderBottom: "1px solid #EDEDED"
}))

const HeaderContainer = styled(HMFContainer)(props => ({
    height: "100%",
    "@media only screen and (max-width: 768px)": {
        padding: "0px 8px"
    }
}))

const HeaderFlex = styled(Flex)(props => ({}))

const LeftHeaderColumn = styled(Flex)(props => ({
    flexGrow: 1
}))

const RightHeaderColumn = styled(Flex)(props => ({
    justifyContent: "flex-end",
}))

export function Header() {
    const [open, setOpen] = useState(false);
    return (
        <HeaderHolder>
            <HeaderSkin>
                <HeaderContainer>
                    <HeaderFlex>
                        <LeftHeaderColumn> <Logo /> </LeftHeaderColumn>
                        <RightHeaderColumn>
                            <MenuBar open={open} onClick={() => setOpen(!open)} />
                        </RightHeaderColumn>
                    </HeaderFlex>
                </HeaderContainer>
                <NavMenu open={open} />
            </HeaderSkin>
        </HeaderHolder>
    )
}

export default React.memo(Header);