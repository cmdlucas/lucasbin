import React, { FunctionComponent } from 'react';
import { defaultTheme } from '../primitive-ui/theme';
import styled, { DefaultTheme, withTheme, keyframes, css } from 'styled-components';
import { generalSkin } from '../primitive-ui/skin';
import { ListRow, List } from '../primitive-ui/list';
import { HeaderTwo, TextLink, IsolatedText, FAIconText } from '../primitive-ui/text';
import { useRouter } from 'next/router';

interface NavMenuHolderProps {
    open: boolean
}

const navFlyIn = keyframes({
    from: {
        top: "-400px",
        visibility: "hidden"
    },
    to: {
        top: "76px",
        visibility: "visible"
    }
})
const navFlyOut = keyframes({
    from: {
        top: "76px",
        visibility: "hidden"
    },
    to: {
        top: "-400px",
        visibility: "hidden"
    }
})

const navFlyInAnimation = (props: NavMenuHolderProps) =>
    css`${props.open ? navFlyIn : navFlyOut} 0.2s linear 0s forwards`;

const NavMenuHolder = styled.nav`
    width: 100%;
    position: absolute;
    zIndex: 10000;
    top: -400px;
    animation: ${navFlyInAnimation};
`
const NavMenuSkin = styled.div(props => ({
    ...generalSkin(props.theme),
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.16)"
}))

const NavMenuContainer = styled.div(props => ({
    padding: "48px 0px",
}))

interface EachMenuTextProp {
    active: boolean
}

const EachMenuTextLink = styled(TextLink)<EachMenuTextProp>(({ theme, active }) => ({
    color: active ? theme.main.linkColor : theme.main.textColor
}))

const EachMenuText: FunctionComponent<{ href: string, theme: DefaultTheme }> = ({ theme, href, children }) => {
    const router = useRouter();
    const active = router.pathname === href;
    return (
        <EachMenuTextLink {...theme} href={href} active={active}>{children}</EachMenuTextLink>
    )
}

EachMenuText.defaultProps = {
    href: "",
    theme: defaultTheme
}

const EachMenu = withTheme(EachMenuText);

const NavListRow = styled(ListRow)(props => ({
    textAlign: "center",
    padding: "16px 0px",
    cursor: "pointer"
}))

const EachRow: FunctionComponent<{ link: string, title: string }> = ({ link, title }) => (
    <NavListRow><HeaderTwo><EachMenu href={link}>{title}</EachMenu></HeaderTwo></NavListRow>
)

interface NavMenuProps {
    theme?: DefaultTheme
    open: boolean
}

export const NavMenu: FunctionComponent<NavMenuProps> = ({ open, theme }) => {
    return (
        <NavMenuHolder open={open}>
            <NavMenuSkin>
                <NavMenuContainer>
                    <List>
                        <EachRow title="HOME" link="/" />
                        <EachRow title="PROJECTS" link="/projects" />
                        <EachRow title="BLOG" link="/blog" />
                        <EachRow title="CONNECT" link="/connect" />
                        <NavListRow><HeaderTwo><span onClick={theme.switchTheme}>
                            {theme.type === "light" ?
                                <><FAIconText icon="moon" /> <IsolatedText>GO DARK</IsolatedText></>
                                :
                                <><FAIconText icon="sun" /> <IsolatedText>LIGHTS ON</IsolatedText></>
                            }
                        </span></HeaderTwo></NavListRow>
                    </List>
                </NavMenuContainer>
            </NavMenuSkin>
        </NavMenuHolder>
    )
}

NavMenu.defaultProps = {
    theme: defaultTheme,
    open: false
}

export default withTheme(NavMenu);