import React, { FunctionComponent } from 'react';
import { defaultTheme, invertTheme } from '../primitive-ui/theme';
import styled, { DefaultTheme, withTheme } from 'styled-components';
import { NavMenuSkin } from '../primitive-ui/skin';
import { ListRow, List } from '../primitive-ui/list';
import { HeaderTwo, TextLink, IsolatedText, FAIconText } from '../primitive-ui/text';
import { useRouter } from 'next/router';

interface EachMenuTextProp extends DefaultTheme {
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

interface NavMenuProps {
    theme?: DefaultTheme
}

const EachRow: FunctionComponent<{ link: string, title: string }> = ({ link, title }) => (
    <NavListRow><HeaderTwo><EachMenu href={link}>{title}</EachMenu></HeaderTwo></NavListRow>
)

export const NavMenu: FunctionComponent<NavMenuProps> = ({ theme }) => {
    return (
        <NavMenuSkin>
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
        </NavMenuSkin>
    )
}

NavMenu.defaultProps = {
    theme: defaultTheme
}

export default withTheme(NavMenu);