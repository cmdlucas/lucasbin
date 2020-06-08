import styled, { DefaultTheme } from 'styled-components';

const generalSkin = (theme: DefaultTheme) => ({
    width: "100%",
    backgroundColor: theme.background,
    color: theme.textColor
})

export const HeaderSkin = styled.header(props => ({
    ...generalSkin(props.theme),
    height: "76px",
    position: "fixed",
    borderBottom: "1px solid #EDEDED"
}))

export const MainSkin = styled.main(props => generalSkin(props.theme))

export const FooterSkin = styled.footer(props => ({
    ...generalSkin(props.theme),
    height: "88px",
    borderTop: "1px solid #EDEDED"
}))