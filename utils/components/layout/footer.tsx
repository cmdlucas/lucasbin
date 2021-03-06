import React, { FunctionComponent } from 'react'
import { useRouter } from 'next/router';
import { generalSkin } from '../primitive-ui/skin';
import { FlexRowNoWrap } from '../primitive-ui/flexbox';
import styled, { withTheme, DefaultTheme, CSSObject } from 'styled-components';
import { TextLink, IsolatedText, ExternalTextLink } from '../primitive-ui/text';
import { defaultTheme } from '../primitive-ui/theme';
import { HMFContainer } from '../primitive-ui/container';

const FooterHolder = styled.footer(props => ({
    marginBottom: "auto"
}))

const FooterSkin = styled.div(props => ({
    ...generalSkin(props.theme),
    height: "88px",
    borderTop: `1px solid ${props.theme.main.borderColor}`
}))

const FooterContainer = styled(HMFContainer)(props => ({
    height: "100%"
}))

const FooterFlex = styled(FlexRowNoWrap)(props => ({
    padding: "0px 8px",
    "@media only screen and (max-width: 768px)": {
        flexDirection: "column",
        justifyContent: "center"
    }
}))

const eachFooterItemResponsive: CSSObject = {
    textAlign: "center",
    flexGrow: 0
}

const LeftFooter = styled.div(props => ({
    textAlign: "left",
    flexGrow: 1,
    "@media only screen and (max-width: 768px)": {
        ...eachFooterItemResponsive
    }
}))

const RightFooter = styled.div(props => ({
    textAlign: "right",
    flexGrow: 1,
    "@media only screen and (max-width: 768px)": {
        ...eachFooterItemResponsive
    }
}))

const FooterText = styled.span(props => ({
    color: "#CCCCCC",
    fontSize: "1rem",
    fontFamily: "CooperHewitt"
}))

interface FooterProps {
    theme: DefaultTheme
}

export const Footer: FunctionComponent<FooterProps> = ({ theme }) => {
    const router = useRouter();
    return (
        <FooterHolder>
            <FooterSkin>
                <FooterContainer>
                    <FooterFlex>
                        <LeftFooter>
                            <FooterText>
                                Made with <IsolatedText color={theme.main.linkColor}>♥</IsolatedText> by <ExternalTextLink href="https://twitter.com/cmdlucas">@cmdlucas</ExternalTextLink>
                            </FooterText>
                        </LeftFooter>
                        <RightFooter>
                            <FooterText>
                                © {new Date().getFullYear()}, <TextLink href={router.route}>lucasbin.com</TextLink>
                            </FooterText>
                        </RightFooter>
                    </FooterFlex>
                </FooterContainer>
            </FooterSkin>
        </FooterHolder>
    )
}

Footer.defaultProps = {
    theme: defaultTheme
}

export default withTheme(React.memo(Footer));