import { DefaultTheme } from 'styled-components';

export const generalSkin = (theme: DefaultTheme) => ({
    width: "100%",
    backgroundColor: theme.main.background,
    color: theme.main.textColor,
    transition: "background 0.3s ease-in 0.1s, color 0.4s ease-out 0s, border 0.4s ease-out 0s"
})