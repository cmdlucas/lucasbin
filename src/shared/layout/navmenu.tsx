import React, { FunctionComponent, PropsWithChildren } from 'react';
import { defaultTheme } from '../primitive-ui/theme';
import styled, {
  WebsiteDefaultTheme,
  withTheme,
  keyframes,
  css,
} from 'styled-components';
import { generalSkin } from '../primitive-ui/skin';
import { ListRow, List } from '../primitive-ui/list';
import {
  HeaderTwo,
  TextLink,
  IsolatedText,
  FAIconText,
} from '../primitive-ui/text';
import { useRouter } from 'next/router';

interface NavMenuHolderProps {
  open: boolean;
}

const navFlyIn = keyframes({
  from: {
    top: '-400px',
    visibility: 'hidden',
  },
  to: {
    top: '76px',
    visibility: 'visible',
  },
});
const navFlyOut = keyframes({
  from: {
    top: '76px',
    visibility: 'hidden',
  },
  to: {
    top: '-400px',
    visibility: 'hidden',
  },
});

const navFlyInAnimation = (props: NavMenuHolderProps) =>
  css`
    animation: ${props.open ? navFlyIn : navFlyOut} 0.2s linear 0s forwards;
  `;

const NavMenuHolder = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 10000;
  top: -400px;
  ${navFlyInAnimation}
`;
const NavMenuSkin = styled.div((props) => ({
  ...generalSkin(props.theme),
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.16)',
}));

const NavMenuContainer = styled.div(() => ({
  padding: '48px 0px',
}));

const EachMenuText: FunctionComponent<
  {
    href: string;
    theme: WebsiteDefaultTheme;
  } & PropsWithChildren
> = ({ theme, href, children }) => {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <TextLink
      font="CooperHewitt"
      href={href}
      color={active ? theme.main.linkColor : theme.main.textColor}
    >
      {children}
    </TextLink>
  );
};

EachMenuText.defaultProps = {
  href: '',
  theme: defaultTheme,
};

const EachMenu = withTheme(EachMenuText);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavListRow = styled(ListRow)((props) => ({
  textAlign: 'center',
  padding: '16px 0px',
  cursor: 'pointer',
}));

const EachRow: FunctionComponent<{ link: string; title: string }> = ({
  link,
  title,
}) => (
  <NavListRow>
    <HeaderTwo>
      <EachMenu href={link}>{title}</EachMenu>
    </HeaderTwo>
  </NavListRow>
);

interface NavMenuProps {
  theme?: WebsiteDefaultTheme;
  open: boolean;
  setOpen(): void;
}

const ThemeSwitcherText = styled(IsolatedText)(() => ({
  fontFamily: 'CooperHewitt',
}));

export const NavMenu: FunctionComponent<NavMenuProps> = ({
  setOpen,
  open,
  theme,
}) => {
  return (
    <NavMenuHolder open={open} onClick={setOpen}>
      <NavMenuSkin>
        <NavMenuContainer>
          <List>
            <EachRow title="HOME" link="/" />
            <EachRow title="WORK" link="/projects" />
            <EachRow title="BLOG" link="/blog" />
            <EachRow title="CONNECT" link="/connect" />
            <NavListRow>
              <HeaderTwo>
                <span onClick={theme.switchTheme}>
                  {theme.type === 'light' ? (
                    <>
                      <FAIconText icon="moon" />{' '}
                      <ThemeSwitcherText>GO DARK</ThemeSwitcherText>
                    </>
                  ) : (
                    <>
                      <FAIconText icon="sun" />{' '}
                      <ThemeSwitcherText>LIGHTS ON</ThemeSwitcherText>
                    </>
                  )}
                </span>
              </HeaderTwo>
            </NavListRow>
          </List>
        </NavMenuContainer>
      </NavMenuSkin>
    </NavMenuHolder>
  );
};

NavMenu.defaultProps = {
  theme: defaultTheme,
  open: false,
  setOpen: () => {
    return;
  },
};

export default withTheme(NavMenu);
