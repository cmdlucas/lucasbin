import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { IconText, HeaderThree, ExternalTextLink, Paragraph } from '../utils/components/primitive-ui/text';
import { HMFContainer } from '../utils/components/primitive-ui/container';
import { IconName } from '@fortawesome/fontawesome-svg-core';

const ConnectContainer = styled(HMFContainer)(props => ({
    padding: "0px 8px",
    "@media only screen and (max-width: 768px)": {
        padding: "0px 16px"
    }
}))

const ComponentWrapper = styled.div(props => ({
    paddingBottom: "72px"
}))

const Icon = styled(IconText)(props => ({
    fontSize: "1em"
}))

const IconWrapper = styled.span(props => ({
    marginRight: "28px",
    "&::nth-last-child()": {
        marginRight: "0px"
    }
}))

export const Connect: FunctionComponent<{brands: {icon: IconName, link: string}[]}> = ({ brands }) => {
    useEffect(() => {document.title = "Connect with me."});
    return (
        <ConnectContainer>
            <ComponentWrapper>
                <HeaderThree>Connect with me: </HeaderThree>
                <br />
                {
                    brands.map((brand, index) => (
                        <IconWrapper key={index}>
                            <ExternalTextLink href={brand.link}>
                                <Icon icon={["fab", brand.icon]} />
                            </ExternalTextLink>
                        </IconWrapper>
                    ))
                }
                <br />
                <br />
                <br />
                <HeaderThree>Shoot me a mail: </HeaderThree>
                <br />
                <Paragraph>caleb_at_lucasbin_dot_com</Paragraph>
            </ComponentWrapper>
        </ConnectContainer>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            brands: [
                { icon: "twitter", link: "https://twitter.com/cmdlucas"},
                { icon: "linkedin", link: "https://linkedin.com/in/cmdlucas"}, 
                { icon: "github", link: "https://github.com/cmdlucas"}
            ]
        } 
    }
} 

export default Connect;