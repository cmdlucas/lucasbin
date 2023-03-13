import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { generalSkin } from '../primitive-ui/skin';
import { FlexRowNoWrap } from '../primitive-ui/flexbox';
import styled, { withTheme, CSSObject, useTheme } from 'styled-components';
import { TextLink, IsolatedText } from '../primitive-ui/text';
import { HMFContainer } from '../primitive-ui/container';

const FooterHolder = styled.footer(() => ({
  marginBottom: 'auto',
}));

const FooterSkin = styled.div((props) => ({
  ...generalSkin(props.theme),
  height: '88px',
  borderTop: `1px solid ${props.theme.main.borderColor}`,
}));

const FooterContainer = styled(HMFContainer)(() => ({
  height: '100%',
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FooterFlex = styled(FlexRowNoWrap)((props) => ({
  padding: '0px 8px',
  '@media only screen and (max-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const eachFooterItemResponsive: CSSObject = {
  textAlign: 'center',
  flexGrow: 0,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LeftFooter = styled.div((props) => ({
  textAlign: 'left',
  flexGrow: 1,
  '@media only screen and (max-width: 768px)': {
    ...eachFooterItemResponsive,
  },
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RightFooter = styled.div((props) => ({
  textAlign: 'right',
  flexGrow: 1,
  '@media only screen and (max-width: 768px)': {
    ...eachFooterItemResponsive,
  },
}));

const FooterText = styled.span(() => ({
  color: '#CCCCCC',
  fontSize: '1rem',
  fontFamily: 'CooperHewitt',
}));

export const Footer: FC = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <FooterHolder>
      <FooterSkin>
        <FooterContainer>
          <FooterFlex>
            <LeftFooter>
              <FooterText>
                Made with{' '}
                <IsolatedText color={theme.main.linkColor}>♥</IsolatedText> by{' '}
                <TextLink href="https://twitter.com/cmdlucas">
                  @cmdlucas
                </TextLink>
              </FooterText>
            </LeftFooter>
            <RightFooter>
              <FooterText>
                © {new Date().getFullYear()},{' '}
                <TextLink href={router.route}>lucasbin.com</TextLink>
              </FooterText>
            </RightFooter>
          </FooterFlex>
        </FooterContainer>
      </FooterSkin>
    </FooterHolder>
  );
};

export default withTheme(React.memo(Footer));
