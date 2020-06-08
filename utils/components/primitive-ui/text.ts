import styled from "styled-components";

export const TextLink = styled.a(props => ({
    color: props.theme.linkColor
}))

export const IsolatedText = styled.span(props => ({
    color: props.color
}))