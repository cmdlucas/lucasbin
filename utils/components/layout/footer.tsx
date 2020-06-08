import React, { FunctionComponent } from 'react'
import { useRouter } from 'next/router';
import { FooterSkin } from '../primitive-ui/skin';
import { FooterContainer } from '../primitive-ui/container';
import { Flex } from '../primitive-ui/flexbox';
import styled, { withTheme, DefaultTheme, CSSObject } from 'styled-components';
import { TextLink, IsolatedText } from '../primitive-ui/text';
import { lightTheme } from '../primitive-ui/themes';

const FooterFlex = styled(Flex)(props => ({
    padding: "0px 8px",
    "@media only screen and (max-width: 768px)": {
        flexDirection: "column",
        padding: "0px 16px"
    }
}))
const eachFooterItemResponsive: CSSObject = {
    textAlign: "center",
    height: "auto",
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
        <FooterSkin>
            <FooterContainer>
                <FooterFlex>
                    <LeftFooter>
                        <FooterText>
                            Made with <IsolatedText color={theme.linkColor}>♥</IsolatedText> by <TextLink href="https://twitter.com/cmdlucas">@cmdlucas</TextLink>
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
    )
}

Footer.defaultProps = {
    theme: lightTheme
}

export default withTheme(React.memo(Footer));