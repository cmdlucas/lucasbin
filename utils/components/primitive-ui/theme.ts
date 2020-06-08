export interface ButtonTheme {
    color: string
    background: string
}

export interface Theme {
    textColor: string
    linkColor: string
    background: string
    buttonPrimary: ButtonTheme
    buttonSecodary: ButtonTheme
}

export const lightTheme: Theme = {
    background: "#FFFFFF",
    textColor: "#262626",
    linkColor: "#0D66D0",
    buttonPrimary: {
        color: "#FFFFFF",
        background: "#262626",
    },
    buttonSecodary: {
        color: "#FFFFFF",
        background: "#366DDC",
    }
}

export const darkTheme: Theme = {
    background: "#262626",
    textColor: "#FFFFFF",
    linkColor: "#0D66D0",
    buttonPrimary: {
        color: "#262626",
        background: "#FFFFFF",
    },
    buttonSecodary: {
        color: "#FFFFFF",
        background: "#366DDC",
    }
}