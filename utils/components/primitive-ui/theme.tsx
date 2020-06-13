export interface ButtonTheme {
    color: string
    background: string
}

export interface ThemeProperties {
    textColor: string
    linkColor: string
    background: string
    borderColor: string,
    buttonPrimary: ButtonTheme
    buttonSecondary: ButtonTheme
}

export const lightTheme: ThemeProperties = {
    background: "#FFFFFF",
    textColor: "#262626",
    linkColor: "#0D66D0",
    borderColor: "#EDEDED",
    buttonPrimary: {
        color: "#FFFFFF",
        background: "#262626",
    },
    buttonSecondary: {
        color: "#FFFFFF",
        background: "#366DDC",
    }
}

export const darkTheme: ThemeProperties = {
    background: "#262626",
    textColor: "#FFFFFF",
    linkColor: "#CEC652",
    borderColor: "#555555",
    buttonPrimary: {
        color: "#262626",
        background: "#FFFFFF",
    },
    buttonSecondary: {
        color: "#FFFFFF",
        background: "#366DDC",
    }
}

export type ThemeType = "light" | "dark";

export interface Theme {
    type: ThemeType
    main: ThemeProperties
    switchTheme(): void
}

export const invertTheme = (themeType: ThemeType) => themeType === "light" ? darkTheme : lightTheme;
export const invertThemeType = (themeType: ThemeType) => themeType === "light" ? "dark" : "light";

export const defaultTheme: Theme = {
    type: "light",
    main: lightTheme,
    switchTheme: () => {}
}