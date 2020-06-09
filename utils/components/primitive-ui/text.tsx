import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Theme } from "./theme";
import Link from 'next/link';

const textLinkTheme = (theme: Theme) => ({
    color: theme.main.linkColor,
    textDecoration: "none"
})

export const ExternalTextLink = styled.a(props => textLinkTheme(props.theme))

interface TestLinkProps {
    href: string
    name: string
}

export const TestLink: FunctionComponent<TestLinkProps> = ({href, name, children}) => (
    <Link href={href} as={name} passHref>
        <ExternalTextLink>{children}</ExternalTextLink>
    </Link>
)

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