import styled, { DefaultTheme } from 'styled-components';

const generalSkin = (theme: DefaultTheme) => ({
    width: "100%",
    backgroundColor: theme.background,
    color: theme.textColor
})

export const HeaderSkin = styled.header(props => ({
    ...generalSkin(props.theme),
    height: "76px",
    top: 0,
    left: 0,
    position: "fixed",
    borderBottom: "1px solid #EDEDED"
}))

export const MainSkin = styled.main(props => ({
    ...generalSkin(props.theme),
    marginTop: "76px"
}))

export const FooterSkin = styled.footer(props => ({
    ...generalSkin(props.theme),
    height: "88px",
    margin: "auto 0px",
    borderTop: "1px solid #EDEDED"
}))