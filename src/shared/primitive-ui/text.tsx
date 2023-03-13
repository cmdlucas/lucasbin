import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Theme } from './theme';
import Link, { LinkProps } from 'next/link';

const textLinkTheme = (theme: Theme, color?: string, font?: string) => ({
  color: color ?? theme.main.linkColor,
  textDecoration: 'none',
  fontFamily: font ?? 'Inconsolata',
});

type TextLinkProps = {
  name?: string;
  color?: string;
  font?: string;
} & LinkProps &
  PropsWithChildren;

export const TextLink = styled(Link).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['color'].includes(prop) && defaultValidatorFn(prop),
})<TextLinkProps>((props) =>
  textLinkTheme(props.theme, props.color, props.font)
);

export const IsolatedText = styled.span((props) => ({
  color: props.color ?? props.theme.main.textColor,
}));

export const HeaderOne = styled.h2(() => ({
  fontSize: '2em',
}));

export const HeaderTwo = styled.h2(() => ({
  fontSize: '1.5em',
}));

export const HeaderThree = styled.h3(() => ({
  fontSize: '1.17em',
}));

export const FAIconText = styled(FontAwesomeIcon)((props) => ({
  color: props.color ?? props.theme.main.textColor,
  height: '1em',
  verticalAlign: 'text-top',
}));

export const IconText = styled(FAIconText)(() => ({
  paddingRight: '12px',
}));

export const Paragraph = styled.p(() => ({
  fontSize: '1em',
}));
