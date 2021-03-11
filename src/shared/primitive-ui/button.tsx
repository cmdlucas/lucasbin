import styled from "styled-components";

export const PrimaryButton = styled.button(props => ({
    border: "none",
    background: props.theme.main.buttonPrimary.background,
    color: props.theme.main.buttonPrimary.color,
    fontSize: "1.25em",
    textTransform: "capitalize",
    minWidth: "160px",
    textAlign: "center",
    padding: "13.5px 20px"
}))

export const SecondaryButton = styled(PrimaryButton)(props => ({
    background: props.theme.main.buttonSecondary.background,
    color: props.theme.main.buttonSecondary.color,
}))