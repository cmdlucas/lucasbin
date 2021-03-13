import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Theme } from "./theme";
import Link from 'next/link';

const textLinkTheme = (theme: Theme, color: null | string = null, font: string | null = null) => ({
    color: color ?? theme.main.linkColor,
    textDecoration: "none",
    fontFamily: font ?? "Inconsolata"
})

interface TextLinkProps {
    href?: string
    name?: string
    color?: string
    font?: string
}

export const ExternalTextLink = styled.a<TextLinkProps>(props => 
    textLinkTheme(props.theme, props.color, props.font))

export const TextLink: FunctionComponent<TextLinkProps> = ({href, name, color, font, children}) => (
    <Link href={href} as={name} passHref>
        <ExternalTextLink color={color} font={font}>{children}</ExternalTextLink>
    </Link>
)

export const IsolatedText = styled.span(props => ({
    color: props.color ?? props.theme.main.textColor
}))

export const HeaderOne = styled.h2(() => ({
    fontSize: "2em"
}))

export const HeaderTwo = styled.h2(() => ({
    fontSize: "1.5em"
}))

export const HeaderThree = styled.h3(() => ({
    fontSize: "1.17em"
}))

export const FAIconText = styled(FontAwesomeIcon)(props => ({
    color: props.color ?? props.theme.main.textColor,
    height: "1em",
    verticalAlign: "text-top"
}))

export const IconText = styled(FAIconText)(() => ({
    paddingRight: "12px"
}))

export const Paragraph = styled.p(() => ({
    fontSize: "1em"
}))