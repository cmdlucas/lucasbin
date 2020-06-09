import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const TextLink = styled.a(props => ({
    color: props.theme.main.linkColor,
    textDecoration: "none"
}))

export const IsolatedText = styled.span(props => ({
    color: props.color ?? props.theme.main.textColor
}))

export const HeaderTwo = styled.h2(props => ({
    fontSize: "1.5em"
}))

export const FAIconText = styled(FontAwesomeIcon)(props => ({
    color: props.theme.main.textColor,
    height: "1em",
    verticalAlign: "bottom"
}))