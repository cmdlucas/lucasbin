import React, { FunctionComponent, ReactNode } from 'react'
import { generalSkin } from '../primitive-ui/skin';
import { HMFContainer } from '../primitive-ui/container';
import styled from 'styled-components';

const MainSkin = styled.div(props => ({
    ...generalSkin(props.theme)
}))

const MainHolder = styled.main(() => ({
    paddingTop: "148px",
    paddingBottom: "60px"
}))

const MainContainer = styled(HMFContainer)(() => ({
    width: "100%",
    maxWidth: "992px",
    minHeight: "calc(100vh - 208px - 76px)"
}))

interface MainProps {
    children: ReactNode;
}

export const Main: FunctionComponent<MainProps> = (props) => (
    <MainSkin>
        <MainHolder>
            <MainContainer>
                {props.children}
            </MainContainer>
        </MainHolder>
    </MainSkin>
)

export default React.memo(Main);